import DefaultTheme from 'vitepress/theme'
import tyhUi from '@tyh-ui2/components'
// import tyhUi from 'tyh-ui2'
import '@tyh-ui2/style'
// import 'tyh-ui2/style/index.css'
import './style/vitepress.scss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(tyhUi)
  }
}
