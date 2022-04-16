# 快速上手

## 安装

推荐使用 npm 的方式安装

```shell
npm i tyh-ui2
```

## 完整引入

在 main.js 中引入下面内容

```js
import { createApp } from 'vue'
import App from './App.vue'
import tyhUi2 from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

createApp(App).use(tyhUi2).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```js
import { createApp } from 'vue'
import App from './App.vue'
import {
  TyhButton,
  TyhCard
  // ...
} from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

createApp(App).use(TyhButton).use(TyhCard).mount('#app')
```

<!-- ---
sidebar_position: 1
--- -->

<!-- # Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes. -->
