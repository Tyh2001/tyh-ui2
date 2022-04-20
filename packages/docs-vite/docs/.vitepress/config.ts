import { defineConfigWithTheme } from 'vitepress'

// 导航栏
const nav: object[] = [
  {
    text: '首页',
    activeMatch: `/`,
    link: '/'
  },
  {
    text: '组件',
    activeMatch: `^/components/`,
    link: '/components/install'
  },
  {
    text: '关于',
    activeMatch: `^/about/`,
    link: '/about/index'
  }
]

// 侧边栏
const sidebar: object = {
  '/components/': [
    {
      text: '开发指南',
      items: [{ text: '快速上手', link: '/components/install' }]
    },
    {
      text: '基础组件',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Icon 图标', link: '/components/icon' },
        { text: 'Link 链接', link: '/components/link' }
      ]
    },
    {
      text: '表单',
      items: [
        { text: 'Table 表格', link: '/components/table' },
        { text: 'Radio 单选框', link: '/components/radio' },
        { text: 'Input 输入框', link: '/components/input' }
      ]
    },
    {
      text: '提示',
      items: []
    },
    {
      text: '其它',
      items: []
    }
  ]
}

const config: object = defineConfigWithTheme({
  // base: '/v3/',
  title: 'hello',
  description: 'hello',

  // 主题配置
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Tyh2001/tyh-ui' }
    ],
    editLink: {
      repo: 'Tyh2001/tyh-ui',
      text: '在 GitHub 上编辑此页'
    },
    footer: {
      license: { text: '', link: '' },
      copyright: 'hello'
    }
  }
})

export default config
