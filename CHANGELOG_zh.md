# 更新日志

[English](https://github.com/Tyh2001/tyh-ui2/blob/master/CHANGELOG.md) | Chinese

## 3.4.13 (2022-04-08)

- TyhMenu 组件 light 主题样式更新

## 3.4.12 (2022-04-08)

- TyhButton 组件的内部实现逻辑进行优化
- TyhMenuItem 组件废除 to 属性，改完 route 属性
- TyhMenuItem 新增 title 属性可以配置标题，但是插槽的优先级大于 title 参数
- TyhMenuItem 新增 link 属性可以配置跳转的指定 url
- TyhMenu 新增 backgroundColor 属性可以配置背景色
- TyhMenu 新增 textColor 属性可以配置文字颜色
- TyhMenu 新增 collapse 属性可以配置是否折叠
- TyhMenu 组件的浅色主题背景色更新为浅灰色
- 加入严格模式

## 3.4.11 (2022-04-03)

- 添加更严谨的类型限制

## 3.4.10 (2022-04-02)

- 全部文件使用 ts 重写
- 类型约束更加严谨

## 3.4.9 (2022-03-30)

- 修复 rete 评分样式 bug

## 3.4.8 (2022-03-29)

- 修复 rete 评分样式 bug

## 3.4.7 (2022-03-29)

- 修复 rete 评分样式 bug

## 3.4.6 (2022-03-29)

- 修复 Select 选择器 选择时报错的 bug

## 3.4.5 (2022-03-27)

- 按钮组件加入 loading 配置项

## 3.4.4 (2022-03-21)

- 优化 props 参数代码写法

## 3.4.3 (2022-03-14)

- 修复 radio 组件的不能选中问题
- 删除 input 组件部分无用的代码段

## 3.4.2 (2022-03-13)

> 目前已经将 `tyh-ui` 的所有组件都是有 `typeScript` 进行了重构对每条数据都做了强烈的类型限制，也优化了很多的样式和性能，也优化了部分配置项等。目前组件库的性能已经变得愈来愈强壮了，希望 tyh-ui 这个小朋友会越来越好～

- 修复 tagging 丢失样式问题

## 3.4.1 (2022-03-13)

- 修复 radio 组件的绑定值报错问题

## 3.4.0 (2022-03-13)

- division 组件修复 bug，当 position 参数为空的时候，使用默认参数样式
- avatar 组件的 icon 改为优化更好的标签，icon 的样式也有略微的调整
- 解决 drawer 组件在 direction 属性为空值的时候弹出位置不正确的问题
- icon 的 size 属性改为仅仅可以传递字符串参数
- input 组件的 max 属性现在只可以传入字符串
- icon 组件的样式和 icon 进行调整优化
- list 组件 header、footer 只限于 string 类型数据
- lint 组件 content 只限于 array 类型数据
- lint 组件 iskey 参数改为 keys
- list 组件添加 header 和 footer 插槽
- list 组件样式和模板细节优化
- rete 组件优化了样式和模板
- switch 组件的 width 属性现在只可以传递 number 类型
- tagging 组件的 size 属性现在只限于 string 类型
- tagging 组件的 color 属性取消默认值
- text 组件的 size 属性现在是限于 string 类型
- textarea 组件的 max、cols 属性现在是限于 string 类型
- textarea 组件的 resize 属性默认值改为 none

## 3.3.9 (2022-03-10)

- TyhBackTop 组件代码进行优化
- TyhBackTop 组件新增 behavior 属性，来配置滚动模式
- TyhBackTop 组件新增 beyond 属性，在滚动超出指定值后显示返回按钮

## 3.3.8 (2022-03-09)

- 加入 TyhDialog 对话框组件

## 3.3.7 (2022-03-09)

- 优化了所有组件的 index.js 文件注册组件代码，降低代码可读性，但是减少了包的体积
- TyhButton 组件的样式有略微的调整
- TyhButton 组件的 icon 更改了渲染方式
- Container 布局容器组件的 `<tyh-container>：外层容器` 做了较大的调整，现在根据其内部的子元素来自动判断容器的排列方向
- 废除了 tyh-container 的 flex 配置项
- 新增 tyh-container 的 direction 配置项
- TyhBackTop 组件的 bottom 和 right 属性现在必须要传递一个`字符串`的指定距离
- TyhDivision 组件的 margin 属性现在必须要传递一个`字符串`的指定距离
- 还有其他若干出代码简化写法
- 本次性能优化，包的体积从**174kb**降低到了**171kb**，基本上都是几十个字节几十个字节的减少的

## 3.3.6 (2022-03-08)

- 修复 TyhDrawer 组件的样式
- TyhDrawer 组件新增 zIndex 配置项

## 3.3.5 (2022-03-08)

- 新增 TyhDrawer 组件（我还是非常满意的，哈哈:blush::blush:）

## 3.3.4 (2022-03-07)

- 优化 TyhRate 组件样式细节
- 优化 TyhRate、TyhTable 组件一些 props 的默认值编写方式
- 优化格式

## 3.3.3 (2022-03-07)

- 更新计算属性导致样式不生效的 bug

## 3.3.2 (2022-03-06)

- 优化 TyhMenu 组件目前存在的 Bug
- 优化代码结构

## 3.3.1 (2022-03-06)

以前开发的组件，仍然存在很多不足之处，比如 TyhMenu 导航栏，所以在接下来几个版本中，需要将其进行修复或重做

- TyhMenuItem 组件 废除 url 配置项，新增 to 配置项（你可以理解为该了一个称呼，其实使用方式是一样的）
- TyhMenuItem 组件 废除 color 配置项
- TyhMenu 组件废除 background 属性
- TyhMenu 组件新增 theme 属性，可以配置导航栏的主题
- TyhMenu 组件新增 mode 属性，配置导航栏的排列方式
- 加入 `v-if="$slots.default"` 属性判断 TyhMenu 和 TyhMenuItem
- 导航栏的整体样式也做了略微的调整
- 暂时移除了 hove 状态
- 删除了冗余的 console.log

整体样式表暂未压缩

## 3.3.0 (2022-03-05)

- 优化 TyhNotification、TyhMessage 组件的模块共享
- 更新 TyhMessage 组件是 icon 展示方式
- 优化样式文件

## 3.2.20 (2022-03-05)

- 加入 TyhNotification 组件
- 更改按钮组件的样式目录位置

## 3.2.19 (2022-03-03)

- 优化 TyhCard 组件
- 启用 TyhCard 组件 simple 属性
- 新增 TyhCard 组件 body-style 属性

## 3.2.18 (2022-03-03)

- 优化按钮组件，解决 `TyhButton` 组件在禁用状态鼠标 `hover` 在 `icon` 上仍显示 `pointer` 的问题
- 按钮组件的样式优化了一些细节
- 按钮组件的插槽加入 `slots.default` 判断
- TyhIcon 组件默认大小改为 `16px`
- TyhIcon 样式表合并到总样式表中
- style 目录结构略有变化，加入字体文件夹
- 代码片段优化了很多

## 3.2.17 (2022-03-02)

- 修改 TyhTree 组件样式文件路径的问题，紧急修复了一下

## 3.2.16 (2022-03-02)

- 更新了一下 README 文件

## 3.2.15 (2022-02-28)

- 新增 TyhMessage 组件的 round 属性
- 优化 TyhMessage 组件的细节样式

## 3.2.14 (2022-02-28)

- 优化 TyhMessage 组件样式

## 3.2.13 (2022-02-28)

- TyhMessage 组件优化

## 3.2.12 (2022-02-23)

- 优化 TyhInput 组件代码，现在更加简洁了，删除冗余代码段，减少标签渲染

## 3.2.11 (2022-02-22)

- 更新 TyhTagging 组件样式问题

## 3.2.10 (2022-02-21)

- 加入 TyhTagging 组件
- 优化 TyhAlert、TyhAlert、TyhButton、TyhCard、TyhRadio 组件 class 处理细节
- TyhBackTop 组件的 `bottom` 和 `right` 属性现在可以传入数字或字符串了
- TyhDivision 组件的 `margin` 属性现在可以传入数字或字符串了
- TyhIcon 组件的 `size` 属性现在可以传入数字或字符串了
- TyhSwitch 组件的 `width` 属性现在可以传入数字或字符串了
- TyhText 组件的 `size` 属性现在可以传入数字或字符串了

## 3.2.9 (2022-02-19)

- 更新 readme 文件

## 3.2.8 (2022-02-17)

- 修改一些配置文件
- 添加版权文件

## 3.2.7 (2022-02-17)

- 新增 TyhSelect 选择器组件（组件尚未完善，还咋开发中，测试版本）

## 3.2.6 (2022-02-16)

- 修改 TyhTextarea 组件 resize 配置项

## 3.2.5 (2022-02-16)

- 新增 TyhTextarea 组件禁用状态的样式

## 3.2.4 (2022-02-16)

- 修改 TyhTextarea 组件 resize 配置项

## 3.2.3 (2022-02-16)

- 新增 TyhTextarea 组件
- 优化 TyhInput 组件部分细节

## 3.2.2 (2022-02-12)

- 更新 TyhInfo 组件
- 优化 TyhAvatar 组件

## 3.2.1 (2022-02-11)

- 更新 TyhPageHeader 组件

## 3.2.0 (2022-02-10)

- 新增 Tree 组件

## 3.1.1 (2022-02-09)

- 优化了一下 Radio 单选框
- 准备开发 Select 选择器组件

## 3.1.0 (2022-02-09)

- 新增 Radio 单选框组件（近期会有较大修改，目前仍是 beta 版本组件）

## 3.0.4 (2022-02-08)

- 更新 Readme 文件

## 3.0.3 (2022-02-07)

- 更新 Calendar 日历组件样式问题

## 3.0.2 (2022-02-07)

- 更新 Calendar 日历组件样式问题

## 3.0.1 (2022-02-07)

- 更新 Calendar 日历组件样式问题

## 3.0.0 (2022-02-07)

- 更新 Calendar 日历组件样式问题
- 减少 Calendar 组件冗余代码
- 更新 Calendar 组件在 Safari 不显示的问题

## 3.0.0 (2022-01-24)

- 优化部分组件细节

## 2.9.0 (2022-01-21)

- 优化组件的模块化封装

## 2.8.2 (2022-01-20)

- 优化 Division 组件的样式问题

## 2.8.1 (2022-01-20)

- 优化 Division 组件的样式问题
- Division 组件现在可以配置 icon 了

## 2.8.0 (2022-01-20)

- 优化 Division 组件在 Firefox 浏览器不能正常工作问题
- 更改了 Division 的参数配置

## 2.7.0 (2022-01-20)

- 优化 Calendar 日历组件

## 2.6.2 (2022-01-19)

- 优化 Safari 不显示的问题

## 2.6.1 (2022-01-19)

- 优化 Calendar 日历组件样式小细节

## 2.6.0 (2022-01-19)

- 加入 Calendar 日历组件

## 2.5.0 (2022-01-19)

- 优化
- 将函数返回改为计算属性

## 2.4.0 (2022-01-18)

- Switch 组件加入最小尺寸限制 最小为 `20`

## 2.3.0 (2022-01-18)

- 更新 Rate 组件不同步相应式问题
- 优化 Rate 组件代码

## 2.2.0 (2022-01-17)

- 加入 Switch 开关组件

## 2.1.0 (2022-01-06)

- 更新 Image 组件加载成功和失败的回调
- 更新 Avatar 组件加载成功和失败的回调

## 2.0.2 (2021-12-22)

- 更新图片地址

## 2.0.1 (2021-12-22)

- 更新配置文件

## 2.0.0 (2021-12-22)

- 更新网站地址

## 1.9.0 (2021-12-21)

- 更新配置文件

## 1.8.0 (2021-12-21)

- 加入 TyhButtonGroup 组件

## 1.7.0 (2021-12-21)

- 更新 package.json 文件配置

## 1.6.4 (2021-12-19)

- 更新说明文件

## 1.6.3 (2021-12-19)

- 更新说明文件

## 1.6.2 (2021-12-19)

- 更新说明文件

## 1.6.1 (2021-12-15)

- 优化目录结构

## 1.6.0 (2021-12-13)

- Button 组件加入 simple 配置项可以配置简约按钮
- Button 按钮禁用状态切换优化更好了
- Rate 组件解决了 showText 配置后文字初始化后不显示的问题

## 1.5.5 (2021-12-11)

- 优化 Table props 迭代 bug
- props 属性参数优化

## 1.5.4 (2021-12-11)

- 加入 Table 表格组件

## 1.5.3 (2021-12-10)

- 加入 Text 文字组件

## 1.5.2 (2021-12-10)

- 优化 TyhBackTop，TyhCard，TyhCrumbs，TyhCrumbsItem，TyhList，TyhMenuItem，TyhTurnPageItem 组件
- 这些组件在书写上变得更加简洁清晰了，删除部分冗余代码，优化样式
- TyhTurnPageItem 组件新增 prohibit 配置项

## 1.5.1 (2021-12-10)

- 优化 Rate 组件

## 1.5.0 (2021-12-09)

- 现在样式需要手动引入了

## 1.4.9 (2021-12-09)

- 更新英文文档

## 1.4.8 (2021-12-09)

- 优化组件冗余写法

## 1.4.7 (2021-12-09)

- Input 组件 innerText 配置项改为 placeholder
- Input 组件 prohibit 配置项改为 disabled
- Input 组件 prohibit 配置项改为 disabled
- Input 组件 inpType 配置项改为 type
- Input 组件 showIcon 配置项改为 icon
- Input 组件 新增 showPassword 配置项勇于查看密码
- Input 组件 添加 clear，enter，onblur，onfocus 回调

## 1.4.6 (2021-12-08)

- 优化 Alert 组件配置项
- Alert 组件事件名称由 close-alert 更新为 close
- Link 标签小图标禁用样式优化

## 1.4.5 (2021-12-08)

- 优化 Link，Button 组件类名渲染方式
- 130 行样式缩减为 28 行样式
- Link 组件废除 hoverline 配置项
- Link 组件 iconClass 配置项改为 icon

## 1.4.4 (2021-12-08)

- 优化 Tag 组件
- Tag 组件 isclose 配置项改为 isClose
- Tag 组件 onClose 事件改为 close
- Tag 组件 color 配置改为 type

## 1.4.3 (2021-12-08)

- 修复 Button 不能禁用 bug
- Button 样式由 387 行样式缩减到了 113 行，优化更好了
- 废除 Button 组件的 simple ，prohibit 和 big 配置项
- 新增 Button 组件的 disabled 配置项，disabled 配置项为禁用配置
- 按钮的尺寸修改现在变得更加自由了，没有过多的冗余配置
- Button 按钮组件的 size 属性新增 large 配置选项

## 1.4.2 (2021-12-02)

- 修复语法 bug

## 1.4.1 (2021-12-02)

- 添加 Container 布局容器组件 tyh-aside 配置项

## 1.4.0 (2021-12-02)

- 添加 Container 布局容器组件 tyh-footer,tyh-header 部分的配置项

## 1.3.8 (2021-12-02)

- 更新 Container 布局容器组件 tyh-footer 部分

## 1.3.7 (2021-12-02)

- 更新 Container 布局容器组件，开发测试中，尚不完备

## 1.3.6 (2021-12-01)

- 更新 Avatar 头像组件
- Image 图片组件加入新的配置项

## 1.3.5 (2021-12-01)

- Division 组件添加基础实线
- Division 组件添加文字颜色配置
- Division 组件添加 margin 配置
- List 组件类型检测优化
- List 组件添加 hover 带有投影配置

## 1.3.4 (2021-11-30)

- 更新 Image 图片组件

## 1.3.3 (2021-11-29)

- 更新 Rate 评分组件

## 1.3.2 (2021-11-29)

- 测试发布

## 1.3.1 (2021-11-29)

- 修改名称 bug

## 1.3.0 (2021-11-29)

- 修改名称 bug

## 1.2.9 (2021-11-29)

- 更新注册组件文件使用箭头函数
- 删除原本 name 属性
- 组件名修改

## 1.2.8 (2021-11-24)

- 更新按钮图标颜色处理

## 1.2.7 (2021-11-24)

- 更新基础按钮边框样式
- radio 组件准备开发中

## 1.2.6 (2021-11-22)

- 更新文本框的获取焦点的边框颜色
- 更新导航栏获取焦点时候的 hover 条颜色
