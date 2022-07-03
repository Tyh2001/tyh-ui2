import TyhMenu from './src/menu.vue'

TyhMenu.install = (app: any) => {
  app.component(TyhMenu.name, TyhMenu)
}

export default TyhMenu
