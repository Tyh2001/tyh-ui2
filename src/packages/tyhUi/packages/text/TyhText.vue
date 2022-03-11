<template>
  <span
    class="tyh-text"
    :style="[
      {
        color: color || THEME[type],
        display: block ? 'block' : 'inline-block',
        fontSize: `${size}px`
      }
    ]"
  >
    <slot />
  </span>
</template>

<script setup>
import { THEME } from '../../utils/theme'
defineProps({
  type: {
    type: String,
    default: 'default',
    validator(v) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(v)
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
