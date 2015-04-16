---
layout: post
title: Deploying a Ruby on Rails Application with Passenger
subtitle: A simple guide to deploying a simple Rails application to VPS.

excerpt: 

---



## 1. Setup a user for your server

This step is unnecessary on AWS as you default to use an "ubuntu" user with sudo privilleges. However, on VPS services like DO, you are given a root user by default. Hence, the first thing will be to create a user. More concretly, what you want to do is:

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

While the dependencies for most apps defer, there are a couple of dependencies that are just so awesome you cannot miss (I meant, used all the time).

* git
* Postgres 
* libpq-dev
* nodejs (simply because you need a javascript runtime)
* nginx
* redis

Code:

~~~bash
sudo add-apt-repository ppa:rwky/redis
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get -y install git-core postgresql libpq-dev nodejs openssh-server nginx redis-server
~~~

## 3. Install RVM

Running a good old ruby app, RVM is the way to go. In case you are new, system ruby has always been versions lag of the latest ruby. I myself don't really understand why (hence welcoming explainations), but believe it is sometime to do with some apt-get package processing stuff.

Head over to [https://rvm.io/](https://rvm.io/). Install using the script provided in the site. At the point of writing, the script looks like:

~~~bash
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
\curl -sSL https://get.rvm.io | bash -s stable
~~~

Note that the script "MAY" change from time to time, so it is always better to refer to the ones at rvm's site.

## 4. Install Ruby

Ruby is well ... Ruby! The question is, what version of ruby to install?

The default answer is to download and install the latest version as it has the latest security and performance patches. However, in some cases, your app may have been written for an older Ruby, and hasn't been tested properly on newer version of Rubies, then install that Ruby.

A golden ruby is try to use the latest version of software where possible, unless the latest software has serious patch issues. You don't want to get caught up with software-upgrading chaos a few years down the road. Github probably understood the pain : [read about this](http://shayfrendt.com/posts/upgrading-github-to-rails-3-with-zero-downtime/).

Anyway, to install your ruby, it is as simple as:

~~~bash
# Installs ruby 2.2.1
rvm install 2.2.1

# Configure rvm to default to 2.2.1
rvm --default use 2.2.1

~~~ 

## 5. Install Bundler

Bundler is a package management software for Ruby packages. Installing it is dead simple:

~~~bash
gem install bundler
~~~

## 6. Installing Passenger

[Phusion Passenger](https://www.phusionpassenger.com/) is a web server for web app deployment. It sings very very well with nginx and is not too hard to configure. In this tutorial, we will be using Passenger integration with Nginx.

Installing Passenger boils down to:

1. Setup their apt-get repository
2. install passenger
3. Uncomment passenger_root and passenger_ruby
4. (Optional) In addition to uncommenting passenger_ruby, I have also changed the passenger ruby line into:

~~~text
passenger_ruby /home/ubuntu/.rvm/gems/ruby-2.2.1/wrappers/ruby;
# Change the ruby version to the ruby version you are using!
~~~

Code: 

<script src="https://gist.github.com/fyquah95/3852eb08c6afb7fa7f2c.js"></script>

As the code may change from time to time, it may be worthwhile having a looks at the [docs](https://www.phusionpassenger.com/documentation/Users%20guide%20Nginx.html#install_on_debian_ubuntu).

## 7. Preparing the app

We will be preparing a bare git repo for your server.

~~~
git init --bare APP_NAME.git
# eg : git init --bare abc.git
~~~

Then, head over to the directory of your app IN YOUR LOCAL MACHINE. We will be adding a remote url corresponding to the production server. Remember at section 1 when we created a host for .ssh? We will be using that name of the host now.

~~~bash
# Add a remote url
git remote add production <Name-of-host>:/path/to/bare/repo.git
# eg : git remote add production AbcSSHHost:~/abc.git

# Not 
git push production BRANCH_NAME:master
# eg : git push production deployment-branch:master
~~~

## 8. Setting Up Deployment Directory

Now that we have a bare git repository in the server, what we want is the latest snapshot of the master branch in the deployment directory. I always put the deployment directory in the same directory as the git directory. Good naming conventions will be things like AppNameDeployment or simple AppName.

After creating the directory, we want to checkout the master branch of the git repo into the deployment directory. The code for these steps:

~~~bash
mkdir -p /path/to/deployment
GIT_WORK_TREE=/path/to/deployment git checkout -f master # Assumes the branch you want to deploy is master

# eg :
# mkdir -p ~/app_name
GIT_WORK_TREE=~/app_name git checkout -f master
~~~

The code is indeed length. Having to type it everytime we hit "git push deployment master" will be horrible. We will do some (optional) automations later on.

## 9. Setting Postgres Database (Optional)

This section is considered optional as we usually deploy our database in a separate instance. In the case of AWS, we will use RDS. However, in non production deployments (for example), we will want to just have the database and server in the same cluster to test things out (and save cost).

The steps we need to setup the postgres database are:

1. create the user / role to access the database
2. create the database
3. allocate ownership of the database to the user
4. make local request authenticated by md5

~~~bash
sudo su postgres -c "createuser dbuser -P"
sudo su postgres -c "createdb -O dbuser app_name_production"
sudo su postgres -c "psql app_name_production -c 'ALTER SCHEMA public OWNER TO dbuser'"
sudo su postgres -c "echo 'local all all md5' >> /etc/postgresql/9.3/main/pg_hba.conf"

# Restart postgres server
sudo service postgresql restart
~~~

## 10. Configuring Phusion Passenger

We will now configure phusion passenger to serve requests using the rails server.

Let's consider to scenarios:

#### HTTP Requests

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

#### HTTPS Requests

HTTPS can be slighly tricky. We need to consider two scenarios:

1. User makes HTTPS request
2. User makes HTTP request

The first scenario is straightforward. It is , in fact, similiar to serving HTTP ones except the addition of certificates and modificaiton of port number.

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

certificate.crt and private_key.key should be provided by the SSL certificate provider. Explaination of the certificates are beyond the scope of this simple tutorial, but do remember to place them in the /etc/nginx/ssl directory.

In the second scenario, we want to redirect all HTTP requests to its HTTPS equivalent. We can achieve this with a simple server block in /etc/nginx/nginx.conf

~~~text
server {
    server_name www.abc.com;
    listen 80;
    return 301 https://$server_name$request_uri;
}
~~~

The above block simply redirect all HTTP request at port 80 to a similiar url in HTTPS.

## 11. Environment variables

We need to have config variables in two places:

1. $HOME/.bashrc                # Used by things like sidekiq, rails c

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

## 12. Installing Gems, Database migrations and assets precompilation

~~~bash
cd /path/to/deployment
bundle
bundle exec rake db:migrate
bundle exec rale assets:precompile
~~~

## 13. Start and restart the server!

~~~bash
sudo service nginx restart
~~~

## 14. GIT_WORK_TREE and automations (Optional)

Working on it ...

## 15. Some really useful scripts (Optional)

Working on it ...