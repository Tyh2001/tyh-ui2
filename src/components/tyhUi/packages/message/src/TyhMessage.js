import TM from './TyhMessage.vue'
import { h, render } from 'vue'

export function Message (opts) {
  return createMessage(mergeOptions(opts))
}

/**
 * 创建 message
 * @param { object } opts 配置对象
 * @returns 
 */
function createMessage (opts) {
  const instance = createComponent(TM, opts)
  document.body.append(instance.vnode.el)
  return instance.proxy
}

/**
 * 创建挂载容器
 * @param { object } Component 组件对象
 * @param { object } props props
 * @returns 
 */
function createComponent (com, props) {
  const vnode = h(com, props)
  const container = document.createElement('div')
  render(vnode, container)
  return vnode.component
}

/**
 * 配置 message
 * @param { object } opts 配置对象
 * @returns 全部配置项
 */
function mergeOptions (opts) {
  const def = { time: 2000, offset: 20 }
  return Object.assign(def, opts)
}

