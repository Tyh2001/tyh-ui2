import { h, render } from 'vue'

export const createNot = (com: object, opts: object): object => {
  const instance = createComponent(com, opts)
  document.body.append(instance.vnode.el)
  return instance.proxy
}

export const mergeOptions = (def: object, opts: object): object =>
  Object.assign(def, opts)

const createComponent = (com: object, props: object): object => {
  const node = h(com, props)
  const container = document.createElement('div')
  render(node, container)
  return node.component
}
