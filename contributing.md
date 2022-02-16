# tyh-ui 贡献指南

## 前言

你好！我很高兴你有兴趣为 tyh-ui 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南

## 开发设置

先把项目跑起来

- Fork [tyh-ui2](https://github.com/Tyh2001/tyh-ui2)
- `git clone xxxxx`
- `cd tyh-ui2`
- `npm i`
- `npm run dev`

## 提交说明规范

当执行 `commit` 的时候，需要严格按照下方说明规范进行填写说明信息

| code     | 描述                                 |
| -------- | ------------------------------------ |
| feat     | 新功能                               |
| fix      | 修复                                 |
| docs     | 文档改变                             |
| style    | 代码格式改变                         |
| refactor | 某个已有功能重构                     |
| perf     | 性能优化                             |
| test     | 增加测试/测试用例                    |
| revert   | 撤销上一次的 commit                  |
| chore    | 改变构建流程或者增加依赖库、工具等   |
| Init     | 新建库                               |
| release  | 发布新版本                           |

`commit` 规范为：`<code>：<具体描述（中文/英文）>`

- 如添加新功能

提交规范为：`feat：增加了xx的xx功能`

- 如修改代码样式

提交规范为：`style：修改xx的xx样式`

## 项目结构

```
├── src                     开发目录
│ ├── components            组件目录
│ │ ├── allStyle            组件开发样式
│ │ ├── demo                测试组件
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
```

## 财务贡献

开发不易，欢迎大家赞助！

<img width="300px" align="center" src="https://tianyuhao.cn/images/tyh-ui/weixin.jpg" alt="weixin"><img width="300px" align="center" src="https://tianyuhao.cn/images/tyh-ui/zhifubao.jpg" alt="zhifubao">

## 感谢

感谢所有已经为 tyh-ui <a href="https://github.com/Tyh2001/tyh-ui2/graphs/contributors">做出贡献的人</a>！
