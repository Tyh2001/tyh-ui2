import TyhDrawer from './src/drawer.vue'

TyhDrawer.install = (app: any) => {
  app.component(TyhDrawer.name, TyhDrawer)
}

export default TyhDrawer
