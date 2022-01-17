<template>
  <tyh-switch v-model="value"></tyh-switch>
  {{ value }}
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>

<style scoped>
</style>
