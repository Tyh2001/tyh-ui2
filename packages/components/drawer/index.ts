import TyhDrawer from './src/drawer.vue'
import type { App } from 'vue'

TyhDrawer.install = (app: App) => {
  app.component(TyhDrawer.name, TyhDrawer)
}

export default TyhDrawer
