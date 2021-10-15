import TyhButton from './src/button.vue'

TyhButton.install = function (app) {
  app.component(TyhButton.name, TyhButton)
}

export default TyhButton
