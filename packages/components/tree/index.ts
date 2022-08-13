import TyhTree from './src/tree.vue'
import type { App } from 'vue'

TyhTree.install = (app: App) => {
  app.component(TyhTree.name, TyhTree)
}

export default TyhTree
