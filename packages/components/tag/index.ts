import TyhTag from './src/tag.vue'
import type { App } from 'vue'

TyhTag.install = (app: App) => {
  app.component(TyhTag.name, TyhTag)
}

export default TyhTag
