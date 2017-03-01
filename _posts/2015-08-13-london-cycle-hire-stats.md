---
layout: post
title: Some (Interesting) Statistic on London Cycle Hires
subtitle: 
category: eng

excerpt: 

---

Disclaimer: I have _never_ cycled in London.

Let's try to use a very small data set ( the number of cycle hire every day 
since 2010 from [TFL](http://data.london.gov.uk/dataset/number-bicycle-hires/resource/ac29363e-e0cb-47cc-a97a-e216d900a6b0) ) to find some trends about cycle-hiring
in London.

# Primary Data 

<div class="full zoomable"><img src="/images/london-cycle-hire/basic-time-series.png"></div>

We can observe a similiar concave-like trend every year. 
The number of cycle hires increases gradually from January to May, 
remains faily constant till September, and decreases till December.

The total number of hires is gradually increasing from 2011 to 2014, with a 
drop from 2012 to 2013.

<table class="table">
    <tbody>
        <tr>
            <td>2011</td>
            <td>7,142,449</td>
        </tr>
        <tr>
            <td>2012</td>
            <td>9,519,283</td>
        </tr>
        <tr>
            <td>2013</td>
            <td>8,045,459</td>
        </tr>
        <tr>
            <td>2014</td>
            <td>10,023,897</td>
        </tr>
        <tr>
            <td>2015 (up to July)</td>
            <td>5,747,362</td>
        </tr>
    </tbody>
</table>

Aside from that, the signal obtained from this data seems like random fluctuations / 
noise that does not exhibit any interesting local patterns (aside from a very large peak 
in July 2015). Hence, let's try deriving some secondary data!

# Secondary Data

I have calculated the proportion of hires in a day-of-week (eg: Monday, Tuesday) over the last 5 years.
For example, if there are a total of 100 bicycle hires at the week starting 5 July 
2010 and there are 20 hires on Monday, the value of Monday for the week 
starting 5 July 2010 will be assigned a value of 0.20. In case you still do not
understand what proportion in our context mean, please refer the [appendix](#appendix).

Interestingly, this simple data transformation seems to present us some additional
information:

<div class="full zoomable"><img src="/images/london-cycle-hire/by-day.png"></div>

Here are the _average proportions_ by _day of week_  over the last 5 years:

<table class="table">
    <thead>
        <th>Day of Week</th>
        <th>Average Proportion</th>
    </thead>
    <tbody>
        <tr>
            <td>Sunday</td>
            <td>0.1115</td>
        </tr>
        <tr>
            <td>Monday</td>
            <td>0.14389</td>
        </tr>
        <tr>
            <td>Wednesday</td>
            <td>0.159627</td>
        </tr>
        <tr>
            <td>Thursday</td>
            <td>0.157135</td>
        </tr>
        <tr>
            <td>Friday</td>
            <td>0.15016</td>
        </tr>
        <tr>
            <td>Saturday</td>
            <td>0.12195</td>
        </tr>
    </tbody>
</table>

The average proportion of hires on weekends (0.116725) is 
noticable lower than (0.1533), a difference of approximately 27%.

The following is the varience and average deviation (note, not standard deviation to
prevent numerical problems) of the above entries:

<table class="table">
    <thead>
        <th>Day of Week</th>
        <th>Varience</th>
        <th>Average deviation</th>
    </thead>
    <tbody>
        <tr>
            <td>Sunday</td>
            <td>0.0010001</td>
            <td>0.02439</td>
        </tr>
        <tr>
            <td>Monday</td>
            <td>0.0006385</td>
            <td>0.01820</td>
        </tr>
        <tr>
            <td>Tuesday</td>
            <td>0.0005254</td>
            <td>0.01585</td>
        </tr>
        <tr>
            <td>Wednesday</td>
            <td>0.0005739</td>
            <td>0.01546</td>
        </tr>
        <tr>
            <td>Thursday</td>
            <td>0.0006224</td>
            <td>0.01662</td>
        </tr>
        <tr>
            <td>Friday</td>
            <td>0.0005045</td>
            <td>0.01686</td>
        </tr>
        <tr>
            <td>Saturday</td>
            <td>0.0008424</td>
            <td>0.02288</td>
        </tr>
    </tbody>
</table>

The varience in proportion of hires on weekends (0.00092127) is
much higher than those of weekdays (0.0005730) 46.61%.

Over the course of 260 weeks, there are approximately 13 significant peaks / 
statistical outliers. I will leave finding them a challenge for the readers.

## Interpreting the Statistics 

The following section will be _biased_ towards how I interpret the statitstics 
above. 

Based on the timeseries graph above, Londoners prefer not to cycle when the 
**weather** is cold, especially during winter. 

The number of cyclists over the course of 4 years (2011 - 2014) is gradually increasing. 
The slight drop in 2013 might be due to air pollitions problems (ref: [airqualitynews](http://www.airqualitynews.com/2013/01/11/london-areas-already-exceeding-2013-legal-air-pollution-limits/) ). \[ You probably won't agree with this if you are a Londoner, because air pollution simply became worse in the following year , read on more a better argument! \].

<div class="full zoomable"><img src="/images/london-cycle-hire/basic-time-series-concave.png"></div>

The average proportion on weekends are significantly lower than those on the
weekdays. This suggest that the borus bikes are indeed hired as a mean of 
transport by the general populus. (This might sound obvious, but in some 
places (eg: my hometown, [Penang, Malaysia](https://www.google.co.uk/?gfe_rd=cr&ei=pYXOVeujNKzj8weur4jQAQ&gws_rd=ssl#q=penang)) there are specialized public
transports for tourists).

An interesting little observation can be made from the average deviation. 
A much higher average deviaion suggest that cycle hiring on weekends a more
likely for **non-recurring purposes** (eg: meeting a friend for coffee). 

Throughout the years, a proportion peak is observed during Christmas. 
This is probably due to the *closure of tube stations*.
In 2011 and 2013 (i.e. Christmas is in 2011, so by 2011 i mean end of 2011), 
the maximum peak at Christmas is followed by a minimum peak 
on new year. In other years, the cycle hires at New Year is near the week's 
average. This may suggest that the populus prefer _not_ to cycle during the festive
season or holidays whenever possible. This in turn explains the size of the 
small peak during Christmas, despite the tube closure. (Although a more proper
argument is Londoners prefer not to travel during holidays, we can't draw 
that conclusion without referring to data from other forms of transportation).

<div class="full zoomable"><img src="/images/london-cycle-hire/timeseries-christmas-2012-up-close.png" /></div>
<p style="text-align : center">A small peak during christmas</p>

There is a very large peak in 9 July 2015. It turns out that 
the London Underground was suffering from one of
the worst **tube strikes** in years (ref: <a target="_blank" 
href="http://www.bbc.co.uk/news/uk-33438700">BBC News</a>). In fact, the 
highest number of cycle over the last five years was achieved that day (see 
timeseries graph below) at 73094 hires, more than three times the average
over the last 5 years (23336.57 hires / day)!. There is a high chance that 
a high proportion of the 73094 hires are first timers. My argument will 
follow shortly.

<div class="full zoomable"><img src="/images/london-cycle-hire/highlight-big-strike.png" /></div>
<p style="text-align : center">A large peak due to tube strike</p>

Similiarly, the closure on 28 November 2010 is due to a less severe tube strike 
(ref: <a href="http://www.bbc.co.uk/news/uk-england-london-11860210">
BBC News</a>). As consequences of it was much more insignificant than that in July 2015, the peak is less sharp. It may also be coupled by the fact that people 
prefer taking longer tube routes than cycle when the winter approaches.

<div class="full zoomable"><img src="/images/london-cycle-hire/highlight-tube-strike.png" /></div>
<p style="text-align : center">A tube strike in 28 November 2010 also featured a peak, but it's much smaller than those of 9 July 2015</p>

Furthermore, [@tmhrtly](https://twitter.com/tmhrtly) also suggested that before 3 December 2010,
resgistration is required prior to cycle hiring (ref: 
http://road.cc/content/news/27682-barclays-cycle-hire-scheme-opens-non-members-next-friday). 

Comparing the two tube strikes (2015 vs 2010):

Cycle hiring required prior registration in 2010. This prevents people from simply
rolling up to a bike by the road without previously registering.

Besides that, another implicit factor is technology. Smartphones are not as 
widespread in 2010, preventing people from getting first hand information about
tube strikes and hence, planning journeys in advance efficiently.

(I'd take this opportunity to appreciate how much technology has changed
in just 5 years!)

## Conclusion?

From interpreting the data, with some biased subjective opinions: 

Londoners cycle primarily when: (In the order of significance)

* **Tube strikes** occur ( causes sudden peaks in the proportion graph )
* They need to get to **work** ( more cycle hires on weekdays than weekends )

Londoners adjust their cycling schedules based on the **weather**, prefering not to
cycle during winter. ( more cycle hires on summer than winter )

Londoners prefer not to cycle during holidays. Occasionally (inpredictable how often), Londoners 
prefer to hire cycle for **non-recurring visits**. ( the higher average deviation during weekends )

Londoners will prefer to cycle during a **scheduled closures**, but the effect
is much less significant than tube strikes. ( trends in christmas and new year )

EDIT : It doesn't end here, read the follow up section below!

## Edit: A Little Follow Up

After sharing this article at 
[reddit](https://www.reddit.com/r/london/comments/3gyfk7/some_interesting_statistics_of_cycle_hires_in/) , 
I have got some pretty interesting feedback and suggestions. I did some extra
research on the data and here is what I have found:

### Summer Olympics 2012

Firstly, thanks [/u/greymutt](https://www.reddit.com/r/london/comments/3gyfk7/some_interesting_statistics_of_cycle_hires_in/cu2ltnt) for pointing
out Summer Olympics in Summer 2012. Somehow, it has completely slipped through
my eye.

The summer olympics does have some impact on the july-august data.

<table class="table">
    <thead>
        <th>Year</th>
        <th>July Hires</th>
        <th>August Hires</th>
        <th>Difference</th>
        <th>Percentage change</th>
    </thead>
    <tbody>
        <tr>
            <td>2011</td>
            <td>708454</td>
            <td>642440</td>
            <td>-66014</td>
            <td>-9.31803%</td>
        </tr>
        <tr>
            <td><b>2012</b></td>
            <td><b>1014174</b></td>
            <td><b>1163171</b></td>
            <td><b>148997</b></td>
            <td><b>14.691%</b></td>
        </tr>
        <tr>
            <td>2013</td>
            <td>998755</td>
            <td>904155</td>
            <td>-94600</td>
            <td>-9.471%</td>
        </tr>
        <tr>
            <td>2014</td>
            <td>1183182</td>
            <td>1055206</td>
            <td>-127976</td>
            <td>-10.816%</td>
        </tr>
    </tbody>
</table>

_NB: I dropped 2010 and 2015, because they lacked July and August data respectively_

In the other years, the number of hires dropped from July to August consistently 
by approximately 10% every year but 2012. (I find the consistency rather intriguing;
ping me [@fyquah95](https://twitter.com/fyquah95) if you know why).
The summer olympics took place in August 2012, which saw a rise in the number of
hires from July to August of 14.691%.

### Studying the upward trend

While I have mentioned that there is an upward trend, there seem to be an sudden
surge in 2012. The graph below shall graph a little more context:

<div class="full zoomable"><img src="/images/london-cycle-hire/basic-time-series-with-upward-trend-annomaly.png" /></div>

Although there is an upward trend, we can observe a large surge in Summer 2012
(especially August). 

To save you from time from scrolling up, here is the annual total number of cycle
hires again:

<table class="table">
    <tbody>
        <tr>
            <td>2011</td>
            <td>7,142,449</td>
        </tr>
        <tr>
            <td>2012</td>
            <td>9,519,283</td>
        </tr>
        <tr>
            <td>2013</td>
            <td>8,045,459</td>
        </tr>
        <tr>
            <td>2014</td>
            <td>10,023,897</td>
        </tr>
    </tbody>
</table>

I initially argued that the disruption of a upward trend was caused by the surge
in Summer 2012 due to the olympics. It turns out that I might be right, but only
partially.

Let's make an assumption : assuming we hypothetically remove all the cycle hires 
during both the summer olympics and paralympics. The numbers are 642,000 and 442,000
respectively (ref: [House of Commons](http://researchbriefings.files.parliament.uk/documents/SN03722/SN03722.pdf)) which sums up to 1,084,000.

_NB: Of course, this assumes that noone are hiring cycles during the olympics, which
is of course a wrong claim. However, it should be a reasonably good estimate,
factoring the traffic caused by the the pre/posts-olympic events._

Substract that number from the current table, we get:

<table class="table">
    <tbody>
        <tr>
            <td>2011</td>
            <td>7,142,449</td>
        </tr>
        <tr>
            <td>2012</td>
            <td>8,435,283</td>
        </tr>
        <tr>
            <td>2013</td>
            <td>8,045,459</td>
        </tr>
        <tr>
            <td>2014</td>
            <td>10,023,897</td>
        </tr>
    </tbody>
</table>

There is something fishy about the upwards trend. A safe assumption of an upward 
trend would be somewhere between 8,006,889 to 8,198,979. I calculated the range 
via:

~~~lisp
(+- (+ (/ (- 10023897 7142449) 3) 712449) 0.1)
~~~

Or, in more familiar mathematical notations:

~~~javascript
delta = (10023897-7142449) / 3;
lowerbound = 7142449 + 0.9 * delta;
upperbound = 7142449 + 1.1 * delta;
~~~

The best possible explainations for the 2012 number I can think of are:

* officials / workers visiting London to prepare for the Olympics before the event
* some players staying in London after the tournament
* tourists visiting the olympic stadiums

My above explainations are based on the fact that the higher number of cycle-hires
are pretty evenly distributed throghout the year. Here are the data from 
randomly chosen months of the year:

<div class="full zoomable"><img src="/images/london-cycle-hire/jan.png"></div>
<div class="full zoomable"><img src="/images/london-cycle-hire/apr.png"></div>
<div class="full zoomable"><img src="/images/london-cycle-hire/oct.png"></div>

_From 2011 to 2012, these months, 3 of which are not associated to the Olympics, has shown increase in number of hires_

You can see data of the other months (though I feel it is probably not necessary)
here:

* [all months](/images/london-cycle-hire/all-months.png)
* [January](/images/london-cycle-hire/jan.png)
* [February](/images/london-cycle-hire/feb.png)
* [March](/images/london-cycle-hire/mac.png)
* [April](/images/london-cycle-hire/apr.png)
* [May](/images/london-cycle-hire/may.png)
* [June](/images/london-cycle-hire/jun.png)
* [July](/images/london-cycle-hire/jul.png)
* [August](/images/london-cycle-hire/aug.png)
* [September](/images/london-cycle-hire/sep.png)
* [October](/images/london-cycle-hire/oct.png)
* [November](/images/london-cycle-hire/nov.png)
* [December](/images/london-cycle-hire/dec.png)

The Summer olympics has answered part of the question. 

What happened in 2013? Why did most months show a decrease in cycle hires?

_NB: most means 10 out of 12, including two of the olympic months. Even if
we remove those two, 8 out of 12 is a fairly large portion of the year_

We see a decrease from 9,519,283 to 8,045,459. I did argue that an air pollution
warning might the reason for the sharp decrease, but that argument might be invalid
- air pollution simply worsen in 2014.

[/u/matstace](https://www.reddit.com/user/matstace) pointed out (in the reddit 
post) that the borus bike double there access charges at New Year 2013, due to
inflation (ref: 
[standard.co.uk](http://www.standard.co.uk/news/transport/boris-bike-charges-to-double-in-inflation-busting-travel-fares-hike-8293591.html)).

Initially, I suspected the number of Borris Bike usage will decrease to a minimum 
peak for the week at New Year 2013. It turns out the claim was invalid:

<div class="full zoomable"><img src="/images/london-cycle-hire/new-year-no-peak.png"></div>

__The Proportion chart, zoomed in to the week starting 30 December 2012. New Years' day is the green line on the week starting 30 Dec 2012__

<div class="full zoomable"><img src="/images/london-cycle-hire/new-year-no-peak-2.png"></div>

Instead of doing a one-day protest on the price change, Londoners simply started
usingh the bikes less frequently over the course of the year. Londoners might have opted
for purchasing their own bikes in response to the price increase (In my opinion
that's probably the most rational course of action, both emotionally and 
mathematically). Since we do not have (and are not going to) use such data, 
we will not explore it further.

## Free Access Weekend

[/u/FrancisField](https://www.reddit.com/r/london/comments/3gyfk7/some_interesting_statistics_of_cycle_hires_in/cu2wbnt) suggested that there 
are dates where the borrus bikes are free for access. Logically, I'd expect those
dates to be during winter, simply because people are less likely to cycle.

I tried looking for the proportions graph for a maximum peak and found it with some
effort. 

<div class="zoomable">
    <img src="/images/london-cycle-hire/free-ride-scheme-highlight.png" />
</div>

__Notice the (rather small) pale red peak__

At first glance, this peak doesn't seem peaky enough to qualify as one. However, if
you remember the proportion table from one of the sections above:

<table class="table">
    <tbody>
        <tr>
            <td>Sunday</td>
            <td>0.1115</td>
        </tr>
        <tr>
            <td>Monday</td>
            <td>0.14389</td>
        </tr>
        <tr>
            <td>Wednesday</td>
            <td>0.159627</td>
        </tr>
        <tr>
            <td>Thursday</td>
            <td>0.157135</td>
        </tr>
        <tr>
            <td>Friday</td>
            <td>0.15016</td>
        </tr>
        <tr>
            <td>Saturday</td>
            <td>0.12195</td>
        </tr>
    </tbody>
</table>

This peak we have here falls on a weekend. By default, most people are less
likely to cycle on weekends. The introduction of a free access scheme will increase
the number of cycle-hires, but the proportion difference will not be as noticable
as doing such on weekdays.

<div class="full zoomable">
    <img src="/images/london-cycle-hire/free-ride-scheme.png" />
</div>

The peak was due to a free acess weekend on the 16-17 August 2014. (ref: [TFL](https://tfl.gov.uk/info-for/media/press-releases/2014/august/barclays-cycle-hire-free-to-all-this-weeke))

# Wrapping Up

Thanks for spending time reading this little data analysis. I have published the
code I have used for analysis on [github](https://github.com/fyquah95/london-cycle-hire-visualization). 

However, I wish to clarrify that my statistical reasonings above are very less related to the code - The code simply 
aids my data visualization.

That's it for now folks! 

<div id="appendix"></div>

## Appendix: Understanding the Week Proportion Transformation

This is best explain by an example:

Assume on the week starting 1 June 2012, and we have the number of hires as follows:

Day of Week | Number of hires

* Sunday  **1**
* Monday  **2**
* Tuesday  **3**
* Wednesday **4**
* Thursday  **5**
* Friday **6**
* Saturday  **7**

The total number of hires of the week is `1 + 2 + 3 + 4 + 5 + 6 + 7 = 28`. We will have the following values on the line chart:

* Sunday    **0.0357 (1 / 28)**
* Monday    **0.0714 (2 / 28)**
* Tuesday   **0.1071 (3 / 28)**
* Wednesday **0.1423 (4 / 28)**
* Thursday  **0.17857 (5 / 28)**
* Friday    **0.2142 (6 / 28)**
* Saturday  **0.25 (7 / 28)**

Using such proportion patterns, we can capture "micro-patterns", at the expense
of information about the general trend of the data. In other words, we can capture
local trends within a small time frame which are hardly noticable by looking at
the original graph.

To illustrate this claim, consider Christmas 2011 / New Year 2012:

<div class="full zoomable"><img src="/images/london-cycle-hire/timeseries-christmas-2012-up-close.png"></div>

Even up close, a peak might be dismissed simply as a random fluctuation in the case of time series data. From a larger scale, it is simply impossible to notice the existence of this peak.

<div class="full zoomable"><img src="/images/london-cycle-hire/timeseries-christmas-2012-highlight.png"></div>

However, in the case of the proportion graph, finding the peak is trivial.

<div class="full zoomable"><img src="/images/london-cycle-hire/proportion-christmas-2012-highlight.png"></div>

This method, as with most statistical methods, has it short comings when the usage over the week is consistently high (eg: a festival) or low. The proportions of 
days-of-week will simply be too equal to produce a spike.

In those conditions, it would be more appropriate to refer the original time series graph.
