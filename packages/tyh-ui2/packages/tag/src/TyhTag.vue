<template>
  <span :class="isClass">
    <slot />
    <i v-if="isClose" class="tyh-icon tyh-ui-close" @click="emit('close')" />
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { tagProps } from './tag.ts'

const props = defineProps(tagProps)
const emit = defineEmits(['close'])

const isClass = computed((): (string | object)[] => {
  return [
    'tyh-tag',
    `tyh-tag-${props.type}`,
    {
      [`tyh-tag-${props.size}`]: props.size,
      'tyh-tag-round': props.round
    }
  ]
})
</script>
