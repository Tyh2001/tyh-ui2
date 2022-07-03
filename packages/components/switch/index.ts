import TyhSwitch from './src/switch.vue'

TyhSwitch.install = (app: any) => {
  app.component(TyhSwitch.name, TyhSwitch)
}

export default TyhSwitch
