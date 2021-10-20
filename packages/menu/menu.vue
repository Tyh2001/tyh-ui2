<template>
  <div
    class="tyh-menu"
    :style="[backgroundColorStyle]"
    :class="{ 'tyh-menu-bottom-shadow': buttomShadow }"
  >
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TyhMenu',
  props: {
    // 背景色
    backgroundColor: {
      type: String,
      default: '#545c64'
    },
    // 是否显示底部阴影
    buttomShadow: Boolean
  },
  setup (props) {
    // 导航栏背景色
    const backgroundColorStyle = computed(() => {
      return {
        background: props.backgroundColor
      }
    })

    return {
      backgroundColorStyle
    }
  }
}
</script>
