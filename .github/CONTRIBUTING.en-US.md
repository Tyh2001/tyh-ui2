# Tyh-ui2 contributing Guide

## Preface

Hello! Welcome to use tyh-ui 😊

Here, I don't need how excellent your technology is. I just hope you have enough love for open source. If you have technology, you can participate in major development; If you are a novice, you can write the development of UI design. Even if your technical level is in a mess, you can also look at the documents, find the wrong words, and mention issues or PR, right?

I'm glad you're interested in contributing to tyh UI. Before submitting your contribution, be sure to take some time to read the following guide.

## Installation startup

Start the project first

- Fork [tyh-ui2](https://github.com/Tyh2001/tyh-ui2)
- `git clone xxxxx`
- `cd tyh-ui`
- `pnpm i`
- `pnpm dev:docs`

## Command description

- `pnpm dev:demo` Start the test project to test the components
- `pnpm dev:docs` Start document project
- `pnpm build:docs` Document packaging project
- `pnpm build:style` Packaging style sheet

## Commit specification

Git allows us to attach a submission information as a description when submitting each time. When executing `commit`, we need to fill in the description information in strict accordance with the specification below. The submission information must be one of the following information, followed by **colon + space + information in English**

For example:

```shell
git commit -m 'feat: Add XXX function'
```

| type     | describe                                                               |
| -------- | ---------------------------------------------------------------------- |
| build    | build                                                                  |
| chore    | Change the construction process or add dependent libraries, tools, etc |
| ci       | Ci related changes                                                     |
| docs     | Document change                                                        |
| feat     | new function                                                           |
| fix      | repair                                                                 |
| perf     | performance optimization                                               |
| refactor | Code changes that neither fix errors nor add features                  |
| revert   | Release new version                                                    |
| style    | Tag, space, format, missing semicolon                                  |
| test     | Add test / test case                                                   |

## Project structure

```
├── .github
|  ├── ISSUE_TEMPLATE
|  ├── workflows
|  ├── CONTRIBUTING_zh.md         Contribution guide Chinese version
|  ├── CONTRIBUTING.md            Contribution Guide English version
|  ├── Current_Problems.md        Current problems
|  └── FUNDING.yml
├── .husky
├── .vscode
├── packages                      Primary source file
|  ├── demo                       Test items
|  ├── docs                       Tyh-ui2 docs
|  ├── style                      Main style sheet
|  └── tyh-ui2                    Tyh-ui2 Source code
├── .editorconfig                 Editor configuration because developers' editors are different
├── .eslintignore                 Files that do not require eslint verification
├── .eslintrc.js                  Configuration file of eslintrc specification
├── .gitignore                    Git submit ignored upload files
├── .pnpm-debug.log
├── .prettierignore               Configure files that do not need to be formatted
├── .prettierrc                   Prettier Code format configuration file
├── CHANGELOG.md                  CHANGELOG
├── LICENSE                       LICENSE
├── README.md                     Readme in English
├── README_zh.md                  Readme in Chinese
├── SECURITY.md                   SECURITY
├── commitlint.config.js          Commit submit specification configuration file
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml           Defines the root directory of the workspace and allows you to include / exclude directories from the workspace
├── vitest.config.ts              vitest configuration file
└── yarn.lock
```

**Related links**

- [pnpm](https://github.com/pnpm/pnpm) - Pnpm fast, disk space saving package management tool
- [vitest](https://github.com/vitest-dev/vitest) - Test unit
- [commitlint](https://github.com/conventional-changelog/commitlint) - Commit message specification
- [eslint](https://github.com/eslint/eslint) - Code format specification
- [husky](https://github.com/typicode/husky) - Submit new information monitoring
- [prettier](https://github.com/prettier/prettier) - Code formatting

## Financial contribution

Development is not easy, welcome to sponsor!

<img width="200px" align="center" src="https://tianyuhao.cn/images/tyh-ui/weixin.jpg" alt="weixin"><img width="200px" align="center" src="https://tianyuhao.cn/images/tyh-ui/zhifubao.jpg" alt="zhifubao">

## Thank a lot

Thank you all for tyh-ui [People who contribute](https://github.com/Tyh2001/tyh-ui2/graphs/contributors)！
