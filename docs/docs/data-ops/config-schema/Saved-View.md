## Examples

The following is an example of a saved view `my_saved_view.yml` of a
simple bar chart.

```yaml
glean: "1.0"
id: my-saved-view
type: saved_view
name: My Saved View
model: "../my_model.yml"
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

This example shows a saved view using a binned numeric column as its x-axis.

```yaml
glean: "1.0"
id: my-saved-view
type: saved_view
name: My Saved View
model: "../my_model.yml"
visualization:
  chartType: bar
data:
  x:
    columnId: numeric_column
    bins:
      binWidth: 0.2
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

This example shows a table with multiple metrics:

```yaml
glean: "1.0"
id: my-saved-view
type: saved_view
name: My Saved View
model: "../my_model.yml"
visualization:
  chartType: table
data:
  x:
    columnId: numeric_column
    bins:
      binWidth: 0.2
  y:
    - columnId: metric_sum
    - columnId: metric_avg
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

- **`glean`** *(string - required)*: The Glean file format version.
- **`name`** *(string - required)*: The user-visible name of this saved view.
- **`type`** *(string - required)*: The type of this resource, which in this case should always be `saved_view`.
- **`grn`** *(string)*: If specified, this config will be applied to an existing resource with the matching [GRN](../GRNs.md),
  instead of managing a new Saved View.
- **`model`** *(string - required)*: A file path to a Data Model, or a [GRN](../GRNs.md) which references a Data Model.
- **`visualization`** *(object - required)*: A **Visualization** object configuring how the view appears.
- **`data`** *(object - required)*: A **Data Config** object configuring what data is collected for this view.
- **`hidden`** *(array)*: A list of attribute column identifiers to hide in this view.

---

### Visualization

Defines how this chart appears.

- **`chartType`** *(string - required)*: The chart type. Must be one of: `['area', 'bar', 'line', 'table', 'pivot', 'horizontal bar']`.
- **`legend`** _(string)_: The position of the chart legend when using an 'area', 'bar', 'line' or horizontal bar chart. Must be one of: `['none', 'top', 'right', 'bottom', 'left']`
- **`missingValuesBehavior`** _(string)_: Whether to show missing values for a 'bar' chart. Must be one of: `['show', 'hide']`
- **`padding`** _(string)_: The amount of table padding to apply in a 'pivot' or 'table' chart. Must be one of: `['compact', 'default']`
- **`showAxisLabels`** _(boolean)_: "Whether to show the axis labels when using an 'area', 'bar', or 'line' chart.
- **`showBarLabels`** _(boolean)_: Whether to show labels in a 'horizontal bar' chart.
- **`showOther`** *(boolean)*: Flag indicating whether unfiltered items should be displayed in
  an 'Other' group when a filter is active.
- **`stack`** *(string)*: The stacking type (when using an 'area', 'bar', or 'line' chart).
  Must be one of: `['stack', 'unstack', 'stack100pct']`.
- **`tableCellFormatting`** _(array)_: An array of table cell formatting rules. Each item in the array is an `object` with the following properties:
    - **`calculation`** _(string - required)_: The calculation type of the cell. Must be one of: `['columnPercentTotal', 'columnPercentMax', 'rowPercentMax', 'rowPercentTotal']`
    - **`color`** _(string - required)_: The color to apply to each cell. Must be one of: `['green', 'red', 'blue', 'none']`
    - **`columnId`** _(string)_: The model metric column ID the rule is applied to. If both this and metricFormulaName are omitted, this rule applies to all columns.
    - **`metricFormulaName`** _(string)_: The name of the calculated metric the rule is applied to. If both this and columnId are omitted, this rule applies to all columns.
    - **`showPercentage`** _(boolean)_: Whether to show the percentage label in each cell.
- **`tableVisualization`** _(array)_: An array of table cell visualization rules. Each item in the array is an `object` with the following properties:
    - **`calculation`** _(string - required)_: The calculation type of the cell. Must be one of: `['columnPercentTotal', 'columnPercentMax', 'rowPercentMax', 'rowPercentTotal']`
    - **`maxWidthPixels`** _(string - required)_: The maximum width of the bar in pixels.
    - **`heightPixels`** _(string - required)_: The height of the bar in pixels.
    - **`columnId`** _(string)_: The model metric column ID the rule is applied to. If both this and metricFormulaName are omitted, this rule applies to all columns.
    - **`metricFormulaName`** _(string)_: The name of the calculated metric the rule is applied to. If both this and columnId are omitted, this rule applies to all columns.
    - **`type`** _(string)_: The type of visualization to apply to the cell. Currently the only supported value is `bar`.
    - **`labelPlacement`** _(string)_: The placement of the label in the cell. Must be one of: `['right', 'floating', 'none']`.

### Data Config

Information about the data of the saved view.

- **`x`** *(array)*: One or more columns to use as the x axis in the visualization. (Specifying multiple columns is only applicable when using a Table or Pivot visualization). Each item in the array is an `object` with the following properties:

    - **`columnId`** *(string - required)*: The column identifier of the column.
    - **`granularity`** *(string)*: Which granularity to use when aggregating data, if this is a datetime column. Must be one of: `['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second']`.
    - **`bins`** *(object)*: Specifies binning options for a numeric column. This object has the following properties:
          - **`binWidth`** *(number)*: The bin width for grouping data from this column.
    - **`y`**: One or more columns to use as the value for the main axis in a cartesian visualization, or the values in tables. Each item in in the array is an `object` with the following properties:
          - **`columnId`** *(string - required)*: The column identifier of the column.
    - **`breakout`** *(object)*: An optional **Breakout** object, specifying how the data should be broken out by color.
    - **`trellis`** *(object)*: An optional **Breakout** object, specifying how data should be broken out into separate charts.
    - **`filters`** *(array)*: An optional list of **Filters** to apply to data.
    - **`sort`** *(array)*: A list of columns to sort by. Each item in the array is an object with the following properties:
        - **`order`** *(string - required)*:  The direction to sort by. Must be one of: `['asc', 'desc']`
        - **`columnId`** *(string)*: The column identifier of the column to sort by.
        - **`metricFormulaName`** *(string)*: The name of the calculated metric to sort by.

### Breakout

Defines a data breakout to to display in the visualization.

- **`columnId`** *(string - required)*: The column identifier of the column used for the breakout.
- **`groups`** *(array - required)*: The list of values to group by. Each item in the array is an object with the following properties:
    - **`key`** *(string - required)*: The value to group by.
    - **`color`** *(string - required)*: The color of this breakout group, in the format 'rgb(number, number, number)'.
    - **`index`** *(number - required)*: The ordering to use when displaying this group (starting with 0).

### Filters

All filters require the following property to specify the column to filter on:

- **`columnId`** *(string - required)*: The column identifier of the column used for filtering.

You can use one of the following properties on the filter to define the filtering condition:

- **`contains`** *(string)*: Applies a "contains" filter with the specified value. Only for string attributes.
- **`values`** *(array)*: Filters to an allowed set of string values.
  The array should contain one or more `string` values.
- **`range`** *(array)*: Applies a "range" filter. This array should contain exactly 2 values.
  The first value is used as the lower bound, and the second value is used as the upper bound.
- **`gte`** _(value)_: Filter only allows values greater than or equal to the provided value.
- **`gt`** _(value)_: Filter only allows values greater than the provided value.
- **`lte`** _(value)_: Filter only allows values less than or equal to the provided value.
- **`lt`** _(value)_: Filter only allows values less than the provided value.
- **`gte`** _(value)_: Filter only allows values greater than or equal to the provided value.

When filtering string attributes, use string values. For numeric attributes, use number values.
For date attributes, you can specify a date in the format `'YYYY-MM-DD'`, or define a relative date
with an array of the shape `[offset, unit]`. For example, a relative date of 1 year before now would
look like `[-1, 'year']`.
