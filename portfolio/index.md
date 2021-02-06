---
layout: portfolio
title: Projects, Portfolio
---

# Projects

<div class="container">

{% include portfolio/project.html
      image_url="/images/portfolio/solitaire-bot.png"
      name="Messenger Solitaire Bot"
      when="September 2017"
      description="
<p>
  I wrote a bot to play solitaire on messenger. Before you ask -- NO, it does
  not use any form of machine learning.
</p>
<p>
  The core principle of the algorithm is simple. Based on the current state
  (and the current state only), a list of actions with preference is given.
  Execute the one with the highest preference. Keep doing this unil the program
  achieves a fixed point. While it is not guranteed that the program wins
  all games, well designed rules and state space ensure that the execution
  always terminate.
</p>
<p>
  The point of the bot IS NOT to win the game all the time. It is, rather,
  to win enough times to humuliate human scores.
</p>
<p>
  The bot was written in in a mix of Java and C++. Java is used for it's
  genericity with the Robot Class. Most of the image processing and
  all of algorithm is implemented. The bridge between the languages is done
  using JNI.

  <a href='https://www.youtube.com/watch?v=xFNd-foQYrs'>Click here for a demo</a>
  and <a href='https://github.com/fyquah95/messenger-solitaire-bot'>Click here for the source code</a>
</p>"
%}


{% include portfolio/project.html
      image_url="/images/portfolio/basketball.png"
      name="Basketball FRVR Bot"
      when="April 2017"
      description="
<p>
  This bot plays Basketball FFVR, otherwise known as the Facebook messenger
  basketball game, automatically, destroying even the best human high scores.
  The bot treats the game as a blackbox, essentially playing the game simply by
  moving the mouse as a human would to control the ball's projection.
</p>
<p>
  I worked on this project in a ski trip when I grew frustrated
  from the inability to beat my friend's high score (165 points), after trying
  for over three days. The bot's gameplay is based on simple physics laws.
  <a target='_blank' href='https://youtu.be/_TRNYrzJhRQ'>
  Click here for a video demo</a>. The source code is available in
  <a target='_blank' href='https://github.com/fyquah95/basketball'>github</a>.
</p>"
%}

{% include portfolio/project.html
      image_url="/images/portfolio/eurobot.jpg"
      name="Eurobot UK 2017"
      when="January - April 2017"
      description="
<p>
  Along with the Imperial College Robotics Society, I have participated
  in the UK round of Eurobot 2017. I worked on the computer vision, localization
  and motor controller algorithms of the robot.
</p>
"
%}

{% include portfolio/project.html
      image_url="/images/portfolio/c-compiler.png"
      name="Self-Hosting C-Compiler"
      when="January - March 2016"
      description="
<p>
  I wrote a C-compiler, from scratch, in C, targeting the MIPS 1 architecture.
  My compiler supported a turing-complete subset of C operations, namely:
</p>

<ul>
  <li>BODMAS arithmetic operations</li>
  <li>if-else, switch statements</li>
  <li>Function calls</li>
  <li>Goto</li>
  <li>For loops, While loops, Do-while loops</li>
  <li>Whie loops</li>
</ul>
"
%}

{% include portfolio/project.html
      image_url="/images/portfolio/ramear.png"
      name="RAMEAR - PennApps Spring 2016"
      when="January 2016"
      description="
<p>
  RAMEAR is a project heavily based on
  <a target='_blank' href='https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-guri-update.pdf'>
  GSMem [Mordechai Guri et al]</a>
  . In this project, we program an air-gapped computer (a computer that is
  not connected to the external world via any means, including ethernet,
  bluetooth, wifi etc.) using the memory bus as an antenna, to transmit
  data to a signal receiver. This is achieved by periodically bombarding
  the memory bus to denote a HIGH BIT and using the average environment
  noise as a LOW BIT.
</p>

<p>
  I worked on this project with 3 others in PennApps Spring 2016, one of the
  largest student-run hackathon in the world. Our project won the grand
  prize in the hackathon.
</p>

<p>
  <a target='_blank' href='https://youtu.be/UGVrB8IdINo?t=12m36s'>
  Click here for a video presentation of the project
  </a>
  and <a target='_blank' href='https://github.com/fyquah95/ramear'>here for the source code.</a>
</p>
"
%}


{% include portfolio/project.html
      image_url="/images/portfolio/fishotron.png"
      name="Fishotron - Fishackathon 2015"
      when="June 2015"
      description="
<p>
  Fishotron is a computer-vision based application that measures the size of
  a fish using chilli tags and a mobile phone.
</p>

<p>
  The implemention is based on a combination of OpenCV and chillitags' project
  from EPFL, along with custom statistical anomaly detection and shape fitting
  algorithms.
</p>

<p>
  I worked on this project with <a href='http://hr.tl/'>Tom Hartley</a> in Fishackathon 2015,
  sponsored by the State Department of the United States. Our project won the
  global hackathon organized in over 10 cities throughout the world.
</p>

<p>
  <a target='_blank' href='https://www.youtube.com/watch?v=m8-p4rInMZo'>
  Click here for a video presentation of the project
  </a>
</p>
"
%}

{% include portfolio/project.html
      image_url="/images/portfolio/fpga-passive-autofocus.png"
      name="FPGA Passive Autofocus"
      when="June 2015"
      description="
<p>
  The application takes a real-time camera feed and adjusts a custom-made
  focal knob to get a a focused image to be. The video was a pure
  FPGA-based passive autofocus application.
  The control flow logic was implemented using a C++ based HLS tool and some
  latency-sensitive blocks using verilog. The algorithm is a heuristic search
  for the peak of the graph that maximizes the number of edges in the resultant
  image.
</p>


<p>
 I worked on this project with a coursemate as part of
  our First Year Project. We were awarded the best first year project prize.
  </p>

<p>
  We have a
  <a target='_blank' href='https://www.youtube.com/watch?v=UJXkHhFQPak'>
  video demo of the application</a>
  and open sourced our source code on
  <a target='_blank' href='https://github.com/fyquah95/FPGA-passive-autofocus'>github</a>.
</p>
"
%}


{% include portfolio/project.html
      image_url="/images/portfolio/cups.png"
      name="Water Pouring Problem Simulation"
      when="August 2014"
      description="
<p>
  I worked on a web-based simulation (in addition to simulation in a
  few other languages) of the water-pouring problem to demonstrate
  Breadth-first search and euclid's extended algorithm.
  This project was used in one of the Malaysia Computing Olympiad training
  camp to demonstrated the mentioned algorithms.
</p>

<p>
  <a target='_blank' href='http://www.fyquah.me/projects/cups/simulate/'>
  Click here to view the project</a>. The code
  <a target='_blank' href='https://github.com/yihangho/cups'>
  source code is open sourced on github</a>.
</p>
"
%}

</div>
