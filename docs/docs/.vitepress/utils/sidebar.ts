export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      link: '/docs/install',
      items: [
        { text: '安装', link: '/docs/install' },
        { text: '引入使用', link: '/docs/import' }
      ]
    },
    {
      text: '指南',
      link: '/docs/introduce',
      items: [
        { text: '介绍', link: '/docs/introduce' },
        { text: '贡献指南', link: '/docs/contributing' },
        { text: '加入我们', link: '/docs/join' }
      ]
    },
    {
      text: '历程',
      link: '/docs/CHANGELOG',
      items: [
        { text: '更新日志', link: '/docs/CHANGELOG' },
        { text: '里程碑', link: '/docs/milepost' }
      ]
    }
  ],
  '/components/': [
    {
      text: '基础组件',
      link: '/components/',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Alert 提示', link: '/components/alert' },
        { text: 'Avatar 头像', link: '/components/avatar' }
      ]
    }
    // {
    //   text: '数据展示',
    //   link: '/components/',
    //   items: []
    // },
    // {
    //   text: '导航组件',
    //   link: '/components/',
    //   items: []
    // },
    // {
    //   text: '反馈组件',
    //   link: '/components/',
    //   items: []
    // },
    // {
    //   text: '其它',
    //   link: '/components/',
    //   items: []
    // }
  ]
} as const
