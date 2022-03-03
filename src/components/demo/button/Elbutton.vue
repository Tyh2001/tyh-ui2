<template>
  <button
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      'el-button',
      {
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        [`el-button--${size}`]: size,
        [`el-button--${type}`]: type
      }
    ]"
  >
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: String,
  icon: {
    type: String,
    default: ''
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  disabled: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean
})
</script>

<style lang="" src="./button.css">
</style>