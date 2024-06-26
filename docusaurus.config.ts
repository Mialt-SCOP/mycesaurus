import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import PiwikPlugin from "./src/piwik.plugin";

const config: Config = {
  title: "Mycélium traiteur",
  tagline: "Cuisine végétale et engagée à Montpellier",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // Set the production url of your site here
  url: "https://mycetraiteur.fr",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Mialt-SCOP", // Usually your GitHub org/user name.
  projectName: "mycesaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "fr-FR",
    locales: ["fr-FR"],
  },

  plugins: ['docusaurus-plugin-sass', PiwikPlugin],

  presets: [
    [
      "classic",
      {
        blog: {
          showReadingTime: true,
        },
        //blog: false,
        theme: {
          customCss: "./src/css/custom.scss",
        },
        docs: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/mycelium-social-card.png",
    colorMode: {
      disableSwitch: true,
    },
    tableOfContents: {
      maxHeadingLevel: 2,
    },
    navbar: {
      title: "Traiteur Montpellier",
      logo: {
        alt: "Logo Mycélium traiteur à Montpellier",
        src: "img/mycelium.svg",
      },
      items: [{ to: "/contact", label: "Nous contacter", position: "right" }],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Contact",
          items: [
            {
              label: "Suivez-nous sur Instagram",
              href: "https://www.instagram.com/mycelium.mtp/",
            },
            {
              label: "Nous contacter",
              to: "/contact",
            },
          ],
        },
      ],
      copyright: `Copyleft 🄯 ${new Date().getFullYear()} Scopyleft`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
