import TN from './TyhNotification.vue'
import { h, render } from 'vue'

export function Notification (opts) {
  console.log(mergeOptions(opts))
  return createNot(mergeOptions(opts))
}

function createNot (opts) {
  const instance = createComponent(TN, opts)
  document.body.append(instance.vnode.el)
  return instance.proxy
}

function createComponent (com, props) {
  const vnode = h(com, props)
  const container = document.createElement('div')
  render(vnode, container)
  return vnode.component
}

function mergeOptions (opts) {
  const def = {
    title: '',
    message: '',
    time: 4500,
    position: 'top-right',
    close: false,
    type: 'default',
    background: '#fff'
  }
  return Object.assign(def, opts)
}

