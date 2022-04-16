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
          sidebarPath: require.resolve('./sidebars.js')
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        blog: {
          showReadingTime: true
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'Tyh UI',
      logo: {
        alt: 'My Site Logo',
        src: 'https://tianyuhao.cn/images/tyh-ui/tyh-ui-logo.svg'
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
          title: '关于我',
          items: [
            { label: 'Tyh2001', to: 'https://tianyuhao.cn/' },
            { label: 'Github', to: 'https://github.com/Tyh2001' },
            { label: 'Blog', to: 'https://tianyuhao.cn/blog' }
          ]
        },
        {
          title: '更多链接',
          items: [
            { label: 'GitHub', href: 'https://github.com/Tyh2001/tyh-ui' },
            { label: 'NPM', href: 'https://www.npmjs.com/package/tyh-ui2' },
            {
              label: '更新日志',
              href: 'https://github.com/Tyh2001/tyh-ui/blob/master/CHANGELOG.md'
            }
          ]
        },
        {
          title: '合作者',
          items: [
            { label: '田同学', href: 'https://github.com/Tyh2001' },
            { label: '话梅桔', href: 'https://github.com/Givenchy-Coisini' }
          ]
        }
      ]
      // copyright: '底部说明'
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  }
}

module.exports = config
