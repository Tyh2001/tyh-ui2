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

<script lang="ts" setup name="TyhSkeleton">
  import { Props } from './props'
  defineProps(Props)
</script>
