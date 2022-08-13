import TyhBackTop from './src/back-top.vue'
import type { App } from 'vue'

TyhBackTop.install = (app: App) => {
  app.component('TyhBackTop', TyhBackTop)
}

export default TyhBackTop
