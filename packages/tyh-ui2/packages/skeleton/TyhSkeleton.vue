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
defineProps({
  round: Boolean,
  width: String,
  height: String,
  animation: Boolean
} as const)
</script>
