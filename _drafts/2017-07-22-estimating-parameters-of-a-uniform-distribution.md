---
layout: post
title: Estimating Parameters Of A Uniform Distribution
categories: eng
subtitle: 

excerpt: 

---

We are given a list of samples `[x1 ; x2 ; x3; ...; xn]` and we know that
they originate from a uniform distribution. What are the most likely
parameters of the uniform distribution?

For simplicity, we can assume that `x[i] <= x[i+1]` and `x[1] < x[n]`. This
condition simply means that `Set.length (Set.of_list samples)` >= 2

## What is a Uniform Distribution

A [continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution)
is a distribution defined by two parameters, `a` and `b`, where `a` <= `b`
and where the probability of getting any number between `a` and `b` is
equal. In the problem that we are studying, as the problem deals with real
numbers, this would be a continuous uniform distribution.

## A Naive Argument

When my mentor at work (I am currently interning at Jane Street as a dev)
mentioned this to me, I immediately claim that `a = x[1]` and `b = x[n]`.
This is the most intuitive answer, but we'd assume two things with this
answer:

1. The parameters we'd obtain would be independent of the number of
samples. There is a fundamental issue here - our confidence on our bounds
being independent simply suggests that there is no point obtaining more
samples.

2. The MAP obtained would only rely on two numbers, that is `min samples`
and `max samples`. I found it really hard to wrap my head around this
claim.

I was not convinced that either (1) or (2)  are fair assumptions to make,
so I went on to figure out the maths with my mentor.

As it turns out, I was wrong (which is why I am unlikely to be a quant
throughout my professional careeer). However, while the 1st assumption above
is refuted, the 2nd assumption holds.

## A Bayesian Argument

What we are trying to do here is to perform a Maximum a posteriori (MAP)
estimation of the parameters using bayes rule. In this particular problem,
we can write bayes rule as:

$$ P(parameters | observation) = \frac{P(observation | parameters) P(parameters)}{P(observation)} $$

In this equation, the $$ P(parameters) $$ refers to the prior belief on
probability of a given set of parameters. If we are dealing with a discrete
distribution, $$ P(X) $$ would refer to actual probabilities. In the case
of continuous distributions, $$ P(X) $$ refers to the probability density
function.

For example, in our problem, $$ P((0, 1)) $$ would refer to the probability
that $$ P((0, 1)) $$ is the right distribution without considering any of
the observed samples.

In the text that follows, I will abbreviate $$ P(parameters) $$ as
$$ P(\theta) $$ and $$ P(observation) $$ as $$ P(D) $$ (D stands for data).

## To Infinity, and Beyond!

An obvious (in my opinion) problem here is bounds. If you look at the
problem again, it does not specify any bounds for the observed samples.
By doing so, the range of samples are not constrained at all. One might
argue that $$ P(D) = 0\space\forall\space D $$, and one would be (somewhat)
correct! The intuitive argument to this claim is to imagine an infinitely
long line, the in essence, the probability of choosing $$N$$ points in
random points without any knowledge of the choice's distribution, is
essentially zero. Similarly, you can make such an argument for $$P(\theta)$$
- without any knowledge of the underlying bounds, we cannot make any claims
to the values of zero.

The trick here is to think in terms of limits and bounds. Let's assume that
$$ -L <= x_i <= L \space \forall \space i = {1, 2, 3, ...., N}$$, where L
is the bounds of our sample space.

By constraining our problem, we can solve for the prior distribution,
likelihood function and normalizing constant.

### Prior distribution:

$$
P(\theta = (a, b)) = \left\{\begin{aligned}

&\frac{1}{2 L ^ 2} &&: (a < b) \wedge (-L > a) \wedge (b > L) \\
\newline
&0 &&: otherwise

\end{aligned}
\right.
$$

We can do a sanity check by integrating the above equation from $$-L$$ to 
$$L$$. This should end up as 1. The bounds of the integral of $$a$$ is from
$$-L$$ to $$L$$, whereas the bounds of the ingegral of $$b$$ is from $$a$$
to $$L$$. Inituitively, you can imagine the integration area as a triangle
of length and height 2L. The area of the triangle is $$2 L^2$$ and since
all possible values of the parameters within the non-zero parameter space
are equally likely, the probability should be as such.

### Likelihood function

$$
P(\theta = (a, b) | D = (x_1, x_2, ...., x_n)) = \left\{\begin{aligned}

&\frac{1}{(b - a) ^ n} &&: a < x_i < b \space \forall \space i = (1, 2, 3, ..., n) \\
\newline
&0 &&: otherwise

\end{aligned}
\right.
$$


