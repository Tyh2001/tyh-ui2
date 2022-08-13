import TyhOption from './src/option.vue'
import type { App } from 'vue'

TyhOption.install = (app: App) => {
  app.component(TyhOption.name, TyhOption)
}

export default TyhOption
