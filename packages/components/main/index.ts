import TyhMain from '../container/src/main.vue'
import type { App } from 'vue'

TyhMain.install = (app: App) => {
  app.component(TyhMain.name, TyhMain)
}

export default TyhMain
