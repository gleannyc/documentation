---
title: Quickstart
hide:
  - navigation
  - toc
---

This guide will take you from defining data models to exploring data and sharing data with your team.

Once you get access to Glean, you will be invited to login to a project. Users can belong to multiple projects, but data cannot be shared between projects. So users, permissions, database connections, data models and every other resource is isolated in the context of a project. Typically your entire organization can be managed in a single project.

## 1. Add a database connection

Also see [database connections](../../docs/project-management/database-connections.md) for configurations specific to different database types.

!!! warning "Firewall Configuration"

    Your database must be accessible from our systems at `18.210.29.198`

![modal to add database connection](../quickstart/db-conn-modal.png){: style="max-width:75%"}

1. [Go to the `Settings` page](https://glean.io/app/p/settings){:target="\_blank"}
2. Click `+ New Database Connection`
3. Select the type of database; either Athena, BigQuery, Snowflake, Postgres or Redshift
4. Enter the credentials according to your type of database
5. Click `Test` to test your connection
6. Click `Add` to complete the process

## 2. Define a data model

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/16445a878e2d4e12af36241ce581345d?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Every chart and analysis is based on a Glean data model. A data model is a table (or virtual table).

1.  [Go to your `project homepage`](https://glean.io/app/) and click `New Data Model`
2.  Select a database connection, click on a table name, and click `Build Model`

    !!! info "Using a SQL Query"

        Each Glean data model is based on an underlying data table. If the data in your data isn't quite in the right format, it's possible to specify an underlying query as the basis for your data model.

3.  Define the data model

    1. Edit the name of the data model at the top of the page
    2. Add additional metrics and attributes by clicking `Add metric` and `Add Attribute` next to the name of the field
    3. Create a SQL based custom metric by clicking `+ Add Custom Metric` (see [Metrics](../../docs/data-modeling/Metrics.md) for more details)

4. Click `Save Model` then click `Open in Explore` to start exploring the data

## 3. Start interacting with your data

![data explorer view](../quickstart/explore.png){: style="max-width:75%"}

1. [Go to the `Data Models` page](https://glean.io/app/p/data-models){:target="\_blank"}
2. Click on the name of the data model we just created

!!! success "Congratulations"

    You're ready to begin interacting with your data

    Next, [learn how to use the `Attributes Tray`](../../docs/visualizing-data/Attributes-Tray.md) to filter and breakout your data
