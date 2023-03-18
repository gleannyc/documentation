# Glean documentation

User facing documentation for Glean

## Dev Setup

...

## Contribution Guidelines

- Use relative links to markdown files so mkdocs can detect broken links
  - good: `[database connections](../../docs/database-connections.md)`
  - bad:`[database connections](../../docs/database-connections/)`
- when linking externally, include a blank target to open in a new tab, and use the `{{ glean_url }}` variable
  - good: `[Go to settings page]({{ glean_url }}/app/p/settings){:target="_blank"}`
  - bad: `[Go to settings page]({{ glean_url }}/app/p/settings)`

### Testing

...
