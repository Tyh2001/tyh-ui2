import TyhButtonGroup from './TyhButtonGroup.vue'
import type { App } from 'vue'

TyhButtonGroup.install = (app: App) => {
  app.component(TyhButtonGroup.name, TyhButtonGroup)
}

export default TyhButtonGroup
