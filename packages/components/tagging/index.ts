import TyhTagging from './src/tagging.vue'

TyhTagging.install = (app: any) => {
  app.component(TyhTagging.name, TyhTagging)
}

export default TyhTagging
