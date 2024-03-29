## Overview

[DuckDB](https://duckdb.org){:target="\_blank"} allows you to use Glean without
setting up any external database.

DuckDB is a unique database amongst the types Glean supports. Traditional
analytical databases are optimized to store massive quantities of data that can
be retrieved at high speeds. While these databases are _incredibly_ powerful,
they often require a fair amount of work to set up.

DuckDB is instead focused on getting you up and running with analyzing a
(smaller) dataset as quickly as possible. It can read common file types you
likely already have: CSVs, JSON arrays, and more. DuckDB also runs on Glean's
servers, so you don't need to set up (or pay for) any infrastructure to start
querying a dataset.

**This makes DuckDB perfect for one-off analysis, or for less technical users
to get their data into Glean without setting up any servers.** DuckDB is _not_
a good choice if your dataset is large, or needs to be updated in realtime
from an external system.

### How to get setup

Glean pre-configures a DuckDB connection for every project. You are already
ready to start exploring data files in your Glean project.

See [Modeling with Uploaded Files](../data-modeling/query-data-files.md) for
more information.

### Organizing file groups

If you have lots of uploaded files, it may be helpful to organize them into
distinct groups. To do so, you can create a new data connection of the "DuckDB"
type.

1. First, go to your [Glean settings](https://glean.io/app/p/settings#database_connections){:target="\_blank"} page from the project dropdown
2. Click `+ New Database Connection` and select "Uploaded Files (DuckDB)"
