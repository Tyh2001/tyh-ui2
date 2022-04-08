<template>
  <ul :class="[...isClass, ...isCollapseClass]" :style="{ backgroundColor }">
    <li v-if="$slots.left" :class="['tyh-menu-left', isFlex]">
      <slot name="left" />
    </li>
    <li v-if="$slots.default" :class="['tyh-menu-default', isFlex]">
      <slot />
    </li>
    <li v-if="$slots.right" :class="['tyh-menu-right', isFlex]">
      <slot name="right" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import { menuProps } from './props.ts'

const props = defineProps(menuProps)
provide('theme', props.theme)
provide('mode', props.mode)
provide('textColor', props.textColor)

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

const isCollapseClass = computed(() => {
  return [{ 'tyh-menu-collapse': props.collapse && props.mode === 'vertical' }]
})
</script>
