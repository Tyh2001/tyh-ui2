import TyhPageHeader from './src/page-header.vue'

TyhPageHeader.install = (app: any) => {
  app.component(TyhPageHeader.name, TyhPageHeader)
}

export default TyhPageHeader
