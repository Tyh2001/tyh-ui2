<template>
  <button :class="isClass" :disabled="disabled">
    <i v-if="icon" :class="['tyh-icon', `${icon}`]" :style="{ color }" />
    <span v-if="$slots.default" :style="{ color }"><slot /></span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { prop } from './props'
import { THEME } from '../../../utils/theme'
const props = defineProps({ ...prop })
const color = computed(() => {
  if (props.simple) return THEME[props.type]
  return props.type === 'default' || !props.type ? '#333' : '#fff'
})
const isClass = computed(() => {
  return [
    'tyh-button',
    props.simple
      ? props.disabled
        ? `tyh-button-simple-disabled-${props.type}`
        : `tyh-button-simple-${props.type}`
      : props.disabled
      ? `tyh-button-disabled-${props.type}`
      : `tyh-button-${props.type}`,
    {
      [`tyh-button-size-${props.size}`]: props.size,
      'tyh-button-round': props.round,
      'tyh-button-square': props.square
    }
  ]
})
</script>
