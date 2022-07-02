export const sidebar = {
  '/docs/': [
    {
      text: '快速上手',
      link: '/docs/install',
      items: [
        { text: '安装', link: '/docs/install' },
        { text: '引入使用', link: '/docs/import' }
      ]
    }
    // {
    //   text: '指南',
    //   link: '/docs/introduce',
    //   items: [
    //     { text: '介绍', link: '/docs/introduce' },
    //     { text: '贡献指南', link: '/docs/contributing' },
    //     { text: '加入我们', link: '/docs/join' }
    //   ]
    // },
    // {
    //   text: '历程',
    //   link: '/docs/CHANGELOG',
    //   items: [
    //     { text: '更新日志', link: '/docs/CHANGELOG' },
    //     { text: '里程碑', link: '/docs/milepost' }
    //   ]
    // }
  ],
  '/components/': [
    {
      text: '组件',
      link: '/components/',
      items: [
        { text: 'Button 按钮', link: '/components/button' },
        { text: 'Alert 提示', link: '/components/alert' },
        { text: 'Avatar 头像', link: '/components/avatar' },
        { text: 'BackTop 回到顶部', link: '/components/back-top' },
        { text: 'Calendar 日历', link: '/components/calendar' },
        { text: 'Card 卡片', link: '/components/card' },
        { text: 'Container 布局容器', link: '/components/container' },
        { text: 'Crumbs 面包屑', link: '/components/crumbs' },
        { text: 'Dialog 对话框', link: '/components/dialog' },
        { text: 'Division 分割线', link: '/components/division' },
        { text: 'Drawer 抽屉', link: '/components/drawer' },
        { text: 'Icon 图标', link: '/components/icon' },
        { text: 'Image 图片', link: '/components/image' },
        { text: 'Info 信息栏', link: '/components/info' },
        { text: 'Input 输入框', link: '/components/input' },
        { text: 'Link 链接', link: '/components/link' },
        { text: 'List 列表', link: '/components/list' },
        { text: 'Menu 导航栏', link: '/components/menu' },
        { text: 'Message 提示框', link: '/components/message' },
        { text: 'Notification 通知', link: '/components/notification' },
        { text: 'PageHeader 页头', link: '/components/page-header' },
        { text: 'Radio 单选框', link: '/components/radio' },
        { text: 'Rate 评分', link: '/components/rate' },
        { text: 'Select 选择器', link: '/components/select' },
        { text: 'Skeleton 骨架', link: '/components/skeleton' },
        { text: 'Switch 开关', link: '/components/switch' },
        { text: 'Table 表格', link: '/components/table' },
        { text: 'Tag 标签', link: '/components/tag' },
        { text: 'Tagging 标注', link: '/components/tagging' },
        { text: 'Text 文字', link: '/components/text' },
        { text: 'Textarea 文本域', link: '/components/textarea' },
        { text: 'Tree 树形控件', link: '/components/tree' }
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
