Dashboard filters can be used to filter multiple charts or metrics at once.
You can specify the default value for each filter that you add, or leave it
blank to allow viewers to specify the filter only when they wish to.

If there are specific charts or metrics that you would like the filters to ignore,
you can check the "Ignore Dashboard Filters" setting in their configuration menu.

## Editing Filters
Filters can be added to the dashboard globally or to any section once there are
charts or metrics which can be filtered. Click the `+` button then select the
attribute or timestamp you wish to filter on. You can remove a filter by clicking
the `X` icon next to it.

You can click one a specific filter to edit its value. When editing a dashboard,
any value set here will become the default value for the filter when viewers
load the dashboard.

## Filter Hierarchy
Filters exist at three levels. Global filters, section filters, and filters
defined directly within the saved views or metrics.

<!-- this concept is confusing and this _probably_
isn't the clearest way to explain it -->
Section filters take precedence over global filters. Section and global filters
both take precendence over saved view or metric filters.

## Filter Synchronization
Dashboard filters are automatically synchronized based on name. For example, if
you have two data models, each with a `customer_id` attribute, you only need to
add one `customer_id` filter to the dashboard, and it will filter both data
models by the provided value.
