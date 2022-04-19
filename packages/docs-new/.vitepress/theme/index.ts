import { App } from 'vue'
import { VPTheme } from '@vue/theme'
import {
  preferComposition,
  preferSFC,
  filterHeadersByPreference
} from './components/preferences'

import tyhUi from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

export default Object.assign({}, VPTheme, {
  enhanceApp({ app }: { app: App }) {
    app.provide('prefer-composition', preferComposition)
    app.provide('prefer-sfc', preferSFC)
    app.provide('filter-headers', filterHeadersByPreference)
    app.use(tyhUi)
  }
})
