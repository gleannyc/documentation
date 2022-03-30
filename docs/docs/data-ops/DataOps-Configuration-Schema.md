# DataOps Configuration Schema

### Data Model

- Example
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
- Properties
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

### Saved View

- Example
  ```yaml
  glean: "0.1"
  id: my-saved-view
  type: saved_view
  name: My Saved View
  model: ./my_model.json
  visualization:
    chartType: bar
  data:
    x:
      columnId: secondary_event_date
      granularity: day
    y:
      columnId: metric_sum
    filters:
      - columnId: secondary_event_date
        range:
          - "2014-01-01"
          - "2017-01-01"
    breakout:
      columnId: location
      groups:
        - key: Street/Sidewalk
          index: 0
          color: rgb(0, 63, 92)
        - key: Residential Building/House
          index: 1
          color: rgb(68, 78, 134)
  ```
- Properties
  - **`glean`** *(string)*: The Glean file format version.
  - **`id`** *(string)*: The persistent identifier of this saved view.
  - **`name`** *(string)*: The user-visible name of this saved view.
  - **`type`** *(string)*: The type of this resource, which in this case should always be `saved_view`.
  - **`model`** *(string)*: The file path to the Data Model definition.
  - **`hidden`** *(array)*: A list of attribute column identifiers to hide in this view. Each item is of type `string`.
  - **`visualization`** *(object)*: Information about the visualization of the saved view. This object has the following properties:
    - **`chartType`** *(string)*: The chart type. Must be one of: `['area', 'bar', 'line', 'table', 'pivot', 'horizontal bar']`.
    - **`showOther`** *(boolean)*: Flag indicating whether unfiltered items should be displayed in an 'Other' group when a filter is active.
    - **`stack`** *(string)*: The stacking type, when using an 'area', 'bar', or 'line' chart). Must be one of: `['stack', 'unstack', 'stack100pct']`.
  - **`data`** *(object)*: Information about the data of the saved view. This object has the following properties:
    - **`x`** *(array)*: One or more columns to use as the x axis in the visualization. (Specifying multiple columns is only applicable when using a Table visualization.). Each item in the array is an `object` with the following properties:
      - **`columnId`** *(string)*: The column identifier of the column.
      - **`granularity`** *(string)*: Which granularity to use when aggregating data, if this is a datetime column. Must be one of: `['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']`.
      - **`bins`** *(object)*: Specifies binning options for a numeric column. This object has the following properties:
        - **`binWidth`** *(number)*: The bin width for grouping data from this column.
    - **`y`**: One or more columns to use as the y axis in the visualization. (Specifying multiple columns is only applicable when using a Table visualization.). Each item in in the array is an `object` with the following properties:
      - **`columnId`** *(string)*: The column identifier of the column.
    - **`breakout`** *(object)*: Specifies a data breakout to display in the visualization. This object has the following properties:
      - **`columnId`** *(string)*: The column identifier of the column used for the breakout.
      - **`groups`** *(array)*: The list of values to group by. Each item in the array is an object with the following properties:
        - **`key`** *(['string', 'null'])*: The value to group by.
        - **`index`** *(number)*: The ordering to use when displaying this group (starting with 0).
        - **`color`** *(string)*: The color of this breakout group, in the format 'rgb(number, number, number)'.
    - **`filters`** *(array)*: Specifies filters that are applied by default in this view. Each item in the array is an object with one of the following formats:
      - _"Contains" filter_
        - **`columnId`** *(string)*: The column identifier of the column used for filtering.
        - **`contains`** *(string)*: Applies a "contains" filter with the specified value.
      - _"Values" filter_
        - **`columnId`** *(string)*: The column identifier of the column used for filtering.
        - **`values`** *(array)*: Filters on a list of values. The array should contain one or more `string` values.
      - _"Exclude values" filter_
        - **`columnId`** *(string)*: The column identifier of the column used for filtering.
        - **`values`** *(array)*: Filters to all data except the specified values. The array should contain one or more `string` values.
      - _"Range" filter_
        - **`columnId`** *(string)*: The column identifier of the column used for filtering.
        - **`range`** *(array)*: Applies a "range" filter. This array should contain exactly 2 strings. The first value is used as the lower bound, and the second value is used as the upper bound.
      - _"Inequality" filter_
        - **`columnId`** *(string)*: The column identifier of the column used for filtering.
        - **`gte`** , `**gt**`, `**lte**`, or `**lt**` (_string)_: Applies an inequality filter with the specified value.

### Dashboard

- Example

  ```yaml
  glean: '0.1'
  id: my-saved-view
  type: dashboard
  sections:

  - name: Sales
  - columns:
      - savedView: ./sales_view_1.yml
        ignoreDashboardFilters: true
        renderAsMetric: true
        metricLabel: Metric Example
        width: large
      - savedView: ./sales_view_2.yml
        legendPosition: top
      height: large
    filters:
      - columnId: fare
        lt: 30

  - name: Customers
    rows:
    - columns:
      - savedView: ./customers_view_1.yml
      - savedView: ./customers_view_2.yml
    breakoutSyncColumns:
      - columnId: payment_type
        savedView: ./customers_view_1.yml
  ```

- Properties
  - **`glean`** *(string)*: The Glean file format version.
  - **`name`** *(string)*: The user-visible name of this saved view.
  - **`type`** *(string)*: The type of this resource, which in this case should always be `dashboard`.
  - **`model`** *(string)*: The file path to the Data Model definition.
  - **`sections`** *(array)*: The list of dashboard sections. Each section is an object with the following properties:
    - `**name`\*\* _(string)_: The user-visible name of this section.
    - `**rows**` *(array)*: One or rows to display in this section. Each row is an object with the following properties:
      - `**height`\*\* _(string)_: Either `small`, `medium`, or `large`.
      - **`columns`** *(array)*: One or more columns to display in this section. Each column is an object with the following properties:
        - `**savedView**` _(string)_: The file path of the saved view definition to display in this column.
        - `**legendPosition**` _(string)_: The position of the chart legend when using an `area`, `bar`, `line` or `horizontal bar` chart.
        - `**ignoreDashboardFilters**` _(boolean)_: If set, section-level filters will be ignored for this chart.
        - `**renderAsMetric**` _(boolean)_: If set, this view will be rendered as a single metric instead of a chart.
        - `**metricLabel**` _(string)_: The label to show, if `renderAsMetric` is set.
        - `**width**` _(string)_: Either `small`, `medium`, or `large`.
      - **`filters`** *(array)*: Specifies the available filters for this section, and a default filter value if desired. Each item in the array is an object with one of the following formats:
        - _Empty filter_
          - **`columnId`** *(string)*: The column identifier of the column used for filtering.
        - _"Contains" filter_
          - **`columnId`** *(string)*: The column identifier of the column used for filtering.
          - **`contains`** *(string)*: Applies a "contains" filter with the specified value.
        - _"Values" filter_
          - **`columnId`** *(string)*: The column identifier of the column used for filtering.
          - **`values`** *(array)*: Filters on a list of values. The array should contain one or more `string` values.
        - _"Exclude values" filter_
          - **`columnId`** *(string)*: The column identifier of the column used for filtering.
          - **`values`** *(array)*: Filters to all data except the specified values. The array should contain one or more `string` values.
        - _"Range" filter_
          - **`columnId`** *(string)*: The column identifier of the column used for filtering.
          - **`range`** *(array)*: Applies a "range" filter. This array should contain exactly 2 strings. The first value is used as the lower bound, and the second value is used as the upper bound.
        - _"Inequality" filter_
          - **`columnId`** *(string)*: The column identifier of the column used for filtering.
          - **`gte`** , **`gt`**, **`lte`**, or **`lt`** (_string_): Applies an inequality filter with the specified value.
      - **`breakoutSyncColumns`** (_array_): Specifics a column breakout to sync across the charts in this section. Each item in the array is an object with the following properties:
        - **`savedView`** (_string_): The file path of the saved view with the breakout selections that you want to sync.
        - **`columnId`** (_string_): The column identifier of the column that has a breakout applied in the synced view.
