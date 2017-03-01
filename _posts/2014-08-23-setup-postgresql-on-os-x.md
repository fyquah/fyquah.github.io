---
layout: post
title: Setup Postgresql On Os X
subtitle: Coming from a Linux background to setup an awesome database on a database that operates slightly differently
category: eng

excerpt: Setting up one of the most powerful database for non-advanced users
---

# Prerequiste

<ul>
	<li><a href="http://brew.sh">Homebrew</a> package manager, I often call it the missing piece of the puzzle that makes OS X a reasonable substitue for Linux as a dev device</li>
</ul>

# Install Postgresql
~~~ bash
$ brew install postgres
# Linux users should note that the sudo-prefix is not required, as brew operates on /usr/local (the whole thing is a git repo)
~~~

# Running Postgresql
~~~bash
mkdir -p ~/Library/LaunchAgents
ln -s /usr/local/opt/postgresql/homebrew.mxcl.postgresql.plist $HOME/Library/LaunchAgents/
launchctl load -w ~/Library/LaunchAgents/org.postgresql.postgres.plist
~~~

If launchctl is troublemsome (because of having the need to type the whole directory), check out the <a href="https://github.com/eddiezane/lunchy">lunchy project</a>. For people familiar with debian and its derivative, launchctl acts something like a service. So, running `launchctl load -w <name of file>` is simliar to `sudo service <name-of-service> start`

# Using the database

Technically, you are done. You have installed postgres sql and got it up and running. Note that your current user is the "postgres superuser".

Enter the postgressql shell by `psql <name_of_db>`

SQL query for administrative tasks

* `CREATE DATABASE name_of_db OWNER name_of_owner_role ENCODING utf-8`
* `DROP DATABASE name_of_deleted_db`
* `CREATE ROLE name_of_user NOSUPERUSER LOGIN CREATEDB PASSWORD password_of_user`
* `DROP ROLE name_of_deleted_user`

If you prefer to execute directly from shell script (Postgres claims that there is no difference between using this and manual queries. The client commands below merely act as wrappers)

* `createuser --interactive --password`
* `createdb some_db_name -O owner_name`

# Ruby on Rails

You do not need to manually create the database (but you still have to create the role, which privillege to create databases), all you have to do is to add the following lines to /path/to/app/config/database.yml

~~~
default: &default
  adapter: postgresql
  prepared_statements: false
  pool: 5
  timeout: 5000
  host: localhost
  username: <%= ENV['PG_USERNAME'] %>
  password: <%= ENV['PG_PASSWORD'] %>

development:
  <<: *default
  database: <%= ENV['PG_DEV'] %>

# Warning: The database defined as "test" will be erased and
# re-generated from your development database when you run "rake".
# Do not set this db to the same as development or production.
test: &test
  <<: *default
  database: <%= ENV['PG_TEST'] %>

production:
  <<: *default
  database: <%= ENV['PG_PROD'] %>
~~~

Then add the following lines to ~/.zshrc or ~/.bashrc depending on the type of shell interpreter you are using

~~~ bash

export PG_USERNAME="name_of_user"
export PG_PASSWORD="password"
export PG_DEV="name_of_dev_db"
export PG_TEST="name_of_test_db"
export PG_PROD="name_of_prod_db"

~~~

Reload your shell and run the following command in your app directory

~~~ bash
bundle exec rake db:prepare
~~~

This will create a database and migrate according to your schema.

# Notes on the postgres user

From a linux background, the first thing that troubled me was the absence of the postgres user. Other than being an esthetical annoyance, it did not actually has any impact. The current user now has all the previlliges with postgresql just like that user. However, if you are keen on creating the user, it is still possible.

I have not experimented this on my own, but it should be simply following these steps.

1. Create a postgresql user. Note that the adduser command isn't available in OS X
2. Install postgresql with that user
3. add the following lines to the pg\_hba.conf file `local all all md5` A good way to do this from shell is ` echo "local all all md5" >> /path/to/file/pg_hba.conf `. This line allows local connections with hashed md5 passwords. Read more at the <a href="http://www.postgresql.org/docs/9.3/static/auth-pg-hba-conf.html">docs</a>
4. You (should) be good to go

Update: <a href="http://jonathandean.com/2011/08/postgresql-8-4-on-mac-os-x-10-7-lion/">A reference for doing so</a>. However, I have not tested anything tho.

<strong>references</strong>

<a href="http://www.postgresql.org/docs/9.4/static/index.html">Postgresql online manual</a>
