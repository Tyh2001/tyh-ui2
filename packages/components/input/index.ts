import TyhInput from './src/input.vue'
import type { App } from 'vue'

TyhInput.install = (app: App) => {
  app.component(TyhInput.name, TyhInput)
}

export default TyhInput
