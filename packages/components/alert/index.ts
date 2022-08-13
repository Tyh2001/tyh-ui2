import TyhAlert from './src/alert.vue'
import type { App } from 'vue'

TyhAlert.install = (app: App) => {
  app.component(TyhAlert.name, TyhAlert)
}

export default TyhAlert
