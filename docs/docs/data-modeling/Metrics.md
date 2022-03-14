Metrics are measurements that can go up and down over time.  Each metric should map to a measurement of a process or workflow in your organization.  Counts of events, revenues and cycle times are good examples of metrics you may want to add to your data model.

You will setup and update metrics from the [Add Data Model](/Docs/getting-started/Add-Data-Model) workflow.

## Types of Metrics
|Name          |Input Column Type       |Description                                                                    |
|--------------|------------------------|-------------------------------------------------------------------------------|
|row count     |No input column required|Count of rows                                                                  |
|custom metric |No input column required|A SQL-based custom aggregation, see Custom SQL Metrics for more details        |
|count         |String or Numeric       |SQL count() over a field - counts the number of times the field is not NULL    |
|count distinct|String or Numeric       |SQL count(distinct ) - counts the number of unique, non-null values in a column|
|min           |Numeric                 |SQL min() - finds the minimum value of a column                                |
|max           |Numeric                 |SQL max() - finds the maximum value of a column                                |
|avg           |Numeric                 |SQL avg() - finds the arithmetic mean of a column                              |

## The row count metric

The row count metric is added by default to a data model and can't be removed.  This is intentional - see the best practices for defining this metric in the [Data Modeling Best Practices](../../guides/data-modeling-best-practices.md)

## Column Aggregations

The simplest type of metric.  See table above for which functions you can run on specific metrics.

To add a column aggregating metric:

1. Goto the [Add Data Model](add-data-model.md)  workflow by creating a new data model or editing an existing model
2. Click the column from the Source data on the left that you would like to aggregate
3. From the dropdown menu, select `Metric` - the column is added to the data model in the `Metrics` section
4. Select the type of aggregation from the dropdown, see aggregation types above
5. The name metric will have a default name like "sum my_column" which you can change

## Custom SQL Metrics

Custom SQL metrics allow you to have more involved custom aggregations in Glean like weighted averages or proportions and other formulas.  You can define a custom metric as any [aggregating function](https://www.datacamp.com/community/tutorials/aggregate-functions-sql) that results in a numeric value.  To add a custom metric:

1. Goto the [Add Data Model](add-data-model.md)  workflow by creating a new data model or editing an existing model
2. Under the Metrics section click the `Add` button and select `Custom Metric`
3. Click the pencil `✏️` to change the formula to any aggregating sql expression
