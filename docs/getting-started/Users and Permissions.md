# Users and Permissions

You can invite members to your project in Glean to allow them to query and explore data.  You can use [roles](Users%20and%20Permissions%20735ae7f2017c4bbcb197fda39bf2ba7f.md) to limit the actions a user can take - it probably makes sense to start people with lower levels of permissions across the board and increase as you realize they need more advanced permissions.  All users in your project will be able to view data in your project, but only owners can add additional members and only editors can change data models.  It's a best practice to only allow analysts and analytically-inclined members of your team to edit data models.  See [Data Modeling Best Practices](Data%20Modeling%20Best%20Practices%20914e2700795d4c6c8df51563512ffb2a.md) 

## Add a user

[Direct link to your Glean user list](https://glean.io/project#/users)

1. Go to the `People` page using the link on the navigation side bar
2. Select `Users`
3. Select  `+ Add User`
4. Fill out the form and select the submit button: `Add User`
    
    Email: the Google account and email address
    
    Full Name
    
    Role: the user's level see below
    
5. The invited user will receive an email with an invite link.  The user can then either create a username and password or use Google authentication to login.

- Troubleshooting
    
    Email addresses must match google account exactly: periods in the email address should match and don't use account aliases.  You can see your own user account email on your google account page: [https://myaccount.google.com/email](https://myaccount.google.com/email)
    
    Projects can be setup to only allow email addresses on your domain (eg. only emails ending in `@yourcompany.com`).  Contact [support](mailto:support@glean.io) to get this configured.
    

## Default system roles

There are four roles in Glean with increasing levels of permissions.

[Roles](Users%20and%20Permissions%20735ae7f2017c4bbcb197fda39bf2ba7f/Roles%205de6ba607c9f4acca60787ec9b141ab4.csv)

## Modifying roles

<aside>
ℹ️ Roles are limited today in Glean to two main functions: 1) governing which actions can be taken such as creating saved views, editing dashboards 2) governing access to data models.  If you do not have access to read data from a data model, then saved views for that data model will not work.  Today, it is not possible to remove access from a specific view independently from a data model.

</aside>

Glean uses role based access control to allow users to do specific actions within Glean.  You can assign default roles, configure data access and limit which actions specific users can take inside of Glean.

1. Navigate to the `People` page using the link on the left sidebar
2. Select `Roles`
3. Click the pencil `✏️` icon next to the role you want to modify
4. You can edit the role name and description in the main role page
5. To edit a permission, again click on the pencil `✏️` icon to edit a permission rule
6. Here you can modify the permissions and resources associated with the permissions