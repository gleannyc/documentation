Adding a custom dashboard allows Glean users to create a view with multiple
charts, metrics, and text in a custom layout.

Glean's core visualizations and saved views will replace 80% of the custom
dashboards you would spend time building in other tools. You should create a
custom dashboard when the core views are not sufficient and you need
more configurability.

## Building Dashboards

From the [dashboards page]({{ glean_url }}/app/p/dashboards), click
**New Dashboard**.

This will open a new, blank dashboard for editing. You can change the title by
clicking into the name field, or mark the dashboard as private via the
three dots menu.

Dashboards are comprised of [saved views](Saved-Views.md), [metrics](Metrics.md), and
[text](Text.md) blocks. You can drag them into the dashboard using the toolbar.
The toolbar also allows you to undo/redo changes.

Select any block to edit or delete it. You can drag blocks to move them around,
or resize them by dragging on the handles near their edges. Glean places some
restrictions on the sizes and layout of blocks to ensure that your dashboard
looks good on all devices, from small mobile screens to large monitors or TVs.

[Dashboard filters](Filters.md) can be used to filter multiple charts
or metrics at once.

## Viewing a dashboard

Dashboards have unique URLs that can be shared with other team members, or
they can find them listed on the [dashboards page]({{ glean_url }}/app/p/dashboards).

Dashboards can also be placed in [collections](/docs/project-management/collections)
for organization.

## Dashboard Explorations

Viewers can explore a dashboard by changing the [filters](Filters.md) on it. Just
like [Explorations on the Data Explorer](/docs/visualizing-data/Explorations), Glean
tracks each of these changes with a unique URL that can also be shared!