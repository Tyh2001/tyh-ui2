<template>
  <button :class="isClass" :disabled="disabled">
    <i v-if="icon" :class="['tyh-icon', `${icon}`]" :style="{ color }" />
    <span v-if="$slots.default" :style="{ color }"><slot /></span>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { prop } from './props'
const props = defineProps({ ...prop })
const { color, isClass } = _TyhButton()
function _TyhButton() {
  const THEME: object = {
    primary: '#3a6ff4',
    success: '#54c600',
    danger: '#d10f1b',
    warning: '#fbcc30',
    default: '#3f536e'
  }

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

  return { color, isClass }
}
</script>
