import { createApp } from 'vue'
import App from './App.vue'
import tyhUi2 from '@tyh-ui2/components'
import '@tyh-ui2/style'
import router from './router'

createApp(App).use(router).use(tyhUi2).mount('#app')
