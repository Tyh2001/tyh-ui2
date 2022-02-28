import messageComponent from './Message.vue'
import { h, render } from 'vue'

export function Message (opts) {
  return createMessage(mergeOptions(opts))
}

function createMessage (opts) {
  const instance = createComponent(messageComponent, opts)
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
  const def = { time: 2000, offset: 20 }
  return Object.assign(def, opts)
}
