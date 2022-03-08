<template>
  <footer class="tyh-footer" :style="[{ height }]"><slot /></footer>
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
.tyh-footer {
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>
