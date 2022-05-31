<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/16445a878e2d4e12af36241ce581345d?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

When possible, you should try to modify or extend an existing data model instead of adding new data models for each new analysis. This section shows you how to quickly add data if you're getting started, you should also check out [Data Models Overview](Data-Models-Overview.md) and [Data Modeling Best Practices](../../guides/data-modeling-best-practices.md)

!!! info "Preparing Data for Glean"

    Each Glean model is based on an underlying data table.  For more technical advice see the best practices section on creating [denormalized data tables](../../guides/data-modeling-best-practices.md#denormalize-your-data).

    If your data isn't quite in the right format in your database, it's possible to specify an underlying data query that will run as you explore data.

1. From your [project homepage](https://glean.io/app/){:target="\_blank"}, click `New Model`
2. Select the data connection you'd like to use
3. Select either an existing table or click `SQL Editor` to use a custom query
4. Click `Build Model` to create the initial data model (All date fields and a row count metric are added by default)
5. Edit the name of the data model at the top of the page
6. Add additional metrics and attributes by clicking `Add metric` and `Add Attribute` next to the name of the field
7. Create a SQL based custom metric by clicking `+ Add Custom Metric` (see [Metrics](Metrics.md) for more details)
8. Click `Save Model` then click `Open in Explore` to start exploring the data
