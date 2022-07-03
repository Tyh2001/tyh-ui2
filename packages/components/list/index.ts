import TyhList from './src/list.vue'

TyhList.install = (app: any) => {
  app.component(TyhList.name, TyhList)
}

export default TyhList
