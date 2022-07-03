import TyhCheckbox from './src/checkbox.vue'

TyhCheckbox.install = (app: any) => {
  app.component(TyhCheckbox.name, TyhCheckbox)
}

export default TyhCheckbox
