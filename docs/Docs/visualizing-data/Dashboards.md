# Dashboards

Adding a custom dashboard allows Glean users to create a view with several different charts configured in a custom layout.

Glean's core visualizations and saved views will replace 80% of the custom dashboards you would spend time building in other tools.  You should create a custom dashboard when the core views are not sufficient and you need more configurability.

## Build a basic dashboard

Each panel in a dashboard refers to a saved view that defines the filters and a chart's configuration.  You will create a saved view for every chart that you want in a dashboard.

Once you have created all of the views that will make up your dashboard you can use the Dashboard workflow to put these views together:

1. From your [project homepage](https://glean.io/app/), click `New Dashboard`
2. Create a grid layout that represents all the panels you will want in your dashboard
    - Use the `+ Row`  and `+ Column` to add rows and columns to your grid
3. For each panel, click the dropdown to choose the chart that will be represented in that panel
    
!!! info "Rendering a single number / metric"

You can set a panel to display the total metric for any saved view (instead of the visualization) by clicking the `⚙️ Configuration` button in the panel and selecting `Render as metric`
    
    
4. Click `Create Dashboard` to finish and view your dashboard

## Other dashboard configuration and options

*These options are also available, but not required when creating or editing a dashboard*

**Filters**

Select the filters you want to be defined in your dashboard by clicking the `+ Add` button in the filters section on the right.  You can specify the default filter for each column you add.  If there are specific tiles that you would like the filters to ignore, you can specify those in the tile configuration.

**Sections**

Sometimes you need more than a screen's worth of real estate for your dashboard.  Adding sections allows you to compose several dashboards together on one page.  Each section has it's own filters and is treated as a compartmentalized dashboard of it's own.

**Synced Breakouts**

The synced breakouts option allows you to have the different colors match between the different charts in a dashboard.  This could be useful if you have four charts with the same series and you want the colors to match between each of these charts for consistency.

## Viewing a dashboard

Dashboards have unique URL's that can be shared with other team members.  Since the dashboard feature is currently in beta, you need to goto the project page to see all of the dashboards in your project.

1. Go to the `Dashboards` page using the link on the navigation side bar
2. From the list of dashboards, you can select the View Dashboard icon to goto the dashboard
3. The URL from the dashboard can be bookmarked or sent to others in your organization to more quickly access the dashboard
