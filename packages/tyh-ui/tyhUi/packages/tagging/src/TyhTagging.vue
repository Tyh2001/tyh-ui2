<template>
  <span :class="isClass" :style="isStyle"><slot /></span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { prop } from './prop'
const props = defineProps({ ...prop })

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
