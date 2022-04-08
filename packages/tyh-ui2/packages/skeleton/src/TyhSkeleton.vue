<template>
  <div
    :class="[
      'tyh-skeleton',
      {
        'tyh-skeleton-round': round,
        'tyh-skeleton-animation': animation
      }
    ]"
    :style="{ width, height }"
  />
</template>

<script lang="ts" setup>
import { skeletonProps } from './props.ts'
defineProps(skeletonProps)
</script>
