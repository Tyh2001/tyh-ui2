// import DefaultTheme from 'vitepress/theme'
import { App } from 'vue'
import tyhUi from 'tyh-ui2'
import 'tyh-ui2/style/index.css'
import { VPTheme } from '@vue/theme'

import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'

// export default {
//   ...DefaultTheme,
//   enhanceApp({ app }) {
//     app.use(tyhUi2)
//   }
// }

export default Object.assign({}, VPTheme, {
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.use(tyhUi)
  }
})
