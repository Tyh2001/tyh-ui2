import TyhButton from '../packages/button'
import TyhList from '../packages/list'

const components = [
  TyhButton,
  TyhList
]

const install = app => {
  components.forEach(component => {
    app.use(component)
  })
}

export default install
