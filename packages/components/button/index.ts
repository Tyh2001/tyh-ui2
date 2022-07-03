import TyhButton from './src/button.vue'

TyhButton.install = (app: any) => {
  app.component(TyhButton.name, TyhButton)
}

export default TyhButton
