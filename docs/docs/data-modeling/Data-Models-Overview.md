!!! info "[Direct link to your Glean Data Models]({{ glean_url }}/app/p/data-models)"

Data models in Glean allow you to define how your organization will measure, track and explore data. Defining the logic for your analytics upfront allows your users to dig in and analyze data without writing code or worrying about whether they can trust their results. This declarative workflow allows the analyst and data team to manage how you think about your business and Glean will build a user interface automatically that helps you explore that data.

## Creating and Editing a Data Model

There are two places where you will encounter and configure data models: when you first Add Data to the data model and by editing the data model.

**Add a data model**

See [Add Data Model](add-data-model.md) to see how to setup your first data models.

**Editing a data model**

1. Select the [More](../visualizing-data/Chart-Menu.md) button on the top right-hand of the chart.
2. Select `Edit Data Model`

## Why use Data Models?

One data model will result in many charts and analyses that will be built off of it. In most tools you write SQL (or some other code that gets you to a small dataset) and you build a visualization on that specific code. By specifying a data model first, we allow users that don't know SQL (or just don't have the time to write SQL) to dig into the data.

More importantly, defining your data model will allow you to avoid having multiple versions of the same measurements. Two users looking to answer a single question will end up with the same chart - which is rarely the case in conventional data visualization.

!!! info "Consolidate Data Models"

    Don't create a new data model for each chart or analysis you produce.  For the most part, you should try to reuse data models and extend and expand on them when you want to produce a new analysis (instead of starting from scratch)

## The Components of a Data Model

Data models have three components, there are brief descriptions below or you can click each component to read an entire page about these components.

- [Metrics](Metrics.md)

  Metrics are measurements that go up and down over time. They are numeric and aggregate your data (like a count or a sum).

- Dates

  Dates help you track your metrics over time. Select a primary date by clicking the pencil next to the date column and toggling the `Make Primary Date` checkbox to on. Your primary date this will act as the default for tracking all metrics in the data model.

- [Attributes](../visualizing-data/Attributes-Tray.md)

  Attributes allow you to filter and group data in Glean. Grouping and filtering attributes helps you understand differences in metrics.
