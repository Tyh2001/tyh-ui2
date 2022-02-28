import { h, render } from 'vue'
import TyhMessage from './TyhMessage.vue'

export function Message (opts) {
  console.log(createMessage(mergeOptions(opts)))
  return createMessage(mergeOptions(opts))
}

/**
 * 配置 message
 * @param { object } opts 配置对象
 * @returns 全部配置项
 */
function mergeOptions (opts) {
  const defaultOptions = {
    type: 'default',
    time: 2000,
    iconClass: ''
  }
  return Object.assign(defaultOptions, opts)
}

/**
 * 创建 message
 * @param { object } opts 配置对象
 * @returns 
 */
function createMessage (opts) {
  const instance = createComponent(TyhMessage, opts)
  document.body.append(instance.vnode.el)
  return instance.proxy
}

/**
 * 创建挂载容器
 * @param { object } Component 组件对象
 * @param { object } props props
 * @returns 
 */
function createComponent (Component, props) {
  const node = h(Component, { ...props })
  const container = document.createElement('div')
  render(node, container)
  return node.component
}
