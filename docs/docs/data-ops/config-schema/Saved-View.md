## Example
  ```yaml
  glean: "1.0"
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

## Properties
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
