import TyhImage from './src/image.vue'
import type { App } from 'vue'

TyhImage.install = (app: App) => {
  app.component(TyhImage.name, TyhImage)
}

export default TyhImage
