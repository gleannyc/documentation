_`MariaDB` redirects here_

## Overview

MySQL is a great default choice for a database engine. It's a general purpose engine that wasn't designed specifically for analytics purposes, but is often fast enough to start with and can scale surprisingly well, especially if you have someone caring for and tuning your installation.

** Performance **

If you're starting off with a copy of your application database, it's likely you'll end up writing a query to join, transform, and filter data to prepare it for Glean as a denormalized table. It's worth checking which version of MySQL you're on to see what transformation functions are available to you. Also, try to take advantage of indexes to keep queries fast.

Long term, we'd recommend eventually moving your analytics data to a modern data warehouse (like BigQuery or Snowflake) to get the most out of Glean.

### How to get setup

1. If you're using MySQL because that's what your application's backend is based on, make sure you're on a read-replica so your analytics queries don't bog down your application database.
2. [Create a read-only user for Glean to use](https://dev.mysql.com/doc/refman/8.0/en/create-user.html){:target="\_blank"} and grant it the appropriate permissions
3. Go to your [Glean settings](https://glean.io/app/p/settings#database_connections){:target="\_blank"} page
4. Click `+ New Database Connection` and fill out the fields below

### Settings

- **Connection Name:** A nickname for your connection. Not used to connect to your database.
- **Host:** the address of your MySQL database
- **Username:** the username
- **Password:** the password
- **Database:** (_optional_) Specify a schema to limit which tables are available. Otherwise, Glean will make all accessible schemas and tables available
