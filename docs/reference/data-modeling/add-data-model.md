When possible, you should try to modify or extend an existing data model instead of adding new data models for each new analysis.  This section shows you how to quickly add data if you're getting started, you should also check out [Data Models Overview](/Docs/data-modeling/Data-Models-Overview) and [Data Modeling Best Practices](/Docs/data-modeling/Data-Modeling-Best-Practices)

1. From your [project homepage](https://glean.io/app/), click `New Model`
2. Select a data source
    
    Each Glean model is based on an underlying data table.  For more technical advice see the best practices section on creating [denormalized data tables](/Docs/data-modeling/Data-Modeling-Best-Practices).
    
    - Using spreadsheets in Glean
        
        
    - Using a SQL query
        
        If your data isn't quite in the right format in your database, it's possible to specify an underlying data query that will run as you explore data.
        
3. Edit your data model
    1. Edit the name of the data model by clicking the edit button `✏️` next to the name
    2. Add dates to your data model
    3. Add metrics to your data model see [Metrics](/Docs/data-modeling/Metrics)
    4. Add attributes to your data model) 
4. Click `Publish`
