import TyhLink from './src/link.vue'
import type { App } from 'vue'

TyhLink.install = (app: App) => {
  app.component(TyhLink.name, TyhLink)
}

export default TyhLink
