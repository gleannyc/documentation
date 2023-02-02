## Overview

Athena (in Amazon Web Services) is a SQL query engine that allows you to query files stored in S3 (Simple Storage Service).  So it's not really a database, it's more of a way of using SQL with csv and parquet (and other formats) that are stored as objects in the cloud.  The AWS project actually uses Presto (now Trino) under the hood.

In general, Athena can work okay for some usecases, but Glean assumes you have data in a fast data warehouse, and Athena is not a very fast data warehouse.  The advantage is that you can start querying data quickly if it's already stored in S3.  The disadvantages are: 1. reading schemas can be very slow, so development in Glean can be very slow 2. the performance of queries 3. in our experience the query engine is very limited and just doesn't perform that well (no offset queries, for example.

** Performance **

Athena will just let you query a gigabyte spreadsheet stored in s3.  If your

### How to get setup

TODO


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

TODO
