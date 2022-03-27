# tyh-ui 贡献指南

## 前言

你好！欢迎使用 tyh-ui :blush:

在这里，不需要你的技术有多么优秀，只希望你对做开源有足够的热爱。如果你有技术，你可以参加主要的开发；如果你是一个新手，可以来写 Ui 设计方面的开发，就算你技术水平一团糟，还可以看看文档，找一找错别字，提一提 issues 或 pr 呢，不是吗？

我很高兴你有兴趣为 tyh-ui 做贡献。在提交您的贡献之前，请务必花点时间阅读以下指南。

## 安装启动

先把项目跑起来

- Fork [tyh-ui](https://github.com/Tyh2001/tyh-ui)
- `git clone xxxxx`
- `cd tyh-ui`
- `pnpm i`
- `pnpm run dev:docs`

## 提交说明规范

git 允许我们在每次提交时，附带一个提交信息作为说明，当执行 `commit` 的时候，需要严格按照下方说明规范进行填写说明信息，提交信息必须是下面信息中的一个，后面跟随**英文的冒号+空格+信息**

例如：

```shell
git commit -m 'feat: 新增xxx功能'
```

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
| style    | 标记、空格、格式、缺少分号           |
| test     | 增加测试/测试用例                    |

## 项目结构

```
├── .github
|  ├── ISSUE_TEMPLATE
|  ├── workflows
|  ├── CONTRIBUTING_zh.md         贡献指南中文版
|  ├── CONTRIBUTING.md            贡献指南英文版
|  ├── Current_Problems.md        目前的问题
|  └── FUNDING.yml
├── .husky
├── .vscode
├── packages                      主要源文件
|  ├── demo                       测试项目
|  ├── docs                       tyh-ui2 文档
|  ├── docs-new                   tyh-ui2 新文档
|  ├── THEME_STYLE                主样式表
|  └── tyh-ui2                    tyh-ui2 的源码
├── .editorconfig                 编辑器配置因为开发者的编辑器都不一样
├── .eslintignore                 不需要 eslint 校验的文件
├── .eslintrc.js                  eslintrc 规范的配置文件
├── .gitignore                    git 提交忽略的上传文件
├── .pnpm-debug.log
├── .prettierignore               配置不需要格式化的文件
├── .prettierrc                   Prettier 代码格式化配置文件
├── CHANGELOG.md                  变更日志
├── LICENSE                       许可证
├── README.md                     自述文件英文
├── README_zh.md                  自述文件中文
├── SECURITY.md                   安全文件
├── commitlint.config.js          commit 提交规范配置文件
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml           定义工作空间的根目录并允许您从工作空间中包含/排除目录
├── vitest.config.ts              vitest 配置文件
└── yarn.lock
```

**相关链接**

- [pnpm](https://github.com/pnpm/pnpm) - pnpm 快速的，节省磁盘空间的包管理工具
- [vitest](https://github.com/vitest-dev/vitest) - 测试单元
- [commitlint](https://github.com/conventional-changelog/commitlint) - commit 消息规范
- [eslint](https://github.com/eslint/eslint) - 代码格式规范
- [husky](https://github.com/typicode/husky) - 提交新信息监测
- [prettier](https://github.com/prettier/prettier) - 代码格式化

## 财务贡献

开发不易，欢迎大家赞助！

<img width="200px" align="center" src="https://tianyuhao.cn/images/tyh-ui/weixin.jpg" alt="weixin"><img width="200px" align="center" src="https://tianyuhao.cn/images/tyh-ui/zhifubao.jpg" alt="zhifubao">

## 非常感谢

感谢所有已经为 tyh-ui [做出贡献的人](https://github.com/Tyh2001/tyh-ui2/graphs/contributors)！

**Star**

[![Stargazers repo roster for @Tyh2001/tyh-ui](https://reporoster.com/stars/Tyh2001/tyh-ui)](https://github.com/Tyh2001/tyh-ui/stargazers)

**Fork**

[![Forkers repo roster for @Tyh2001/tyh-ui](https://reporoster.com/forks/Tyh2001/tyh-ui)](https://github.com/Tyh2001/tyh-ui/network/members)
