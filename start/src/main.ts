import { createApp } from 'vue'
import App from './App.vue'
import tyhUi2 from '@tyh-ui/tyh-ui2'
import '@tyh-ui/style/index.scss'
import router from './router'

import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'

createApp(App).use(router).use(tyhUi2).use(Element3).mount('#app')
