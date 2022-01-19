<template>
  <tyh-calendar v-model="value" />
  <!-- <tyh-calendar v-model="value" :cellWidth="2" /> -->
</template>

<script setup>
const value = new Date()
import { ref } from 'vue'
const value3 = ref(2)
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
