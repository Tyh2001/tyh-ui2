import TyhAside from '../container/src/aside.vue'
import type { App } from 'vue'

TyhAside.install = (app: App) => {
  app.component(TyhAside.name, TyhAside)
}

export default TyhAside
