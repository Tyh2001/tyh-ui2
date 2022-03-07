import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

function hljs (hljs) {
  const languages = Object.create(null)
  const aliases = Object.create(null)
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: 'Plain text', contains: [] }

  function registerLanguage (languageName, languageDefinition) {
    let lang
    try {
      lang = languageDefinition(hljs)
    } catch (error) {
      // error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      // if (!SAFE_MODE) { throw error$1; } else { error(error$1); }
      lang = PLAINTEXT_LANGUAGE
    }
    // give it a temporary name if it doesn't have one in the meta-data
    if (!lang.name) lang.name = languageName
    languages[languageName] = lang
    lang.rawDefinition = languageDefinition.bind(null, hljs)

    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName })
    }
  }
  function registerAliases (aliasList, { languageName }) {
    if (typeof aliasList === 'string') {
      aliasList = [aliasList];
    }
    aliasList.forEach(alias => { aliases[alias.toLowerCase()] = languageName; });
  }

  // console.log(hljs)
  // const res = Object.assign(hljs, {
  //   registerLanguage
  // })
  return { registerLanguage }
  // console.log(res)
  // console.log(res, '121')
  // return hljs
  // return { res }
}

// Do not delete
// import tyhUi2 from 'tyh-ui2' 
// import 'tyh-ui2/style/index.css'

import tyhUi2 from './package/tyhUi'
import './package/tyhUi/style/index.css'

// import 'element3/lib/theme-chalk/index.css'
// import Element3 from 'element3'

import './demo/highlightjs/highlight.js/styles/stackoverflow-light.css' // 已解决
import { javascript } from './demo/highlightjs/highlight.js/lib/languages/javascript' // 已解决
// import { hljs } from './demo/highlightjs/highlight.js/lib/my-core' // 已解决
// import hljs from './demo/highlightjs/highlight.js/lib/my-core' // 已解决
// // console.log(hljs)
// import {}
const { registerLanguage } = hljs()
registerLanguage('javascript', javascript)

/**
 * import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hlVue from "@highlightjs/vue-plugin"
hljs.registerLanguage('javascript', javascript)
 * 
 */

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


  .use(app => {
    app.directive('tyh', {
      mounted (el) {
        el.querySelectorAll('pre code').forEach(item => {
          // hljs.highlightElement(item)
          console.log(item)
        })
      }
    })
  })

  // .use(Element3)
  // .use(hlVue)
  .use(tyhUi2)
  .mount('#app')
