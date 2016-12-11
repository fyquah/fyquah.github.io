---
layout: post
title: Deploying a Ruby on Rails Application with Passenger
subtitle: A simple guide to deploying a simple Rails application to VPS.
category: eng

excerpt: 

---

## 1. Setup a user for your server

This step is unnecessary on AWS as you default to use an "ubuntu" user with sudo privilleges. However, on some VPS services like Digital Ocean, you are given a root user by default. Hence, the first thing will be to create a user. More concretly, what you want to do is:

1. Execute `adduser $USERNAME` and `gpasswd -a $USERNAME sudo` 
2. Configure public key login for him (because passwords are lame) 
3. Remove root login access

Code: [https://gist.github.com/fyquah95/09ffeedd519e51b6ee5d](https://gist.github.com/fyquah95/09ffeedd519e51b6ee5d)

To access your server now, all you need to do is type the following from your local macine:

~~~bash
ssh ubuntu@<IP-ADDR> -i private_key.pem
~~~

To prevent having to type that every single time (trust me, it gets really really annoying), we will create a .ssh host to "automate" the task for us. Make a copy of your private_key.pem and move it to `~/.ssh` (You should rename private_key.pem to something unique for the app, but I will be using private_key.pem in this tutorial to simplify things).

Append to the file `~/.ssh/config` (or create it if you don't have one yet) the following:

~~~text
Host <your-desired-hostname>
    HostName <PUBLIC-IP-ADDRESS-OF-SERVER>
    User <Name-of-remote-user>
    IdentitiyFile ~/.ssh/private_key.pem

Host AbcSSHHost
    HostName 123.456.789.123
    User ubuntu
    IdentitifyFile ~/.ssh/private_key.pem
~~~

Now all you need to do is:

~~~bash
ssh AbcSSHHost
~~~

## 2. Install some dependencies using apt-get

While the dependencies for most apps defer, there are a couple of dependencies that are just so awesome you cannot miss (I meant, used almost all the time).

* git
* Postgres 
* libpq-dev
* nodejs (simply because you need a javascript runtime)
* nginx
* redis

In your server, run

~~~bash
sudo add-apt-repository ppa:rwky/redis
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get -y install git-core postgresql libpq-dev nodejs openssh-server nginx redis-server
~~~

## 3. Install RVM

Running a good old ruby app, RVM is the way to go. In case you are new, system ruby has always been versions lag of the latest ruby. I myself don't really understand why (hence welcoming explainations), but believe it is sometime to do with some apt-get package processing stuff.

Head over to [https://rvm.io/](https://rvm.io/). Install using the script provided in the site. At the point of writing, the script looks like the following. Run the following scripts in your sever.

~~~bash
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable
~~~

Note that the script "MAY" change from time to time, so it is always better to refer to the ones at rvm's site.

## 4. Install Ruby

Ruby is well ... Ruby! The question is, what version of ruby to install?

The default answer is to download and install the latest version as it has the latest security and performance patches. However, in some cases, your app may have been written for an older Ruby, and hasn't been tested properly on newer version of Rubies, then install that Ruby.

A golden rule is try to use the latest version of software where possible, unless the latest software has serious patch issues. You don't want to get caught up with software-upgrading chaos a few years down the road. Github probably understood the pain : [read about this](http://shayfrendt.com/posts/upgrading-github-to-rails-3-with-zero-downtime/).

Anyway, to install your ruby, it is as simple as:

~~~bash
# Installs ruby 2.2.1
rvm install 2.2.1

# Configure rvm to default to 2.2.1
rvm --default use 2.2.1

~~~ 

## 5. Install Bundler

Bundler is a package management software for Ruby packages. In newer version of rvm, it is supposed to install by default. However, in case it is now, installing it is dead simple:

~~~bash
gem install bundler
~~~

## 6. Installing Passenger

[Phusion Passenger](https://www.phusionpassenger.com/) is a web server for web app deployment. It sings very very well with nginx and is not too hard to configure. In this tutorial, we will be using Passenger integration with Nginx.

Installing Passenger boils down to:

1. Setup their apt-get repository
2. install passenger
3. Uncomment passenger_root and passenger_ruby
4. (Optional) In addition to uncommenting passenger_ruby, I have also changed the passenger ruby line into rvm's ruby

Setup their apt-get repository

~~~bash
# NOTE : DO NOT COPY AND PASTE THIS SCRIPT BLINDLY, THERE ARE PARTS WHERE MANUAL COPY AND PASTE ARE NEEDED
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 561F9B9CAC40B2F7
sudo apt-get install apt-transport-https ca-certificates
~~~

Add the following to /etc/apt/source.list.d/passenger.list

~~~bash
# Add the following to /etc/apt/sources.list.d/passenger.list
deb https://oss-binaries.phusionpassenger.com/apt/passenger trusty main
# NB : The above line will change from time to time, so keey yourself updated with the docs!
sudo chown root: /etc/apt/sources.list.d/passenger.list
sudo chmod 600 /etc/apt/sources.list.d/passenger.list
sudo apt-get update
~~~

Now you are good to install passenger!

~~~bash
sudo apt-get install nginx-extras passenger
~~~

Now, Edit /etc/nginx/nginx.conf and uncomment passenger_root and passenger_ruby.

~~~bash
sudo vim /etc/nginx/nginx.conf # Edit the file with vim, feel free to use any text editor you fancy

# After editting, restart the server!
sudo service nginx restart
~~~

(Optional) I prefer using rvm's ruby for passegner_ruby rather than system's ruby. Hence, I have substituted passegner_ruby in /etc/nginx/nginx.conf into the following.

~~~text
passenger_ruby /home/ubuntu/.rvm/gems/ruby-2.2.1/wrappers/ruby;
# Change the ruby version to the ruby version you are using!
~~~

As the code may change from time to time, it may be worthwhile having a looks at the [docs](https://www.phusionpassenger.com/documentation/Users%20guide%20Nginx.html#install_on_debian_ubuntu).

## 7. Preparing the app

We will be preparing a bare git repo for your server. On your server, hit:

~~~
git init --bare APP_NAME.git
# eg : git init --bare abc.git
~~~

Then, head over to the app directory IN YOUR LOCAL MACHINE. We will be adding a remote url corresponding to the production server. Remember at section 1 when we created a host for .ssh? We will be using that name of the host now.

~~~bash
# Add a remote url
git remote add production <Name-of-host>:/path/to/bare/repo.git
# eg : git remote add production AbcSSHHost:~/abc.git

# Push to production!
git push production BRANCH_NAME:master
# eg : git push production deployment-branch:master
~~~

## 8. Setting Up Deployment Directory

Now that we have a bare git repository in the server, what we want is the latest snapshot of the master branch in the deployment directory. I always put the deployment directory in the same directory as the git directory (in fact, both of them are in the home directory of my default user). Good naming conventions will be things like AppNameDeployment or simple AppName.

After creating the directory, we want to checkout the master branch of the git repo into the deployment directory. In your server:

~~~bash
mkdir -p /path/to/deployment
GIT_WORK_TREE=/path/to/deployment git checkout -f master # Assumes the branch you want to deploy is master

# eg :
# mkdir -p ~/awesome_app
# cd ~/awesome_app.git # Go to the git repo
# GIT_WORK_TREE=~/awesome_aoo git checkout -f master
~~~

The code is indeed length. Having to type it everytime we hit "git push deployment master" will be horrible. We will do some (optional) automations later on.

## 9. Setting Postgres Database (Optional)

This section is considered optional as we usually deploy our database in a separate instance. In the case of AWS, we will use RDS [ so it is "safe" to destroy and deploy an instance ]. However, in non production deployments (for example), we will want to just have the database and server in the same cluster to test things out (and save cost).

The steps we need to setup the postgres database are:

1. create the user / role to access the database
2. create the database
3. allocate ownership of the database to the user
4. make local request authenticated by md5

In your server, run:

~~~bash
sudo su postgres -c "createuser dbuser -P"
# Then, you will be prompted for your password.
sudo su postgres -c "createdb -O dbuser app_name_production"
sudo su postgres -c "psql app_name_production -c 'ALTER SCHEMA public OWNER TO dbuser'"
sudo su postgres -c "psql -c 'ALTER USER dbuser CREATEDB'"
sudo su postgres -c "echo 'local all all md5' >> /etc/postgresql/9.3/main/pg_hba.conf"

# Restart postgres server
sudo service postgresql restart
~~~

After the above configuration, you now have a production user in place!

## 10. Configuring Phusion Passenger

We will now configure phusion passenger to serve requests using the rails server.

Let's consider two scenarios:

#### HTTP Server

Serving HTTP Request is pretty straight forward. All we need to do is include "server" block in /etc/nginx/nginx.conf

~~~text
server {
    # server_name has to be a IP address or hostname
    server_name www.abc.com;
    listen 80;
    # root is the pubilc directory in the deployment directory
    root /home/ubuntu/app_name/public;
    passenger_enabled on;
}
~~~

#### HTTPS Server

HTTPS can be slighly tricky. We need to consider two scenarios:

1. User makes HTTPS request
2. User makes HTTP request

The first scenario is straightforward. It is , in fact, similiar to serving HTTP ones except the addition of certificates and modificaiton of port number. In this guide, I assume that you alreay have your ssl_certificate file and private_key from your SSL Certificate authority.

Firstly, place those files in `/etc/nginx/ssl`. Give them relevant names.

After that, add the following block into /etc/nginx/nginx.conf. It is easy to work out where to place this.

~~~text
server {
    server_name www.abc.com;
    listen 443 ssl; # HTTPS default port is 443
    ssl_certificate /etc/nginx/ssl/certificate.crt;
    ssl_certificate_key /etc/nginx/ssl/private_key.key;
    root /home/ubuntu/app_name/public;
    passenger_enabled on;
}
~~~

In the second scenario, we want to redirect all HTTP requests to its HTTPS equivalent. We can achieve this with a simple server block in /etc/nginx/nginx.conf

~~~text
server {
    server_name www.abc.com;
    listen 80;
    return 301 https://$server_name$request_uri;
}

# A request to http://www.abc.com/documents/2 (defaults to port 80) 
# will be redirected to https://www.abc.com/documents/2
~~~

The above block simply redirect all HTTP request at port 80 to a similiar url in HTTPS.

## 11. Environment variables

We need to have config variables in two places:

1. $HOME/.profile                # Used by things like sidekiq, rails c

~~~bash
export $CONST_NAME="abcabcabc"
export $CONST_2_NAME="defdef"
~~~

2. /etc/nginx/nginx.conf        # Used by the passenger web server

~~~text
env CONST_NAME=abcabc;
env CONST_NAME2=defdef;
# NB : There is no "" in /etc/nginx/nginx.conf
~~~

It is really annoying to have configuration variables in two places. I am currently thinking of a better solution to make this process much more DRY.

Note : It is best not to add your environment variables in `$HOME/.bashrc` as the file is not loaded if your shell is in non-interactive mode. Eg : When you are running a post-receive script, it may not execute the whole file depending on your VPS. (I know in AWS, it does not execute!)

## 12. Installing Gems, Database migrations and assets precompilation

~~~bash
cd /path/to/deployment
bundle
bundle exec rake db:migrate
bundle exec rake assets:precompile
~~~

## 13. Start and restart the server!

~~~bash
sudo service nginx restart
~~~

## 14. git push-do-deploy (Optional)

Remember the good old days when we develop hobbyist apps on heroku? All we had to do was `git push heroku master` and heroku will handle all for us. Let's write some (really short) scripts to have git do some automations for us.

We will have to do 2 things here:

1. In the server's git repo, we need to have a "post-receive" hook
2. The post-receive hook will have to run a script which places the latest snapshot of master in $DEPLOYMENT_DIR
3. precompile assets, migrate database, install gems etc.
4. Restart server and background tasks

In your bare git repo in your sever, you need to add a hook file called "post-receive". Concretely, create a file called "post-receive" in the directory "/path/to/git/repo.git/hooks" and add the following contents:

~~~bash
#!/bin/bash

DEPLOYMENT_DIR="/path/to/deployment"

source $HOME/.profile

GIT_WORK_TREE=$DEPLOYMENT_DIR git checkout -f master 
# Checkout master into the deployment directory
# This copies the latest snapshot into your directory

# Read from STDIN oldrev is Hash of old commit, newrev is hash of new commit nad refname is the name of the branch
read oldrev newrev refname 

if ! [[ "$refnane" =~ master$ ]]; then
    echo "Not pushing to master, changes not taking place!"
    exit 0
fi

# Then, run whatever update scripts you want. I usually create a directory  (/scripts) containing the update scripts in the Rails App.
# Note : The following step is not entirely necessary, but strongly recommended as it automatically updates
# But you will have to, of course, create those scripts first

cd $DEPLOYMENT_DIR
scripts/server_update.sh

~~~

Remember to allow execution permission on the file. You can do that by:

~~~bash
chmod +x /path/to/git/repo.git/hooks/repo.git
~~~

Now that we completed the first two steps, we go on and add some scripts to our rails app

Create "/scripts/server_update.sh" with execution permissions in your rails app.

~~~bash
#!/bin/bash

source $HOME/.profile # Update the environment variables

DEPLOYMENT_DIR=/path/to/deployment

cd $DEPLOYMENT_DIR

echo "Updating ruby gems"
RAILS_ENV=production bundle

echo "Migrating database"
RAILS_ENV=production bundle exec rake db:migrate

echo "Precompilling assets"
RAILS_ENV=production bundle exec rake assets:precompile

echo "Restarting server"
sudo service nginx restart

# If you are running things like sidekiq or redis, you might want to also restart them over here!
~~~

Now, hit `git push origin master` , sit back and watch your scripts do the work!

I wish to state that this step is completely not necessary. It is just to make life easier!

That is it folks :) Now you have a working rails server ready for production!
