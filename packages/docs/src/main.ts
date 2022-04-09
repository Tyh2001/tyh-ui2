import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi2 from './tyhUi'
import '@tyh-ui/style'
import './style/markdown-body.css'
import './style/global.css'
import brightCode from 'bright-code'
import 'bright-code/theme/tyh-theme.css'

createApp(App)
  .use(router)
  .use(tyhUi2)
  .use(app => {
    app.directive('high', {
      mounted(el) {
        let blocks = el.querySelectorAll('pre code')
        for (let i = 0; i < blocks.length; i++) {
          brightCode.highlightElement(blocks[i])
        }
      }
    })
  })
  .mount('#app')
