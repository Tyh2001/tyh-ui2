import TyhHeader from '../container/src/header.vue'
import type { App } from 'vue'

TyhHeader.install = (app: App) => {
  app.component(TyhHeader.name, TyhHeader)
}

export default TyhHeader
