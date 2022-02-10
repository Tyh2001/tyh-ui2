import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import tyhUi2 from 'tyh-ui2'
// import 'tyh-ui2/style/index.css'

import tyhUi2 from './components/tyhUi'
import './components/tyhUi/style/index.css'

import 'element3/lib/theme-chalk/index.css'
// import Element3 from 'element3'

createApp(App)
  .use(router)
  // .use(Element3)
  .use(tyhUi2)
  .mount('#app')
