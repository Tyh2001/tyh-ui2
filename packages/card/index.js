import TyhCard from './src/card.vue'

TyhCard.install = function (Vue) {
  Vue.component(TyhCard.name, TyhCard)
}

export default TyhCard
