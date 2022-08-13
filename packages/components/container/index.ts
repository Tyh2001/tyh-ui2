import TyhContainer from './src/container.vue'
import type { App } from 'vue'

TyhContainer.install = (app: App) => {
  app.component(TyhContainer.name, TyhContainer)
}

export default TyhContainer
