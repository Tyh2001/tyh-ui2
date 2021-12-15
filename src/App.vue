<template>
  <tyh-rate v-model="value3" showText />
  <tyh-rate
    v-model="value3"
    showText
    :sayText="['1星', '2星', '3星', '4星', '5星']"
  />

  <tyh-button @click="add">add</tyh-button>
</template>

<script setup>
import { ref } from 'vue'
const value3 = ref(2)

function add () {
  value3.value++
}
</script>