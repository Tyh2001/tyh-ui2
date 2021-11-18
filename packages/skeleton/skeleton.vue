<template>
  <div
    class="tyh-skeleton"
    :class="[
      {
        'tyh-skeleton-round': round,
        'tyh-skeleton-animation': animation,
      },
    ]"
    :style="[{ width, height }]"
  />
</template>

<script>
export default { name: 'TyhSkeleton' }
</script>

<script setup>
defineProps({
  round: Boolean,
  width: String,
  height: String,
  animation: Boolean
})
</script>
