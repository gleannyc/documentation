## Overview

Postgres is a great default choice for a database engine. It's a general purpose engine that wasn't designed specifically for analytics purposes, but is often fast enough to start with and can scale surprisingly well, especially if you have someone caring for and tuning your installation.

A benefit of its popularity is that there are easy and cheap providers of server-less instances, such as [Heroku](https://www.heroku.com/postgres){:target="\_blank"} and [Neon](https://neon.tech){:target="\_blank"}.

If you're looking to get started and starting with an application database, we have an full write up on how to do exactly that:

- [Set up your data warehouse on Postgres in 30 minutes](https://glean.io/blog-posts/setup-your-data-warehouse-on-postgres-in-30-minutes){:target="\_blank"}

** Performance **

If you're starting off with a copy of your application database, there's a high chance you'll end up writing a query to join, transform, and filter data to prepare it for Glean as a denormalized table. It's worth checking which version of PostgreSQL you're on to see what transformation functions are available to you. Also, try to take advantage of indexes to keep queries fast.

### How to get setup

1. We recommend [creating a separate user for Glean](https://www.postgresql.org/docs/current/sql-createuser.html){:target="\_blank"} to use in order to easily track usage and performance
2. Grant the user the appropriate [roles](https://www.postgresql.org/docs/current/role-membership.html){:target="\_blank"} needed to query your analytics data
3. Setup a connection in Glean
   1. First, goto your [Glean settings](https://glean.io/app/p/settings#database_connections){:target="\_blank"} page from the project dropdown
   2. Click `+ New Database Connection` and fill out the fields below

### Settings

- **Connection Name:** A nickname for your connection. Not used to connect to your database.
- **Host:** the address of your PostgreSQL database
- **Username:** the username
- **Password:** the password
- **Database:** the name of the database to read from
