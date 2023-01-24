# Glean documentation

User facing documentation for Glean

## Dev Setup

```bash
# install python dependencies to a virtual environment
$ pip install -r requirements.txt

# start a local server
$ mkdocs serve
```

If you want to run in watch mode you can do
```
$ mkdocs serve -w .
```


## Contribution Guidelines

- Use relative links to markdown files so mkdocs can detect broken links
  - good: `[database connections](../../docs/database-connections.md)`
  - bad:`[database connections](../../docs/database-connections/)`
- when linking externally, include a blank target to open in a new tab, and use the `{{ glean_url }}` variable
  - good: `[Go to settings page]({{ glean_url }}/app/p/settings){:target="_blank"}`
  - bad: `[Go to settings page]({{ glean_url }}/app/p/settings)`

### Testing

Run `mkdocs serve` in strict mode to test for broken links

- `$ mkdocs serve -s --dev-addr localhost:2185`
