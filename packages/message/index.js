import { createVNode, render } from 'vue'
import TyhMessage from './message.vue'

const divVNode = createVNode('div')
render(divVNode, document.body)
const div = divVNode.el

const Message = options => {
  const comVNode = createVNode(TyhMessage, options)
  render(comVNode, div)

  setTimeout(() => {
    render(null, div)
  }, options.time || 2000)
}

export default Message