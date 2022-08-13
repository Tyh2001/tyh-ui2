import TyhTextarea from './src/textarea.vue'
import type { App } from 'vue'

TyhTextarea.install = (app: App) => {
  app.component(TyhTextarea.name, TyhTextarea)
}

export default TyhTextarea
