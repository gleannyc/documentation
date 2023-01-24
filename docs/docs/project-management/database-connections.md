Once you add a database connection, it will be made available from the [Add Data Model](../data-modeling/add-data-model.md) workflow and you'll be able to specify tables or SQL queries to start visualizing in Glean.

!!! info "Firewall Configuration"

    If you use a firewall to restrict access to your database, you'll need to allowlist Glean's IPs. <br/>
    Glean will always connect to your database from one of these IP addresses.
    ```
    18.210.29.198
    34.230.230.9
    ```

## Create a database connection

1. Go to the [`Settings`]({{ glean_url }}/app/p/settings#database_connections){:target="\_blank"} page using the link in the project dropdown
2. Select `Database Connections`
3. Click `+ Add Database Connection`
4. Select the type of database; either Athena, Snowflake, Postgres, Redshift or BigQuery
5. Fill out the credentials according to your type of database
6. Click the antenna icon to test your connection `🗼`
7. Click `Add` to complete the process

!!! schemas "Specifying schemas"

    For most database types, you can optionally specify a schema.  If you specify a schema in Glean, only tables from that schema will be made available in the [Add Data Model](../data-modeling/add-data-model.md)  workflow

## SSH tunneling beta

Currently in beta, Glean supports connecting to a Postgres or Redshift database via a bastion host. A bastion host is a server which you control that has access to your database but is not the database host itself. This may be useful when handling especially sensitive data. To join the beta, [contact us](mailto:support@glean.io?subject=SSH tunnel beta).

To use a bastion host, toggle on `Use SSH tunnel` when creating a Postgres database connection. Fill out the additional credentials according to your bastion host set up. Download Glean's public ssh key and set it as an authorized key on your server under the bastion host user that you specify in the data connection.

Fill out the remaining credentials as they'll be accessed by your bastion host, e.g. for `Port` specify the port on which your bastion host connects to the database.

## SQL Dialects

We currently support the following SQL dialects, but can relatively easily support any SQL-oriented database dialect.

- Amazon Redshift
- Amazon Athena
  Your service user requires access to a few AWS services for all features in Glean to work correctly. The service user needs access to S3 to store the output of queries and to access the source data as well as Glue access to be able to explore database metadata.
  The service user should have the following permissions for the relevant resources:
  ```
  "athena:Batch*",
  "athena:CreateNamedQuery",
  "athena:DeleteNamedQuery",
  "athena:Get*",
  "athena:List*",
  "athena:StartQueryExecution",
  "athena:StopQueryExecution",
  "glue:Get*",
  "glue:List*",
  "s3:CreateBucket",
  "s3:Get*"
  "s3:Head*",
  "s3:List*",
  "s3:Put*"
  ```
- BigQuery
  BigQuery connections in Glean use service accounts to connect to your database. You will need to copy and paste the entire contents of a service account JSON key file into this field.
  > [Google documentation on authenticating with service accounts](https://cloud.google.com/bigquery/docs/authentication/service-account-file)
  > The account will require four roles to be added in the IAM configuration: `BigQuery User`, `BigQuery Data Viewer` , `BigQuery Job User` and `BigQuery Metadata Viewer`
- MySQL / MariaDB
- PostgresSQL
- Snowflake
  The following needs to be granted to your glean user:

  ```sql
  set database_name = 'YOUR DATABASE NAME';
  set warehouse_name = 'YOUR WAREHOUSE NAME';
  set glean_user = 'YOUR GLEAN USER';
  set glean_role = 'GLEAN_ROLE';

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
