import { h, render } from 'vue'

export const createNot: Function = (com: object, opts: object): object => {
  const instance: any = createComponent(com, opts)
  document.body.append(instance.vnode.el)
  return instance.proxy
}

export const mergeOptions: Function = (def: object, opts: object): object => {
  return Object.assign(def, opts)
}

const createComponent: Function = (com: object, props: object): object => {
  const node: any = h(com, props)
  const container: HTMLDivElement = document.createElement('div')
  render(node, container)
  return node.component
}
