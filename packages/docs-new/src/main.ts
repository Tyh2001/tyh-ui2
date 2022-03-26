import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi2 from './tyhUi'
import 'tyh-ui2/style/index.css'
import './style/markdown-body.css'
import hljs from './highlight'
import './highlight/tyh-theme.css'

createApp(App)
  .use(router)
  .use(tyhUi2)
  .use(app => {
    app.directive('high', {
      mounted(el) {
        let blocks = el.querySelectorAll('pre code')
        for (let i = 0; i < blocks.length; i++) {
          hljs.highlightElement(blocks[i])
        }
      }
    })
  })
  .mount('#app')
