import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// https://github.com/Tyh2001/tyh-ui
import tyhUi2 from './tyhUi'
import '@tyh-ui/tyh-ui2/style/index.css' // 线上
// import '@tyh-ui/style/index.ts' // 测试

// https://github.com/Tyh2001/bright-code
import brightCode from 'bright-code'
import 'bright-code/theme/index.css'

// markdown style
import './style/markdown-body.scss'

// global style
import './style/global.scss'

createApp(App)
  .use(router)
  .use(tyhUi2)
  .use((app) => {
    app.directive('high', {
      mounted(el) {
        const blocks = el.querySelectorAll('pre code')
        for (let i: number = 0; i < blocks.length; i++) {
          brightCode.highlightElement(blocks[i])
        }
      }
    })
  })
  .mount('#app')
