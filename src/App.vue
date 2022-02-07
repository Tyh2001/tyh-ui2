<template>
  <tyh-calendar v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>