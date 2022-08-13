import TyhAvatar from './src/avatar.vue'
import type { App } from 'vue'

TyhAvatar.install = (app: App) => {
  app.component('TyhAvatar', TyhAvatar)
}

export default TyhAvatar
