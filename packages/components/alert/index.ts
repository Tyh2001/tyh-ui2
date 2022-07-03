import TyhAlert from './src/alert.vue'

TyhAlert.install = (app: any) => {
  app.component(TyhAlert.name, TyhAlert)
}

export default TyhAlert
