import TyhIcon from './src/icon.vue'
import type { App } from 'vue'

TyhIcon.install = (app: App) => {
  app.component(TyhIcon.name, TyhIcon)
}

export default TyhIcon
