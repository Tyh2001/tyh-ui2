<template>
  <button
    class="tyh-button"
    :class="[
      type ? (!simple ? `tyh-button--${type}` : '') : 'tyh-button--',
      prohibit
        ? !simple
          ? `tyh-button--prohibit--${type}`
          : `tyh-button--prohibit--${type}-simple`
        : 'tyh-button--prohibit',
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
  round: Boolean, // 圆角按钮
  prohibit: Boolean, // 禁用状态
  icon: String, // icon
  simple: Boolean, // 朴素按钮
  big: Boolean, // 长按钮
  size: String // 按钮尺寸
})
</script>
