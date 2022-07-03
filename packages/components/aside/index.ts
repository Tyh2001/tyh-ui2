import TyhAside from '../container/src/aside.vue'

TyhAside.install = (app: any) => {
  app.component(TyhAside.name, TyhAside)
}

export default TyhAside
