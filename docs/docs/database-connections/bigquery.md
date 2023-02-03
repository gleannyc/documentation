## Overview

BigQuery is a great cloud data warehouse to get started with: they have a free tier, there are no servers to manage or think about.  They are also good if you need to be HIPAA compliant and don't want to sign onerous enterprise licenses (for US-based healthcare companies).  In short, we recommend using BigQuery if you have moderate amount of data to query and want to setup a cloud data warehouse.  We use BigQuery for Glean's own analytics.

If you have relatively small data and are very early, using something lightweight like Postgres or uploading spreadsheets / parquet files to our DuckDB integration could also be good options.

### How to get setup:

1. [Sign up for free GCP / BigQuery](https://cloud.google.com/bigquery) account if you don't have one
2. Setup a Service User Account in Google Cloud
3. Setup a database connection in Glean

## Create a BigQuery service account

BigQuery connections in Glean use GCP service accounts to connect to your database. 

You will need to copy and paste the entire contents of a service account JSON key file into this field.
[Google documentation on authenticating with service accounts](https://cloud.google.com/bigquery/docs/authentication/service-account-file)

### IAM Roles
The account will require four roles to be added in the IAM configuration:

- `BigQuery User`
- `BigQuery Data Viewer`
- `BigQuery Job User`
- `BigQuery Metadata Viewer`

## Create BigQuery database connection in Glean

1. First, goto your [Glean settings](https://glean.io/app/p/settings#database_connections) page from the project dropdown
2. Click `+ New Database Connection` and fill out the fields below

### Settings

- **Connection name**: a name for this database connection.  If you use DataOps, you can use the connection name to refer to this database.
- **Project name**: the GCP project.  This is optional since it's usually also included in the below key file.
- **JSON key file**: the entire contents of the JSON key file for the service account needs to be copy and pasted into this field.

    !!! info "JSON key file"

        BigQuery service accounts use a JSON file as a credential.  You will have to copy and paste the entire contents of this JSON file into the JSON key file field.
