---
layout: post
title: Qhost | Host Static Files locally for development
subtitle: 
category: eng

excerpt: An elegant solution to host static files for development on the local machine with minimal code, powered by sinatra

---

# Problem

Recently, I have been during angularjs development, and I got to say, I am getting the hang of it pretty quickly. However, there was a problem. Things like CORS and CDN(links if formatted in a certain style) will not work without having a localhost. Besides, opening a static html file, well, is simply troublesome from the command line!

# Existing solutions

## LAMP / MAMP / Apache

I simply place the folder in `/var/www` or create a virtual host by editting configuration files eg : `/etc/apache/site-available/sites.conf`. The first one isn't cool, as the location of my folder is limited. The second one, is sophisicated.

## Nodejs server

I can use some nodejs server. Mind me if there is a better nodejs solution, as I am not too sure about the language in and outs, but you get my point

```bash
git clone some-pre-configured-node-server.git
cd server
mkdir app
cd app
# develop my app in that folder
cd ..
npm start
```

Tonnes of unnecessary configuration and setups. There must exist something better

## Sinatra

```bash
touch main.rb
echo "require \"sinatra\"" > main.rb
mkdir public
cd public
# develop my app in that folder
ruby ../main.rb
```

We are getting forward, sintra is only one-line long with `require "sintara"`. However, I wish to do something way easier, and it is inspired by the brevity of sinatra.

# My Solution

All I have to do is

```bash
mkdir app
cd app
# develop
qhost .
```

I can now access my app in localhost:9321, pretty neat huh. qhost is simply a quick hack written in ruby. It simply does the following

1. Load the sinatra gem (a.k.a. require it)
2. set the root directory to the current directory
3. set the public folder to the current directory, so I can access static files

With that, I can develop my files without sophisicated initialization of webservers and let sinatra take care of all the work.

# Possible Improvements

* Redirect /folder/folder/1/ and /folder/folder/1 to /folder/folder/1/index.html
* Task killing (I included a daemonize feature)
* Build it as a gem

# Source code

It is available on <a href="https://github.com/fyquah95/qhost">github</a>
