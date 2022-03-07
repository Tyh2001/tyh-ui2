<template>
  <span :class="isClass" :style="isStyle"><slot /></span>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator(v) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(v)
    }
  },
  size: {
    type: [String, Number],
    default: '13'
  },
  color: {
    type: String,
    default: '#fff'
  }
})
const isClass = computed(() => ['tyh-tagging', `tyh-tagging-${props.type}`])
const isStyle = computed(() => {
  return {
    fontSize: `${props.size}px`,
    color: props.type === 'default' ? '#333' : props.color
  }
})
</script>
