<template>
  <span class="tyh-tag" :class="[colorClass, sizeClass]">
    <slot></slot>
  </span>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TyhTag',
  props: {
    // 标签颜色
    color: String,
    // 标签大小
    size: String
  },
  setup (props) {
    // 主题颜色 class
    const colorClass = computed(() => {
      return props.color ? `tyh-tag--${props.color}` : 'tyh-tag--'
    })
    // 尺寸 class
    const sizeClass = computed(() => {
      return props.size ? `tyh-tag--${props.size}` : ''
    })

    return {
      colorClass,
      sizeClass
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
