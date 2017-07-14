---
layout: portfolio
title: Portfolio
---

# Education

<div class="image-thumbnail">
    <table>
        <tbody>

{% include portfolio/work-experience.html
      image_url="/images/portfolio/imperial-logo.jpg"
      from="October 2014"
      to="present"
      company="Imperial College London"
      location="London, United Kingdom"
      company_url="https://www.imperial.ac.uk/"
      title="MEng Electronic and Information Engineering"
%}

        </tbody>
    </table>
</div>

# Professional Experience

<div class="container">


{% include portfolio/work-experience.html
      image_url="/images/portfolio/janestreet-logo.png"
      from="April 2017"
      to="present"
      company="Jane Street Capital"
      location="London, United Kingdom"
      company_url="https://www.janestreet.com/"
      title="Software Developer Intern"
      description="
Doing a 6-month placement at Jane Street Europe as part of my degree's requirements
writing primarily OCaml.
"
%}

{% include portfolio/work-experience.html
      image_url="/images/portfolio/google-logo.png"
      from="June 2016"
      to="September 2016"
      company="Google"
      location="Mountain View CA, United States"
      company_url="https://www.google.com/about"
      title="Software Developer Intern"
      description="
      <p>
Worked on <a target='_blank' href='https://www.github.com/google/pytype'>pytype</a>,
a python type inferencer and static analysis tool. My main contribution was deploying
pytype to an internal code review tool to facilitate the company's transtiiton to
typed pattern.
</p>
<p>
My work helped discovered bugs in several projects and was adapted by several
teams, including the python team and
<a target='_blank' href='https://research.google.com/pubs/pub43438.html'>borg</a>
, google's cluster manager.
</p>"
%}

{% include portfolio/work-experience.html
      image_url="/images/portfolio/netcraft-logo.png"
      company="Netcraft"
      from="June 2015"
      to="August 2015"
      location="Bath, United Kingdom"
      company_url="https://www.netcraft.com/"
      title="Internet Services Developer Intern"
      description="
Worked on hosting company classification project, writing tools to partially automate
data classification and aid manual data classification primarily in Perl and PHP.
"
%}
</div>


# Projects

<div class="container">

{% include portfolio/project.html
      image_url="/images/portfolio/basketball.png"
      name="Basketball FRVR Bot"
      when="April 2017"
      description="
<p>
  This bot plays Basketball FFVR, otherwise known as the Facebook messenger
  basketball game, automatically, destroying most human high scores. The bot
  treats the game as a blackbox, essentially playing the game simply by moving
  the mouse as a human would to control the ball's projection.
</p>
<p>
  This little project was created in a skiing trip when I grew frustrated that I
  from not being able to beat my friend in the game, despite trying for over 3 days.
  The gameplay is based on simple physics laws.
  <a target='_blank' href='https://youtu.be/_TRNYrzJhRQ'>
  Click here for a video demo</a>. The source code is available in
  <a target='_blank' href='https://github.com/fyquah95/basketball'>github</a>.
</p>

"
%}

{% include portfolio/project.html
      image_url="/images/portfolio/eurobot.jpg"
      name="Eurobot UK 2017"
      when="January - April 2017"
      description="
<p>
  Along with the Imperial College Robotics Society, I have participated
  in the UK round of Eurobot 2017. I worked on the computer vision, localization
  and motor controller algorithms of the robot. I have also coordinated
  the software development throughout the team.
</p>
"
%}

{% include portfolio/project.html
      image_url="/images/portfolio/c-compiler.png"
      name="Self-Hosting C-Compiler"
      when="January - March 2016"
      description="
<p>
  Along with the Imperial College Robotics Society, I have participated
  in the UK round of Eurobot 2017. I worked on the computer vision, localization
  and motor controller algorithms of the robot. I have also coordinated
  the software development throughout the team.
</p>
"
%}

{% include portfolio/project.html
      image_url="/images/portfolio/ramear.png"
      name="RAMEAR - PennApps Spring 2016"
      when="January 2016"
      description="
<p>
  RAMEAR is a project heavily based on
  <a target='_blank' href='https://www.usenix.org/system/files/conference/usenixsecurity15/sec15-paper-guri-update.pdf'>GSMem (Mordechai Guri et al)</a>
  . This project transmits data from and air-gapped computer (a computer that is
  not connected to the external world via any means, including ethernet,
  bluetooth, wifi etc.) using the memory bus as an antenna. This is achived
  by periodically bombarding the memory bus to denote a HIGH BIT and using
  the average environment noise as a LOW BIT.
</p>

<p>
  I worked on this project with 3 others in PennApps Spring 2016, one of the
  largest student-run hackathon in the the world. Our project won the grand
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
  a fish using a fidality markers and computer vision.
</p>

<p>
  The implemention is based on a combination of OpenCV and chillitags' project
  from EPFL, along with custom statistical anomaly detection and shape fitting
  algorithms.
</p>

<p>
  I worked on this project with two other friends in Fishackathon 2015,
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
  The video was a pure FPGA-based passive autofocus application. The application
  takes a real-time camera feed and adjusts a custom-made focal knob to get a
  a focused image to be. I worked on this project with a coursemate as part of
  our First Year Project. We were awarded the best first year project prize.
</p>

<p>
  We implemented the control flow logic using a C++ based HLS tool and some latency-
  sensitive blocks using verilog. The algorithm is a heruistic search for the peak
  of the graph that maximizes the number of edges in the resultant image.
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
  This was one of my first software-related projects, where I wrote a
  web-based simulation (in addition to simulation in a few other languages)
  of the water-pouring problem to demonstrate Breadth-first search and
  euclid's extended algorithm. This project was used in one of the Malaysia
  Computing Olympiad training camp to demonstrated the mentioned algorithms.
</p>

<p>
  There is a demo
  <a target='_blank' href='http://www.fyquah.me/projects/cups/simulate/'>here</a>
  and the source code is open sourced on
  <a target='_blank' href='https://github.com/yihangho/cups'>github</a>.
</p>
"
%}

</div>
