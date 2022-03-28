You are currently in a project, where your data analysis and visualization live. You can invite people, setup database connections and manage your project by clicking on your project name.

You can invite members to your project in Glean to allow them to query and explore data.  You can use [roles](#default-system-roles) to limit the actions a user can take - it probably makes sense to start people with lower levels of permissions across the board and increase as you realize they need more advanced permissions.  All users in your project will be able to view data in your project, but only owners can add additional members and only editors can change data models.  It's a best practice to only allow analysts and analytically-inclined members of your team to edit data models.  See [Data Modeling Best Practices](../guides/data-modeling-best-practices.md) 

## Add a user

[Direct link to your Glean user list](https://glean.io/app/p/people)

1. Go to the `People` page using the link on the navigation side bar
2. Select `Users`
3. Select  `+ Add User`
4. Fill out the form and select the submit button: `Add User`
    
    Email: the Google account and email address
    
    Full Name
    
    Role: the user's level see below
    
5. The invited user will receive an email with an invite link.  The user can then either create a username and password or use Google authentication to login.

    Projects can be setup to only allow email addresses on your domain (eg. only emails ending in `@yourcompany.com`).
    

## Default system roles

There are four roles in Glean with increasing levels of permissions.

|Role          |Description             |
|--------------|------------------------|
|Owner         |Owners can manage members in a project and manage data connections and manage data connection credentials.|
|Editor        |Editors can manage data models, both creating and editing existing data models.|
|Collaborator  |Collaborators can interact with shared views and share links, query data sources, explore data and even create new saved views and share links|
|Viewer        |Viewers can interact with shared views and share links, query data sources, explore data and create share links|


## Modifying roles

!!! info "Limitations"

    Roles are limited today in Glean to two main functions: 1) governing which actions can be taken such as creating saved views, editing dashboards 2) governing access to data models.  If you do not have access to read data from a data model, then saved views for that data model will not work.  Today, it is not possible to remove access from a specific view independently from a data model.

Glean uses role based access control to allow users to do specific actions within Glean.  You can assign default roles, configure data access and limit which actions specific users can take inside of Glean.

1. Navigate to the `People` page using the link on the left sidebar
2. Select `Roles`
3. Click the pencil `✏️` icon next to the role you want to modify
4. You can edit the role name and description in the main role page
5. To edit a permission, again click on the pencil `✏️` icon to edit a permission rule
6. Here you can modify the permissions and resources associated with the permissions
