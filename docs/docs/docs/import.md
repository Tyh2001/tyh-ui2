# 引入使用

## 完整引入

在 `main.js` 中引入下面内容

```js
import { createApp } from 'vue'
import App from './App.vue'
import tyhUi2 from 'tyh-ui2'
import 'tyh-ui2/dist/style.css'

createApp(App).use(tyhUi2).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```js
import { createApp } from 'vue'
import App from './App.vue'

// 组件按需引入
import { TyhButton, TyhCard } from 'tyh-ui2'

// 样式按需引入
import 'tyh-ui2/theme/button.css'
import 'tyh-ui2/theme/card.css'

createApp(App).use(TyhButton).use(TyhCard).mount('#app')
```

## CDN 引入

可通过 `CNN` 在 `*.html` 中引入 `tyh-ui2`，快速构建您的程序

```html
<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/tyh-ui2/dist/style.css"
  />
</head>

<body>
  <div id="app">
    <tyh-button round type="default">默认按钮</tyh-button>
    <tyh-button round type="primary">主要按钮</tyh-button>
    <tyh-button round type="success">成功按钮</tyh-button>
    <tyh-button round type="danger">危险按钮</tyh-button>
    <tyh-button round type="warning">警告按钮</tyh-button>
    <tyh-button round type="warning">警告按钮</tyh-button>

    <h1>{{ text }}</h1>

    <tyh-input v-model="text" />
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.global.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/tyh-ui2/dist/index.js"></script>
  <script>
    const { createApp, ref } = Vue

    const app = createApp({
      setup() {
        const text = ref('欢迎使用 Tyh Ui2')

        return { text }
      }
    })

    app.use(tyhUi2)
    app.mount('#app')
  </script>
</body>
```
