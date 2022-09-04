import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'
import { description } from './utils/description'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tyh Ui2',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://tianyuhao.cn/images/tyh-ui/tyh-ui2.svg'
      }
    ]
  ],
  description,
  lastUpdated: true,
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Tyh2001/tyh-ui2'
      }
    ],
    logo: 'https://tianyuhao.cn/images/tyh-ui/tyh-ui2.svg',
    editLink: {
      pattern: 'https://github.com/Tyh2001/tyh-ui2/blob/master/docs/docs/:path'
    }
  }
})
