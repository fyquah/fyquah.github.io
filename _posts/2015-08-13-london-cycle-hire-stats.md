---
layout: post
title: Some (Interesting) Statistic on London Cycle Hires
subtitle: 

excerpt: 

---

Disclaimer: I have _never_ hired a cycle in London.

Let's try to use a very small data set ( the number of cycle hire every day 
since 2010 from [TFL](http://data.london.gov.uk/dataset/number-bicycle-hires/resource/ac29363e-e0cb-47cc-a97a-e216d900a6b0) ) with some google searches to answer 
the following question:

**Why do Londoners cycle?**

# Primary Data 

<div class="full zoomable"><img src="/images/london-cycle-hire/basic-time-series.png"></div>

We can observe a similiar concave-like trend every year. 
The number of cycle hires increases gradually from January to May, 
remains faily constant till September, and decreases till December.

The total number of hires is gradually increasing from 2011 to 2014, with a 
slight drop from 2012 to 2013.

* 2011 -  7,142,449
* 2012 -  9,519,283
* 2013 -  8,045,459
* 2014 -  10,023,897

*Note: data from 2010 and 2015 ommitted as they are incomplete*

Aside from that, the signal obtained from this data seems like random fluctuations / 
noise that does not exhibit any particular pattern (aside from a very large peak 
in July 2015). Hence, let's try deriving some secondary data!

# Secondary Data

I have calculated the proportion of hires in a day-of-week (eg: Monday, Tuesday) over the last 5 years.
For example, if there are a total of 100 bicycle hires at the week starting 5 July 
2010 and there are 20 hires on Monday, the value of Monday for the week 
starting 5 July 2010 will be assigned a value of 0.20. In case you still do not
understand what proportion in our contxt mean, please refer the [appendix](#appendix).

Interestingly, this simple data transformation seems to present some additional
information to us:

<div class="full zoomable"><img src="/images/london-cycle-hire/by-day.png"></div>

Here are the average proportions over the proportions obtained from the last 5 years:

* Sunday  **0.1115**
* Monday  **0.14389**
* Tuesday  **0.15568**
* Wednesday  **0.159627**
* Thursday  **0.157135**
* Friday  **0.15016**
* Saturday  **0.12195**

The average proportion of hires on weekends (0.116725) is 
noticable lower than (0.1533), a difference of approximately 27%.

The following is the varience and average deviation (note, not standard deviation)
of the above entries:

* Sunday , 0.0010001 , 0.02439 
* Monday , 0.0006385 , 0.01820
* Tuesday , 0.0005254 , 0.01585
* Wednesday , 0.0005739 , 0.01546
* Thursday , 0.0006224 , 0.01662
* Friday , 0.0005045 , 0.01686
* Saturday , 0.0008424 , 0.02288

The varience in proportion of hires on weekends (0.00092127) is
much higher than those of weekdays (0.0005730) 46.61%.

Of course (mind the slight bias here), averages are not entirely exciting. 
Here's a graph to introduce some spice to these averages.

The graph below shows 7 lines, each representing a day of the week. To give you a
rough context on what the line chart means, 

## Interpreting the Statistics 

The following section will be _biased_ towards how I interpret the statitstics 
above. 

Based on the timeseries graph above, Londoners prefer not to cycle when the 
**weather** is cold, especially during winter. 

The number of cyclists over the course of 4 years (2011 - 2014) is gradually increasing. The slight drop in 2013 might be due to air pollitions problems (ref: [airqualitynews](http://www.airqualitynews.com/2013/01/11/london-areas-already-exceeding-2013-legal-air-pollution-limits/) ). However, the small size of data refrains us from making any reliable conclusions.

<div class="full zoomable"><img src="/images/london-cycle-hire/basic-time-series-concave.png"></div>

The average proportion on weekends are significantly lower than those on the
weekdays. This sounds logical as people require transport to go to work on
weekdays. 

An interesting little observation can be made from the average deviation. 
A much higher average deviaion suggest that cycle hiring on weekends a more
likely for **non-recurring purposes** (eg: meeting a friend for coffee). 

In most of the years, a proportion peak is observed during Christmas. 
This is highly probably due to the *closure of tube stations*.
In 2011 and 2013 (i.e., Christmas is in 2011, so by 2011 i mean end of 2011),
interestingly, the maximum peak at Christmas is followed by a minimum peak 
on new year. In other years, the cycle hires at New Year is near the week's 
average. This may suggest that people prefer _not_ to cycle during the festive
season whenever possible, which in turns explain the size of the small peak during
Christmas despite the tube closure.

<div class="full zoomable"><img src="/images/london-cycle-hire/timeseries-christmas-2012-up-close.png" /></div>
<p style="text-align : center">A small peak during christmas</p>

Furthermore, there is a large peak in 9 July 2015. It turns out that 
London Underground was suffering from one of
the worst **tube strikes** in years (ref: <a target="_blank" 
href="http://www.bbc.co.uk/news/uk-33438700">BBC News</a>). In fact, the 
highest number of cycle over the last five years was achieved that day (see 
timeseries graph below).

<div class="full zoomable"><img src="/images/london-cycle-hire/large-peak-tube-strike.png" /></div>
<p style="text-align : center">A large peak due to tube strike</p>

Similiarly, the closure on 28 November 2010 is due to a less tube strike 
severe (ref: <a href="http://www.bbc.co.uk/news/uk-england-london-11860210">
BBC News</a>). As the tube strike was not as severe as the one in July 2015,
the peak is less sharp. It may also be coupled by the fact that people prefer
taking longer tube routes than cycle when the winter approaches.

## Conclusion?

From interpreting the data:

The significant factors are:

* Weather ( causes a upwards / downwards trend )
* Tube strikes ( causes sudden peaks )

Other factors:

* Scheduled closures ( causes a small peak )
* Holidays ( Prefer not to cycle )
* Non-recurring visits ( causes a rather unpredictable cycle-hiring schedule on weekends )

It is quite fun how such simple data and data transformation methods can 
give us insights on the city!

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

## Appendix : Percentage difference

~~~javascript

The definition of difference is as follows:
percentagedifference(a, b) = 100 * abs(a - b) / average(a, b) %;

~~~~

