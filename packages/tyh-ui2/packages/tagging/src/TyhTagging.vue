<template>
  <span :class="isClass" :style="isStyle"><slot /></span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { taggingProps } from './tagging'
const props = defineProps(taggingProps)

const isClass = computed((): string[] => [
  'tyh-tagging',
  `tyh-tagging-${props.type}`
])

const isStyle = computed(
  (): { fontSize: string; color: string | undefined } => {
    return {
      fontSize: `${props.size}px`,
      color: props.color
    }
  }
)
</script>
