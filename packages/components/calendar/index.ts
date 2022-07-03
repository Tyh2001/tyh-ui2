import TyhCalendar from './src/calendar.vue'

TyhCalendar.install = (app: any) => {
  app.component(TyhCalendar.name, TyhCalendar)
}

export default TyhCalendar
