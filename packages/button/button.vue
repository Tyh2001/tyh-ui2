<template>
  <button
    class="tyh-button"
    :class="[
      type ? `tyh-button--${type}` : 'tyh-button--',
      prohibit ? `tyh-button--prohibit--${type}` : '',
      simple ? `tyh-button--${type}-simple` : '',
      icon ? 'tyh-button-icon-margin' : '',
      {
        'tyh-button--round': round,
      },
    ]"
  >
    <tyh-icon v-if="icon" :icon="icon" :color="type === '' ? '' : '#fff'" />
    <span
      class="tyh-button-text"
      :class="[icon ? 'tyh-button-icon-margin' : '']"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script>
import TyhIcon from '../icon'
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
  }
}
</script>
