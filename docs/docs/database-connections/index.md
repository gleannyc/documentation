Once you add a database connection, it will be made available from the [Add Data Model](../data-modeling/add-data-model.md) workflow and you'll be able to specify tables or SQL queries to start visualizing data in Glean.

## Firewall Configuration

If you use a firewall to restrict access to your database, you'll need to allowlist Glean's IPs. <br/>
Glean will always connect to your database from one of these IP addresses.
```
18.210.29.198
34.230.230.9
```

## SSH tunneling

Currently in beta, Glean supports connecting to a Postgres or Redshift database via a bastion host. A bastion host is a server which you control that has access to your database but is not the database host itself. This may be useful when handling especially sensitive data. To join the beta, [contact us](mailto:support@glean.io?subject=SSH tunnel beta).

To use a bastion host, toggle on `Use SSH tunnel` when creating a Postgres database connection. Fill out the additional credentials according to your bastion host set up. Download Glean's public ssh key and set it as an authorized key on your server under the bastion host user that you specify in the data connection.

Fill out the remaining credentials as they'll be accessed by your bastion host, e.g. for `Port` specify the port on which your bastion host connects to the database.

## Create a database connection

1. Go to the [`Settings`]({{ glean_url }}/app/p/settings#database_connections){:target="\_blank"} page using the link in the project dropdown
2. Select `Database Connections`
3. Click `+ Add Database Connection`
4. Select the type of database
5. Fill out the credentials according to your type of database
6. Click the antenna icon to test your connection `🗼`
7. Click `Add` to complete the process

!!! schemas "Specifying schemas"

    For most database types, you can optionally specify a schema.  If you specify a schema in Glean, only tables from that schema will be made available in the [Add Data Model](../data-modeling/add-data-model.md)  workflow
