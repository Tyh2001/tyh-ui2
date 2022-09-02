import { createApp } from 'vue'
import App from './src/App.vue'

import TyhUi2 from '../packages/components/index'
import '@tyh-ui2/style'

// import TyhUi2 from '../dist'

console.log(TyhUi2)

createApp(App).use(TyhUi2).mount('#app')
