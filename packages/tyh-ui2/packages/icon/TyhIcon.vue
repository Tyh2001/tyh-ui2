<template>
  <i :class="[`tyh-icon`, icon]" :style="{ color, fontSize: `${size}px` }" />
</template>

<script lang="ts" setup>
defineProps({
  icon: String,
  color: String,
  size: {
    type: String,
    default: () => '16'
  }
})
</script>
