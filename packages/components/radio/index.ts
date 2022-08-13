import TyhRadio from './src/radio.vue'
import type { App } from 'vue'

TyhRadio.install = (app: App) => {
  app.component(TyhRadio.name, TyhRadio)
}

export default TyhRadio
