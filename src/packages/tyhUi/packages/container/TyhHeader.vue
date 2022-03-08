<template>
  <header class="tyh-header" :style="[{ height }]"><slot /></header>
</template>

<script setup>
defineProps({
  height: {
    type: String,
    default: '60px'
  }
})
</script>

<style scoped>
.tyh-header {
  flex-shrink: 0;
}
</style>