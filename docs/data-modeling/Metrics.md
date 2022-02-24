# Metrics

Metrics are measurements that can go up and down over time.  Each metric should map to a measurement of a process or workflow in your organization.  Counts of events, revenues and cycle times are good examples of metrics you may want to add to your data model.

You will setup and update metrics from the [Add Data Model](Add-Data-Model) workflow.

[Types of Metrics](Metrics-a3e540316d0040ea9787ef2c30cb7ab3/Types-of-Metrics-d548877c029b4c37a82767a310f86c55.csv)

<aside>
<img src="https://glean.io/img/icons/info-sign.svg" alt="https://glean.io/img/icons/info-sign.svg" width="40px" /> ***The row count metric**
The row count metric is added by default and can't be removed.  This is intentional - see the best practices for defining this metric in the [Data Modeling Best Practices](Data-Modeling-Best-Practices)

</aside>

## Column Aggregations

The simplest type of metric.  See table above for which functions you can run on specific metrics.

To add a column aggregating metric:

1. Goto the [Add Data Model](Add-Data-Model)  workflow by creating a new data model or editing an existing model
2. Click the column from the Source data on the left that you would like to aggregate
3. From the dropdown menu, select `Metric` - the column is added to the data model in the `Metrics` section
4. Select the type of aggregation from the dropdown, see aggregation types above
5. The name metric will have a default name like "sum my_column" which you can change

## Custom SQL Metrics

Custom SQL metrics allow you to have more involved custom aggregations in Glean like weighted averages or proportions and other formulas.  You can define a custom metric as any [aggregating function](https://www.datacamp.com/community/tutorials/aggregate-functions-sql) that results in a numeric value.  To add a custom metric:

1. Goto the [Add Data Model](Add-Data-Model)  workflow by creating a new data model or editing an existing model
2. Under the Metrics section click the `Add` button and select `Custom Metric`
3. Click the pencil `✏️` to change the formula to any aggregating sql expression