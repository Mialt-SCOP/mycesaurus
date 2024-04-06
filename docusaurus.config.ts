import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Mycélium traiteur",
  tagline: "Cuisine végétale et engagée à Montpellier",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
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

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      "classic",
      {
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        docs: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/mycelium-social-card.png",
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
