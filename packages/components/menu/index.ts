import TyhMenu from './src/menu.vue'
import type { App } from 'vue'

TyhMenu.install = (app: App) => {
  app.component(TyhMenu.name, TyhMenu)
}

export default TyhMenu
