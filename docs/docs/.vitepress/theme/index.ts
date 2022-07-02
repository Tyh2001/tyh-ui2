import FightingDesign from '@tyh-ui2/components'
import '@tyh-ui2/style'
import './style/md.scss'
import './style/vitepress.scss'
import { VPTheme } from '../../../src/index'
import { h } from 'vue'

export default {
  ...VPTheme,
  enhanceApp({ app }) {
    app.use(FightingDesign)
  },
  Layout() {
    return h(VPTheme.Layout, null, {})
  }
}
