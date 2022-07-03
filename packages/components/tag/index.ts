import TyhTag from './src/tag.vue'

TyhTag.install = (app: any) => {
  app.component(TyhTag.name, TyhTag)
}

export default TyhTag
