# Add Data Model

Adding data allows you to create a new data model in Glean.  If possible, you should try to modify or extend an existing data model instead of adding new data models.  This section shows you how to quickly add data if you're getting started, you should also check out [Data Models Overview](Data%20Models%20Overview%206502d101e06349ee9097db5d11c39243.md) and [Data Modeling Best Practices](Data%20Modeling%20Best%20Practices%20914e2700795d4c6c8df51563512ffb2a.md)

1. From your [project homepage](https://glean.io/app/), click `New Model`
2. **Select a data source** 
    
    Each Glean model is based on an underlying data table or spreadsheet.  The most automated and powerful way to add data to Glean is by using a SQL database. See [Database Connections](Database%20Connections%20d7f279247adc4a548b1a3642a3cbba2b.md) 
    
    For more technical advice see the best practices section on creating [denormalized data tables](Data%20Modeling%20Best%20Practices%20914e2700795d4c6c8df51563512ffb2a.md).
    
    - Using spreadsheets in Glean
        
        
    - Using a SQL query
        
        If your data isn't quite in the right format in your database, it's possible to specify an underlying data query that will run as you explore data.
        
3. Edit your data model
    1. Edit the name of the data model by clicking the edit button `✏️` next to the name
    2. Add dates to your data model see [Dates](https://www.notion.so/Dates-9299ed61c0a54f338965eec6b56a9117)
    3. Add metrics to your data model see [Metrics](Metrics%20a3e540316d0040ea9787ef2c30cb7ab3.md)
    4. Add attributes to your data model see [Attributes](Attributes%20a077c564b4ac467c8794cbbcdc811f7b.md) 
4. Click `Publish`