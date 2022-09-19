<script lang="ts" setup name="TyhTagging">
  import { computed } from 'vue'
  import { Props } from './props'
  import type { CSSProperties } from 'vue'

  const prop = defineProps(Props)

  const isClass = computed((): string[] => [
    'tyh-tagging',
    `tyh-tagging-${prop.type}`
  ])

  const isStyle = computed((): CSSProperties => {
    return {
      fontSize: `${prop.size}px`,
      color: prop.color
    }
  })
</script>

<template>
  <span :class="isClass" :style="isStyle">
    <slot />
  </span>
</template>
