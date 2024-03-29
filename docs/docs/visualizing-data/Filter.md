Filtering data allows you to remove rows from your data results so you can drill in on a subset of your data. By design, you can click and filter-down into any data in Glean. This means there are lots of ways to filter data and we'll walk you through all of those here.

## Filtering an attribute panel

The fastest way to filter data is by using attribute panels. See the [Attributes tray](Attributes-Tray.md) page for lots of details on how to filter data from the attribute panels.

## Filtering from a chart

Charts generally support two types of filtering: 1) filtering by dragging chart areas and 2) filtering by clicking items in a chart. Both of these are described in the [Chart Interactions](Chart-Interactions.md) section.

## Date filter control

While you can use a drag filter to drag to a time range eg. a specific month or series of months. Sometimes you want more control over - picking specific days (or times) to filter to. To do this, you can filter for a very specific range with the date filter control:

1. In the control pane, click the `Configuration` button
2. If the current chart supports the date control, you will see it listed at the top of the configuration. Click the date range to open the date filter control.
3. **Relative filters:** You can either select a relative time filter (eg. 6 months) which will filter for the last six months.
4. **Exact time filter:** selecting exact dates in the calendar view will limit to a fixed timeframe.

!!! info

    When data updates, relative time filters will slide over time while fixed time filters will be fixed in time.  So if you filter to September 1st through September 8th, you'll always be looking at that one week of data.  If you filter for 1 week, you'll always see the most recent one week.

## Array filter control

Array filters are used to narrow down data based on specific elements within an array. They are applied on the items in the array before grouping the data. For example, let's say you have a dataset of customer contact events, and each event has an array field of all the associated campaigns. When you filter the array for a specific campaign, you will be able to see all the events that include that campaign. If you filter for multiple campaigns, you can choose whether you want to see events associated with *all* of the campaigns or events associated with *any* (at least one) of the campaigns. You can also filter for events that do not contain one or multiple campaigns. But be careful, because if you choose *does not contain all*, you are only excluding events with *all* of those campaigns. Events associated with some but not all of them will still appear in your results. You may want to use the *does not contain any* filter, instead.

## Viewing all filters

There are two ways to view all filters and remove any filters that are applied.

### Configuration pane

1. In the control pane, click the `Configuration` button
2. The Filter section will list all filters that are applied
3. Optionally click the `x` on a filter to remove it

### Top Control

The top control will always show you how many columns are filtered.

1. From the top control bar will always show you how many filters are applied with a number in parentheses. Click the filter label to open the list of filters
2. Clicking an individual column will remove the filter.
