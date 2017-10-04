---
layout: post
title: Some Fun with Ocaml Closures in the Runtime
categories: eng
subtitle:

excerpt:

---

I assume you (the reader) are familiar with OCaml's runtime
representation of values. Real World OCaml has [really nice chapter](https://realworldocaml.org/v1/en/html/memory-representation-of-values.html)
on this, but there is not much coverage on closures / function representation at runtime.
This article aims to fill the gap.

You should also have some idea about OCaml's calling convention. There is
no actual documentation on this, but this [stackoverflow post](https://stackoverflow.com/questions/11322163/ocaml-calling-convention-is-this-an-accurate-summary) provides a good idea. All you really need to know is the order
of which registers store arguments.

## Disclaimer

I compiled code with ocaml 4.04 _without flambda_ on a linux machine.

Some of my explanations are empirical, based on my observations from compiled
code and reading code from the compiler, and hence maybe incorrect.

## Some Notes on Ocaml Pointers

I assume you are familiar that the 0th word of an ocaml block contains the
header (size, GC color and tag of the block). This is not exactly true,
as you might find out later, but I think it is worth clarrifying early on!
When given a pointer (a value whose the least significant bit == 0), the
pointer actually points to the 0th value (i.e: 0th word) rather than the header.
To obtain the header, you will need to look at the previous word (eg: `mov -8(%rdi), rsi`
to move the "first" word from a pointer to rsi.)

I believe the main benefit from doing this is performance - when decending
the first value of a block recursively (commonly done in functors and looking
up functions / closures in modules), the runtime doesn't have to offset the
pointer by the word size at every level.  While this corresponds to the same
number of instruction on x86, it corresponds a substantially larger number
of instructions (up to 2x) on RISC architectures. One can also argue that
in CISC architecture, the microcode will probably be bigger due to the
offest. As ocaml is statically typed, the runtime doesn't need the header
aside for garbage collection.


## Diving In

For a start, let's consider a function that takes an argument and returns a
pair of functions. The returned function would refer to the first argument
in its function body. Hence, the returned function is unclosed as it contains
free variables.

Consider the following code snippet:

```ocaml
(** a.ml **)
let g x : int -> ((int -> int -> int) * (int -> int -> int)) =
  let f y k =
    if y < x then begin
      x
    end else begin
      y + k - x
    end
  [@@inline never]
  in
  (f, f)
[@@inline never]
;;
(* The [@@inline never] forces the ocaml compiler not to inline the function
call. This ensures we get the actual closure representation. It is
unimportant otherwise, for the purpose of this example.
*)
```

The assembly of the function `f` is as follows:

```asm
camlA__f_1201:
	.cfi_startproc
.L105:
	movq	24(%rdi), %rdi
	cmpq	%rdi, %rax
	jge	.L104
	movq	%rdi, %rax
	ret
	.align	4
.L104:
	addq	%rbx, %rax
	subq	%rdi, %rax
	ret
```

Recall that in ocaml, the order of arguments is rax, rbx, rdi and so on.
There are several important things to note here:

- An high order and unclosed function is ultimately compiled to first-order
  at an assembly level using [lambda lifting](https://en.wikipedia.org/wiki/Lambda_lifting).
- An unclosed function references the free variables via an additional
  environment argument after performing In the case of ocaml, the environment
  argument is passed in as the final argument of the function. (Hence, the
  number of arguments added is _not_ proportional to the number of free
  variables - only one argument is added regardless of the number of FV)

Closures is not the only way to represent high order functions of such kind.
Some other ways to do so include [defunctionalization](https://en.wikipedia.org/wiki/Defunctionalization)
and carrying out graph-reduction on programs represented as combinators.
Closures happen to be one of the most popular ways in eager functional
programming and just so happens to be what ocaml uses.

The assembly of the function `g` (with my additional comments) is as follows:

```asm
camlA__g_1199:
	.cfi_startproc
	subq	$8, %rsp
	.cfi_adjust_cfa_offset 8
.L100:
	movq	%rax, %rbx
.L101:
        ; Allocate 64 bytes on the OCaml Heap
	subq	$64, %r15
	movq	caml_young_limit@GOTPCREL(%rip), %rax
	cmpq	(%rax), %r15
	jb	.L102   ; If %r15 < caml_young_limit, invoke GC

        ; Build the first block (the two closure blocks)
	leaq	8(%r15), %rdi
	movq	$4343, -8(%rdi)
	movq	caml_curry2@GOTPCREL(%rip), %rax
	movq	%rax, (%rdi)
	movq	$5, 8(%rdi)
	movq	camlA__f_1201@GOTPCREL(%rip), %rax
	movq	%rax, 16(%rdi)
	movq	%rbx, 24(%rdi)

        ; Build the second block (the tuple block)
	leaq	40(%rdi), %rax
	movq	$2048, -8(%rax)
	movq	%rdi, (%rax)
	movq	%rdi, 8(%rax)
	addq	$8, %rsp
    ret
```

In ocaml, `%r15` stores the pointer to OCaml heap. Whenever allocation for
N bytes is performed, `%r15` is decremented by N bytes and the new value of
`%r15` corresponds to the address of the location of the lowest byte of
the newly allocated piece of memory. Hence, the `subq` instruction followed
by a comparison with `caml_young_limit` is simply an 64-byte allocation on
the ocaml heap, followed by a check whether the GC needs to be invoked
(Code at .L102 is a call to the ocaml garbage collector).

In the above code snippet, the newly allocated 64 bytes are assigned the
following values:

| Word | Byte (hex) | Byte (dec) |     Value         | Register |
| ---- | ---------- | ---------- |------------------ | -------- |
|   -1 | -0x8       | -8         | `$4343`           |          |
|    0 |  0x0       |  0         | `caml_curry2`     | rdi      |
|    1 |  0x8       |  8         | `5`               |          |
|    2 | 0x10       | 16         | `camlA__f_1201`   |          |
|    3 | 0x18       | 24         | `x`               |          |
|    4 | 0x20       | 32         | `$2048`           |          |
|    5 | 0x28       | 40         | Pointer to byte 0 | rax      |
|    6 | 0x30       | 48         | Pointer to byte 0 |          |

*Notice that I start indexing the bytes and words from -0x8 and -1
respectively, this is consistent with the assembly code generated by the
ocaml compiler and what I have explained in an earlier section.*

The observant reader would have noticed that word -1 to 3 corresponds to the
closure, whereas word 4 to 6 corresponds to the actual returned pair of
functions. To verify our latter claim, 2048 = 0x800. The last bytes
corresponds to the tag `0`, the standard tag for objects and next two bits
is `0` and the subsequent bits corresponds (`0b10`) the size of the block.

What exactly is the closure block? Let's start by decomposing the header
word in the closure block:

$4343 = 0xcf7 = 0b 1 0000 1111 0111

| 100 | 00  | 1111 0111
| 0x4 | 0x0 | 0xF7

The tag of closures is 0xF7, `0b100 = 4` is the size of the block (which is consistent
with our observation above and [byterun/caml/mlvalues.h](https://github.com/ocaml/ocaml/blob/trunk/byterun/caml/mlvalues.h#L227)
in the ocaml source code).

The 0th value refers to `caml_curry2`, something
that we will return to at a later section. The 1st value refers to the
number of arguments of the function (Recall that `5` is actually `2` in
ocaml, as the ocaml sets the least significant bit of integers to 1). The
2nd value refers to the lambda-lifted function, whereas the 3rd value
onwards refers to the environment / free variable of the lambda lifted
environment. Notice that the environment argument that would be used in the
above lambda-lifted function above is simply the closure block!

## What is caml_apply ?

How does a function call in closures look like? We can examine the generated
assembly by compiling a.ml in opaque mode, and call the function from b.ml.
(Compiling a.ml in opaque mode prevents ocaml from inlining closures in b.ml)

```ocaml
(** b.ml **)

let foo = A.g 999

let bar y =
  let (a, b) = foo in
  b (a y y) y
;;
```

```asm
camlB__bar_1200:
	.cfi_startproc
	subq	$8, %rsp
	.cfi_adjust_cfa_offset 8
.L114:
	movq	%rax, (%rsp)
	movq	camlB@GOTPCREL(%rip), %rbx
	movq	(%rbx), %rbx
	movq	(%rbx), %rdi
	movq	%rax, %rbx
	call	caml_apply2@PLT
.L112:
	movq	camlB@GOTPCREL(%rip), %rbx
	movq	(%rbx), %rbx
	movq	8(%rbx), %rdi
	movq	(%rsp), %rbx
	addq	$8, %rsp
	.cfi_adjust_cfa_offset -8
	jmp	caml_apply2@PLT
```

We see a call to `caml_apply2` The `caml_apply2` is generated on the fly
by the ocaml linker and cannot be found directly in the ocaml source. From
inspecting the generated executable, we can see the following:

```asm
; recall that [rax] and [rbx] contains the first arguments
00000000004025b0 <caml_apply2>:
  4025b0:       48 83 ec 08             sub    $0x8,%rsp
  4025b4:       48 8b 77 08             mov    0x8(%rdi),%rsi
  4025b8:       48 83 fe 05             cmp    $0x5,%rsi
  4025bc:       75 0a                   jne    4025c8 <caml_apply2+0x18>
  4025be:       48 8b 77 10             mov    0x10(%rdi),%rsi
  4025c2:       48 83 c4 08             add    $0x8,%rsp
  4025c6:       ff e6                   jmpq   *%rsi
  4025c8:       48 89 1c 24             mov    %rbx,(%rsp)
  4025cc:       48 8b 37                mov    (%rdi),%rsi
  4025cf:       48 89 fb                mov    %rdi,%rbx
  4025d2:       ff d6                   callq  *%rsi
  4025d4:       48 89 c3                mov    %rax,%rbx
  4025d7:       48 8b 3b                mov    (%rbx),%rdi
  4025da:       48 8b 04 24             mov    (%rsp),%rax
  4025de:       48 83 c4 08             add    $0x8,%rsp
  4025e2:       ff e7                   jmpq   *%rdi
```

which loosely translates to the following pseudo-C program:


```C
value caml_apply2(value a, value b, word_t *env)
{
  word_t tmp;

  if (env[1] == 5) {
    /* This is a closure that take two arguments. (5 is 2 in ocaml!)
       env[2] refers to the original compiled function.
    */
    void *fnc = (void*) env[2];
    return fnc(a, b, env);

  } else {
    /* Calls the first function and return a closure over one argument.
       Note that the first function is _not_ the original compiled function,
       but rather a currying function. More on this on a later section.
    */
    void *fnc_0 = env[0];
    word_t *new_env = fnc_0(a, env);

    /* Take the result and call the new closure */
    void *fnc_1 = new_env[0];     /* mov    (%rbx),%rdi */
    return fnc_1(rbx, new_env);     /* jmpq   *%rdi */
  }
}
```

(Minor performance note: very neatly, the ocaml compiler places the closure environment as the _last_
argument of `caml_apply2` function call. This means [rax] and [rbx] doesn't have
to be modified before being appended to the actual function call.)

This is consistent with the notes in [asmcomp/cmmgen.ml](https://github.com/ocaml/ocaml/blob/trunk/asmcomp/cmmgen.ml#L3123)

```scheme
(defun caml_applyN (a1 ... aN clos)
  (if (= clos.arity N)
    (app clos.direct a1 ... aN clos)
    (let (clos1 (app clos.code a1 clos)
          clos2 (app clos1.code a2 clos)
          ...
          closN-1 (app closN-2.code aN-1 closN-2))
      (app closN-1.code aN closN-1))))
```

This also gives us a rough idea about how much overhead is incurred in such
partial applications / indirect calls - in addition to the overhead from
looking up the free variables from the function, the runtime has to apply
functions N times over N arguments (which actually involve more allocations,
more on this when we discuss `caml_curry` in the next section).

This is not neceesarily true in newer versions of the compiler, especially
with the development of flambda, as closures are unboxed in the optimization
phase of the compiler. In practice, we don't usually compile ocaml code in
opaque mode. Rather, we expose function information in cmx files so that
the inliner and make more informed inlining decisions to prevent unnecessary
closure allocations.

### Currying and Partial Application

If you look carefully at the block above, the function `g` in `a.ml` does
not return a block containing `f`, rather, it contains `caml_curry2` - why
is that?

It turns out that it is there for a rather obvious reason - currying, which
is a process that transforms a function that take multiple arguments into
a function that takes a single argument. For that reason, a function `f`
that has the signature `int -> int -> int` can be both:

- A function that takes two `int` and returns a `int`
- A function that takes a `int`, and returns a function that takes an `int`
and returns an `int`

Due to the validity of the latter case, we need to consider how to represent
such code at runtime:

```ocaml
(** c.ml **)
let f x y z = x + y


(** d.ml **)
let g = C.f 1

let h = C.f 2 3

let i = C.f 4 5 6
```

Assuming the compiler doesn't expose inlining information between modules
(ie: compiling in opaque mode), we will need some way to indicate that
we are only partially applying the function, leveraging the fact that the
functions are curried.

```asm
;;;;;;;;
;; c.s
;;;;;;;;
        .quad 4087   ; hex(4087) = 0xff7
camlC__1:
        .quad caml_curry3
        .quad 7
        .quad camlC__f_1199
camlC__entry:
        .cfi_startproc
.L101:
        movq    camlC__1@GOTPCREL(%rip), %rax
        movq    camlC@GOTPCREL(%rip), %rbx
        movq    %rax, (%rbx)

;;;;;;;;
;; d.s
;;;;;;;;
camlD__entry:
        .cfi_startproc
        subq    $8, %rsp
        .cfi_adjust_cfa_offset 8

;; D.g
.L103:
        movq    camlC@GOTPCREL(%rip), %rax
        movq    (%rax), %rbx
        movq    $3, %rax
        movq    (%rbx), %rdi
        call    *%rdi
        ; caml_curry3(rax = $3, rbx = env)
.L102:
        movq    camlD@GOTPCREL(%rip), %rbx
        movq    %rax, (%rbx)

;; D.h
        movq    camlC@GOTPCREL(%rip), %rax
        movq    (%rax), %rdi
        movq    $7, %rbx
        movq    $5, %rax
        call    caml_apply2@PLT
        ; caml_apply2(rax = $5, rbx = $7, rdi = env)
.L103:
        movq	camlD@GOTPCREL(%rip), %rbx
        movq	%rax, 8(%rbx)

;; D.i
        movq	camlC@GOTPCREL(%rip), %rax
        movq	(%rax), %rsi
        movq	$13, %rdi
        movq	$11, %rbx
        movq	$9, %rax
        call	caml_apply3@PLT
        ; caml_apply3(rax = $9, rbx = $13, rdi = $17, rsi = env)
.L104:
        movq	camlD@GOTPCREL(%rip), %rbx
        movq	%rax, 16(%rbx)
```

For reasons that will be clearer soon, we can now assume that caml_curryN
if a function that will create a new closure from partially applying
arguments to a function.

As we recall from the earlier section, `caml_apply3` and `caml_apply2` is
implemented as follows:

```scheme
; By inspecting the assembly code above, we can reasonbly claim that
; [clos] below corresponds to a block with the following fields:
;    0: code pointer
;    1: arity
;    2: direct call code pointer
;    3..N: closure environment
; NOTE: THIS IS NOT EXACTLY RIGHT (but pretty close!)

(defun caml_apply2 (a1 a2 clos)
  (if (= clos.arity 2)  ; 2 is actually 5
    (app clos.direct a1 a2 clos)
    (let (clos1 (app clos.code a1 clos))
      (app clos1.code a2 clos1))))

(defun caml_apply3 (a1 a2 a3 clos)
  (if (= clos.arity 3)  ; 3 is actually 7
    (app clos.direct a1 a2 clos)
    (let (clos1 (app clos.code a1 clos)
          clos2 (app clos1.code a2 clos))
      (app clos2.code a3 clos3))))
```

By using generic `caml_applyN` functions, the call site does not need to
make any assumptions about the functions that it is calling. We are
interested in the base and `caml_apply2` case, where there are only
partial applications of functions.

The observant reader might have noticed that `caml_apply1` is missing. There
are a few reasons for this:

- there is no need for allocating a closure for a partial application of a
function with a single argument ( a function with a single argument here
refers to something of the form 'a -> 'b, where both 'b is not a function
type). You cannot really partially apply a function with a single argument --
it would be a full application rather than a partial one.
- Due to the reason above, there is no need for `caml_curry1`. The
ocaml compiler will place the function pointer at the code pointer and omit
the direct call field. Hence, at the call site, all the function has to do
is jump to the address at the code pointer field, ie: the first word.
- The above behaviour (jumping to the code pointer) happens to be the
intended behaviour when partially applying a single argument to a function
that takes multiple arguments - removing the need for edge cases at the call
site. (Very neat indeed! :D)

For that reason, a closure block actually contains the following structure
when the function arity is == 1:

- -1: Header
- 0: code pointer
- 1: arity
- 2..N: closure environment

And when arity > 1:

- -1 Header:
- 0: code pointer
- 1: arity
- 2: direct call code pointer
- 2.. N

Let's study a simple example to verify the claim above:

```ocaml
(* e.ml *)
let f x = x + 1
```

```asm
_camlE__f_1199:
	.cfi_startproc
L100:
	addq	$2, %rax
	ret
	.cfi_endproc
	.data

;; beginning of said closure block
	.quad	3063
_camlE__1:
	.quad	_camlE__f_1199
	.quad	3
;; end of closure block
	.text
	.align	4
```

### Now, what is caml_curry?

Previously we claim that `caml_curryN` is pretty much a function that allocates
a closure from partial application. Let's look at how it is implemented:

Similar to `caml_apply`, it is generated on the fly by the ocaml linker (
it will not be defined in a module's .s file). Here's how it is defined
in [asmcomp/cmmgen.ml](https://github.com/ocaml/ocaml/blob/9f626af1097cff7ca2575ca12a2e70ad5c02e59e/asmcomp/cmmgen.ml#L3243)

```scheme
; HDR refers to header
(defun caml_curryN (arg clos)
        (alloc HDR caml_curryN_1 <arity (N-1)> caml_curry_N_1_app arg clos))
     (defun caml_curryN_1 (arg clos)
        (alloc HDR caml_curryN_2 <arity (N-2)> caml_curry_N_2_app arg clos))
     ...
     (defun caml_curryN_N-1 (arg clos)
        (let (closN-2 clos.vars[1]
              closN-3 closN-2.vars[1]
              ...
              clos1 clos2.vars[1]
              clos clos1.vars[1])
          (app clos.direct
               clos1.vars[0] ... closN-2.vars[0] clos.vars[0] arg clos)))

; when specialized to caml_curry3
(defun caml_curry3 (arg clos)
  (alloc HDR caml_curry3_1 2 caml_curry_3_1_app arg clos))
(defun caml_curry3_1 (arg clos)
  (alloc HDR caml_curry3_2 2 caml_curry_3_2_app arg clos))
(defun caml_curry3_2 (arg clos)
  (let (clos2 clos.vars[1]
        clos1 clos2.vars[1])
    (app clos.direct clos1.vars[0] clos2.vars[1] arg clos)))
```

The `caml_curry_3_1_app` function is a special direct application function
when 1 of the arguments is available in the closure. These functions are
used for direct calls on partial applications (resulting in less allocations)
Here's the assembly of the mentioned functions). Here is the annotated
assembly of the generated functions:

```asm
0000000000402400 <caml_curry3>:
  402400:       48 83 ec 08             sub    $0x8,%rsp
  402404:       48 89 c7                mov    %rax,%rdi

  ; Allocate 0x30 bytes on the Ocaml Heap
  402407:       49 83 ef 30             sub    $0x30,%r15
  40240b:       48 c7 c0 00 bf 62 00    mov    $0x62bf00,%rax  ; <caml_young_limit>
  402412:       4c 3b 38                cmp    (%rax),%r15
  402415:       72 36                   jb     40244d <caml_curry3+0x4d>

  ; Set the header of the new block to 0x14F7
  402417:       49 8d 47 08             lea    0x8(%r15),%rax
  40241b:       48 c7 40 f8 f7 14 00    movq   $0x14f7,-0x8(%rax)
  402422:       00

  ; Sets code pointer to <caml_curry3_1>
  402423:       48 c7 c6 80 24 40 00    mov    $0x402480,%rsi  ; <caml_curry3_1>
  40242a:       48 89 30                mov    %rsi,(%rax)

  ; Sets arity to $5 (which is 2 in ocaml)
  40242d:       48 c7 40 08 05 00 00    movq   $0x5,0x8(%rax)
  402434:       00

  ; Sets the direct code pointer to <caml_curry3_1_app>
  402435:       48 c7 c6 60 24 40 00    mov    $0x402460,%rsi ; <caml_curry3_1_app>
  40243c:       48 89 70 10             mov    %rsi,0x10(%rax)

  ; new_clos.vars[0] := arg
  402440:       48 89 78 18             mov    %rdi,0x18(%rax)

  ; new_clos.vars[1] := clos
  402444:       48 89 58 20             mov    %rbx,0x20(%rax)

  ; Bump the stack pointer and return
  402448:       48 83 c4 08             add    $0x8,%rsp
  40244c:       c3                      retq
  40244d:       e8 5a 6e 01 00          callq  4192ac <caml_call_gc>
  402452:       eb b3                   jmp    402407 <caml_curry3+0x7>
  402454:       66 90                   xchg   %ax,%ax
  402456:       66 2e 0f 1f 84 00 00    nopw   %cs:0x0(%rax,%rax,1)
  40245d:       00 00 00

;; snip

0000000000402460 <caml_curry3_1_app>:
  ; rax = arg1, rbx = arg2, rdi = clos
  402460:       48 89 c2                mov    %rax,%rdx        ; rdx = rax
  402463:       48 89 d9                mov    %rbx,%rcx        ; rcx = rbx
  402466:       48 8b 77 20             mov    0x20(%rdi),%rsi  ; rsi := clos.arg[2] = clos1
  40246a:       48 8b 47 18             mov    0x18(%rdi),%rax  ; rax := clos.arg[1]
  40246e:       4c 8b 46 10             mov    0x10(%rsi),%r8   ; r8 = rsi.pointer = clos1.pointer
  402472:       48 89 d3                mov    %rdx,%rbx        ; rbx = rdx
  402475:       48 89 cf                mov    %rcx,%rdi        ; rdi = rcx
  402478:       41 ff e0                jmpq   *%r8             ; r8(rax, rbx, rdi, rsi)
  40247b:       0f 1f 44 00 00          nopl   0x0(%rax,%rax,1)

0000000000402480 <caml_curry3_1>:
  402480:       48 83 ec 08             sub    $0x8,%rsp
  402484:       48 89 c7                mov    %rax,%rdi
  402487:       49 83 ef 28             sub    $0x28,%r15
  40248b:       48 c7 c0 00 bf 62 00    mov    $0x62bf00,%rax
  402492:       4c 3b 38                cmp    (%rax),%r15
  402495:       72 2b                   jb     4024c2 <caml_curry3_1+0x42>
  402497:       49 8d 47 08             lea    0x8(%r15),%rax
  40249b:       48 c7 40 f8 f7 10 00    movq   $0x10f7,-0x8(%rax)
  4024a2:       00
  4024a3:       48 c7 c6 d0 24 40 00    mov    $0x4024d0,%rsi
  4024aa:       48 89 30                mov    %rsi,(%rax)
  4024ad:       48 c7 40 08 03 00 00    movq   $0x3,0x8(%rax)
  4024b4:       00
  4024b5:       48 89 78 10             mov    %rdi,0x10(%rax)
  4024b9:       48 89 58 18             mov    %rbx,0x18(%rax)
  4024bd:       48 83 c4 08             add    $0x8,%rsp
  4024c1:       c3                      retq
  4024c2:       e8 e5 6d 01 00          callq  4192ac <caml_call_gc>
  4024c7:       eb be                   jmp    402487 <caml_curry3_1+0x7>
  4024c9:       0f 1f 80 00 00 00 00    nopl   0x0(%rax)
```

For example (assume that no inlining is done between call sites):

```
let f x y z = x + y + z

let g = f 1    (* calls [caml_curry3] *)

let h = g 2    (* calls [caml_curry3_1] *)

let i = h 3    (* calls [caml_curry3_2] *)

let j = g 3 4  (* calls [caml_curry3_1_app]. *)
(* While it is possible to call [camll_curry3_1] and [caml_curry3_2] rather
than short-circuiting directly via [caml_curry3_1_app], there are 3 reasons
not to do so:

0. It causes an extra allocation
1. It it slower due to memory lookups
2. Most importantly, it would assume some form of special-case knowledge
of the block structure at the call site.
*)
```

Note that there is no need for a `caml_curry3_2_app` - Figuring out why
is left as an exercise for the reader.

## Wrapping Up

Having looked up several assembly snippets, let's wrap up what we know
about closures in ocaml.

### Closure Block
A block consists of the following, when the function arity >= 2
(or >= 5 in ocaml's integer representation)

| Word | |
| -----| ----|
| -1   | Header |
| 0    | Code pointer |
| 1    | Arity |
| 2    | Direct call's code pointer |
| 3..N | Closure env |

if the function arity is 1 (or 3 in ocaml's integer representation):

| Word | |
| -----| ----|
| -1   | Header |
| 0    | Code pointer |
| 1    | Arity |
| 2..N | Closure env |

There really isn't any different between a direct call and a non-direct one,
so the representation format saves a word without storing the direct call
version's code pointer.

By having a simple representation of closures, the call site can call
functions having practically no knowledge of the original function. I
personally found this pretty fascinating considering ocaml the called
function's manages to relay information about it's environment (ie: free
variables) and partially applied arguments without having the caller being
aware about anything - calling functions with and without free variables
are similar at the call site.

### Applying

A function application of a single argument:

- move argument to rax
- move the closure that is being applied to rbx (Cannot assume whether
  the function is closed or not)
- a branch to code pointer

A function application with multiple arguments:

- move argument 0 to rax
- move argument 1 to rbx
- ...
- move closure to the next argument
- call `caml_applyN`

In `caml_applyN`, if the number of arguments match the function arity,
it makes a direct function call by calling `clos.direct`. Otherwise, it
calls `clos.pointer`, which is almost certainly going to be an instance of
`caml_curryN` of `caml_curryN_M` function, invoking a partial application.

### Currying

When the function has only a single argument, currying is less interesting
as a it would be similar to a direct call. (This is not to say that the
compiler cannot do more for us - it is possible that a direct call
returns another function. In that case, one would still hope that the
compiler to optimize away the closure allocation).

When the function has multiple arguments, we branch to the code pointer,
rather than the direct call code pointer. This causes allocates a new closure
that it is aware of the function. For example, when a function has two
arguments and nothing in its closure:

| Word | |
| -----| ----|
| -1   | 0xCF7 = 0b 11 00 11110111 |
| 0    | `caml_curry2` |
| 1    | $5 |
| 2    | `CamlC__f_1199` |

When we call this function with only a single argument, the runtime will
construct a new closure. It sets rax to the first argument and rbx to the
environment, then branches to the code pointer. `caml_curry2` will allocate
a new closure which contains the partially applied arguments.

### The Actual Conclusion

I once again claim that my explainations here are empirical, and is likely
to contains some form of mistakes. Nevertheless, I enjoyed writing this post
(which consists of a large amount of digging through compiler code and
patiently reading assembly). I was quite pleasently surprised that x86 is
much less daunting to read than I have previously expected, especially with
the presence of good disaassembly / debugging tools.

I am also very impressed by how ocaml managed to stick to a its block-based
representation for something as complex as closures. This illustrates the
flexibility of simple systems and consequently, the ease of proving the
correctness of such systems.

*(P/S : Simple systems also comes with a cost - especially in terms of
efficiency.  Due to the constrained format of blocks in ocaml, booleans,
unit and characters are stored as a word rather than a byte, hence using up
more space than necessary. Floating point numbers are also at times,
unnecessarily boxed - hampering performance when it comes to floating
point manipulation.)*
