<template>
  <button
    class="tyh-button"
    :class="[typeClass, roundClass, prohibitClass, simpleClass]"
  >
    <tyh-icon v-if="icon" :icon="icon" :color="iconColor" />
    <span class="tyh-button-text" :class="[iconButtonTextClass]">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import TyhIcon from '../../icon'
import { computed } from 'vue'
export default {
  name: 'TyhButton',
  components: {
    TyhIcon
  },
  props: {
    // 按钮的类型
    type: {
      type: String,
      default: ''
    },
    // 圆角按钮
    round: Boolean,
    // 禁用状态
    prohibit: {
      type: Boolean,
      default: false
    },
    // icon
    icon: {
      type: String,
      default: ''
    },
    // 朴素按钮
    simple: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    // 类型 class
    const typeClass = computed(() => {
      return props.type
        ? `tyh-button--${props.type}`
        : 'tyh-button--'
    })
    // 圆角 class
    const roundClass = computed(() => {
      return props.round ? 'tyh-button--round' : ''
    })
    // 禁用 class
    const prohibitClass = computed(() => {
      return props.prohibit
        ? `tyh-button--prohibit--${props.type}`
        : ''
    })
    // 朴素按钮 class
    const simpleClass = computed(() => {
      return props.simple
        ? `tyh-button--${props.type}-simple`
        : ''
    })
    // 有 icon 的按钮文字
    const iconButtonTextClass = computed(() => {
      return props.icon ? 'tyh-button-icon-margin' : ''
    })
    // 图标的颜色
    const iconColor = computed(() => {
      return props.type === '' ? '' : '#fff'
    })

    return {
      typeClass,
      roundClass,
      prohibitClass,
      simpleClass,
      iconButtonTextClass,
      iconColor
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
