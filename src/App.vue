<template>
  <tyh-rate v-model="value1" />
  <tyh-rate v-model="value1" />
  <el-rate v-model="value1" />

  <tyh-rate
    v-model="value1"
    showText
    :sayText="[
      '1星',
      '2星',
      '3星',
      '4星',
      '5星',
      '52星',
      '5星2',
      '5星2',
      '52星',
    ]"
  />
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(2)

const change = () => console.log('123')
</script>

<style scoped>
</style>