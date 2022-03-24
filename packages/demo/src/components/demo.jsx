import { h, render } from 'vue'

export default {
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  setup (props, { slots }) {
    return () => h(
      'h' + props.num,
      {},
      slots.default()
    )
    // render(){
    //   return h('h' + props.num, {}, slots.default())
    // }

    // console.log(VNode())
    // return VNode
  }
}
