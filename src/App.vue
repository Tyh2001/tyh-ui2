<template></template>

<script setup>
import { ref } from 'vue'
const value = ref(true)

function onChange (e) {
  console.log(e)
}
</script>

<style scoped>
.a {
  /* background-color: rgb(190, 112, 112); */
}
</style>
