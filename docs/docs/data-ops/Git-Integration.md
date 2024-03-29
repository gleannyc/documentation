Glean can directly create Preview and Deploy Builds using configuration files stored in an external Git repository. This workflow is useful for situations when installing and using the [Glean CLI](./Using-the-Glean-CLI.md) is impractical.

## Getting started

To configure your Git credentials:

1. Navigate to the [`Settings`]({{ glean_url }}/app/p/settings#access_keys){:target="\_blank"} page using the link in the project dropdown
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

## Creating builds

After you've configured a Git repository, you can navigate to the [`DataOps`]({{ glean_url }}/app/p/data-ops){:target="\_blank"} page and click `+ New Build` to create a new Build, with the following options:

-  `Branch`: A branch or commit identifier from your repository
-  `Path`: An optional absolute path to a directory in your repository containing your Glean configuration files.
-  `Type`: The type of build to create. For more details on `Preview` and `Deploy` builds, see [DataOps Overview](./index.md)
