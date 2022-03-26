import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi2 from './tyhUi'
import 'tyh-ui2/style/index.css'
import './style/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import hlVue from '@highlightjs/vue-plugin'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('xml', xml)

// import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'

createApp(App)
  .use(router)
  // .use(app => {
  //   app.directive('highlight', {
  //     mounted (el) {
  //       let blocks = el.querySelectorAll('pre code')
  //       for (let i = 0; i < blocks.length; i++) {
  //         hljs.highlightElement(blocks[i])
  //       }
  //     },
  //   })
  // })
  .use(hlVue)
  .use(tyhUi2)
  .mount('#app')
