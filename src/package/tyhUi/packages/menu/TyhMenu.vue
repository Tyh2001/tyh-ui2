<template>
  <div
    class="tyh-menu"
    :style="isStyle"
    :class="{ 'tyh-menu-bottom-shadow': shadow }"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  background: {
    type: String,
    default: '#545c64'
  },
  shadow: Boolean,
  mode: {
    type: String,
    default: 'horizontal',
    validator (v) {
      return ['horizontal', 'vertical'].includes(v)
    }
  }
})

const isStyle = computed(() => {
  return [{
    display: props.mode === 'vertical' && 'flex',
    background: props.background,
  }]
})
</script>

<style src="./style/index.css" scoped>
</style>