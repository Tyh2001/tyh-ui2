import type { App } from 'vue'
import * as components from './components'
export * from './components'

const install = (app: App): void => {
  Object.entries(components).forEach(([key, value]: any): void => {
    app.component(key, value)
  })
}

export default {
  install
}
