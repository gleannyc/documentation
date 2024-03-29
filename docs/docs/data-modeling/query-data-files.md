Glean can directly use CSVs and other common data files for small or adhoc
analysis, without needing to set up a traditional database.

## Uploading Files

From [the model builder page]({{ glean_url }}/app/mb){:target="\_blank"},
select "Uploads" as the data connection. You can then either click the "Upload"
button or drag a file from your computer into the tables list. This will upload
the file to Glean and make it available as if it were a table in a databse.

You can update the contents of an existing file by uploading or dragging in a
new version with the same name.

### Supported Files

Glean currently supports the following formats:

- Comma separated or tab separated values files (`.csv`, `.tsv`)
- JSON files containing a single array of objects. Object keys will
  be used as column names. (`.json`)
- [Apache Parquet](https://parquet.apache.org/){:target="\_blank"}
  files (`.parquet`, `.pqt`)

Glean enforces a max size of 50 MB for uploaded files.

## Writing SQL for Uploaded Files

Glean uses [DuckDB](https://duckdb.org/) as the SQL-engine for uploaded files.

Glean loads your files into the DuckDB instance as a table with a name matching
the file. Since filenames contain special characters, you will need to quote
the table name.

```sql
SELECT * FROM "my_file.csv";
```

Glean is compatible with the
[DuckDB SQL dialect](https://duckdb.org/docs/sql/introduction){:target="\_blank"}.
However, side-effects from statements such as `INSERT`, `UPDATE`, and `CREATE`
will be discarded. The DuckDB instance is re-created and discarded between
every query.
