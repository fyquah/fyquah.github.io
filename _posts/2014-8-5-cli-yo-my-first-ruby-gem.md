---
layout: post
title: cli-yo | My First Ruby Gem
subtitle: "You can now yo! from the command line , auto-magically!"

excerpt: "My first attempt to build a Ruby Gem, with a fun purpose behind!"

---

Guess developers are familiar with this saying (not in exact words, but you get my point)!

> “Build apps that you, or others, need”

I like to idea of yo! to annoy people, but the problem is pushing the yo! button every now and then is pretty annoying. So I thought, yo! has an API, why not build a gem with it?

Some technicalities, it should work on UniX-based operating systems which have ruby interpreter installed. I have not tried with pre-2.0.0 ruby versions, but they should be cool. Also, not tested with windows, but if windows do support some daemon commands , it should be cool.

I have included several features, which makes it more than a wrapper for REST API calls:

<p>
<ul>
  <li><strong>silent</strong> -> It is a daemon task (for non-tech people, it means background task) and thus works even when you exit the terminal</li>
  <li><strong>interval</strong> -> automatically yo! the usernames at specific intervals. defaults to 1 minute</li>
  <li><strong>times</strong> -> You can specify how many times you want to yo! defaults to once</li>
</ul>
</p>

To yo! , it is as simple as a command.

~~~ bash
$ cli-yo annoying-buddy another-annoying-buddy --interval 5 --times 10 --silent
# It is called cli-yo to prevent confusion with the npm package yo
# This will yo the two guys ten times, every 5 minutes (that is 50 minutes of awesomeness!) as a background job
~~~

Other than the command line, you can also yo! from your code (as long as it is ruby!)

~~~ ruby
require "cli_yo"
args = {
  usernames: ["annoying-buddy" , "another-anoying-buddy"],
  interval: 5,
  times: 10,
  silent: true
}
Cli_Yo.yo! args #This will annoy them 10 times from the background!Zz
~~~


It is open source, feel free to check out the <a href='https://github.com/fyquah95/cli-yo/' target="_blank">source code</a> in github!

Stay tuned for updates (task killing , interval randomization)