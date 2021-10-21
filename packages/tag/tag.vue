<template>
  <span
    class="tyh-tag"
    :class="[
      color ? `tyh-tag--${color}` : 'tyh-tag--',
      size ? `tyh-tag--${size}` : '',
    ]"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'TyhTag',
  props: {
    // 标签颜色
    color: String,
    // 标签大小
    size: String
  }
}
</script>
