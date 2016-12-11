---
layout: post
title: Youtube View Problem
subtitle: A surprising fact of youtube Views figures
category: eng

excerpt: It is common to know that youtube views are distributed normally. But what would happen if you plot a graph of the frequency of the first digit of numbers?

---

I shall assume you (yeah, you the reader) knows what is <a href="https://www.youtube.com/">Youtube</a>.

<div class="full zoomable"><img src="http://img4.wikia.nocookie.net/__cb20131129191833/wiisportsresortwalkthrough/images/f/f5/YouTube-Transparent-Logo.png"></div>

Have you noticed that a large majority of the "number of views" of videos start with the digit 1 ? If you haven't, go do a quick survey now. You will realise the fact surprisingly holds without fail. 

# Benford's Law

Benford's Law, also called the First-Digit Law, refers to the frequency distribution of digits in many (but not all) real-life sources of data. Read more about it at <a href="http://en.wikipedia.org/wiki/Benford%27s_law">wikipedia</a>.

The law states the following (Digit followed by frequency of occurence)

* <strong>1</strong> -> 30.1%	 
* <strong>2</strong> -> 17.6%	 
* <strong>3</strong> -> 12.5%	 
* <strong>4</strong> -> 9.7%	 
* <strong>5</strong> -> 7.9%	 
* <strong>6</strong> -> 6.7%	 
* <strong>7</strong> -> 5.8%	 
* <strong>8</strong> -> 5.1%	 
* <strong>9</strong> -> 4.6%	

The shape of the curve is simliar to those of the normal distribution curve. I will be using youtube videos views to study the validity of this claim in terms of video views. 

# Youtube Videos Views Study

Now that you have a brief introduction about benford's law, I wish to test it on video views. I will use Youtube as a data-model as it is ubiqutous. So we will have some number of videos, and some number of views. Each view will go to a video and a video will have a number of views. 

The question is

<strong><em>Will the percentage distribution of the first digit of number of views of videos agree with Benford's Law ?</em></strong>

## Some mathematical variables

N = the number of videos in YouTube

V = the total number of video views in YouTube

## Assumptions

As this is a mere mathematical model, there are several pretty logical assumptions we should make during this test:

* The probability for a video to double (or triple, quadriple, just simply multiplied by an arbitary k) is directly proportional to the number of views it currently has. This assumption is pretty valid 

* Every video start with one view. Again, logical as the uploader probably has to view the video first to stimulate some "view traffic"

* The views are allocated based on a weighted random algorithm

## Carrying out the test

I have written the test in ruby and it is available <a href="https://gist.github.com/fyquah95/a0b2b45ce5a8ea5a04bb">here at gist/github</a> . A probably better implementation is to use a fenwick tree to record the Range sum, but the current method will do for a small experiment. This is further supported by the fact that a value of N >= 30 and V >= 30 will produce pretty decent normal approximations.

The steps are as follows:

1. All videos start with 1 view
2. All videos start with equal probability of being picked.
3. Randomly pick a video based on their probabilities.
4. Increase the number of view of the video by 1
5. Increase the probability of the video accordingly
6. Repeat steps 3 to 5 V times
7. Record the statistics (how many views have 1 as the first digit, how many have 2 etc. )

## Results of Study

It turns out that this approximation model largely agrees with Benford's law.

I tried N = 1000 and V = 100000 and got the following results:

* no videos have no views
* 334 (33.4%) videos have 1 as the first digit
* 145 (14.5%) videos have 2 as the first digit
* 118 (11.8%) videos have 3 as the first digit
* 93 (9.3%) videos have 4 as the first digit
* 67 (6.7%) videos have 5 as the first digit
* 65 (6.5%) videos have 6 as the first digit
* 61 (6.1%) videos have 7 as the first digit
* 54 (5.4%) videos have 8 as the first digit
* 63 (6.3%) videos have 9 as the first digit

Here is a comparison table of the both the observed frequency and the expected frequency:

<table>
  <tr>
    <td><strong>Expected percentage </strong></td>
    <td><strong>Observed percentages </strong></td>
  </tr>
  <tr>
  	<td>30.1%</td>
  	<td>33.4%</td>
  </tr>
  <tr>
  	<td>17.6%</td>
  	<td>14.5%</td>
  </tr>
  <tr>
  	<td>12.5%</td>
  	<td>11.8%</td>
  </tr>
  <tr>
  	<td>9.7%</td>
  	<td>9.3%</td>
  </tr>
  <tr>
  	<td>7.9%</td>
  	<td>6.7%</td>
  </tr>
  <tr>
  	<td>6.7%</td>
  	<td>6.5%</td>
  </tr>
  <tr>
  	<td>5.8%</td>
  	<td>6.1%</td>
  </tr>
  <tr>
  	<td>5.1%</td>
  	<td>5.4%</td>
  </tr>
  <tr>
  	<td>4.6%</td>
  	<td>6.3%</td>
  </tr>
</table>

The value of N is 1000, and if you were to carry out a chi-squared test, the value you will get is 18.13 while the degree of freedom is 8. Hence, the hypothesis can be accepted at 1% significance level.

## Conclusion

The tests made, while fit the hypothesis at 1% significance level, could be further by other means. Due to the limitation of the algorithm provided, large numbers of N and V cannot be provided (see below at mathematics notes for usage of larger N and V).

Nevertheless, as N and V both approaches infinity (with V strictly larger than N significantly), it can be shown that this argument holds as long as the logical assumptions do apply. Hence, hoorary! Data source which are consistent with Benford's Law now include Youtube video views!

# Mathematics notes

## Why no videos will end up with only 1 view (under ideal conditions)

You may be tempted to think that the probability of being picked will be low when all other videos are picked. However, mathematics say otherwise. Every round, the probability of a video which was not picked before being chosen is <strong> 1 /(N+v) </strong> , where v is the number of views that have been allocated up to date. So with some simple math, we can conclude that the probability of a video being chosen is:

1 / N + 1 / (N+1) + 1 / (N+2) ....

This is a harmonic sequence, and it is divergent (really slowly), and that is a pretty good conclusion about every video.

## Proving that the probability is proportional to the number of views

## Complexity of Algorithm:

It is definitely not the best algorithm, but anyway.. :

* Precomputing the videos to have 1 view is O(N)
* Randomly picking a video is O(log N)
* Re-assigning probability after increaseing view is O(N)
* Computing statistics is O(N)

Final complexity: O(N + V(log N + N) )

This limits N and V to be around 1000 and 10000 respectively

## A better algorithm: 

A better solution by using Fenwick tree as the cumulative frequency container (used by the weighted random algorithm) would give a healthier complexity:

* Precomputing the videos to have 1 view is O(N)
* Randomly picking a video is O(log N * log N) because you need to binary search a fenwick tree
* Re-assigning probability after increaseing view is O(log N)
* Computing statistics is O(N)

Final complexity: O(N + V log N(1 + log N) )

The limits of N and V can be around 1000 and 1000000 respectively
