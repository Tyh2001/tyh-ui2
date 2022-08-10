import { createApp } from 'vue'
import App from './src/App.vue'

import tyhUi2 from '@tyh-ui2/components'
import '@tyh-ui2/style'

// import tyhUi2 from '../dist'

createApp(App).use(tyhUi2).mount('#app')
