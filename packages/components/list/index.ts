import TyhList from './src/list.vue'
import type { App } from 'vue'

TyhList.install = (app: App) => {
  app.component(TyhList.name, TyhList)
}

export default TyhList
