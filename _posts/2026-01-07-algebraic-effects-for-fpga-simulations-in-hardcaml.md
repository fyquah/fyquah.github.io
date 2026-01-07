---
layout: post
title: "Algebraic Effects for FPGA Simulations in Hardcaml"
date: 2026-01-07
---

I recently wrote about Algebraic Effects using OxCaml on my employer's tech
blog, using FPGA simulation with Hardcaml as a motivating example.  I had fun
using Algebraic Effects, and writing about it!

[https://blog.janestreet.com/fun-with-algebraic-effects-hardcaml/](https://blog.janestreet.com/fun-with-algebraic-effects-hardcaml/)

I personally think Algebraic Effects are the coolest feature in OCaml since
first class modules. The idea that the runtime can encapsulate "computation to
come" (also known as a continuation) as a first class object unlocks various
ways one can run computation, without binding the user to a particular
scheduling algorithm amongst concurrent computation. In this instance, I
was able to write an FPGA-simulation-specific scheduler that runs tasks that
synchronize at clock-cycle boundaries.

There is of course a lot of clever engineering under-the-hood to make this
work, but I really didn't have to think about it when using this feature.
