---
layout: post
title: Site Popup And Spinner
subtitle: Making a div at the center of the page
category: eng

excerpt: Making a div at the center of the page

---

# Problem

~~~html
<html>
<head></head>
<body>
    <div id="center"> <!-- We want this div to the vertically and horizontally center -->
        Some cool popup
    </div>
</body>
</html>
~~~

Sometimes it gets irritating when all we want to do is:

* center something both horizontally and vertically
* we do not know the size of the thing

If we do know the size, the answer is pretty straight forward, assuming we know the size is 50px x 50px;

~~~css
#center {
    position: fixed;
    top: 50%;
    left: 50%;
    /* top and left only moves it compares against the top left corner of the div */
    margin-top : -50px;
    margin-left: -50px;
}
~~~

The problem is, we don't know the size!!

# Solution

A CSS3 featured called transform elegantly solves this problem.

~~~css
#center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    /* translate percentages are based on the size of the obj along the x and y axis respectively) */
}
~~~

# Source

<ul>
    <li><a href="http://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/">http://css-tricks.com/quick-css-trick-how-to-center-an-object-exactly-in-the-center/</a></li>
    <li><a href="http://www.w3schools.com/cssref/css3_pr_transform.asp">http://www.w3schools.com/cssref/css3_pr_transform.asp</a></li>
</ul>

