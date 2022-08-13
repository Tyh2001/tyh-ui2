import TyhSwitch from './src/switch.vue'
import type { App } from 'vue'

TyhSwitch.install = (app: App) => {
  app.component(TyhSwitch.name, TyhSwitch)
}

export default TyhSwitch
