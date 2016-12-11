---
layout: post
title: Rails Turbolinks And AngularJS
subtitle: 
category: eng

excerpt: 

---


Having writing a lot of angular within Rails myself, I was surprised why it took me sometime to rezlie the insynchrony of angular and turbolinks.

The problem is, angular bootstraps everytime the document ready event is triggered, something not triggered by the turbolinks. Most online resources suggest using manual bootstrapping, i.e.:

~~~javascript
$(document).on("page:load ready", function(){
    angular.bootstrap(document.getElementById('app_id'), 'app_module'); 
});
~~~

The main drawbacks:

* not DRY
* annoying to include in every page with different angular modules

I have came up with a solution, which can be embeeded in the main javascript code:

~~~javascript
$(document).on("page:load ready", function(){
    var i, collection = $("[ng-app]"), module_name;
    for (i = 0 ; i < collection.length ; i++) {
        module_name = $(collection[i]).attr("ng-app");
        angular.bootstrap(collection[i], module_name || undefined);
    }
});
~~~

The code speaks for itself :)

<a href="https://gist.github.com/fyquah95/e655070cee89d52decb6" target="_blank">Gist @ GitHub</a>
