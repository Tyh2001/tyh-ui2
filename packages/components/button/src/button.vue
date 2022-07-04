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
  import { Props } from './props'
  import { THEME } from '@tyh-ui2/utils'

  const prop = defineProps(Props)

  const color = computed((): string => {
    if (prop.simple) return THEME[prop.type]
    return prop.type === 'default' || !prop.type ? '#333' : '#fff'
  })

  const isClass = computed((): (string | object)[] => {
    return [
      'tyh-button',
      {
        [`tyh-button-size-${prop.size}`]: prop.size,
        'tyh-button-round': prop.round,
        'tyh-button-square': prop.square
      }
    ]
  })

  const typeClass = computed((): string[] => {
    return [
      prop.simple
        ? prop.disabled || prop.loading
          ? `tyh-button-simple-disabled-${prop.type}`
          : `tyh-button-simple-${prop.type}`
        : prop.disabled || prop.loading
        ? `tyh-button-disabled-${prop.type}`
        : `tyh-button-${prop.type}`
    ]
  })
</script>
