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

!!! warning

    We recommend always first creating a Preview Build to see which resources will be affected prior to running a Deploy.  The build process will automatically delete and create resources in Glean to leave your project in a consistent state.  For example, if you delete a column in a model configuration file, all saved views that refer to that column will be automatically deleted (as happens if you delete a column through the user interface).

To use DataOps, save the [configuration](./Managing-Resources-With-Code.md) of one or more of your resources to your local environment or a Git repository. Then, you can create a Build using the [Glean command-line interface (CLI)](./Using-the-Glean-CLI.md), or through the Glean web application by connecting your account to a [Git repository](./Git-Integration.md).
