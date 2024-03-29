Access domains allow users with specific email domains to join your project without a link or invite.

To get started, add one or more domains (like "example.com" or "glean.io") to your `Domain Access Settings` on the [Settings]({{ glean_url }}/app/p/settings){:target="\_blank"} page.

Once you have one or more access domains configured, new users who click `Get Access` on [glean.io]({{ glean_url }}) will be able to enter their email address and join your project if their email address matches any of your access domains. We require users to verify their email address through Google Authentication or a verification link sent to the provided email address before we let them see any specific information about your project. Once they've verified their identity, they can see the name of your project and decide to join.

Users joining your project this way will receive the [default role(s)](./users-and-permissions.md) configured for your project.

Removing all access domains from your `Domain Access Settings` will prevent new users from joining your project through this mechanism.
