import { createVNode, render } from 'vue'
import Message from './message.vue'

const div = document.createElement('div')
div.setAttribute('class', 'xtx-message-wrapper')
document.body.appendChild(div)

let time = null
export default ({ text, type }) => {
  const vNode = createVNode(Message, { text, type })
  render(vNode, div)

  clearTimeout(time)
  time = setTimeout(() => {
    render(null, div)
  }, 2000)
}
