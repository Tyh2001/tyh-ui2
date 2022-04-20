import DefaultTheme from 'vitepress/theme'
import tyhUi2 from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(tyhUi2)
  }
}
