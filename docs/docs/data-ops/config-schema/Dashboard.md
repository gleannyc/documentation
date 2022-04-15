## Example
  ```yaml
  glean: 0.1
  type: dashboard
  name: Sales

  globalFilters:
  - dataModel: ./orders.yml
    columnId: timestamp
    gte: 2022-01-01

  sections:
  - filters:
    - dataModel: ./orders.yml
      columnId: region
      values:
      - US
    rows:
    - blocks:
      - type: markdown
        text: "## Domestic"
    - height: 6
      blocks:
      - type: metric
        dataModel: ./orders.yml
        dataModelMetricId: revenue
        label: Total Revenue
        width: 4
      - type: savedView
        savedView: ./domesticOrdersChart.yml
        width: 8

  - filters:
    - dataModel: ./orders.yml
      columnId: region
      excludeValues:
      - US
    rows:
    - blocks:
      - type: markdown
        text: "## International"
    - height: 6
      blocks:
      - type: metric
        dataModel: ./orders.yml
        dataModelMetricId: revenue
        label: Total Revenue
        width: 2
      - type: metric
        dataModel: ./orders.yml
        dataModelMetricId: distinct_countries
        label: Unique Countries
        width: 2
      - type: savedView
        savedView: ./internationalOrdersChart.yml
        width: 8
  ```
## Properties
- **`glean`** *(\*string*): The Glean file format version.
- **`id`** *(\*string)*: The persistent identifier of this dashboard.
- **`type`** *(\*string*): The type of this resource. For dashboards, this is always `"dashboard"`.
- **`name`** *(\*string*): The user-facing name of this dashboard.
- **`sections`** *(\*array*): One or more **Section** objects.
- **`globalFilters`** *(array)*: List of **Filters** applied to all sections.

----

### Filters
Filters on dashboards work exactly like filters in saved views, but must include
the additional properties:

- **`dataModel`** *(\*string*): Path to a data-ops file containing a data model.
- **`columnId`** *(\*string)*: The column identifier of the column used for filtering.

Dashboards also support empty filters, where only `dataModel` and `columnId` are defined.
This will show as a blank filters for users to configure themselves.

----

### Sections
**Sections** are objects comprised of the following properties:

- **`rows`** *(\*array*): One or more **Rows** which each define a single row of content.
    - Glean may adjust the exact layout of rows based on screen size. For example, a single
    row may be broken out to better fit on a mobile device.
- **`filters`** *(array)*: List of **Filters** applied to charts and metrics within this section.

### Rows
**Rows** are objects comprised of the following properties:

- **`blocks`** *(\*array*): Between 1 and 6 **Blocks** which each define a piece of content in this row.
- **`height`** *(number)*: A number between 1 and 12 which defines the height of the row.
    - If omitted, this will default to a height value of 4.
    - This unit is dynamic. Glean adjusts how many pixels “one height unit" corresponds to based on the
    device's viewport size and resolution. Some general rules are as follows:
        - 2 = 1/6 of screen height
        - 4 = 1/3 of screen height
        - 6 = 1/2 of screen height
        - 12 = full screen height
    - If a row only contains text, this value is ignored, and the height of the row will
    automatically be set to exactly contain the text.

----

### Blocks
**Blocks** are objects which define a piece of content on a dashboard.
All blocks have the following properties:

- **`type`** *(\*string*): The type of this block. One of `“savedView”`, `“metric”`, `“markdown”`, or `“empty”`.
  Dependent on the type of the block, more properties may be required.
- **`width`** *(number)*: A number which defines the width of the block in its row.
    - The minimum width is `2`. The max total amount of width in a single row is `12`.
    - If omitted, blocks will default to splitting up avaliable space in a row equally.
    - Glean may adjust the width of a block to correctly fit its contents or scale better
      on different device sizes.

#### Saved View Blocks - **`“savedView”`**

Saved View Blocks display a visualization of data and require the following properties:

- **`savedView`** *(\*string*): Path to a data-ops file containing a saved view.
- **`label`** *(string)*: The label to display above this chart.
    - If omitted, this will default to the name of the saved view.
- **`ignoreDashboardFilters`** *(boolean)*: If true, this chart will not use filters
  from the global dashboard filters or its section.
    - If omitted, this will default to false.
- **`legend`** *(string)*: Set where the legend is placed when rendering this chart.
  One of "top”, "right”, "left”, "bottom”, “none” or “inherit”.
    - A value of “inherit” will set the legend setting to match what the saved view has set.
    - If omitted, this will default to “top”.
- **`axisLabels`** *(string)*: Set whether the axis of the chart are displayed.
  One of "show”, "hide”, or “inherit”.
    - A value of “inherit” will set the axis labels to match what the saved view has set.
    - If omitted, this will default to “inherit”.

#### Metric Blocks - **`“metric”`**

Metric Blocks display a single numeric result of evaluating a metric with a set of filters.

- **`dataModel`** *(\*string*): Path to a data-ops file containing a data model.
- **`dataModelMetricId`** *(\*string*): The ID of the metric column to evaluate.
  This metric must be defined on the associated `dataModel`’s `col` field.
- **`filters`** *(array)*: List of **Filters** applied when evaluating this metric.
    - When defining filters for a metric block, omit `dataModel`.
- **`label`** *(string)*: The label to show for this metric.
    - If omitted, this will default to the name of the configured `dataModelMetric`.
- **`ignoreDashboardFilters`** *(boolean)*: If true, this metric will not use filters
  from the global dashboard filters or its section.
    - If omitted, this will default to false.

#### Markdown Blocks - **`“markdown”`**
Markdown Blocks display text content, supporting markdown formatting.

- **`text`** *(\*string)*: Markdown content for this block.

#### Empty Blocks - **`“empty”`**
Empty blocks do not display anything and are invisible to users.
Empty blocks can be used (along with the `width` property) to create space
between two blocks in a row.

A block row comprised exclusively of empty blocks is invalid.
