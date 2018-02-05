---
title: FYP Layman Summary
layout: static
---

[FYP Links](imperial-fyp18)

_If you do not know how to program, you ought to stop reading now. If you
have programmed before, but fail to understand this piece, it means I have
made incorrect prior assumptions. The following text ought to fit in an A4
page with reasonable spacing and margins._


................................................

Have you wondered how computers run a program that you have written? What
happen when you write a function and use it in your program?

Microprocessors, the chips responsible for computers ability to compute,
have their own designated machine language (in binary) - this language is
called the microprocessors instruction set. These various instructions
provides computers with the ability to perform different kinds of computation
and interaciton with memory (aka RAM).  Functions exist in machine language
by having the function's contents in
a particular location in memory and have function calls be a special
instruction that says "goto this location in memory, execute the code there
and (please do) come back when you are done".


Writing programs in machine languages is tedious, error-prone and
time-consuming. Taking the sum of 5 numbers will easily take 10
instructions, whereas programming languages allows us to write simple
expressions like `var a = b + c + d + e + f`.  Hence, what we do instead is write programs in our (or our employer's)
favourite programming language. We then use a tool to transform these languages
into machine code. This tool is called a compiler. By using a compiler, we
implicitly give up fine-grained control over the type of machine instructions emitted.
As you might (or might not?) have expect, different sequences of machine
instructions can function equivalently but have different perform characteristics
(eg: one can be faster than the other, one uses much more instructions than another).
One of the earliest challenges in the '60s for designing pragmatic compilers
is that they have to be able to emit reasonably fast machine code,
so programmers are willing the give up fine-grained control over machine
instructions for expressivity and productivity.


Compiler usually operates in "passes", that is, it takes a representation
of the program and coverts them to other representations. Representaiton of
programs that are closer to the programming language is said to be higher-level, whereas
representations closer to machine language are said to be
lower-level. These passes, on top of performing conversion from one
representation to another, also performs optimisations. A compiler optimisation
is something that transforms a segment of code whilist improving its performance
(usually measured in terms of execution time) without changing the
its functional behaviour.

One such optimisation is function inlining, that is replacing a function
call with an instance of the function's body. The benefits of function
inlining is that (1) It exposes more optimisation to further compilation
passes, (2) It reduces the microprocessor overhead imposed in calling
functions from variable spilling. It is, however, not benefitial to inline
all function calls -- an excessively large function body can result in
frequent variable spilling and code bloat (both performance degrading phenomena).
Compiler designers use heuristics to determine when function inlining
ought to be done, because accurately making inlining decisions throughout the entire
program is computationally intractable (that is it takes exponential amount
of time with respect to the number of function calls).

The goal of this project is to investigate how machine learning (the class
of algorithms that lead AlphaGo to victory over the Go world champion) can be
used to help guide inlining decisions within _high-level representation_.
Prior machine-learning-basead work have focussed on function inlining using
lower-level information, such as data on the nature of machine instructions
within a function body and the caller. The hypothesis of this project is
that higher-level representations are closer to the programmers intent and
can possibly provide different form of insights to guide inlining decisions.
In our research and experiments, we will be targetting OCaml, a beautiful high-level
functional programming language with strong and static typing.
