# Using the Glean CLI

# Using the CLI

The Glean CLI is a [Data Ops](Data%20Ops%20f43c3c8f795c49aa9a6a766ba9ee76a2.md)  feature that allows you to create Preview and Deploy builds directly from your terminal or continuous integration system.

- Quickstart
    
    ```bash
    # 1. Create your access key file:  https://glean.io/app/p/access-keys
    mkdir ~/.glean
    mv ~/Downloads/glean_access_key.json ~/.glean/ # or wherever you downloaded the file
    
    # 2. Create virtual env and install the Glean CLI
    python3 -m venv venv
    source venv/bin/activate
    pip3 install glean-cli
    
    # 3. Explore data (can export any resource from glean into this repo):
    cd ~/code/my_project/
    glean preview .
    ```
    

To use the CLI, you must have Python version 3.7 or greater installed in your environment.

- Checking your Python version
    
    To check if Python 3 is installed, run the following command in your terminal:
    
    ```yaml
    python3 --version
    ```
    
    If the command fails or your version is less than 3.7, you can download and install by following the instructions here: [https://www.python.org/downloads/](https://www.python.org/downloads/) 
    

To install the CLI, run the following command in your terminal:

```bash
pip3 install glean-cli
```

You can run the `glean` command to validate that it is installed successfully and see documentation about how to use it:

```bash
$ glean
Usage: glean [OPTIONS] COMMAND [ARGS]...

  A command-line interface for interacting with Glean.

Options:
...
```

You can use the `--help` flag to see documentation about a specific command. For example:

```bash
$ glean preview --help
Usage: glean preview [OPTIONS] [FILEPATH]

  Validates resource configurations and generates a preview link.

Options:
...
```

## Creating an Access Key

To use the CLI with your Glean project, you need an **Access Key**. An Access Key is used by Glean to identify who you are and what resources you have access to. You should use a separate access key for each distinct user or service using the CLI.

To create an Access Key:

1. Go to the `Settings` page using the link on the navigation side bar
2. Click on `Access Keys`
3. Click `+ Create Access Key` in the top right and follow the instructions. Your Access Key file will be downloaded automatically.
4. After downloading, move your Access Key file to a permanent and secure location on your workstation. By default, the CLI expects your access key to be located at `~/.glean/glean_access_key.json`. You can override this by:
    - Setting the `GLEAN_CREDENTIALS_FILEPATH` environment variable to a different filepath
    - Using the `--credentials-filepath` command-line option to use a different filepath
    - Setting the `GLEAN_PROJECT_ID`, `GLEAN_ACCESS_KEY_ID`, and `GLEAN_SECRET_ACCESS_KEY_TOKEN` environment variables to the respective values stored in your access key file.

<aside>
<img src="https://glean.io/img/icons/warning-sign.svg" alt="https://glean.io/img/icons/warning-sign.svg" width="40px" /> Once you navigate away from the page, you will not be able to re-download your Access Key. If you lose your Access Key, you will need to delete it and then create a new one.

</aside>

## Using environment variables

You can use environment variables to dynamically populate Glean configuration files with different values at runtime.

When creating a Build using local files, the CLI will replace placeholders of the form `${ENV_VAR_NAME}` with the corresponding environment variable. For example, if your model file contains:

```yaml
glean: '0.1'
name: My Data Model
source:
  connectionName: ${DATABASE_CONNECTION_NAME}
  physicalName: test_table
```

...then you can preview a Build against your `dev` database by running:

```bash
$ DATABASE_CONNECTION_NAME=dev glean preview
```

Environment variable substitution is not yet supported for Builds that are triggered via a git revision.

## Recommended workflows

The CLI allows you to integrate Glean into your existing development and deployment process. As an example, here is a typical workflow that we use when making changes to Glean resources or upstream data:

1. Store your Glean configuration files in a git repo alongside your data pipeline code.
2. Run your pipelines to populate test data into a separate database or schema.
3. Adjust your Glean configuration files as necessary to reflect your intended changes.
4. Run `glean preview` to create a Preview Build, adjusting the `source` section of your model(s) to point at your test dataset.
5. Make any necessary adjustments in the Preview and re-export your new configuration files.
6. Send a Pull Request for all the pending changes, including a link to your Preview Build.
7. Merge the Pull Request into your `main` git branch.
8. Run `glean deploy --git-revision=main` to deploy your new Glean resources to your project.

## Continuous Integration

You can invoke the glean CLI in a continuous integration system to automatically generate previews or deploy your project.

For example, if you use GitHub, the following GitHub action will generate a Build Preview of the local `glean`directory whenever you send a pull request:

```yaml
name: glean-preview
on: [pull_request]
jobs:
  create-glean-preview:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: pip install glean-cli
      - run: cd glean && glean preview
    env:
      GLEAN_PROJECT_ID: ${{ secrets.GLEAN_PROJECT_ID_PROD }}
      GLEAN_ACCESS_KEY_ID: ${{ secrets.GLEAN_ACCESS_KEY_ID_PROD }}
      GLEAN_SECRET_ACCESS_KEY_TOKEN: ${{ secrets.GLEAN_SECRET_ACCESS_KEY_TOKEN_PROD }}
```