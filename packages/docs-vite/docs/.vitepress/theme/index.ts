import tyhUi from 'tyh-ui2'
import 'tyh-ui2/style/index.css'
import { VPTheme } from '@vue/theme'

export default Object.assign({}, VPTheme, {
  enhanceApp({ app }) {
    app.use(tyhUi)
  }
})
