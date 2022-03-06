<template>
  <div :class="isClass">
    <div v-if="$slots.left" :class="['tyh-menu-left', isFlex]">
      <slot name="left" />
    </div>
    <div v-if="$slots.default" :class="['tyh-menu-default', isFlex]">
      <slot />
    </div>
    <div v-if="$slots.right" :class="['tyh-menu-right', isFlex]">
      <slot name="right" />
    </div>
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

const isFlex = computed(() => props.mode === 'horizontal' && 'tyh-menu-flex')

const isClass = computed(() => {
  return [
    'tyh-menu',
    isFlex,
    {
      'tyh-menu-shadow': props.shadow,
      [`tyh-menu-${props.theme}`]: props.theme
    }
  ]
})
</script>

<style src="./style/index.css" scoped>
</style>