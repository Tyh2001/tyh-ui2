import TyhCollapse from './src/collapse.vue'

TyhCollapse.install = (app: any) => {
  app.component(TyhCollapse.name, TyhCollapse)
}

export default TyhCollapse
