import Image from "next/image";

export default {
  logo: (
    <span>
      <Image src="/brand/glean-logo-light.png" width={120} height={35} />
    </span>
  ),
  useNextSeoProps: () => ({ titleTemplate: "Glean - %s" }),
  docsRepositoryBase: "https://github.com/gleannyc/documentation",
  editLink: { component: () => <></> },
  darkMode: false,
  footer: { component: () => <></> },
  primaryHue: 38,
  sidebar: { defaultMenuCollapseLevel: 1, toggleButton: true },

  //   key: "example",
  //   text: "Example",
  // },
};
