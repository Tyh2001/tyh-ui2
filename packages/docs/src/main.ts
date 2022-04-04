import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore'
import router from './router'
import tyhUi2 from './tyhUi'
// import '@tyh-ui/tyh-ui2/style/index.css'
import '@tyh-ui/theme_style/index.css'
// import '@tyh-ui/theme_style/dist/style.css'
import './style/markdown-body.css'
import './style/global.css'
// @ts-ignore'
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
