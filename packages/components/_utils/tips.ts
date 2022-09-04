import { h, render } from 'vue'
import type { VNode, ComponentInternalInstance } from 'vue'

export const createNot = (com: object, opts: object) => {
  const instance: ComponentInternalInstance = createComponent(com, opts)
  document.body.append(instance.vnode.el as HTMLElement)
  return instance.proxy
}

export const mergeOptions = (def: object, opts: object): object => {
  return Object.assign(def, opts)
}

const createComponent = (com: object, props: object): ComponentInternalInstance => {
  const node: VNode = h(com, props)
  const container: HTMLDivElement = document.createElement('div')
  render(node, container)
  return node.component as ComponentInternalInstance
}
