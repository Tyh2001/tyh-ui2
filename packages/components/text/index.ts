import TyhText from './src/text.vue'

TyhText.install = (app: any) => {
  app.component(TyhText.name, TyhText)
}

export default TyhText
