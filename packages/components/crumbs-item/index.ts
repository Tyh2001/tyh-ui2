import TyhCrumbsItem from './src/TyhCrumbsItem.vue'
import type { App } from 'vue'

TyhCrumbsItem.install = (app: App) => {
  app.component(TyhCrumbsItem.name, TyhCrumbsItem)
}

export default TyhCrumbsItem
