---
title: Final Year Project 2018: Inlining ML with ML
layout: static
---

As part of my undergraduate degree's final year project in Imperial, I have
worked on investigating function inlining for OCaml using Machine Learning
(hence, the cheeky title). I was jointly supervised by [Dr David Thomas](https://www.imperial.ac.uk/people/d.thomas1)
and [Dr Andras Gyorgy](https://www.imperial.ac.uk/people/a.gyorgy) for this project.

It empirically works, but we cannot draw many conclusions without
further evaluation with a larger training set and validation set. The two
key novel research econtribution of this project designing an algorithm to
label function call sites for artbitrarily nested inlining decisions, and
figuring out how to transform sets of inlining decisions and execution
times into numerical rewards for every inlining decisions.

I have designed an optimisation pipeline to derive insight from raw training
benchmarks. A rough summary of this pipeline is:

- Iteratively compile the training benchmarks whilst varying inlining
  decisions
- Use predictive-modelling to assign reward values to inlining decisions
  within a program.
- Train a classification model to decide whether to inline a function.

While labelling was a key contribution, it was not explicitly used in a
specific stage. It fits in the bigger picture of being the "framework" that
powers the entire pipeline. An illustrative summary of the "optimisation
pipeline" is available in [summary.pdf](here).


# Writings

I have wrote quite a bit for this project.

- [Layman summary to my project](layman) - Anyone who has programmed before
  should be able to understand this. This is mainly targetted at prospective
  computer-science students who might be interested in the kinds of projects
  that exist.
- [Stable Labelling AST Journal Article (DRAFT)](labelling.pdf) -
  A draft article presenting an algorithm to label nodes in ASTs or
  tree-based IRs.
- [Presentation slides](presentation.pdf) - Presentation slides I have used
  during my project presentation
