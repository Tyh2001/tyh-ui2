import TyhRadio from './src/radio.vue'

TyhRadio.install = (app: any) => {
  app.component(TyhRadio.name, TyhRadio)
}

export default TyhRadio
