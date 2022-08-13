import TyhMenuItem from './src/menu-item.vue'
import type { App } from 'vue'

TyhMenuItem.install = (app: App) => {
  app.component(TyhMenuItem.name, TyhMenuItem)
}

export default TyhMenuItem
