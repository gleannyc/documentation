## Overview

Athena is an Amazon Web Services SQL query engine that allows you to do analytics on files stored in S3 (Simple Storage Service).  So, it's not really a database, it's more of a way of using SQL with csv and parquet files that are stored as objects in the cloud.  Athena runs on a fork of the opensource Presto project (now called Trino) that was developed at Facebook.

Because Athena is a naive query engine that can query data in lots of different formats, it can be slow.  Glean assumes you have data in a fast data warehouse for interactive analytics, so Athena doesn't work really well as a primary data warehouse.  The advantage of Athena is that you can start querying data quickly if it's already stored in S3.  The disadvantages are: 1. reading schemas and metadata can be very slow, so development in Glean can be very slow 2. the performance of queries 3. in our experience the query engine is limited and doesn't support as many analytical features as BigQuery, DuckDB or Snowflake (no offset queries, for example).

** Performance **

Athena performance is highly dependent on how you choose to store your data.  If you store carefully partitioned parquet files you may get reasonable performance.  If you just store data in lots of large csv files it might take minutes to query, which wouldn't be great for interactive exploration, even with Glean's caching.  Amazon has a few good articles on [tuning performance in Athena](https://docs.aws.amazon.com/athena/latest/ug/performance-tuning.html).

!!! warning

        For performance reasons we generally recommend using other cloud data warehouses for interactive analytics.  Athena can serve as a useful query layer for looking at raw data in s3, but doesn't serve well as your primary data warehouse unless it's carefully tuned for performance.

### How to get setup

1.  Configure an IAM user in AWS and configure permissions
2.  setup a connection in Glean


## Create an AWS IAM user for Glean

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

## Create an Athena database connection in Glean

1. First, goto your [Glean settings](https://glean.io/app/p/settings#database_connections) page from the project dropdown
2. Click `+ New Database Connection` and fill out the fields below

### Settings

- **AWS Region**: 
- **port**: 
- **schema**: 
- **S3 staging directory**: 
- **AWS access key ID**: 
- **AWS secret access key**: 
- **Query parameters**: 
