---
layout: post
title: Cup Pouring Problem
subtitle: "Getting a volume of water using some cups with computer science"

excerpt: "A classical computer science problem, exhibiting the strength of a simple graph searching technique"

---

Given two cups , with known volumes and an infinite supply of water. Is it possible to get a stated third volume by pouring, filling and emptying operations? If so , how? 

It sounds simple and difficult at the same time. Simple as you can simply evaluate a possibilities, difficult as you might reevaluate a condition again with <strong>brute force</strong> (trying all conditions) techniques.

To clarify, there are six operations available (there are two ways to do the operations below)
* Empty a cup
* Fill a cup
* Pour water from a cup to another

<strong>An example</strong> - we have two cups with volumes <em>9 units</em> and <em>4 units</em> respectively and we are trying to obtain a volume of <em>2 units</em>. 

In case you are not clear , you can try some operations:
* If you fill up the first cup, you will have (9 , 0)
* Then fill up the second cup, you will have (9 , 4)
* Then empty the second cup, you now have (9 , 0)
* Pour waterr from the first cup to the second cup, it becomes (5 , 4)

Read the above paragraph until you understand what is going on.

Now, let's try solving this problem by hand.
* <strong>(0 , 0)</strong> - We start with two empty cups
* <strong>(9 , 0)</strong> - We fill up the first cup with water
* <strong>(5 , 4)</strong> - We pour water from the first cup into the second cup
* <strong>(5 , 0)</strong> - We empty the second cup
* <strong>(1 , 4)</strong> - We pour water from the first cup into the second cup
* <strong>(1 , 0)</strong> - We empty the second cup
* <strong>(0 , 1)</strong> - We pour water from the first cup into the second cup
* <strong>(9 , 1)</strong> - We fill up the first cup with water
* <strong>(6 , 4)</strong> - We pour water from the first cup into the second cup
* <strong>(6 , 0)</strong> - We empty the second cup
* <strong>(4 , 2)</strong> - We pour water from the first cup into the second cup

Eureka! (Literally, as this was what <a href="http://en.wikipedia.org/wiki/Archimedes'_principle" target="_blank">archimedes discovered</a> when he was dealng with waters too). We managed to get 2 units of water in <strong>10 steps</strong>. For small volumes like this, it is always easy to calculate the solution. But what if I were to give you really odd values like 101ml and 79ml to form 2ml? You probably can't and won't do it by hand. <em>(In case you are curious, it is feasible, 162 steps)</em>

Here are the problems with attempting this problem by hand:
* <strong>Too many possibilities</strong> - by doing one of the operations, and doing another one subsequently , some simple multiplication shows that there are a lot of possiblities
* <strong>Hard (if not unable) to trace revisited conditions</strong> - by using a computer, you can easily trace a condition with O(log N) (O(1) if you are using arrays ) using the heap data structure. By hand? good luck.
* <strong>Mindfuck</strong> - You would probably go mad before getting a solution. In the example above, we were lucky to get the correct answer on the first try. (My brother who doesn't do computer science used something like 10 minutes, my computer took less than 0.01 seconds)

Exactly why a computer can solve the problem is inverse to those above
* Too many possibilities don't exist in computer science (unless you are speacking something like a googol)
* Data structures to easily and quickly check visited conditions
* Computer don't have emotions (hence, won't get mind-fuck)

To solve this problem, if you are familiar with computer science and graphs, all needed is a simple Breadth First Search technique and terminate search if we reach a familiar condition. Why? Try thinking about it :)

If you are not, try thinking this way:

<p>
    <ol>
        <li>You start with two empty cups</li>
        <li>Is the current state the (one of the volume of the cups fulfills the target volume) intended state? If positive, go to step 6. If not, move to next step</li>
        <li>Have you visited the state before? If positive , do not try to evaluate the state and try the next state in the list</li>
        <li>Try every of the six operations. Check if the state was visited before. If positive, don't evaluate the state. Else , make a memo that you will evaluate the state in the future</li>
        <li>Go to step 2</li>
        <li>Wohoo you are done!</li>
    </ol>
</p>

If you are not convivned it will work, try drawing diagrams. My friends and I (for the sake of fun) have assembled a project to solve this problems in several programming languages, including a simulation in the web browswer.

The project is <a href='https://github.com/yihangho/cups' target='_blank'>open source</a> in github, started by a friend of mine. I contributed smoe of the languages' algorithms (basically they are the same BFS, implemented differently)

As said, the simulation is <a href='/cup-pouring-problem/simulation/'>here</a>
