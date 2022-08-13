import TyhRate from './src/rate.vue'
import type { App } from 'vue'

TyhRate.install = (app: App) => {
  app.component(TyhRate.name, TyhRate)
}

export default TyhRate
