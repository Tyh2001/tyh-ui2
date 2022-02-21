<template>
  <span
    class="tyh-text"
    :style="[
      {
        color: color || COLOR[type],
        display: block ? 'block' : 'inline-block',
        fontSize: `${size}px`
      }
    ]"
  >
    <slot />
  </span>
</template>

<script setup>
const COLOR = {
  primary: '#3a6ff4',
  success: '#54c600',
  danger: '#d10f1b',
  warning: '#fbcc30',
  default: '#3f536e'
}
defineProps({
  type: {
    type: String,
    default: 'default',
    validator (val) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
    }
  },
  size: {
    type: [String, Number],
    default: '16'
  },
  block: Boolean,
  color: String
})
</script>
