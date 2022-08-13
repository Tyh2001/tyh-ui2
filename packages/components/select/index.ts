import TyhSelect from './src/select.vue'
import type { App } from 'vue'

TyhSelect.install = (app: App) => {
  app.component(TyhSelect.name, TyhSelect)
}

export default TyhSelect
