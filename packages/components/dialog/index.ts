import TyhDialog from './src/dialog.vue'

TyhDialog.install = (app: any) => {
  app.component(TyhDialog.name, TyhDialog)
}

export default TyhDialog
