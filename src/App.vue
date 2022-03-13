<template>
  <tyh-switch />
  <tyh-switch v-model="value1" />
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(true)
</script>
