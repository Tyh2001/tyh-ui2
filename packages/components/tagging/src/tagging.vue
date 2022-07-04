<template>
  <span :class="isClass" :style="isStyle">
    <slot />
  </span>
</template>

<script lang="ts" setup name="TyhTagging">
  import { computed } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)

  const isClass = computed((): string[] => [
    'tyh-tagging',
    `tyh-tagging-${prop.type}`
  ])

  const isStyle = computed(
    (): { fontSize: string; color: string | undefined } => {
      return {
        fontSize: `${prop.size}px`,
        color: prop.color
      }
    }
  )
</script>
