---
layout: post
title: Bayesian Estimators for Uniform Distribution
categories: eng
subtitle: 

excerpt: 

---

We are given a list of samples `[x1 ; x2 ; x3; ...; xn]` and we know that
they originate from a uniform distribution. What are the parameters of the
uniform distribution?

For simplicity, we can assume that `x[i] <= x[i+1]` and `x[1] < x[n]`. This
condition implies that we presort the sampled numbers and there are at least
2 unique numbers in the sample.

## Disclaimer(-ish)

I am writing this text mostly because my mentor at my internship mentioned
this problem to me. As I was solving the problem, I felt that I have
managed to grasp a better understanding of bayesian methods
simply by looking at such toy examples. In other words, an unintended consequence of this
blog post is to hopefully explain what bayesian estimation mean in the
context of model fitting. In particular, we will be studying a specific case
where the distribution is known to be uniform and we want to obtain
a probability distribution over possible parameter values.

## What is a Uniform Distribution

A [continuous uniform distribution](https://en.wikipedia.org/wiki/Uniform_distribution)
is a distribution defined by two parameters, `a` and `b`, where `a` <= `b`
and where the probability of getting any number between `a` and `b` is
equal.

## A Naive Argument

When presented this problem, I immediately claim that `a = x[1]`
and `b = x[n]`.  This is the most intuitive answer, but I was implicitly
assuming:

1. The estimated parameters is independent of the number of samples.
2. The estimated parameters would only be a function of two numbers, that is
$$x_1$$ and $$x_n$$.

## A Bayesian Argument

What we are trying to do here is to perform a
[Maximum a posteriori (MAP) Esimation](https://en.wikipedia.org/wiki/Maximum_a_posteriori_estimation)
of the parameters. In this particular problem, we can write bayes rule as:

$$ P(parameters\space | \space observation) = \frac{P(observation\space | \space parameters) \space P(parameters)}{P(observation)} $$

In the above equation, the $$ P(parameters) $$ refers to the prior belief on
probability of a given set of parameters. If we are dealing with a discrete
distribution, $$ P(X) $$ would refer to actual probabilities. In the case
of continuous distributions, $$ P(x) $$ refers to the probability density
function.

For example, in our problem, $$ P(\theta = (0, 1)) $$ would refer to the
probability that $$ P(\theta = (0, 1)) $$ is the right distribution without
considering any of the observed samples.

In the text that follows, I will abbreviate $$ P(parameters) $$ as
$$ P(\theta) $$ and $$ P(observation) $$ as $$ P(D) $$ (D stands for data).
Using the abbreviations, we can rewrite Bayes rule for MAP as follows:

$$
P(\theta\space \mid \space D) = \frac{P(D \space | \space \theta) \space P(\theta)}{P(D)}
$$

- $$P(\theta \mid D)$$ - Posterior distribution on parameter space accounting
for the observed data.

- $$P(D \mid \theta)$$ - Likelihood function - informally, this is
the probability that we obtain the given observation assuming some values
for the parameters.

- $$P(\theta)$$ - Prior belief on the parameter space without making any
observations.

- $$P(D)$$ - Normalizing constant. This constant ensures that the
probability distribution integrates to 1.

In machine learning methods that most are familiar with, i.e: some variant
of gradient descent, we are searching for the set of parameters that
maximizes likelihood function. We can imagine the loss function as some kind
of probabilistic measure of the probability that we obtain . This class of
methods in called
[Maximum Likelihood Estimation](https://en.wikipedia.org/wiki/Maximum_likelihood_estimation).
The primary downside of this method is that we do not get a distribution over
the parameter values and it is fairly easy to overfit the model's training
without taking special precaution.

## To Infinity, and Beyond!

We have Bayes' rule - let's apply it! However, without defining any
bounds on the samples and parameters, there is no clear notion on how we
can compute the terms we required to apply Bayes' rule.

One might argue that $$ P(D) = 0\space\forall\space D $$, and one would be
(somewhat) correct! The intuitive argument to this claim is to imagine an
infinitely long line, where the probability of choosing $$N$$
points in random points without any knowledge of the choice's distribution,
is essentially zero. Similarly, you can make such an argument for
$$P(\theta)$$ - without any knowledge of the underlying bounds. The problem with either claims
is that $$\int P(\theta) \neq 1$$, and this on its own violates one of the
fundamental property of probabilities.

The trick here is to think in terms of limits and bounds. Let's assume that
$$ -L <= x_i <= L \space \forall \space i = {1, 2, 3, ...., N}$$, where L
is the bounds of our sample space.  By constraining our problem, we can
express the prior, likelihood function and normalizing constant in
terms of $$L$$, $$x_i$$ and $$N$$.

## Prior Belief

$$
P(\theta = (a, b)) = \left\{\begin{aligned}

&\frac{1}{2 L ^ 2} &&: (a < b) \wedge (-L > a) \wedge (b > L) \\
\newline
&0 &&: otherwise

\end{aligned}
\right.
$$

We can do a sanity check by integrating the above equation from $$-L$$ to 
$$L$$ and making sure it is equal to 1. The bounds of the integral of $$a$$
is from $$-L$$ to $$L$$, whereas the bounds of the integral of $$b$$ is from
$$a$$ to $$L$$. Intuitively, you can imagine the integration area as a
triangle of length and height 2L. The area of the triangle is $$2 L^2$$ and
since all possible values of the parameters in the parameter space with non-zero probability
space are equally likely, the pdf over the non-zero parameter space should
be the reciprocal of the total area.

## Likelihood function

$$
P(D \mid \theta = (a, b)) = \left\{\begin{aligned}

&\frac{1}{(b - a) ^ n} &&: a < x_i < b \space \forall \space i = (1, 2, 3, ..., n) \\
\newline
&0 &&: otherwise

\end{aligned}
\right.
$$

## Normalizing Constant

$$
P(D = (x_1, x_2, ...., x_n)) =
\int_{-L}^{L} \int_{-L}^{L} P(D | \theta = (a,b)) \space P(\theta = (a,b)) \space db \space da
$$

The normalizing constant is simply the integral of $$ P(D | theta) $$ over the entire
parameter space. In most cases when we are dealing with complex
distributions, especially in the context of machine learning, this constant
is non tractable. This is one of the reasons why Bayesian machine
learning is "hard". One of the methods used to estimate this normalizing
constant is using [Monte Carlo Markov Chain](https://en.wikipedia.org/wiki/Markov_chain_Monte_Carlo)
methods to sample from this distribution and estimate the integral.

In the problem we are dealing with, fortunately, $$P(D)$$ is analytically
tractable:

$$
P(D = (x_1, x_2, ...., x_n)) =
\int_{-L}^{x_1} \int_{x_n}^{L} \frac{1}{(b - a)^ n} \space \frac{1}{2 L ^2} \space db \space da
$$

To see how we arrive in this equation, one can observe that
$$P(\theta = (a, b)) = 0 \space\forall\space a > x_1 \vee b < x_n $$ and
and similarly, $$P(D = (x_1, x_2, ...., x_n) | theta = (a, b)) = 0 \space
\forall \space a > x_1 \vee b < x_n$$. Since we've assumed that the samples
(and implicitly, the parameters) are confined by a space of $$-L$$ to $$L$$,
the non-zero probability values of our limits are $$ (-L, x_1) $$ for $$a$$
and $$(x_n, L)$$ for $$b$$.

And we can proceed with integration as follows. The resultant integral is
as follows, I'll leave solving the integral an exercise for the reader.

$$
P(D = (x_1, x_2, ...., x_n)) =
\frac{-1}{(2\space L^2) (n - 1) (n - 2)}
\bigg( \frac{1}{(L - x_1)^{n -2}} + \frac{1}{(x_n + L)^{n-2}}- \frac{1}{L^{n-2}} - \frac{1}{(x_n - x_1)^{n-2}}
\bigg)
$$

I promise the final equation will be less monstrous and contain less terms
than this!

### Applying Bayes Rule

Now that we have all three components required for bayes rule, we can apply
them together to obtain the posterior distribution of $$ (a, b) $$.

Recall that bayes rules is as follows:

$$
P(\theta = (a, b) | D = (x1, x2, ...., xn)) =
  \frac{P(D = (x1, x2, ...., xn) | \theta = (a, b)) \space P(\theta = (a, b))}{P(D = (x1, x2, ...., xn))}
$$

Applying the terms we've obtained above, we'd arrive at the following
equation. I would once again leave out most of the messy maths.

$$

P(\theta = (a, b) | D = (x1, x2, ...., xn)) = \left\{\begin{aligned}

&\frac{\frac{1}{(b - a)^n}}{\frac{-1}{(n - 1) (n - 2)}
\big( \frac{1}{(L - x_1)^{n -2}} + \frac{1}{(x_n + L)^{n-2}}- \frac{1}{L^{n-2}} - \frac{1}{(x_n - x_1)^{n-2}}
\big)
} &&: a < x_1 \space \wedge \space b > x_n \\
\newline
&0 &&: otherwise

\end{aligned}
\right.
$$

## Applying the Limits

Earlier when we are solving this equation, we have constrained the samples
(and implicitly, the parameters) to be in the range $$(-L, L)$$. As it turns
out, to obtain the above posterior distribution of parameters for the entire
space of real numbers, all we need to do is take
$$\lim_{L\to\infty} P(\theta = (a, b) | D = (x1, x2, ...., xn)). $$

Forfunately for us, most of the terms cancel out, and we end up with a nice
simple expression. This is the probability distribution of the parameter
space $$(a, b)$$.

$$

P(\theta = (a, b) | D = (x1, x2, ...., xn)) = \left\{\begin{aligned}

&\frac{(n - 1) (n - 2) (x_n - x_1)^{n-2}}{ (b - a)^n } &&: a < x_1 \space \wedge \space b > x_n \\
\newline
&0 &&: otherwise

\end{aligned}
\right.
$$

And that is the probability distribution of our parameters.

The obvious answer to our original problem is fairly simple - we want to
take the parameters the yield the higher value for
$$P(\theta = (a, b) | D = (x1, x2, ...., xn))$$. Evidently, that's going to
be the distribution with the smallest width (in other words, we want the values of
$$(a, b)$$ such that $$b - a$$ is minimum) which meets the requirement of
$$ a < x_1 \wedge b > x_n $$. It is straightforward arrive at the solution
$$(a, b) = (x_1, x_n)$$, which proves both arguments of the above solution.

## So what now?

But wait? We _do_ have a probability distribution of the parameters, don't
we? This is the primary benefits of bayesian-based model fitting (or
bayesian machine learning). Not only do we get "learnt" parameter values,
you we a distribution over them. In this case, we've obtained a distribution
over all possible values of $$(a, b)$$. As a sanity check, we can make
sure that $$P(\theta = (a, b) | D = (x1, x2, ...., xn))$$ does integrate to
$$1$$. This shall be left as an exercise for the reader.

In the space of parameters with non-zero probability values, we have

$$
P(\theta = (a, b) | D) = \frac{(n - 1) (n - 2) (x_n - x_1)^{n-2}}{ (b - a)^n }
$$

We can rewrite the above probability distribution as the distribution over
the width of the uniform distribution as follows::

$$
P(width | D) = \frac{(n - 1) (n - 2) (x_n - x_1)^{n-2}}{ width^n }
$$

This suggests that the decay probability of width as we increase it from
$$ x_n - x_1 $$ decays at a rate with exponential with respect to $$n$$. This
is somewhat expected, but illustrated the strength of bayesian-based
parameters estimation - we get an idea of how confident we are with our
parameter estimations.

When we searching for the value of $$(a, b)$$ that yields that maximum
posterior probability, we are essentially looking for the mode of the
posterior distribution. What if we consider the mean (the expected value) of
$$(a, b)$$? This can be obtained by solving the integral:

$$
E[a] = \int_{-\infty}^{x_1} a \int_{x_n}^{\infty} \frac{(n - 1) (n - 2) (x_n - x_1)^{n-2}}{ (b - a)^n } \space db \space da
$$

$$
E[b] = \int_{x_n}^{\infty} b \int_{-\infty}^{x_1} \frac{(n - 1) (n - 2) (x_n - x_1)^{n-2}}{ (b - a)^n } \space da \space db
$$

Which will give us the following:

$$
E[a] = x_1 - \frac{x_n - x_1}{n - 3}
$$

$$
E[b] = x_n + \frac{x_n - x_1}{n - 3}
$$

$$
E[b - a] = E[b] - E[a] = x_n - x_1 + 2\space\frac{x_n - x_1}{n - 3}
$$

I find this to be a really nice and intriguing result. Nice because we have
managed to show that in a unbounded sample space, we have the mean width
of the distribution to be proportional to the width of our sample size, and
(somewhat) inversely proportional to the number of samples we have collected.
Intriguing because of the $$n - 3$$ term. From an intuition perspective, I
do not understand why $$n - 3$$ would be the denominator.

To go about the cases where $$n <= 3$$, we will need to account for some
corner cases in integration (Recall that integrating $$\frac{1}{x^n}$$ when
$$n = 1$$ yields $$ln(x)$$).

I'd be interested if anyone can come up with a plausible explanation
for the $$n - 3$$ term below. If you do, please do drop me an email at
`fuyong [at] fyquah.me`.
