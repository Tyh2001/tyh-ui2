<template>
  <span :class="isClass" :style="isStyle">
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
  },
  size: {
    type: [String, Number],
    default: '13'
  },
  color: {
    type: String,
    default: '#333'
  }
})
const isClass = computed(() => ['tyh-tagging', `tyh-tagging-${props.type}`])
const isStyle = computed(() => {
  return { fontSize: `${props.size}px`, color: props.color }
})
</script>

<style src="./style/index.css" scoped>
</style>
