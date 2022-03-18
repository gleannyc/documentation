## Trigger a Build

A build will connect to your repository, detect all of the Glean [configuration files](index.md) in your repository and create, update, and delete resources to make glean consistent with the configuration:

1. Navigate to the `DataOps` page using the link on the navigation side bar
2. Click the `Build` button on the top right to create a new build
3. Configure your build and click Build.  If any fields are left empty, Glean will use the default values specified on the `Version Control` settings page.
4. You can view the summary of errors, warnings and changes by clicking the build from the build list.

!!! warning 

    We recommend always first creating a Preview Build to see which resources will be affected prior to running a Deploy.  The build process will automatically delete and create resources in Glean to leave your project in a consistent state.  For example, if you delete a column in a model configuration file, all saved views that refer to that column will be automatically deleted (as happens if you delete a column through the user interface).


## The build process

Here is a high-level description of what actually happens during the build process:

- **Create resources.** For models that you check in that do not currently exist, the model is created from scratch from your configuration file and from the database.  This means that the base table and all the columns must still exist in the database for the build to succeed.
- **Update resources.** If a column is changed, it will be updated in all dependent items (regardless of whether the dependent items were also checked in) - so things like name changes should be correctly reflected.
- **Clean up resources.** If any columns or models are deleted, all dependent items that relied on that column or model will also be deleted.
- **Smoke Test.** Once the model is built, a single aggregate analytical query will be run against the database to make sure that data aggregation can still be run against the model.

If there is an error while deploying a data model, the build process will revert to the previous version of that model, and all dependent resources of that model will not be updated.

## Glean Configuration Files

Glean supports configuration files written in YAML or JSON. A Glean Build will attempt to validate every file in the specified path with a `.yml` or `.json` extension. 

!!! warning

    While this feature is in beta, it is possible we may need to introduce breaking changes to the Glean configuration file format. In these cases we will give advanced warning and  assist beta partners with any necessary migrations.


### Exporting configuration files

An easy way to get started building a configuration file is to export it from an existing Glean resource.

- Data Models: Navigate to the [Data Models](https://glean.io/app/p/data-models) page, click the Edit icon for one of your Data Models, and then click the `View DataOps Config File` button.
- Saved Views: On any Explore page, click the three dots in the top-right corner of the chart area, and then click `Export Saved View Config File`.

You will likely want to adjust some values in the configuration files after exporting to match your team's preferences and local environment, such as column names and paths to other resources.

### Glean model configuration files

Glean files are intended to map to the options available in the data model user interface (see [Data Models Overview](../data-modeling/Data-Models-Overview.md)). Full documentation of the model configuration file can be found [here](DataOps-Configuration-Schema.md).

The following is an example of a data model `my_model.yml`:

```yaml
glean: '1.0'
name: My Data Model
source:
  connectionName: Production BigQuery
  physicalName: test_table
cols:
- id: metric_sum
  type: metric
  physicalName: value1
  name: SUM VALUE
  aggregate: sum
- id: label1
  type: attribute
  physicalName: label1
- id: secondary_event_date
  type: datetime
  physicalName: secondary_event_date
  primaryDate: true
```

The following data model uses a sql statement instead of an underlying table. It also uses sql to build a custom metric, daily_active_users:

```yaml
glean: '1.0'
name: My Data Model
source:
  connectionName: Production BigQuery
  sql: select * from test_table
cols:
- id: metric_sum
  type: metric
  physicalName: value1
  name: SUM VALUE
  aggregate: sum
- id: daily_active_users
  type: metric
  name: Daily Active Users
  sql: COUNT(DISTINCT user_id) / COUNT(DISTINCT login_date)
```

### Glean saved view configuration files

Full documentation of the saved view configuration files can be found [here](DataOps-Configuration-Schema.md).

The following is an example of a saved view `my_saved_view.yml`

```yaml
glean: '1.0'
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
    - '2014-01-01'
    - '2017-01-01'
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

Here are a few other Saved View examples to help get you started:

```yaml
glean: '1.0'
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
    - '2014-01-01'
    - '2017-01-01'
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

```yaml
glean: '1.0'
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
    - '2014-01-01'
    - '2017-01-01'
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
