import TyhPageHeader from './src/page-header.vue'
import type { App } from 'vue'

TyhPageHeader.install = (app: App) => {
  app.component(TyhPageHeader.name, TyhPageHeader)
}

export default TyhPageHeader
