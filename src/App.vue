<template>
  <tyh-button @click="change">点击</tyh-button>
</template>

<script setup>
import { ref } from 'vue'
const text = ref(12)
function change (a, b) {
  text.value = 13
}
</script>

<style scoped>
</style>
