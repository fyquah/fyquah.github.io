---
layout: post
title: First Week At Imperial College London
subtitle: My first week at college

excerpt: 

---

# Orientation

It was orientation (boring). Speeches, talks, fair and the regular stuff.

However, there was a particularly fun activity -- ice breaking. Our task is to create a cable car (out of cardboard, paper, rubber cords etc. waste materials) that transports ping pong ball from one end to another. The interesting thing is the cable car has to travel a certain distance, and without and intervention, put the ball at the designated spot. (fyi, it is 3.45m of travelling with an inclination of arctan(1.7 / 3)).

Our group managed to work out a distance-based machine. It rolls (rather than slides) on the cable and winds up a string which mechaniclly drops the ball after moving a certain distance. We won second place (wohoo!), got a bottle of alchol and fruit punch.

## That wasn't the interesting part

Throughout the presentations, there were several things that provides lessons which will potentially guide me for my life:

### Simplicity is the ultimate form of sophisication

<div class="full zoomable"><img src="/images/leonardo-da-vinci-simplicity.jpg" /></div>

While it is cool and awesome to engineer something complex (or write code using relatively unkwown functions or implement a library on your own instead of using a commomb library), it might not always be necessary (unless you are lacking memory, which should not be the case in todays' year of age). Consider the following situation:

You are given an array of 100 numbers, find the sum of the 3 number ranges (eg: from the first number to the second number). There are two possible common solutions(of course, there can definitely be more).

~~~C++
// Using a fenwick tree is cool! -- 29 lines
int tree[101];

void inc(int pos, int val){
    for(; pos <= 100 ; pos -= (post & (-pos))) {
        tree[pos] += val;
    }
}

int query(int pos){
    int sum = 0;
    for(; pos >= 1 ; pos += (pos & (-pos))) {
        sum += tree[pos];
    }
    return sum;
}

int main(){
    for(int i = 1 ; i <+ 100 ; i++ ) {
        int x;
        cin >> x;
        set(i, x);
    }
    for(int i = 0 ; i < 3 ; i++ ){
        int a,b;
        cin >> a >> b;
        cout << query(b) - (a <= 1 ? query(a-1) : 0) << endl;
    }
    return 0;
}
~~~

~~~C++
// Bruteforce --- 15 lines
int main(){
    int arr[101];
    for(int i = 1 ; i <= 100 ; i++ ){
        cin >> arr[i];
    }
    for(int i = 0 ; i < 3; i++) {
        int a,b, sum;
        sum = 0;
        cin >> a >> b;
        for(int j = a; j <= b ; j++) {
            sum += arr[j];
        }
        cout << sum << endl;
    }
}
~~~

It should be obvious that the brute force solution is easier to code. The fenwick tree solution introduces and unnecessary complexity into the code. If you are sharp, you can notice a slight typo in the fenwick tree code, which will cause the whole code to collapse!

In this situation, although it would be mathematically more efficient to use the fenwick tree, using a bruteforce array solutions should suffice (unless you are really confident of what you are doing, and few microseconds of run time is precious). In the words of Kem Thompson:

**When in doubt, use brute force.**

### Presentation -- Please please target your audience

One of the teams had a pretty good speaker. He has eloquent language, accurate pronouncation and the write pace. However, while presenting a science project, he was emulating the way Steve Jobs have presented the first iPhone in 2007. Personally, I liked his presentation. It would have blown off a crowd of science fans.

However, he was talking to a bunch of engineers and professors -- they think, eat, sleep and drink math and physics, not products and government relations. The audience was not too interested in his speech as he fails to present how his project works and mechanism behind it. Rather, he opted to talk about how this mini project can imaginarily aid governments.

Let's be frank , if Jobs spoke to engineers the way he presented his products, he would not have shaken the world. :)