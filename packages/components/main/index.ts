import TyhMain from '../container/src/main.vue'

TyhMain.install = (app: any) => {
  app.component(TyhMain.name, TyhMain)
}

export default TyhMain
