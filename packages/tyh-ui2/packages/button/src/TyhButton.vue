<template>
  <button :class="[...isClass, ...typeClass]" :disabled="disabled || loading">
    <i
      v-if="loading || icon"
      :class="['tyh-icon', loading ? 'tyh-ui-loading' : icon]"
      :style="{ color }"
    />
    <span v-if="$slots.default" :style="{ color }"><slot /></span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { buttonProps } from './button.ts'
import { THEME } from '../../../utils/theme.ts'
const props = defineProps(buttonProps)

const color = computed((): string => {
  if (props.simple) return THEME[props.type]
  return props.type === 'default' || !props.type ? '#333' : '#fff'
})

const isClass = computed((): (string | object)[] => {
  return [
    'tyh-button',
    {
      [`tyh-button-size-${props.size}`]: props.size,
      'tyh-button-round': props.round,
      'tyh-button-square': props.square
    }
  ]
})

const typeClass = computed((): string[] => {
  return [
    props.simple
      ? props.disabled || props.loading
        ? `tyh-button-simple-disabled-${props.type}`
        : `tyh-button-simple-${props.type}`
      : props.disabled || props.loading
      ? `tyh-button-disabled-${props.type}`
      : `tyh-button-${props.type}`
  ]
})
</script>
