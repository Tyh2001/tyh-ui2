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
export default { name: 'tyh-button' }
</script>

<script setup>
defineProps({
  type: String, // 按钮的类型
  // 圆角按钮
  round: Boolean,
  prohibit: { // 禁用状态
    type: Boolean,
    default: false
  },
  icon: String,  // icon
  simple: { // 朴素按钮
    type: Boolean,
    default: false
  },
  big: { // 长按钮
    type: Boolean,
    default: false
  },
  size: String // 按钮尺寸
})
</script>
