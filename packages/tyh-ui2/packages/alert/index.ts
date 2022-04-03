import TyhAlert from './src/TyhAlert.vue'

TyhAlert.install = (app: any) => {
  app.component('TyhAlert', TyhAlert)
}

export default TyhAlert
