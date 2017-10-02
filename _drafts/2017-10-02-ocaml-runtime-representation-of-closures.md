---
layout: post
title: Ocaml Closures Runtime Representation
categories: eng
subtitle:

excerpt:

---

Before reading this article, I assume you are familiar with OCaml's runtime
representation of values. Real World OCaml has [really nice chapter](https://realworldocaml.org/v1/en/html/memory-representation-of-values.html)
on this, but there is not much coverage on closures / function representation at runtime.
This article aims to fail the gap.

You should also have some idea about OCaml's calling convention. There is
no actual documentation on this, but this [stackoverflow post](https://stackoverflow.com/questions/11322163/ocaml-calling-convention-is-this-an-accurate-summary) provides a good idea. All you really need to know is the order
of which registers store arguments.

# Disclaimer

I compiled code with ocaml 4.04 _without flambda_.

Some of my explanations are empirical, based on my observations from compiled
code and reading code from the compiler.

## Example 0: Returning tuple of unclosed functions

An unclosed function is one whose function body has free variables other
than its arguments.

Consider the following code snippet:

```ocaml
(** a.ml **)
let g x : int -> (int -> int -> int * int -> int -> int) =
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
```

_* The [@@inline never] forces the ocaml compiler not to inline the function
call. This ensures we get the actual closure representation._

The assembly (x86) of the function g is as follows:

```asm
camlA__g_1199:
	.cfi_startproc
	subq	$8, %rsp
	.cfi_adjust_cfa_offset 8
.L100:
	movq	%rax, %rbx
.L101:
	subq	$64, %r15
	movq	caml_young_limit@GOTPCREL(%rip), %rax
	cmpq	(%rax), %r15
	jb	.L102
	leaq	8(%r15), %rdi
	movq	$4343, -8(%rdi)
	movq	caml_curry2@GOTPCREL(%rip), %rax
	movq	%rax, (%rdi)
	movq	$5, 8(%rdi)
	movq	camlA__f_1201@GOTPCREL(%rip), %rax
	movq	%rax, 16(%rdi)
	movq	%rbx, 24(%rdi)
	leaq	40(%rdi), %rax
	movq	$2048, -8(%rax)
	movq	%rdi, (%rax)
	movq	%rdi, 8(%rax)
	addq	$8, %rsp
    ret
```

In ocaml, `%r15` stores the pointer to OCaml heap. Whenever allocation for
N bytes is performed, `%r15` is decremented by N bytes and the new value of
`%r15` corresponds to the new allocated block.

The `subq` instruction followed by a comparison with `caml_young_limit` is
simply an 64-byte allocation on the ocaml heap, followed by a check whether
the GC needs to be invoked (Code at .L102 is a call to the ocaml garbage collector).

In the above code snippet, the newly allocated 64 bytes are assigned the following
values:

| Word | Byte |      Value        |
| ---- | ---- | ----------------- |
|    0 |    0 | `$4343`           |
|    1 |    8 | `caml_curry2`     |
|    2 |   16 | `5`               |
|    3 |   24 | `camlA__f_1201`   |
|    4 |   32 | `x`               |
|    5 |   40 | `$2048`           |
|    6 |   48 | Pointer to byte 0 |
|    7 |   56 | Pointer to byte 0 |

The observant reader would have noticed that word 0 to 4 corresponds to the closure,
whereas word 5 to 7 corresponds to the actual returned pair of functions. To verify
our latter claim, 2048 = 0x800. The last bytes corresponds to the tag `0`, the standard
tag for objects and next two bits is `0` and the subsequent bits corresponds (`0b10`)
the size of the block.

What exactly is the closure block? Let's start by decomposing the first word in
the closure block:

4343 = 0xcf7 = 0b 1 0000 1111 0111

| 100 | 00  | 1111 0111
| 0x4 | 0x0 | 0xF7

The tag of closures is 0xF7, `0b100 = 4` is the size of the block (which is consistent
with our observation above and [byterun/caml/mlvalues.h](https://github.com/ocaml/ocaml/blob/trunk/byterun/caml/mlvalues.h#L227)
in the ocaml source code).

How does a function call in closures look like? We can
investigate the generated assembly by compiling a.ml in opaque mode, and call it from b.ml.
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
_camlB__bar_1200:
	.cfi_startproc
	subq	$8, %rsp
	.cfi_adjust_cfa_offset 8
L109:
    ; rax is the first argument of bar, which is [y] in the code above
	movq	%rax, (%rsp)
	movq	_camlB@GOTPCREL(%rip), %rbx  ; rbx := B
	movq	(%rbx), %rbx                 ; rbx := rbx[0]
	movq	(%rbx), %rdi                 ; rdi := rbx[0]
	movq	%rax, %rbx                   ; rbx := rax
	call	_caml_apply2  ; _caml_apply2(y, y, closure)
L107:
	movq	_camlB@GOTPCREL(%rip), %rbx
	movq	(%rbx), %rbx
	movq	8(%rbx), %rdi
	movq	(%rsp), %rbx
	addq	$8, %rsp
	.cfi_adjust_cfa_offset -8
	jmp	_caml_apply2
	.cfi_adjust_cfa_offset 8
	.cfi_adjust_cfa_offset -8
	.cfi_endproc
	.data
	.quad	3063
```

We see a call to `caml_apply2` I think `caml_apply2` is generated on the fly by the ocaml linker,
and cannot be found in the ocaml source. From inspecting the generated executable
of a.ml and b.ml, we can see the following:

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

which loosely translates to the following C program:


```
value caml_apply2(value a, value b, value *env)
{
}

```

This is consistent with the [ocaml compiler's manual](https://github.com/ocaml/ocaml/blob/trunk/manual/manual/cmds/intf-c.etex#L1405)

```C
CAMLprim value caml_apply(value vf, value vx)
{
  CAMLparam2(vf, vx);
  CAMLlocal1(vy);
  vy = caml_callback(vf, vx);
  CAMLreturn(vy);
}
```

Very neatly, the ocaml compiler places the closure environment as the _last_
argument of `caml_apply2` function call. This means [rax] and [rbx] doesn't have
to be modified before being appended to the actual function call.
(This might not be true for more arguments, especially if there is more
than 10 arguments, as the calling convention allows only up to 10 arguments
to be register-allocated).

