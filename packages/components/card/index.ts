import TyhCard from './src/card.vue'

TyhCard.install = (app: any) => {
  app.component(TyhCard.name, TyhCard)
}

export default TyhCard
