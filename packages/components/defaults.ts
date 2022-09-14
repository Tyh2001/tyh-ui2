import { version } from './package.json'
import type { App } from 'vue'
import * as components from './components'

export const install = (app: App): App => {
  Object.entries(components).forEach(([key, value]): void => {
    app.component(key, value)
  })

  app.config.globalProperties.FMessage = components.Message
  app.config.globalProperties.FNotification = components.Notification
  return app
}

export default {
  version,
  install
}
