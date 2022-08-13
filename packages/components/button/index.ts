import TyhButton from './src/button.vue'
import type { App } from 'vue'

TyhButton.install = (app: App) => {
  app.component(TyhButton.name, TyhButton)
}

export default TyhButton
