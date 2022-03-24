import { h, render } from 'vue'

/**
 *
 * @param com 组件
 * @param opts {time: 2000, offset: 20, message: '默认提示', type: 'default', round: true}
 * @returns
 */
export const createNot = (com: object, opts: object): object => {
  const instance: any = createComponent(com, opts)
  document.body.append(instance.vnode.el)
  return instance.proxy
}

export const mergeOptions = (def: object, opts: object): object =>
  Object.assign(def, opts)

/**
 *
 * @param com 组件
 * @param opts {time: 2000, offset: 20, message: '默认提示', type: 'default', round: true}
 * @returns
 */
const createComponent = (com: object, props: object): object => {
  const node: any = h(com, props)
  const container: HTMLDivElement = document.createElement('div')
  render(node, container)
  return node.component
}
