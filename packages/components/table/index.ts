import TyhTable from './src/table.vue'

TyhTable.install = (app: any) => {
  app.component(TyhTable.name, TyhTable)
}

export default TyhTable
