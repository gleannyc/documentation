Glean data model files are intended to map to the options available in the Data Model user interface (see [Data Models Overview](../../data-modeling/Data-Models-Overview.md)).

## Examples

The following is an example of a Data Model `my_model.yml` which loads `test_table` and defines some simple attributes.

```yaml
glean: "1.0"
name: My Data Model
type: model
source:
  connectionName: Production BigQuery
  physicalName: test_table
cols:
  - id: metric_sum
    type: metric
    physicalName: value1
    name: SUM VALUE
    aggregate: sum
  - id: label1
    type: attribute
    physicalName: label1
  - id: secondary_event_date
    type: datetime
    physicalName: secondary_event_date
    primaryDate: true
```

The following Data Model uses a sql statement instead of an underlying table. It also uses sql to build a custom metric, `daily_active_users`:

```yaml
glean: "1.0"
name: My Data Model
type: model
source:
  connectionName: Production BigQuery
  sql: select * from test_table
cols:
  - id: metric_sum
    type: metric
    physicalName: value1
    name: SUM VALUE
    aggregate: sum
  - id: daily_active_users
    type: metric
    name: Daily Active Users
    sql: COUNT(DISTINCT user_id) / COUNT(DISTINCT login_date)
```

## Properties

- **`glean`** *(string - required)*: The Glean file format version.)
- **`type`** *(string - required)*: The type of this resource. For data models, this is always `"model"`.
- **`grn`** *(string)*: If specified, this config will be applied to an existing resource with the matching [GRN](../GRNs.md),
  instead of managing a new Data Model.
- **`name`** *(string - required)*: The user-facing name for this Data Model.
- **`source`** *(object - required)*: A **Data Source** object.
- **`cols`** *(array - required)*: A list of **Columns** defining the metrics and attributes on this data model.

---

### Data Source

The data source to read from for this model. All data sources require one of the following properties:

- **`connectionName`** _(string)_: The name of a database connection, as displayed in the Glean UI.
- **`connectionId`** *(string)*: The connection ID of a database connection, as displayed in the Glean UI.

and then one of the following sets of properties:

#### Table Source

Fetch data from an existing table.

- **`schema`** *(string)*: The name of the schema to use in the specified database.
- **`physicalName`** *(string)*: The name of the table to use in the specified database.

#### SQL Source

Fetch data from the results of a custom SQL query.

- **`sql`** *(string)*: The SQL statement used to fetch data for this model.

---

### Columns

The columns (metrics, attributes, dates) of the Data Model. Each item in the array is an object in one of the following formats:

#### Date Column

Specifies a date column.

- **`id`** *(string)*: The persistent identifier for the column.
- **`type`** *(string)*: The type of this column, which in this case should always be `'datetime'`.
- **`physicalName`** *(string)*: The name of the column as it appears in the underlying data source.
- **`primaryDate`** *(boolean)*: Flag indicating whether the column is the primary date. Exactly one datetime
  column should have this set to true.

#### Attribute Column

Specifies an attribute column.

- **`id`** *(string)*: The persistent identifier for the column.
- **`type`** *(string)*: The type of this column, which in this case should always be `'attribute'`.
- **`physicalName`** *(string)*: The name of the column as it appears in the underlying data source.

#### Row Count Column

Specifies the 'row count' metric column.

- **`id`** *(string)*: The persistent identifier for this column.
- **`type`** *(string)*: The type of this column, which in this case should always be `'metric'`.
- **`name`** *(string)*: The user-visible name for this column.
- **`aggregate`** *(string)*: The type of aggregation for this column, which in this case should always be `'row_count'`.

#### Metric Column

Specifies a metric column that fetches data from a column in the underlying data source.
Cannot contain additional properties.

- **`id`** *(string)*: The persistent identifier for the column.
- **`type`** *(string)*: The type of this column, which in this case should always be `'metric'`.
- **`physicalName`** *(string)*: The name of the column as it appears in the underlying data source.
- **`name`** *(string)*: The user-visible name for this column.
- **`aggregate`** *(string)*: Specifies how to aggregate data from this column. Must be one of: `['count', 'count_distinct', 'sum', 'min', 'max', 'avg']`.

#### SQL Metric Column

Specifies a metric column that fetches data using a custom SQL aggregation.
Cannot contain additional properties.

- **`id`** *(string)*: The persistent identifier for the column.
- **`type`** *(string)*: The type of this column, which in this case should always be `'metric'`.
- **`name`** *(string)*: The user-visible name for this column.
- **`sql`** *(string)*: SQL expression defining the column.
