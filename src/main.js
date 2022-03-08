import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Do not delete
// import tyhUi2 from 'tyh-ui2'
// import 'tyh-ui2/style/index.css'

import tyhUi2 from './package/tyhUi'
import './package/tyhUi/style/index.css'

import 'element3/lib/theme-chalk/index.css'
// import Element3 from 'element3'

// import './demo/highlightjs/highlight.js/styles/stackoverflow-light.css' // 已解决
// import { javascript } from './demo/highlightjs/highlight.js/lib/languages/javascript' // 已解决
// import { hljs } from './demo/highlightjs/highlight.js/lib/my-core' // 已解决
// import hljs from './demo/highlightjs/highlight.js/lib/my-core' // 已解决
// // console.log(hljs)
// import {}

// 以前的引入方式
/**
 *
 import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
app.use(({ directive }) => {
  directive('highlight', {
    mounted (el) {
      el.querySelectorAll('pre code').forEach(item => {
        hljs.highlightElement(item)
      })
    }
  })
})

<pre v-highlight><code class="html">{{ back.back1 }}</code></pre>
 */

createApp(App)
  .use(router)
  // .use(app => {
  //   app.directive('tyh', {
  //     mounted (el) {
  //       el.querySelectorAll('pre code').forEach(item => {
  //         // hljs.highlightElement(item)
  //         console.log(item)
  //       })
  //     }
  //   })
  // })
  // .use(Element3)
  // .use(hlVue)
  .use(tyhUi2)
  .mount('#app')
