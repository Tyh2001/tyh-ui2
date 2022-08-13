import TyhText from './src/text.vue'
import type { App } from 'vue'

TyhText.install = (app: App) => {
  app.component(TyhText.name, TyhText)
}

export default TyhText
