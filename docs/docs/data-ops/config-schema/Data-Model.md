## Example
  ```yaml
  glean: "0.1"
  name: My Data Model
  source:
    connectionName: Production BigQuery
    physicalName: test_table
    schema: public
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

## Properties
  - **`glean`** *(string)*: The Glean file format version.
  - **`id`** *(string)*: The persistent identifier for this Data Model.
  - **`name`** *(string)*: The user-facing name for this Data Model.
  - **`type`** *(string)*: The type of this resource, which in this case should always be `model`.
  - **`source`** *(object)*: The data source to read from. This object can be either of these formats:
    - _Table source_: a source that fetches data from an existing table.
      - **`connectionName`** \*(string)**\*:** The name of a database connection, as displayed in the Glean UI. (Not required if `connectionId` is specified.)
      - **`connectionId`** *(string)*: The connection ID of a database connection, as displayed in the Glean UI. (Not required if `connectionName` is specified.)
      - **`schema`** *(string)*: The name of the schema to use in the specified database.
      - **`physicalName`** *(string)*: The name of the table to use in the specified database.
    - _SQL source_: A data source that fetches data using a custom SQL query.
      - **`connectionName`** \*(string)**\*:** The name of a database connection, as displayed in the Glean UI. (Not required if `connectionId` is specified.)
      - **`connectionId`** *(string)*: The connection ID of a database connection, as displayed in the Glean UI. (Not required if `connectionName` is specified.)
      - **`sql`** *(string)*: The SQL statement used to fetch data for this model.
  - **`cols`** *(array)*: The columns (metrics, attributes, dates) of the Data Model. Each item in the array is an object in one of the following formats:
    - _Date column_: Specifies a date column.
      - **`id`** *(string)*: The persistent identifier for the column.
      - **`type`** *(string)*: The type of this column, which in this case should always be `'datetime'`.
      - **`physicalName`** *(string)*: The name of the column as it appears in the underlying data source.
      - **`primaryDate`** *(boolean)*: Flag indicating whether the column is the primary date. Exactly one datetime column should have this set to true.
    - _Attribute column_: Specifies an attribute column.
      - **`id`** *(string)*: The persistent identifier for the column.
      - **`type`** *(string)*: The type of this column, which in this case should always be `'attribute'`.
      - **`physicalName`** *(string)*: The name of the column as it appears in the underlying data source.
    - _Metric column_: Specifies a metric column that fetches data from a column in the underlying data source. Cannot contain additional properties.
      - **`id`** *(string)*: The persistent identifier for the column.
      - **`type`** *(string)*: The type of this column, which in this case should always be `'metric'`.
      - **`physicalName`** *(string)*: The name of the column as it appears in the underlying data source.
      - **`name`** *(string)*: The user-visible name for this column.
      - **`aggregate`** *(string)*: Specifies how to aggregate data from this column. Must be one of: `['row_count', 'count', 'count_distinct', 'sum', 'min', 'max', 'avg']`.
    - _SQL metric column_: Specifies a metric column that fetches data using a custom SQL aggregation. Cannot contain additional properties.
      - **`id`** *(string)*: The persistent identifier for the column.
      - **`type`** *(string)*: The type of this column, which in this case should always be `'metric'`.
      - **`name`** *(string)*: The user-visible name for this column.
      - **`sql`** *(string)*: SQL expression defining the column.
    - _Row count column_: Specifies the 'row count' metric column.
      - **`id`** *(string)*: The persistent identifier for this column.
      - **`type`** *(string)*: The type of this column, which in this case should always be `'metric'`.
      - **`name`** *(string)*: The user-visible name for this column.
      - **`aggregate`** *(string)*: The type of aggregation for this column, which in this case should always be `'row_count'`.
