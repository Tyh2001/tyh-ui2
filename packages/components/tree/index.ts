import TyhTree from './src/tree.vue'

TyhTree.install = (app: any) => {
  app.component(TyhTree.name, TyhTree)
}

export default TyhTree
