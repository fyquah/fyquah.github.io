---
layout: post
title: Pie Chart CSS3
subtitle: A little homework written in purely HTML / CSS3 / Javascript

excerpt: As I needed a pie chart for an assignment, I took the opportunity to try something new!

---

I challenged myself to write a piechart generator in purely HTML / CSS3 / Javascript. In other words, no libraries, external frameworks etc. I did this partly because I needed a pie chart for my assignment, but more because I wanted to have some fun.

Here are some stuff I learnt throughout the process:

## *document* and *window* are really long words

The headline says it all. While **window** is not really necessary all the time, I include it for clarity purposes in my code. A great takeaway from reading some javascript online is utilizing annonymous functions to simplify this:

~~~Javascript
(function(d, root){
    // d means document
    // root means window
})(document, window)
~~~


## *document.querySelectorAll* may give the functionalities of jQuery, but it is seriously nowhere near

Compare the following two sniplets:

~~~Javascript
$(".class_name .awesome").css("color", "blue");
~~~

~~~Javascript
var i,
    collection = document.querySelectorAll(".class_name .awesome");
for (i = 0 ; i < collection.length ; i++) {
    collection[i].style["color"] = "blue";
}
~~~

One line of code versus 3-5 lines of code. It can easily be seen that jQuery is also much easier to understand.

## Parsing query strings are not too hard

Parsing query strings are just like string processing. Find the first "?", then split the substring after that via "&", then study the key-pair. It is easier done than said (as opposed to the saying) though.

~~~Javascript
(function(d, root){
    var obj = {};
    root.location.subString(root.location.href.indexOf("?")).split("&").forEach(function(arr){
        obj[arr[0]] = arr[1] || true; // in case it is a hanging variable, like "example.com?a"
    });
    return obj;
})(document, window)
~~~

## Use closure to delay events

For example, we have this event:

~~~HTML
<button onclick="triggerDelayedEvent()">Click Me</button>
~~~

Then, to activate the event only after 2 seconds:

~~~Javascript
var triggerDelayedEvent = (function(){
    var _delayed_event;
    return function(){
        event.preventDefault(); // for obvious reasons
        root.clearTimeout(_delayed_event); // function won't do anything when _delayed_event is undefined.
        root.setTimeout(function(){
            //bla
        }, 2000);    
    }
})();
~~~

A new event will be registered after every click and the previously registered event will be cleared, regardless rather it has been executed or not.

## Dynamically Changing the Twitter "Share" Link

The twitter plug in itself does not permit such action. The closes we can get is outsmarting the system. Just some trivia what twitter does is replacing the tag "a.twitter-share-button" with a "iframe" corresponding to the plugin itself. The iframe is constructed based on the data-url property in the tag previously mentioned.

So, someone gave a good answer in <a href="http://stackoverflow.com/questions/9215806/how-to-update-the-twitter-share-button-url-with-dynamic-content">stackoverflow</a> was awesome. To summarise, it is something like this:

* Remove the current twitter link
* Replace the twitter content with a similiar one, but different URL
* Reload the twitter "javascript"

The answer in stack overflow, I replaced it with something similiar in pure javascript:

HTML : 

~~~HTML
<div id="twitter-share-button-wrapper">
    <!-- Yes, that's it! -->
</div>
~~~

Javascript : (Assuming we have a function, fnc, that changes with the url)

~~~Javascript
var fnc = function(url) {
    var reloaded_script, highest_script;
    document.getElementById("twitter-share-button-wrapper").innerHTML = "";
    document.getElementById("twitter-share-button-wrapper").innerHTML = '<a class="twitter-share-button" href="https://twitter.com/share" data-url="' + link + '" data-text="just created a simple chart!">Tweet</a>';
    // then reload the script
    reloaded_script = document.createElement("script");
    reloaded_script.src = "https://platform.twitter.com/widgets.js";
    highest_script = document.getElementsByTagName("script")[0];
    highest_script.parentNode.insertBefore(reloaded_script, highest_script);
    // pretty messy...
}
~~~

## Drawing the Pie Chart in CSS3

The idea of drawing a CSS Pie chart is fairly complex. Considering the following HTML : 

~~~HTML
<div class="pie-chart-container">
    <div class="pie-background"></div>
    <div class="pie-right" id="pie-slice-1">
        <div class="pie"></div>
    </div>
    <div class="pie-right" id="pie-slice-2">
        <div class="pie"></div>
    </div>
    <div class="pie-left" id="pie-slice-3">
        <div class="pie"></div>
    </div>
</div>
~~~

There several explaination for the html classes:

* **pie-chart-container** is just a container
* **pie-right** corresponds to the portion of the pie chart on the right
* **pie-left** corresponds to the left

To try explain the ".pie-right" class, I will try to make it as simple as possible (it is really hard to put in words!):

* the pie-right class allows contents only at the right of the div (use the clip style property can achieve this)!
* the ".pie-right .pie" refers to a slice, and allows only contents at the ***left*** to be visible.
* That means, without rotating the slice, nothing is visible.
* Then, the slice "#pie-slice-1 .pie" is rotated

A good reference is available <a href="http://www.kylejlarson.com/blog/2011/how-to-create-pie-charts-with-css3/" target="_blank">here</a>

## Use Open Source Libraries

As I said this project is to simply challenge myself, it is still, by all means, better to utilize a framework / library to speed up coding.

<a target="_blank" href="http://jquery.com/">Jquery</a> offers easy and fast DOM manipulation and AJAX request sending, various <a href="https://angularjs.org/" target="_blank">AngularJS</a> offer amazing code organization.

That said, writing pure JS code is a good lesson on code organization nevertheless :).

<a href="http://www.fyquah.me/projects/simplepi/" target="_blank">Preview</a> | <a href="https://github.com/fyquah95/simplepi">Github</a>