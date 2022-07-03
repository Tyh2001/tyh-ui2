import TyhTextarea from './src/textarea.vue'

TyhTextarea.install = (app: any) => {
  app.component(TyhTextarea.name, TyhTextarea)
}

export default TyhTextarea
