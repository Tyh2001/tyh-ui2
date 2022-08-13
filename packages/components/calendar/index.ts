import TyhCalendar from './src/calendar.vue'
import type { App } from 'vue'

TyhCalendar.install = (app: App) => {
  app.component(TyhCalendar.name, TyhCalendar)
}

export default TyhCalendar
