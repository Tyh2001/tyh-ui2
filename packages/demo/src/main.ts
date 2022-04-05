import { createApp } from 'vue'
import App from './App.vue'
import tyhUi2 from '@tyh-ui/tyh-ui2'
import '@tyh-ui/theme_style/index.css'
// import '@tyh-ui/theme_style/dist/style.css'
import router from './router'

createApp(App).use(router).use(tyhUi2).mount('#app')
