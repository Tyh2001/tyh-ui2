import TyhHeader from '../container/src/header.vue'

TyhHeader.install = (app: any) => {
  app.component(TyhHeader.name, TyhHeader)
}

export default TyhHeader
