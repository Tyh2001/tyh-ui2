# tyh-ui 贡献指南

## 前言

你好！我很高兴你有兴趣为 tyh-ui 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南

## 开发设置

先把项目跑起来

- Fork [tyh-ui](https://github.com/Tyh2001/tyh-ui)
- `git clone xxxxx`
- `cd tyh-ui`
- `pnpm i`
- `pnpm run dev:docs`

## 提交说明规范

git 允许我们在每次提交时，附带一个提交信息作为说明，当执行 `commit` 的时候，需要严格按照下方说明规范进行填写说明信息

| 类型     | 描述                                 |
| -------- | ------------------------------------ |
| build    | 打包                                 |
| chore    | 改变构建流程或者增加依赖库、工具等   |
| ci       | CI 相关更改                          |
| docs     | 文档改变                             |
| feat     | 新功能                               |
| fix      | 修复                                 |
| perf     | 性能优化                             |
| refactor | 既不修复错误也不添加功能的代码更改   |
| revert   | 发布新版本                           |
| style    | 标记、空格、格式、缺少分号……         |
| test     | 增加测试/测试用例                    |

`commit` 规范为：`<类型>：<具体描述信息>`

- 如添加新功能

提交规范为：`feat：增加了xx的xx功能`

- 如修改代码样式

提交规范为：`style：修改xx的xx样式`

- 在修复 bug 时

提交规范为：`fix(可选说明信息)：修改xxxx（issue 编号（可选））`

## 项目结构

<!-- ```
├── src                     开发目录
│ ├── demo                  测试组件
│ ├── package               组件目录
│ │ ├── THEME_STYLE         组件开发样式
│ │ └── tyhUi               组件源文件
│ ├── router                路由
│ ├── App.vue
│ └── main.js
├── .gitignore
├── CHANGELOG.md            更新日志
├── README.md               README 英文
├── README_zh.md            README 中文
├── SECURITY.md             安全反馈
├── STRUCTURE.md            目录结构
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
``` -->

## 财务贡献

开发不易，欢迎大家赞助！

<img width="200px" align="center" src="https://tianyuhao.cn/images/tyh-ui/weixin.jpg" alt="weixin"><img width="200px" align="center" src="https://tianyuhao.cn/images/tyh-ui/zhifubao.jpg" alt="zhifubao">

## 感谢

感谢所有已经为 tyh-ui <a href="https://github.com/Tyh2001/tyh-ui2/graphs/contributors">做出贡献的人</a>！

**Star**

[![Stargazers repo roster for @Tyh2001/tyh-ui](https://reporoster.com/stars/Tyh2001/tyh-ui)](https://github.com/Tyh2001/tyh-ui/stargazers)

**Fork**

[![Forkers repo roster for @Tyh2001/tyh-ui](https://reporoster.com/forks/Tyh2001/tyh-ui)](https://github.com/Tyh2001/tyh-ui/network/members)
