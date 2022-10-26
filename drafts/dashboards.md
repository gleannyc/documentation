- Example
  ```yaml
  glean: "1.0"
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
  - **`model`** *(string)*: The file path to the data model definition.
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
