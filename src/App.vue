<template>
  <tyh-switch v-model="value" @change="onChange($event)" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)

function onChange (e) {
  console.log(e)
}
</script>

<style scoped>
</style>
