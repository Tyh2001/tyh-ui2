import TyhCrumbs from './src/crumbs.vue'
import type { App } from 'vue'

TyhCrumbs.install = (app: App) => {
  app.component(TyhCrumbs.name, TyhCrumbs)
}

export default TyhCrumbs
