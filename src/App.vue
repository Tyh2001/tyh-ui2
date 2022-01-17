<template>
  <tyh-switch v-model="value" />
  <br />
  <tyh-switch v-model="value" />
  <br />
  <tyh-switch v-model="value" />
  <br />
  <tyh-switch v-model="value" />
  <br />
  <tyh-switch v-model="value" />
  <br />
  <el-switch v-model="value" />
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
