import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi2 from '@tyh-ui/tyh-ui2'
import '@tyh-ui/tyh-ui2/style/index.css'
import './style/markdown-body.css'

// import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'

createApp(App).use(router).use(tyhUi2).mount('#app')
