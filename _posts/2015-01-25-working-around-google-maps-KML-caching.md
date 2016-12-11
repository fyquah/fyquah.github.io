---
layout: post
title: Working Around Google Maps KML Caching
subtitle: 
category: eng

excerpt: 

---

Google Javascript API (not too sure about IOS and android) is known of caching the KML files you use to create layers. This can be problematic. For example, your app's end point generates a KML file for a certain user, and when the user's placemark changes, the wrong data may be generated in the Maps.

I had this problem 1 hour before presentaiton of a Hackathon (oh gosh). But the simple workaround turned out to be:

```javascript
var user_layer = new google.maps.KmlLayer({
    url: "https://helloworld.com/bill.kml?dummy=" + (new Date()).getTime()
});
```

This will not affect the results and is a perfectly valid quick hack, provided that the KML Layer is small (in the magnitude of KB) and the query string dummy is not used in the server side's code.

## Reference

<a href="http://stackoverflow.com/a/12178927/3927334">Question in Stack Overflow</a>
