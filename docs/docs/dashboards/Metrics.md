Drag the number icon from the toolbar onto your dashboard to add a new metric
to the dashboard. Hover over the metric and click the cog icon to edit it. Want to dig deeper into your data? Click on any metric tile when in view mode to see your metric in Explore.

![Adding metric to dashboard](imgs/metric-tile.gif)

## Text labels

**Heading:** The label shown under the value of this metric.

## Data settings

### Filters

**Adding Filters:** Click the + icon in the "Filters" section to add filters to your metric. These filters will only apply to this metric, and will not be editable by viewers.

**Updating Filters:** Click on individual filter chips in the "Filters" section to edit or delete filters that exist on a metric.

**Ignore Dashboard Filters:** Check this box if you want this metric to ignore
[dashboard filters](Filters.md). When this is set, only the filters specified
on the metric will be used.

### Metric Value

Metrics can be calculated as either **Simple Metrics** or **Relative Comparison** metrics. **Simple Metrics** calculate a value across _all_ data in a filtered range whereas **Relative Comparison** metrics calculate a value over specific periods of data so you can see a metric value for the last week, month, etc.

#### Simple Metrics

**Metric Value:** Choose a [data model](../data-modeling/Data-Models-Overview.md) to select a metric from, then a metric within that data model to display the value of.

**Sparkline:** Click the toggle to enable or disable a sparkline visualization of your metric. Select a datetime or numeric attribute to plot the metric value against and adjust the granularity or bin size to see trends week to week, month to month, etc.

#### Relative Metrics

**Metric Value:** Choose a [data model](../data-modeling/Data-Models-Overview.md) to select a metric from, then a metric within that data model. Then select the datetime or numeric attribute that you want to aggregate the metric over and adjust the granularity or bin size to see values over the most recent week, month, etc of your dataset.

**Sparkline:** Click the toggle to enable or disable a sparkline visualization of your metric. Values will be plotted over the attribute you've selected to calculate the metric.

**Comparison Text:** Click the toggle to enable or disable comparisons. When enabled the tile will display the difference between the value for the most recent period and the prior period in your data. For example, if you have your relative metric set to show user count over a month enabling this feature will show you the difference between users this month and last month.

## Formatting

**Up/Down Colors:** If the metric is a **Relative Comparison** metric with comparison text enabled you'll be able to customize how negative and positive differences are displayed. Simply click into a color and change the values to a new color code. Positive differences will be displayed in the Up color and negative differences will be displayed in the Down color.
