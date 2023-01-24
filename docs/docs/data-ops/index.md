# DataOps

<div style="position: relative; padding-bottom: 62.5%; height: 0;"><iframe src="https://www.loom.com/embed/c7000e042e134a96a501d825dd1eaea9?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

DataOps in Glean allows you to represent your resources as configuration files, which can be stored in a Git repository and deployed to your Glean project as part of a change management workflow.

Using DataOps, you can:

- ✅ **Validate** planned changes to your data warehouse or Glean resources to ensure that your views and dashboards don't break
- 🏗️ **Preview updates** to your Glean project before making them visible to the rest of your organization
- 👥 Use **code reviews** or pull requests to collaborate on proposed changes
- 🧑‍💻 **Configure Glean** using the same tools that you use to develop your backend pipelines
- 🚦 Use a **continuous integration** system to deploy updates to your Glean project

DataOps is under active development and currently has some limitations, including:

- The Glean configuration files do not yet support every feature that is available in the Glean web application.
- If you build resources from a Git repository, users are still able to edit those resources through the Glean UI. When you re-deploy these resources with your DataOps configuration files, any changes made through the Glean UI will be overwritten.

## Overview

To use DataOps, you define one or more of your Glean resources using **configuration files**. A configuration file contains a complete specification of a resource. For instance, a Model configuration file contains information about which database connection to use, the name of the underlying database table, a list of attributes and metrics, etc.

Using a set of configuration files, you create a **Build**. There are two different kinds of Builds:

- A **Preview Build** validates your configuration files and, if successful, provides a URL that will show you what your Glean Project will look like if your pending changes are applied.
- A **Deploy Build** validates your configuration files and, if successful, publishes those changes to your Glean Project.

You can create a Build using the [Glean command-line interface (CLI)](./Using-the-Glean-CLI.md), or through the Glean web application. Glean integrates with Git and can create Builds using specific Git branches or revisions that have been pushed to your repository.

## Getting Started

### Configuring Git credentials

Glean needs to be granted access to your Git repository in order to create Builds from specific revisions.

To configure your Git credentials:

1. Navigate to the `Settings` page using the link in the project dropdown
2. Click on `Version Control`
3. Enter your connection settings for the git repository
   - To configure your credentials, provide an authorization token _or_ a username and password.
   - We recommend you use an access token to restrict access to just appropriate resources:
     - [Access Tokens in Github](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token)
     - [Access Tokens in Gitlab](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)
   - The _Name_ field is optional and will just help users identify in plain language what repository you configured for your project, eg: "engineering data pipeline repo"
   - The default branch will be used as the default for builds, usually "main", "master" or "production"
   - The default path describes the root of your Glean credentials directory within the repo
4. Click the `🗼Test` button to test your git credentials
5. Click `Save Credentials`
