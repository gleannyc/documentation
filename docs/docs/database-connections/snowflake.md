## Overview

If you have a lot of data and want to keep throwing it into a data warehouse, [Snowflake](https://www.snowflake.com){:target="_blank"} is a tried and tested solution.  They continually push the boundary on sql and analytics features and their data sharing features between organizations are particularly strong for larger enterprisies.

About 50% of Glean's customers use Snowflake, if you're using AWS it is a good solution.  If you don't have much data, using Postgres, Redshift or even DuckDB could be good options.  Compared with Redshift, Snowflake has a more modern architecture with decoupled storage and compute that can scale to larger datasets more easily.  This architecture is also much easier to manage with more flexibility on how much compute you use and fewer decisions on how you are going to lay out data.  If Google Cloud is an option, you may also want to consider BigQuery as an alternative to Snowflake.

### How to get set up

1. [Signup for a 30 day trial](https://signup.snowflake.com/) on Snowflake if you don't have an account
2. Create a Snowflake user that Glean can use
3. Set up a database connection in Glean

## Create a snowflake user

You can run the following script. Make sure you fill out your database name, warehouse and a password in the script:

  ```sql
  use role ACCOUNTADMIN;

  set database_name = '--YOUR DATABASE NAME--';
  set warehouse_name = '--YOUR WAREHOUSE NAME--';
  set glean_user = 'GLEAN_USER';
  set glean_role = 'GLEAN_ROLE';

  create user if not exists identifier($glean_user) password='--YOUR PASSWORD--';
  create role if not exists identifier($glean_role);
  grant role identifier($glean_role) to user identifier($glean_user);

  -- grant Glean role access to warehouse
  grant USAGE on warehouse identifier($warehouse_name)
  to role identifier($glean_role);

  -- grant Glean access to database
  grant MONITOR, USAGE  on database identifier($database_name) to role identifier($glean_role);
  grant USAGE on all schemas in database identifier($database_name) to role identifier($glean_role);
  grant SELECT on all tables in database identifier($database_name) to role identifier($glean_role);
  grant SELECT on future tables in database identifier($database_name) to role identifier($glean_role);
  ```

## Create a Snowflake database connection in Glean

1. First, goto your [Glean settings](https://glean.io/app/p/settings#database_connections) page from the project dropdown
2. Click `+ New Database Connection` and fill out the fields below

### Settings

- **Account**: [Your snowflake account](https://docs.snowflake.com/en/user-guide/connecting.html#your-snowflake-account-name) is provided by Snowflake and included in the start of the URL you use to login to Snowflake: <account_name>.snowflakecomputing.com
- **User**: the Snowflake user, best practice is to have a service user specifically dedicated to Glean
- **Password**: password used to login to Snowflake
- **Database**: the Snowflake database to use, databases correspond with logical groupings of tables and views in Snowflake.
- **Schema**: _optional_ if you provide a schema, we will limit listed tables in the model builder to this schema.  If you need to limit permissions to a specific schema, you should do this with Snowflake permissions
- **Warehouse**: the warehouse to use in Snowflake, warehouses correspond with compute resources.
- **Role**: you must specify a role to be assumed when connecting from Glean. See snowflake's [roles](https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#roles) documentation.
