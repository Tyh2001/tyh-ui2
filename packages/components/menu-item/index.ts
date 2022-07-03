import TyhMenuItem from './src/menu-item.vue'

TyhMenuItem.install = (app: any) => {
  app.component(TyhMenuItem.name, TyhMenuItem)
}

export default TyhMenuItem
