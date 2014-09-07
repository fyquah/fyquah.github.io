---
layout: post
title: Distinction Between Computer Science And Software Engineering
subtitle: A major realization requred in the modern year of age

excerpt: Undeniable, both fields do overlap each other. However, they are different fields although not clearly suggested by their names.

---

The last time I actually heard someone said "Computer science if cool! I have just finished learning how to code python from \[ place coding website here \]". My reply was pretty instant:

"Do you know what is graph theory?"

"Oh the theory of plotting quadratic curves and stuff like that?"

That is, imo,  another way of saying no.

***Computer Science is no more about computers than astronomy is about telescopes. — (Mis)attributed to Edsger Dijkstra, 1970. Click <a href="http://en.wikiquote.org/wiki/Computer_science">here</a> to read more.***

At one point (before I seriously started to write code), I was pondering upon this question myself (when applying to universities). Google is cool, but not cool enough. I have always been an example-fan-boy, so let's use those before going to the actual definitions.

I will put questions, and provide (probable) answers from both software engineer answer and computer scientist answer.

# Some notes before reading

It should be good to note two key points before reading on:

* **algorithm** is a step-by-step logical procedure for solving problems
* A computer can run approximately 50 000 000 simple processes (e.g.: 1 + 1) in a single second.

# Example 1 : Sorting Numbers

Given an array / list of numbers, how to sort them?

## Non-engineer / computer scientist

Just look at it and put the small one first and big ones last. If there are 10000 numbers, probably that fellow is going to faint.

## Software engineer

Use the built-in array functions in the programming language. (in other words, features available in the programming language by default)

~~~ruby
# ruby
[3 , 2, 1 , 5, 6 , 20 , 19].sort!
~~~
~~~C++
# C++
int numbers[] = {3,2,1,5,6,20,19}
vector<int> arr(numbers);
sort(arr.begin() , arr.end());
~~~

So what does those methods do? Software engineer is not to concerned, which is perfectly fine! There is no point to be too concerned about how some functions work (although it is a good practice if you are seriously about learning how to code). Most built-in methods in programming languages are efficient (in terms of run-time).

## Amateur Computer Scientist

1. Start from the first number
2. Make a mental note of my current position
3. Iterate through the array (only positions whose index which is strictly larger than current position's index)
4. Swap the number at current position and the position of the smallest number
5. Move one step forward, so current number points at the next number of the array
6. If your current position is >= array size , terminate, as you already finished sorting the array. Else, repeat step 2.

Computer scientist then makes a note:

*This is a O(N^2) algorithm, N is the length of the array*

This is as simple as sorting the array. As a matter of fact, this is exactly what the non engineer / computer scientist is trying to achieve. The major difference is, the amateur computer scientist manages to propose a logical way of solving this problem.

What is the note trying to say? It says that the upper bound of the code runtime is proportional to the square of length of the array using the big-O notation. Don't get it? Click <a href="https://justin.abrah.ms/computer-science/big-o-notation-explained.html">here</a> if you are completely new to computers, <a href="https://justin.abrah.ms/computer-science/big-o-notation-explained.html">here</a> if you are confident of yourself or continue reading if you don't have time to read those lengthy but awesome explanations (I read the wikipedia one).

What the big-O notation is trying to explain is it estimates the run-time of the algorithm. A general rule is to minimze the big-O function's value.

By the way, if you are wondering why I said amateur computer scientist, it is because he is using <a href="http://en.wikipedia.org/wiki/Bubble_sort">bubble sort</a>, which is not the best solution in this case. In this case, it is pretty bad.

Imagine having 1 billion numbers to sort, you have to run approximately (the actual number is around half of this) 100 000 000 000 000 processes. This requires around 10 000 000 seconds (which is some thing like 7.6 years). This is bad, really really bad.

## Computer scientist

Use the quick sort algorithm. (Don't worry if you don't understand this, it is pretty complicated, but not important in this context). The run-time complexity is O(N log N). Note that log here has a base of 2.

If we were to sort the array of numbers mentioned earlier, it would take around 23 seconds, which is much much more acceptable.

# Understanding the difference

You might or might not understand all the technical jargon, but note one thing.

* Software engineer coded the thing, using the best possible way to engineer the solution
* Computer scientist thinks of a logical algorithmatic solution (or more often, solutions) to solve the problem

It might still be quite vague, so here is another example.

## Example 2 : Searching for a number in a sorted list

Now you are given a list of sorted numbers, after carrying out the process in example 1, I can assume it is sorted. Now, your task is to check if the number 10 is in that list.

## Naive method

Look through all the numbers. If it is there, then yes, else no. If there are 100000 numbers, then screw this task.

## Software engineer

There are several built-in functions for me to do this!

~~~C++
int numbers[] = {3,2,1,5,6,20,19}
vector<int> arr(numbers);
sort(arr.begin() , arr.end());
binary_search(arr.begin() , arr.end() , 10);
~~~

~~~ruby
[3 , 2 , 1 , 5 , 6 , 20 , 19].include? 10 # note, this doesn't use binary search
~~~

## Amateur computer scientist

1. Look at the first number
2. If it is the number, then answer YES! and terminate program
3. go to the next number and repeat step 2.
4. Number not found! answer NO! and terminate program.

Computer scientist (once again) wrties a note:

*This is a O(N) solution*

If you had read the above explaination, you should understand O(N) means the run-time of this program is directly proportional to the length of numbers' list. THis means the process will take something like 1 second to look for the number, and this may seem fine. However, let's assume you have 100 numbers to search, that is bad (just imagine Facebook servers having to use 100 seconds to process simply requests).

## Computer scientist

Oh, this is sorted! I will use the *binary search* algorithm. If you are curious

# Example 3 : Extracting data from databases

Now forget about the previous two tasks. Given a database table , find entries whose name is "snowman"

## Naive

Just look, and pick Lol?

## Software engineer

Oh, databases. I probably have to start the database server , go into it and run the necessary commands!

~~~bash
sudo service mysql start # Note that we will be using mysql, just as an example!
mysql -u admin -p
# types password 
mysql> SELECT * FROM name_of_table WHERE name = "snowman"
# output comes here!
~~~

In case you are using something like rails:

~~~bash
rails c
# loads console
2.1.2 > Model_name.where(:name => "snowman")
# output
~~~

It is not important to understand how database works, but software engineers are generally concerned about using the right technologies for the right job. Let's say we change the question a little, now the task is:

"Given a file, find the line which contains the phrase 'name = snowman' "

Let's answer this question using ruby. (don't worry too much about understanding this code)

~~~ruby
contents =  File.open('main.py' , 'r'){ |f| f.read 
selected_lines = []
contents.each_line do |line| { (selected_lines << line) if line =~ "name = snowman" }
puts selected_lines
~~~

Don't worry too much about the technical jargon, once again. All you need to understand, to a software engineer, the way of doing the above two stuff is entirely different.

## Computer scientist

P/S : There is not amateur computer scientist in this section, simply because there is pretty much one straightforward way to solve this problem!

Let's simplify the question in computer science fashion. (computer scientists are very fond of simpifying problems!)

Getting a information from a table is like having a list of table rows. All I need to do is understand the following:

* I have a list of stuff
* I need to check if the stuff fulfills "name = snowman"

So I do the following:

1. Create a new empty list, called collected
2. Look at the first thing in the list
3. If its name is indeed snowman, add that item into collected
4. Repeat step 3 for every thing in the list
5. Eureka! Everything is now in collected!

You guessed it, computer scientist adds a note again.

*This algorithm is O(N) , where N is the number of stuff in the list*

## Note

Now you might be scratching your head, what does the computer scientist's solution have to do with databases? The answer is, it doesn't! Computer scientist found a way to simplify then solve this problem! 

Remember we changed the question a litle for the software engineer (by using files instead of databases)? If we were to pose that question to a computer scientist, he will give you a largely simliar answer. Why? THe logic of both scenarios are exactly the same.

# Example 4 : Code flappy bird!

The title speaks it all!

## Naive fellow

errr... I am lost

## Software Engineer

Sounds like a challenge! I better list down the Application Programming Interfact (API) I need and include them in my code. I have to study how game enginer works!

I need to write some swift (ios) and java(android). God damn, two sets of API to do. Managing the efficiency of game engines is another added issues.

Listing down what i have to do:

* Learn an API for game engine
* Learn API for Java and Swift mobile app development
* Learn how to upload app to playstore
* High score board, better prepare a database for it

Sorry peeps, I don't do mobile app, but you get the rough idea of the software engineer.

## Computer Scientist

Dude, this is like the easiest question ever

1. Fappy bird starts moving!
2. Check the current position of bird
3. Is the current position a pipe? If yes, GAME OVER
4. If it is not a pipe, go to step 2.

Computer scientist has simplified (perhaps, oversimplified) the question with a simple algorithm. However, what we can realize is he in fact "solved" the flappy bird problem.

# After all those examples...

Good job! You have finished reading the really really long explanations! Let's analyze the difference between the two with a summary

1. **sorting numbers** and **searching for number**

**software engineer** : Uses sort method / funtion / feature without concern on technicalities
**computer scientist** : Thinks of a logical solution to actually sort the numbers, step-by-step

2. **Extracting data from database**

**software engineer** : Thinks about establishing connection with database server and execute appropriate database queries.
**computer scientist** : Simplifies the problem to a simply "search" problem

3. **fappy bird**

**software engineer** : Considers all the requried technology to build the app and publishing it to the app market
**computer scientist** : Takes into the logical procedure of the flappy bird games.

Another thing you should note that in the above example is the computer scientist's answer does not invovle a single line of code, simply because it does not matter. To solve any problem, it doesn't matter if you use C++ , Java , ruby, python, haskell etc.. , neither does it matter whether apply object oriented programming or procedural programming. At the end of the day, you solve the problem logically with the algorithm.

The software engineer, however, is more concerned about the actual code and engineering the product / apps. It does matter if you are obtaining the data form a database server or reading from a file, the engineering method is (really really) different. It does matter if you use OOP or procedural, because it determines whether your engineering team can understand your code to ease the project development.

# Actually definitions

## Software Engineering

Software engineering is the study and application of engineering to the design, development, and maintenance of software. In other words, it is almost everything what we think a coder do, from designing to building apps.

## Computer Science.

Computer science is neither computer, nor science. It is problem solving with logical procedures.

# Everyone should learn to code ...

Campigns like this is wild, but at times largely mis-understood. In the words of Mr. Jobs (co-founder of Apple Inc.)

>> Everyone should learn how to code, because it teaches you how to think.

I think what he was trying to say is everyone should learn computer science, because it is that which trains you how to think, not merely writing code.

# My thoughts

While it is cool to write apps, develop market-killing products and understand how a computer is engineered, I am still firm to my stand that learning computer science is way more important than software engineering. Everyone should learn computer science (strictly at a basic level), in order to have an idea to think of solutions. After that, one can move on to pick up software engineering. With a better set of computer science knowledge, by no doubt one can write better code and product more elegant solutions to market demands.

Besides, it is quite a no-brainer that a software engineer with good computer science knowledge can code much faster than his counterpart.

**computer science + software engineering = *awesome developer***

Back to the conversation with that fellow:

"graph theory, is a branch of discrete mathematics, which studies pairwise relation between objects using edges and vertices."

<div class="full zoomable"><img src="/images/yoda-much-to-learn.jpg"></div>

Hopefully, by now, you understand and agree that ***computer science != coding!***