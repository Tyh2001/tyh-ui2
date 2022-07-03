import TyhContainer from './src/container.vue'

TyhContainer.install = (app: any) => {
  app.component(TyhContainer.name, TyhContainer)
}

export default TyhContainer
