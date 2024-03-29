## Overview

[Athena](https://aws.amazon.com/athena/){:target="_blank"} is an Amazon Web Services SQL query engine that allows you to do analytics on files stored in S3 (Simple Storage Service).  So, it's not really a database, it's more of a way of using SQL with csv and parquet files that are stored as objects in the cloud.  Athena runs on a fork of the opensource Presto project (now called [Trino](https://trino.io/){:target="_blank"}) that was first developed at Facebook.

Because Athena is a query engine that can query data in lots of different formats, it can be slow.  Glean assumes you have data in a fast data warehouse for interactive analytics, so Athena doesn't work really well as a primary data warehouse.  The advantage of Athena is that you can start querying data quickly if it's already stored in S3.  The disadvantages are: 1. reading schemas and metadata can be very slow, so development in Glean can be very slow 2. the performance of queries 3. in our experience the query engine is limited and doesn't support as many analytical features as BigQuery, DuckDB or Snowflake (no offset queries, for example).


** Performance **

Athena performance is highly dependent on how you choose to store your data.  If you store carefully partitioned parquet files you may get reasonable performance.  If you just store data in lots of large csv files it might take minutes to query, which wouldn't be great for interactive exploration, even with Glean's caching.  Amazon has a few good articles on [tuning performance in Athena](https://docs.aws.amazon.com/athena/latest/ug/performance-tuning.html){:target="_blank"}.

!!! warning "Using Athena as a Data Warehouse"

        For performance reasons we generally recommend using other cloud data warehouses for interactive analytics.  Athena can serve as a useful query layer for looking at raw data in s3, but doesn't serve well as your primary data warehouse unless it's carefully tuned for performance.

### How to get set up

1.  Configure an IAM user in AWS and configure permissions
2.  Set up a connection in Glean


## Create an AWS IAM user for Glean

1. Create an IAM user. You should create an [IAM user in AWS](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html){:target="_blank"} that is used for Glean access.
2. Create an appropriate IAM policy for Athena access.  Your service account needs access to three AWS services: 
    - `Glue` manages metadata required to map query-referenced resources to data stored in s3.
    - `S3` to access the underlying data that you want to query in addition to storing results of your queries.  
    - `Athena` for managing and running queries.

        ??? "Athena policy tips"
            The AWS-managed policy [AmazonAthenaFullAccess](https://docs.aws.amazon.com/athena/latest/ug/managed-policies.html){:target="_blank"} is a good starting point to look at how to configure Athena.

              We've had luck granting these permissions to the appropriate resources:
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

3. Now, you just need to assign this role to your IAM user.  This probably means, assigning the policy to a role, adding the role to a group's permissions and adding the user to that group.
4. [Generate an access key](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/){:target="_blank"} for your IAM user


## Create an Athena database connection in Glean

1. First, goto your [Glean settings](https://glean.io/app/p/settings#database_connections) page from the project dropdown
2. Click `+ New Database Connection` and fill out the fields below

### Settings

!!! note
    
    We highly recommend specifying a schema (ie. Athena database) to make querying metadata and getting lists of tables faster in Glean during development.

- **AWS Region**: the aws region to use to query data
- **port**: _optional_
- **schema**: also called databases in Athena documentation. Listing tables and testing connections can take a long time in Athena if you don't specify a schema.
- **S3 staging directory**: the S3 path where Athena will store query results.
- **AWS access key ID**: the IAM user's access key
- **AWS secret access key**: the IAM user's scret access key, generated in step 4 above
- **Query parameters**: dditional database connection parameters in the format workGroup=value&param=value
