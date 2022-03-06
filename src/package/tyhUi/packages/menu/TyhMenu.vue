<template>
  <div
    v-if="$slots.default"
    class="tyh-menu"
    :style="isStyle"
    :class="{ 'tyh-menu-shadow': shadow }"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed, provide } from 'vue'
const props = defineProps({
  theme: {
    type: String,
    default: 'dark',
    validator (v) {
      return ['dark', 'light'].includes(v)
    }
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
provide('theme', props.theme)
const isStyle = computed(() => {
  return [{
    display: props.mode === 'vertical' && 'flex',
    background: props.theme === 'dark' ? '#545c64' : '#fff',
  }]
})
</script>

<style src="./style/index.css" scoped>
</style>