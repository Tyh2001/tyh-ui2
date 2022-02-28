import messageComponent from './Message.vue'
import { isVNode, h, render } from 'vue'

const instanceList = []

export function Message (opts) {
  // console.log(opts)
  // console.log(mergeOptions(opts))
  return createMessage(mergeOptions(opts))
}

Message.closeAll = () => {
  instanceList.forEach((instance) => {
    instance.proxy.close()
    removeInstance(instance)
  })
}

['info', 'success', 'warning', 'error'].forEach(type => {
  Message[type] = (opts) => {
    return createMessage(mergeOptions(opts, type))
  }
})

/**
 * 创建 message
 * @param {object} opts 
 * @returns proxy
 */
function createMessage (opts) {
  const instance = createComponent(messageComponent, opts)
  // console.log(instance)
  appendToBody(instance)
  addInstance(instance)
  return instance.proxy
}


// function createMessageComponentByOpts (opts) {
//   // console.log(opts.message)
//   // console.log(isVNode(opts.message))
//   /**
//    * isVNode 详情在这里：检查一个值是否是一个 vnode
//    * https://staging-cn.vuejs.org/api/render-function.html#isvnode
//    */
//   // if (isVNode(opts.message)) {
//   //   return createComponent(messageComponent, opts, () => opts.message)
//   // }
//   // 因为不是一个 vnode 对象，所以需要创建一个
//   console.log(messageComponent)
//   return createComponent(messageComponent, opts)
// }

/**
 * 创建组件实例对象
 * 返回的实例和调用 getCurrentComponent() 返回的一致
 * @param {*} Component
 */
function createComponent (Component, props, children) {
  const vnode = h(Component, { ...props, ref: MOUNT_COMPONENT_REF }, children)
  const container = document.createElement('div')
  vnode[COMPONENT_CONTAINER_SYMBOL] = container
  render(vnode, container)
  return vnode.component
}

/**
 * 配置
 * @param {object} opts 其他配置对象
 * @param {string} type 提示的类型
 * @returns 
 */
function mergeOptions (opts, type = 'info') {
  const defaultOptions = {
    duration: 4500,
    type,
    // 这个一旦写了固定参数 就会导致覆盖
    offset: calculateVerticalOffset(opts.offset) // Message 距离窗口顶部的偏移量
  }

  // userOnClose 没传参则是 undefined
  const userOnClose = opts?.onClose // 关闭时的回调函数, 参数为被关闭的

  // 选择。onClose不能合并到默认选项中
  // 删除 onClose 和 offset
  delete opts?.onClose
  delete opts?.offset

  defaultOptions.onClose = (instance) => {
    closeMessage(instance)
    if (userOnClose) userOnClose(instance.proxy)
  }

  if (typeof opts === 'string' || isVNode(opts)) {
    defaultOptions.message = opts
    return defaultOptions
  }

  return Object.assign({}, defaultOptions, opts)
}



/**
 * Message 距离窗口顶部的偏移量
 * @param {number} offset 
 * @returns 
 */
function calculateVerticalOffset (offset = 20) {
  let result = offset

  instanceList.forEach((instance) => {
    result += getNextElementInterval(instance)
  })

  return result
}

/**
 * 关闭提示框
 * @param {object} instance 
 */
function closeMessage (instance) {
  updatePosition(instance)
  removeInstance(instance)
}

function updatePosition (closeInstance) {
  const currentInstanceIndex = getIndexByInstance(closeInstance)

  if (currentInstanceIndex < 0) return

  for (
    let index = currentInstanceIndex + 1;
    index < instanceList.length;
    index++
  ) {
    const instance = instanceList[index]
    instance.proxy.offsetVal -= getNextElementInterval(closeInstance)
  }
}

function getNextElementInterval (instance) {
  const INTERVAL_HEIGHT = 16
  return instance.vnode.el.offsetHeight + INTERVAL_HEIGHT
}

function addInstance (instance) {
  instanceList.push(instance)
}

function removeInstance (instance) {
  instanceList.splice(getIndexByInstance(instance), 1)
}

function getIndexByInstance (instance) {
  return instanceList.findIndex((i) => i.uid == instance.uid)
}

/**
 * 放在 body 上？？？我还不确定
 * @param {object} componentInstance 
 */
function appendToBody (componentInstance) {
  document.body.append(componentInstance.vnode.el)
}



const MOUNT_COMPONENT_REF = 'el_component'
const COMPONENT_CONTAINER_SYMBOL = Symbol('el_component_container')

