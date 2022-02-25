# Attributes tray

The attributes tray is the control panel for your chart.  By default, there is one panel for each attribute in your data model in your attributes tray.  You can scroll left and right to reveal all of the attributes.  The attributes tray immediately allows you to profile your data as well as filter and breakout data.  There are a few actions which every attribute panel allows you to do:

1. Breakout an attribute as a series
2. Filter for specific attribute values
3. Profile each attribute immediately

There is also some type specific behavior for attributes.

## Hiding Attribute Panels

Some data models have many different attributes and before saving or sharing a view, you may want to tailor which attributes are saved into the view.  For this, you will want to hide attributes.  To hide an attribute:

1. From the right hand menu in the visualization page select the `Model` tab at the top
2. From the `Attributes` list you can select an eye icon to hide or reveal an attribute

## Attribute Filters

Attribute filters are applied across the entire visualization - filtering every other attribute, the numeric total and the chart for the values selected in the attribute pane

### Filtering state

To filter items in an attribute you need to put the attribute panel into the filter state:

1. Hover over an attribute
2. Select the [Filter](Filter)  button
3. Now select any item to filter to it.  Filtered items will appear with a checkmark next to them `✓`

!!! info

    Note that when you first put the attribute into a filter state, a filter is only applied once you start adding items from the list.

### Filter items directly

Alternatively, you can put an attribute panel into the filter state by filtering to a specific item in the list directly:

1. Right click any item in the attribute pane
2. Select Filter Item or Exclude Item from the dropdown menu

### Include versus exclude filter

There are two ways to filter data in an attribute pane:

- **Filter Items**: the default way to filter when you an attribute is in the filtering state.  You start with no items selected and you start adding items that you want to filter to your list, indicated by a checkmark `☑`.
- **Exclude Items**: when excluding items, all items are selected by default and you remove items from your list.  Excluded items won't have a checkmark and will have an empty box `☐`

If you would like to start excluding items (instead of including them), you can choose `Filter All` from the filter control:

1. Put the attribute in a filtered state
2. Choose the `Filter All` button to select every item
3. Now click items to start excluding them

<img src="/assets/Screen_Shot_2020-08-20_at_11.43.11_AM.png" alt="Attributes Tray" width="400" />

## Attribute Breakout

Adding an attribute as a breakout allows you to layer the attribute onto the current chart.  The attribute becomes a grouping of the chart.  This is a good way to see changes in the distribution of the attribute over time (or over another numeric interval).

To add an attribute as a breakout:

1. Hover over any attribute panel
2. Select the breakout button on the bottom of the panel [Breakout](Breakout)
3. To add and remove broken out items, just click on a row

## Sorting Attributes

By default, string attributes are sorted by a metric in descending order.  To change the order you can select the up and down arrows on a column heading `▲`.  

Some notes on sorting attributes:

- If there are a lot of unique items in your list, only the first subset of items are retrieved from the database.  Changing the sort order may trigger an additional database query to retrieve the new top of the list.
- If there are a lot of items in your list, it is possible to scroll all the way down and Glean will automatically pull additional items into the attribute pane as you keep scrolling.  This means that while we only fetch a subset of data at any given time, it will feel like you have access to every attribute.
- `NULL` values are sorted at the end of a list in descending order (and the top of a list in ascending order).
- Behavior of numeric fields is different than strings, see below.

## Numeric Attributes

Numeric attributes have a few distinct features and differences from the default behaviors of string attributes.

### Numeric Binning

Attributes are grouped into numeric buckets if binning is turned on for the attribute.  The beginning of the range is inclusive and the end value of the range is exclusive.  For example for a bucket that is `20 - 25` the bucket represents all items that are equal to or greater than twenty and less than twenty-five.  You can filter binned numeric data just like you would filter all other attributes and all values in buckets are filtered (or excluded) as you would expect.

### Sorting

Unlike string, numeric attributes are sorted by their numeric values.  This lets you easily see the numeric distribution of the attribute.

### Range Filters

It is possible to apply a numeric range filter to a numeric attribute by dragging a chart - see the filtering section for additional details.

If a range filter is applied, you can see which values are affected in the attribute panel, but it is not possible to change the range filter from the attribute panel.  This is because a range is incompatible with the idea of selecting specific range items.

## String Attributes

String attributes are alphanumeric attributes and can have very high cardinality (say, millions of unique items).  String attributes are searchable to make finding specific attributes easy.

To search for a specific item in a string attribute simply click the search icon on the top of a string attribute.

!!! info

    While searching through a string field is supported, Glean is not optimized for full-text document search.  This means that searching through human written comments and long documents is probably not a good idea (mostly it will be slow and potentially costly depending on how those documents are stored in your database).
