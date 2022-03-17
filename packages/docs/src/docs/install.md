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
  TyhCard,
  // ...
} from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

createApp(App).use(TyhButton).use(TyhCard).mount('#app')
```
