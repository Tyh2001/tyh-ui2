import TyhImage from './src/image.vue'

TyhImage.install = (app: any) => {
  app.component(TyhImage.name, TyhImage)
}

export default TyhImage
