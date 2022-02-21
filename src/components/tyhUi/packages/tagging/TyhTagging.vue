<template>
  <span :class="isClass">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator (val) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(val)
    }
  }
})
const isClass = () => {
  return [
    'tyh-tagging',
    `tyh-tagging-${props.type}`
  ]
}
</script>

<style src="./style/index.css" scoped>
</style>
