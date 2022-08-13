import TyhTable from './src/table.vue'
import type { App } from 'vue'

TyhTable.install = (app: App) => {
  app.component(TyhTable.name, TyhTable)
}

export default TyhTable
