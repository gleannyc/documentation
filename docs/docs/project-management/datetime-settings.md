# Project-level datetime settings

Some datetime-related settings can be customized at the project level.

## Project Default First Day of the Week

This determines which day will be used as the first day of the week for all resources and for all members of the project. The first day of the week is used in two areas:

- The day used for start of week in filters for "N weeks ago" with "start of week" selected
- The day used for start of week when using weekly granularity

Here are a few examples:

1. When set to `Monday`, a filter value of "10 weeks ago" with "start of week" selected will be interpreted as the start of the week 10 weeks ago, where weeks begin on Monday.

2. When set to `Saturday`, a weekly granularity will group the data into bins where each bin contains values between:
   - The start of the first day of the bin's week (Saturday), and
   - The start of the first day of the next week (Saturday).

!!! warning "Caveats"

    At this time, project members cannot override these project-level datetime settings, and this setting cannot be overriden for specific resources (e.g. to use a different first day of the week for a certain chart).
