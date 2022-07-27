import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tyh Ui',
  // base: '/v3/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://tianyuhao.cn/images/tyh-ui/tyh-ui-logo.svg'
      }
    ]
  ],
  description,
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/tyh-ui'
      }
    ],
    logo: 'https://tianyuhao.cn/images/tyh-ui/tyh-ui-logo.svg',
    editLink: {
      pattern: 'https://github.com/Tyh2001/tyh-ui/blob/master/docs/docs/:path'
    }
  }
})
