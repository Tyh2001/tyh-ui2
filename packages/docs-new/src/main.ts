import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tyhUi2 from './tyhUi'
import 'tyh-ui2/style/index.css'
import './style/markdown-body.css'

createApp(App).use(router).use(tyhUi2).mount('#app')
