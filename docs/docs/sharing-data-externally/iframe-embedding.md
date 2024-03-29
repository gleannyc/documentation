Glean supports embedding Data Models, Saved Views, and Dashboards in external applications via an iframe.

## Embedding a Resource

To embed a Glean resource, add `viewMode=embed` to the URL parameters of your Data Model, Saved View, or Dashboard URL and set that URL to be the `src` of an `iframe` HTML tag.

For instance, if your Saved View URL is:

```
https://glean.io/app/sv/Sgf5dLgMfFeafeDe
```

then corresponding embedded iframe will be:

```
<iframe src="https://glean.io/app/sv/Sgf5dLgMfFeWVzie?viewMode=embed"></iframe>
```

When embedded, the Glean side navigation bar is replaced with an information bar at the bottom of the iframe. See [examples](#examples) below.

## Authentication

Viewers must be logged in to Glean in order to see an embedded resource. If the current user is not logged in, they will be prompted to do so via an embedded login flow.

Resource embeds can be combined with [Project Invite Links](../project-management/invite-links.md) to enable self-service access to your Glean project. To do so:

1. Enable [Project Invite Links](../project-management/invite-links.md) on your project, if not already turned on.
2. Copy the `projectInviteToken` parameter from your invite link and append it to your embedded URL.

For instance, if your project invite link is:

```
https://glean.io/app?projectInviteToken=p-Ip2Lw8ep6XafEzSo_NF
```

and your Saved View URL is:

```
https://glean.io/app/sv/Sgf5dLgMfFeafeDe
```

Then your self-service embed URL would be:

```
https://glean.io/app/sv/Sgf5dLgMfFeWVzie?viewMode=embed&projectInviteToken=p-Ip2Lw8ep6XafEzSo_NF
```

Embedded resources are also compatible with [Get Access Domains](../project-management/get-access-domains.md). If enabled, any user with an email address from your organization's domain will be able to create a Glean account via the embedded resource.

## Examples

### Embedded Data Model

<iframe
  src="https://demo.glean.io/app/m/b76d1af8-69c3-3870-bdd2-46cdb2cc14df?viewMode=embed"
  style="width: 100%; height: 1000px"
></iframe>

### Embedded Saved View

<iframe
  src="https://demo.glean.io/app/sv/35a0e69c-8bf1-375b-84e1-68604b83ec0a?viewMode=embed"
  style="width: 100%; height: 1000px"
></iframe>

### Embedded Dashboard

<iframe
  src="https://demo.glean.io/app/dsb/40b45ca1-463d-3380-96c6-10d944738b08?viewMode=embed"
  style="width: 100%; height: 1000px"
></iframe>
