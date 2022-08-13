import TyhFooter from '../container/src/footer.vue'
import type { App } from 'vue'

TyhFooter.install = (app: App) => {
  app.component(TyhFooter.name, TyhFooter)
}

export default TyhFooter
