import { h, render } from 'vue'

export const createNot = (com, opts) => {
  const instance = createComponent(com, opts)
  document.body.append(instance.vnode.el)
  return instance.proxy
}

export const createComponent = (com, props) => {
  const node = h(com, props)
  const container = document.createElement('div')
  render(node, container)
  return node.component
}

export const mergeOptions = (def, opts) => {
  return Object.assign(def, opts)
}
