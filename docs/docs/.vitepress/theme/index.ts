import DefaultTheme from 'vitepress/theme'
import tyhUi from '../../../../packages/components/index'
import '@tyh-ui2/style'
import './style/vitepress.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(tyhUi)
  }
}
