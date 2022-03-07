<template>
  <tyh-rate
    v-model="value3"
    showText
    :sayText="['1星', '2星', '3星', '4星', '5星']"
  />
</template>

<script setup>
import { ref } from 'vue'
const value3 = ref(2)
</script>