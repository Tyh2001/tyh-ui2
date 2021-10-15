import TyhButton from '../packages/button'

const components = [
  TyhButton
]

const install = app => {
  components.forEach(component => {
    app.use(component)
  })
}

// const tyhUI = {
//   install
// }

export default install
