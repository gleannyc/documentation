Glean supports using an Identity Provider (IdP) such as Okta to control authentication through single sign-on.
It also supports provisioning and deprovisioning Glean users along with managing their custom Glean
role assignments through SCIM (directory sync). This document describes how to integrate Glean into your IdP.

!!! note "Contact us"

    To initiate setup, contact us at [support@glean.io](mailto:support@glean.io). We'll provide specific
    instructions and a test environment for setting up Glean with the IdP of your choice.

## Setting up single sign-on

Glean supports the SAML protocol for single sign-on (SSO) authentication. Once you reach out to us to
initiate setup, we’ll provide you with a link that will walk you through the necessary steps to perform in your IdP.

Upon completing this integration, users will no longer be able to log in with their previous Glean authentication method
(username & password or Google). If they attempt to do so, they’ll be redirected to a page that requires them to sign in
through SSO. This page asks them to input their email and uses its domain to redirect to your IdP for sign-in.

Users will also of course be able to log in directly from your IdP by clicking on the Glean application integration that you set up.

!!! caution "Email constraints"

    It is required that the primary email of each user assigned to Glean in your IdP matches their Glean user’s email.
    If this isn’t the case, they won’t be able to log in to their Glean account.

## Setting up SCIM

To reap the full power of managing users in your IdP, you can enable SCIM in addition to single sign-on. This will allow you
to create and delete Glean users directly within your IdP. It will also enable updating your Glean users’ personal information
(including their email) and Glean roles.

Like SAML setup, we’ll provide you with a link that will walk you through the necessary steps to perform in your IdP.

In addition to the standard `id`, `emails`, `first_name`, and `last_name` attributes that we should receive automatically from your IdP on each
SCIM event for a user, Glean requires the following attribute to be provided as well:

`roles` → `<name_of_glean_role_1>,<name_of_glean_role_2>`
(e.g. `Owner` or `Editor,SomeCustomRole`)

This `roles` custom attribute must map to a comma-separated list of Glean role names (either built-in or custom) to assign to the given user.
If a role is specified that doesn’t exist in all of your Glean projects, SCIM will fail for that user.

Depending on your IdP, you might not be notified when this fails. We recommend working directly with Glean when setting up SCIM to ensure correct configuration.

!!! info "Additional notes on `roles`"

    1. It must be non-empty. SCIM-enabled projects do not have a concept of default roles, as all role assignments must be explicitly managed through your IdP.
    2. We treat these role names as case-insensitive, so feel free to capitalize as you wish.

### Initial sync

When you first initiate SCIM with Glean from your IdP, we’ll use an IdP user’s primary email to determine if there is an existing Glean user that should be
overwritten by the IdP user’s information. If we one, that Glean user will now be permanently tied to that IdP user and all updates (including those to primary
email) will be reflected in Glean going forward. If we find no existing user with the given primary email on SCIM initiation, that IdP user will be provisioned
a new Glean user.

### Managing Users

When you assign users to Glean in your IdP, Glean will automatically be notified of these changes in real time through SCIM and will create or update the relevant
Glean user appropriately. You don’t need to perform any actions in Glean unless you’re attempting to create a new role and assign users to it (see below). In fact,
creating, editing, and deleting users in Glean is restricted for SSO-enabled projects.

### Managing Roles

Creating new Glean roles and editing existing roles must still be done in your Glean project. Glean `Owner`s can do this by default. However, if SSO is enabled for your
project, they won’t be able to assign users to these roles in Glean. This must be done in your IdP by modifying the `roles` custom attribute defined for those users.
