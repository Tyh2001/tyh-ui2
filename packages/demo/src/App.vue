<template>
  <tyh-rate v-model="value2" />
  <!-- <tyh-rate v-model="value2" color="red" voidColor="#eee" /> -->
</template>

<script setup>
import { ref } from 'vue'
const value2 = ref(2)
</script>
