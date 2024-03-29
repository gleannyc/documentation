Glean supports adding calculations such as rolling averages to your metrics.  You can add calculations when you are exploring any data model or saved view directly from the metrics dropdown.

## Add a calculation to a saved view

1. Go to a `saved view` or start exploring any `data model`
2. Click the metrics dropdown - the `y` or `metric` dropdown depending on the chart type
3. Click `Add Calculation`

    !!! info

        If a breakout is applied, the calculation will be applied to each individual breakout series, if no breakout is applied a second series will be added so you will see your metric side-by-side with the new calculation

4. A new menu will open allowing you to name your calculation and edit the calculation's options.

## Calculation types

| Calculation | Options |
| --- | --- |
| **Rolling Average**<br>Useful for helping smooth out noise in a dataset<br><br>**Rolling Sum**<br>For looking at the cumulative sum of a metric | *Periods* - the size of the moving window - the number of periods to include in the calculation.<br><br>*Minimum periods* - the minimum number of observations required for the calculation to be defined for a certain point.  For example if you take a seven day moving average, but there are only five days of data before this date, then the calculation will not be defined for that day.  Defaults to the same as periods<br><br>*Anchor* - Whether to set labels at the center of the window or at the edge. Values are Trailing Centered or Leading.  For a timeseries chart, you will usually want this this to be a trailing average or sum. |
| **Difference**<br>For evaluating the absolute change over time.<br><br>**Percent Change**<br>For looking at the proportional change over time.|  |
| **Constant Value**<br>Useful for fixed goals or other fixed values for comparison| *Value* - numeric value to chart as a fixed line. |
|  | More to come!  Contact us if you have special requests. |
