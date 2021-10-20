<template>
  <i :class="[iconClass]" :style="[iconStyle, sizeStyle]" />
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TyhIcon',
  props: {
    // icon 的 Class
    icon: String,
    // icon 的颜色
    color: {
      type: String,
      default: '#606266'
    },
    // icon 的大小
    size: {
      type: String,
      default: '16'
    }
  },
  setup (props) {
    const iconClass = computed(() => {
      return `tyh-icon ${props.icon}`
    })
    // icon 的颜色
    const iconStyle = computed(() => {
      return {
        color: props.color
      }
    })
    // icon 的大小
    const sizeStyle = computed(() => {
      return {
        fontSize: `${props.size}px`
      }
    })

    return {
      iconClass,
      iconStyle,
      sizeStyle
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
