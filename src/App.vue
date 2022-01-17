<template>
  <tyh-switch v-model="value" />
  <tyh-switch :width="60" v-model="value" closeColor="red" openColor="black" />
  <tyh-switch :width="30"  v-model="value" />
  <tyh-switch v-model="value" />
  <tyh-switch v-model="value" />
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
