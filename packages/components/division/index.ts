import TyhDivision from './src/division.vue'
import type { App } from 'vue'

TyhDivision.install = (app: App) => {
  app.component(TyhDivision.name, TyhDivision)
}

export default TyhDivision
