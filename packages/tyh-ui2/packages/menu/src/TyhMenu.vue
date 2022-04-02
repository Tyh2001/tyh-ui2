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

<script lang="ts" setup>
import { computed, provide } from 'vue'
import { menuProps } from './menu'
const props = defineProps(menuProps)
provide('theme', props.theme)

const isFlex = computed(() => props.mode === 'horizontal' && 'tyh-menu-flex')

const isClass = computed(() => {
  return [
    'tyh-menu',
    isFlex.value,
    {
      'tyh-menu-shadow': props.shadow,
      [`tyh-menu-${props.theme}`]: props.theme
    }
  ]
})
</script>
