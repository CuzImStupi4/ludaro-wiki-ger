// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ludaro.de Wiki!',
  tagline: 'Lua Lernen für jeden!',
  url: 'https://ludaro.de',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ludaro1024', // Usually your GitHub org/user name.
  projectName: 'ludaro-wiki-ger', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Ludaro1024/ludaro-wiki-ger',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    
    ({
      colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
      navbar: {
        hideOnScroll: true,
        title: 'Ludaro.de Wiki!',
        logo: {
          alt: 'Ein Kleiner Poro <3',
          src: 'img/docusaurus.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          //   dropdownItemsAfter: [
          //     {
          //       type: 'html',
          //       value: '<hr style="margin: 0.3rem 0;">',
          //     },
          //     {
          //       href: 'https://github.com/facebook/docusaurus/issues/3526',
          //       label: 'Hilf mir das zu übersetzen!',
          //     },
          //   ],
          // },
          {
            href: 'https://github.com/Ludaro1024/ludaro-wiki-ger',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Tutorial',
          //       to: '/docs/intro',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'Wichtige Links:',
            items: [
              {
                label: "Discord",
                href: "https://discord.ludaro.de",
              },
              {
                label: 'Github',
                href: 'https://github.com/Ludaro1024',
              },
             
            ],
          },
        ],
        logo: {
          alt: 'Poro Logo Ludaro.de',
          src: 'img/docusaurus.png',
          href: 'https://ludaro.de',
          width: 200,
          height: 200,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Ludaro, geschrieben mit vollem ❤️ für dich.`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: lightCodeTheme,
      },
    }),
};

module.exports = config;
