// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const config = {
  title: '这是标题',
  tagline: '副标题',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'Fighting Design',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'install',
          position: 'right',
          label: '组件'
        },
        { to: '/blog', label: '关于', position: 'right' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '博客',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/install'
            }
          ]
        },
        {
          title: '社区链接',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus'
            }
          ]
        },
        {
          title: '更多链接',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus'
            }
          ]
        }
      ],
      copyright: '底部说明'
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  }
}

module.exports = config
