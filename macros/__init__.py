from os import path

from mkdocs_macros import fix_url


def define_env(env):
    pass

def on_post_build(env):
    create_redirect_to_latest_changelog(env)

def create_redirect_to_latest_changelog(env):
    nav = env.conf['nav']
    nav_changelog_entries = next(item['Changelog'][0]['Changelog'] for item in nav if item.get('Changelog'))
    latest_changelog_relative_file = fix_url(nav_changelog_entries[0])
    latest_changelog_relative_url = latest_changelog_relative_file.split('.md')[0]

    site_dir = env.conf['site_dir']
    file_path = path.join(site_dir, "changelog/index.html")
    with open(file_path, 'w') as f:
        f.write(f"""
<meta http-equiv="Refresh" content="0; url='{latest_changelog_relative_url}'" />
        """)
