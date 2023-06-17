import Image from "next/image";

export default {
  logo: (
    <span>
      <Image src="/brand/glean-logo-light.png" width={96} height={28} />
    </span>
  ),
  useNextSeoProps: () => ({ titleTemplate: "Glean - %s" }),
  docsRepositoryBase: "https://github.com/gleannyc/documentation",
  darkMode: false,
  footer: { component: () => <></> },
  primaryHue: 38,
  sidebar: { defaultMenuCollapseLevel: 2, toggleButton: true },

  //   key: "example",
  //   text: "Example",
  // },
};
