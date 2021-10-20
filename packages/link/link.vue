<template>
  <a
    class="tyh-link"
    :class="[colorClass, hoverlineClass, underlineClass]"
    :href="url"
    :target="target"
  >
    <slot></slot>
  </a>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TyhLink',
  props: {
    // 跳转的路径参数
    url: String,
    // 字体颜色
    color: String,
    // 移入显示下划线
    hoverline: Boolean,
    // 显示下划线
    underline: Boolean,
    // 是否以一个新的标签页打开
    target: String
  },
  setup (props) {
    // 颜色 class
    const colorClass = computed(() => {
      return props.color ? `tyh-link--${props.color}` : 'tyh-link--'
    })
    // 鼠标移入 class
    const hoverlineClass = computed(() => {
      return props.hoverline
        ? props.color
          ? `tyh-link--hoverline--${props.color}`
          : 'tyh-link--hoverline'
        : ''
    })
    // 下划线 class
    const underlineClass = computed(() => {
      return props.underline
        ? props.color
          ? `tyh-link--underline--${props.color}`
          : 'tyh-link--underline'
        : ''
    })

    return {
      colorClass,
      hoverlineClass,
      underlineClass
    }
  }
}
</script>
