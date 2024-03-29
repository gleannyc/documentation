# Glean Resource Names (GRNs)

A "Glean Resource Name" or "GRN" is a way to reference Glean resources in a
stable way. As a resource is changed, renamed, moved between collections, etc.
its GRN will always remain the same.

## Anatomy of a GRN

<!-- TODO: Once `alias` is user-facing, uncomment this stuff... -->

A GRN is comprised of two <!--three--> components, separated by `:`

```bash
type:id
```

<!--
```
type:id:alias
```
-->

- `type` identifies the resource type

    - `dsb`: dashboard
    - `m`: model
    - `palette`: color palette
    - `sv`: saved view

- `id` is an globally unique identifier first assigned when the resource
  is created. The ID appears in the URL bar when viewing a resource.

<!-- - `alias` is a stable name that users can configure for resources.  -->

<!-- GRNs can be abbreviated to not include the `id` or `alias` components:

```
type:id
type::alias
```
-->

The following are all valid GRNs:

```bash
sv:6yYdOIMG9hCAAHqB
m:RNuzTq-85qzAFKJ8
dsb:SV9nqwUHWmyk1zka

# some GRNs have longer IDs:
sv:a7905ae1-7f07-4c99-b9a5-930f409736a8
m:5948db01-0097-46fb-aec8-f68b1f09332d
dsb:658f8c83-c269-405c-ace6-677eece4c218
```

GRNs are case sensitive.

## Using GRNs

### Linking Existing Resources to DataOps

All resources can be specified with the special `grn` property to link a DataOps
config to an existing resource. This allows you to move a resource created in
the Glean web app into DataOps, without recreating it.

### Referencing other Resources

Anywhere you specify a filepath in a DataOps config, you may instead specify a GRN.
This allows you to reference resources independently of how you structure your files.
