`Owner`s can connect their Glean project to any Slack workspace. This lets users in your project
share saved views and dashboards directly to Slack channels with added notes and context. You can also schedule
automated reports to keep your team up to date with important metrics.

![slack integration](../../assets/slack-integration.png)

## Connect the integration

1. Go to [`Integrations`]({{ glean_url }}/app/p/settings#integrations){:target="\_blank"} section in the `Settings` page
2. Under the `Slack` subsection, click `Add to Slack`
3. Click `Allow` on the next page to authorize the Glean app for Slack to access your Slack workspace
4. Click `Return to Settings` on the next page to return to Glean

## Sharing to Slack

Once someone in your Glean project has connected the Slack integration, Glean users with appropriate permissions
can share saved views and dashboards to Slack. By default, this is restricted to `Collaborator`s.

1. Open a saved view or dashboard in Glean
2. Click the `Share` dropdown at the top right corner and select the `Share to Slack` option
3. In the modal that opens, select the Slack channels you'd like to share to and optionally enter a comment with any context
4. Click `Send` and your report will appear in Slack within the next minute or so

## Creating schedules

To schedule a report, follow steps 1-3 above then continue with the following:

1. Check `Schedule recurring report` at the bottom of the modal
2. Click `Set Schedule` and enter the schedule's timing along with whether you'd like to skip sending reports that have no data
3. Click `Schedule` to submit the schedule

## Support

[Contact us](https://docs.glean.io/contact-us/) if you run into any issues.

## Privacy Policy

See our [Privacy Policy](https://glean.io/terms) for information on how Glean collects, manages, and stores third-party data.
