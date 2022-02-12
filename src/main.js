import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 错误监控
import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

// import tyhUi2 from 'tyh-ui2'
// import 'tyh-ui2/style/index.css'

import tyhUi2 from './components/tyhUi'
import './components/tyhUi/style/index.css'

import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'

onerror = function (msg, url, row, col) {
  console.log(msg)
  console.log(url)
}

createApp(App)
  .use(router)
  .use(Element3)
  .use(tyhUi2)
  .mount('#app')
