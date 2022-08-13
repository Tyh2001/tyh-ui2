import TyhInfo from './src/info.vue'
import type { App } from 'vue'

TyhInfo.install = (app: App) => {
  app.component(TyhInfo.name, TyhInfo)
}

export default TyhInfo
