# Glean Resource Names (GRNs)

A "Glean Resource Name" or "GRN" is a way to reference Glean resources in a
stable way. As a resource is changed, renamed, moved between collections, etc.
its GRN will always remain the same.

## Anatomy of a GRN

<!-- TODO: Once `alias` is user-facing, uncomment this stuff... -->

A GRN is comprised of two <!--three--> components, separated by `:`

```
type:id
```

<!--
```
type:id:alias
```
-->

- `type` defines whether the resource is a model (`m`), saved view (`sv`),
  or dashboard (`dsb`).
- `id` is an globally unique identifier first assigned when the resource
  is created. The ID appears in the URL bar when viewing a resource.

<!-- - `alias` is a stable name that users can configure for resources.  -->

<!-- GRNs can be abbreviated to not include the `id` or `alias` components:

```
type:id
type::alias
``` -->

## Using GRNs

### Linking Existing Resources to DataOps

All resources can be specified with the special `grn` property to link a DataOps
config to an existing resource. This allows you to move a resource created in
the Glean web app into DataOps, without recreating it.

### Referencing other Resources

Anywhere you specify a filepath in a DataOps config, you may instead specify a GRN.
This allows you to reference resources independently of how you structure your files.
