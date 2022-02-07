import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import tyhUi2 from 'tyh-ui2'
// import 'tyh-ui2/style/index.css'

import tyhUi2 from './components/tyhUi'
import './components/tyhUi/style/index.css'

createApp(App)
  .use(router)
  .use(tyhUi2)
  .mount('#app')
