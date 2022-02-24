# Add Data Model

Adding data allows you to create a new data model in Glean.  If possible, you should try to modify or extend an existing data model instead of adding new data models.  This section shows you how to quickly add data if you're getting started, you should also check out [Data Models Overview](Data-Models-Overview) and [Data Modeling Best Practices](Data-Modeling-Best-Practices)

1. From your [project homepage](https://glean.io/app/), click `New Model`
2. **Select a data source** 
    
    Each Glean model is based on an underlying data table or spreadsheet.  The most automated and powerful way to add data to Glean is by using a SQL database. See [Database Connections](Database-Connections) 
    
    For more technical advice see the best practices section on creating [denormalized data tables](Data-Modeling-Best-Practices).
    
    - Using spreadsheets in Glean
        
        
    - Using a SQL query
        
        If your data isn't quite in the right format in your database, it's possible to specify an underlying data query that will run as you explore data.
        
3. Edit your data model
    1. Edit the name of the data model by clicking the edit button `✏️` next to the name
    2. Add dates to your data model see [Dates](https://www.notion.so/Dates-9299ed61c0a54f338965eec6b56a9117)
    3. Add metrics to your data model see [Metrics](Metrics)
    4. Add attributes to your data model see [Attributes](Attributes) 
4. Click `Publish`