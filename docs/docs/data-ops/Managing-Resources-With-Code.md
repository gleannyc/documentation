## The build process

Here is a high-level description of what actually happens during the build process:

- **Create resources.** For models that you check in that do not currently exist, the model is created from scratch from your configuration file and from the database. This means that the base table and all the columns must still exist in the database for the build to succeed.
- **Update resources.** If a column is changed, it will be updated in all dependent items (regardless of whether the dependent items were also checked in) - so things like name changes should be correctly reflected.
- **Clean up resources.** If any columns or models are deleted, all dependent items that relied on that column or model will also be deleted.
- **Smoke Test.** Once the model is built, a single aggregate analytical query will be run against the database to make sure that data aggregation can still be run against the model.

If there is an error while deploying a Data Model, the build process will revert to the previous version of that model, and all dependent resources of that model will not be updated.

## Glean Configuration Files

Glean supports configuration files written in YAML or JSON. A Glean Build will attempt to validate every file in the specified path with a `.yml` or `.json` extension.

Full documentation of all configuration files can be found for each resource type:

- [Data Models](./config-schema/Data-Model.md)
- [Saved Views](./config-schema/Saved-View.md)
- [Dashboards](./config-schema/Dashboard.md)
- [Color Palettes](./config-schema/Color-Palette.md)
- [Homepage Launchpad](./config-schema/Homepage-Launchpad.md)

### Exporting configuration files

An easy way to get started building a configuration file is to export it from an existing Glean resource.

- Data Models:
  1. Navigate to the [Data Models]({{ glean_url }}/app/p/data-models){:target="\_blank"} page
  2. Click `Edit` for one of your Data Models
  3. Click the `⋮` in the top-right corner
  4. Click `DataOps Config`
- Saved Views: On any Explore page, click the `⋮` in the top-right corner of the chart area, and then click `Export Saved View Config File`.
- Dashboards: On any Dashboard page, click the `⋮` in the top-right corner, and then click `View DataOps Config File`.

### Migrating Existing Resources into DataOps

If you have existing content built in the UI and want to move it into DataOps,
you can specify the `grn` property on the resource. This will cause the config to
update an existing resource with that [GRN](./GRNs.md), instead of creating a
new resource.

This can also be used to avoid recreating resources when renaming or refactoring
the file structure of your project.

### Controlled by DataOps

To protect specific resources to only be editable with DataOps, add the `preventUpdatesFromUI` flag set as `true` to any config. This prevents users from unintentionally updating critical resources from the Glean web application and gives your team greater control over valuable long lived resources that are core to your business needs.
