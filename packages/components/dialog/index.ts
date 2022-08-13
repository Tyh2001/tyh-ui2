import TyhDialog from './src/dialog.vue'
import type { App } from 'vue'

TyhDialog.install = (app: App) => {
  app.component(TyhDialog.name, TyhDialog)
}

export default TyhDialog
