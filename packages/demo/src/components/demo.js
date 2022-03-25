import { h, render } from 'vue'

export default {
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    function getChildrenTextContent(children) {
      return children
        .map(node => {
          return typeof node.children === 'string'
            ? node.children
            : Array.isArray(node.children)
            ? getChildrenTextContent(node.children)
            : ''
        })
        .join('')
    }

    return () => h('h' + props.num, null, slots.default())
    // render(){
    //   return h('h' + props.num, {}, slots.default())
    // }

    // console.log(VNode())
    // return VNode
  }
}
