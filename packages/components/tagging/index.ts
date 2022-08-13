import TyhTagging from './src/tagging.vue'
import type { App } from 'vue'

TyhTagging.install = (app: App) => {
  app.component(TyhTagging.name, TyhTagging)
}

export default TyhTagging
