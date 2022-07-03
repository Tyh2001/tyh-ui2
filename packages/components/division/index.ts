import TyhDivision from './src/division.vue'

TyhDivision.install = (app: any) => {
  app.component(TyhDivision.name, TyhDivision)
}

export default TyhDivision
