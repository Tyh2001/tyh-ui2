import TyhCard from './src/card.vue'
import type { App } from 'vue'

TyhCard.install = (app: App) => {
  app.component(TyhCard.name, TyhCard)
}

export default TyhCard
