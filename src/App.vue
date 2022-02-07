<template>
  <tyh-calendar v-model="value" :cellWidth="70" />

  <tyh-calendar v-model="value" :cellWidth="10" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>