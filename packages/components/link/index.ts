import TyhLink from './src/link.vue'

TyhLink.install = (app: any) => {
  app.component(TyhLink.name, TyhLink)
}

export default TyhLink
