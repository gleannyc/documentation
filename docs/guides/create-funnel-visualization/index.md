# Guide: Create a Funnel Visualization

![conversion funnel with cohort breakout](hero.png)

Funnel charts are used to understand how far users progress through a conversion funnel, a series of pre-defined steps leading up to a conversion event.

Since each step preceeds the next, the user count is highest at the beginning and tapers down to the number of users who convert, creating a funnel shape.

Like [retention curves](../create-retention-curves/index.md), including user-level attributes, such as experiments and other cohorts, can be useful to compare effects on the conversion funnel.

For this walk-through, we're going to look at the user engagement on the tech news aggregation website Hacker News. The dataset is available on BigQuery's public datasets and is kept up to date.

## Prepare data

As with all tools you build in Glean, conversion funnels will be as powerful as the data model you produce for them. For large user tables, it probably makes sense to prepare this data in your data warehouse, but it's also possible to measure funnels on the fly using a SQL-based data model. See [Add Data Model](../../docs/data-modeling/add-data-model.md)

To prepare our funnel, we will define a set of steps in a funnel and then check whether a user made it to each stage.

| username     | cohort_year | post_count | stage_name     | in_stage |
| ------------ | ----------- | ---------- | -------------- | -------- |
| carlos@glean | 2020        | 30         | first_comment  | 1        |
| carlos@glean | 2020        | 30         | second_comment | 1        |
| carlos@glean | 2020        | 30         | fourth_comment | 1        |
| crys@glean   | 2021        | 3          | first_comment  | 1        |
| crys@glean   | 2021        | 3          | second_comment | 1        |
| crys@glean   | 2021        | 3          | fourth_comment | 0        |

```sql
with user as (
  select
    `by` as username,
    extract(YEAR from min(timestamp)) as cohort_year,
    count(distinct id) as comment_count
  from
    quickstart.hacker_news_activity
  where
    type = 'comment'
  group by
    1
),
stage as (
  select 'first_comment' as stage_name, 1 as required_min_count
  union all
  select 'second_comment' as stage_name, 2 as required_min_count
  union all
  select 'fourth_comment' as stage_name, 4 as required_min_count
  union all
  select 'sixteenth_comment' as stage_name, 16 as required_min_count
  union all
  select 'twohundredfiftysixth_comment' as stage_name, 256 as required_min_count
)

select
  username,
  cohort_year,
  if(length(username)>10,'long','short') as cohort_nameLength,
  comment_count,
  stage_name,
  IF(comment_count >= required_min_count, 1, 0) as in_stage
from
  user, stage
where cohort_year>extract(YEAR from current_date()) - 5
```

A few notes on the resulting columns:

- **username** - self-explanatory, this is string representing our user
- **cohort_year** - this is the year a user first commented
- **cohort_nameLength** - whether a username is longer than 10 characters
- **comment_count** - the total number of comments by a user
- **stage_name** - the name of the funnel stage. in this example, it is the number of comments made by the user
- **in_stage** - a row is created for every stage for every user. `in_stage` indicates whether the user is in the stage

## Create the data model in Glean

1. From the data exploration page, click [Add Data Model](Add-Data-Model)
2. Either select your prepared retention table from your data warehouse or click `SQL Query` and enter a SQL query similar to the one above as the basis for your model. Click `Create Model`
3. Setup your data model in Glean:
   - Add `cohort_year`, `cohort_nameLength`, and `comment_count` as attributes along with any experimental cohort attributes you prepared in your data.
   - Add **User Count** as a custom metric, this will be the metric used in the visualizations
     ```sql
     COUNT(DISTINCT IF(in_stage = 1, username, null))
     ```
4. Click `Publish`
5. Click `Explore`

## Create funnel view

### Create funnel bar chart

![conversion funnel horizontal bar chart](hbar.png)

1. Change the chart type to `Horizontal Bar`
2. Select `stage_name` as the rows
3. Select `user count` as your metric
4. Click into the `control` tab on the right-hand side

   1. Select `Show Bar Labels`
   2. WIP Select `Show percentage of max`
   3. Sort rows by `user count` descending

5. Select `Breakout` or `Filter` on a cohort attribute to see how different cohorts progress through the funnel.

### Create funnel table

The table view allows you to calculate and display additional metrics for your funnel.

![conversion funnel pivot table](table.png)

1. Change the chart type to `Table`
2. Select `stage_name` as the rows
3. Select `user count` as your metric
4. WIP Select `Add a Calculation` in the metric dropdown
   1. rolling diff to add the absolute number of users not making it to the next stage
   2. rolling delta to see the percentage
5. Click into the `control` tab on the right-hand side
   1. Add a visualization with type `Bar`
   2. Sort rows by `user count` descending

### Create funnel pivot table

The pivot table view allows you to see funnels broken out by attribute, in parallel.

![conversion funnel pivot table](pivot.png)

1. Change the chart type to a `Pivot`
2. Select `stage_name` as the rows
3. Select `user count` as your metric
4. Click into the `control` tab on the right-hand side
   1. Add a visualization with type `Bar`
   2. Sort rows by `user count` descending
5. Select `Columns` or `Filter` on a cohort attribute to see how different cohorts progress through the funnel.

## enhancements required

- [add rolling diff, rolling delta to Table calculations](https://github.com/gleannyc/glean/issues/3275)
- [add option to display "percentage of max" alongside alongside metric](https://github.com/gleannyc/glean/issues/3274)
