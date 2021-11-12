import TyhAlert from './alert.vue'

TyhAlert.install = function (Vue) {
  Vue.component(TyhAlert.name, TyhAlert)
}

export default TyhAlert