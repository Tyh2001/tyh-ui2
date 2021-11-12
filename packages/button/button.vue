<template>
  <button
    class="tyh-button"
    :class="[
      type ? (!simple ? `tyh-button--${type}` : '') : 'tyh-button--',
      prohibit
        ? !simple
          ? `tyh-button--prohibit--${type}`
          : `tyh-button--prohibit--${type}-simple`
        : '',
      simple ? `tyh-button--${type}-simple` : '',
      size ? `tyh-button--size-${size}` : '',
      {
        'tyh-button--round': round,
        'tyh-button-icon-margin': icon,
        'tyh-button-big': big,
      },
    ]"
  >
    <tyh-icon v-if="icon" :icon="icon" :color="type ? '#fff' : ''" />
    <span class="tyh-button-text" :class="[{ 'tyh-button-icon-margin': icon }]">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'TyhButton',
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
    },
    // 长按钮
    big: {
      type: Boolean,
      default: false
    },
    // 按钮尺寸
    size: {
      type: String,
      default: ''
    }
  }
}
</script>
