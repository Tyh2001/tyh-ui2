<template>
  <tyh-switch
    v-model="value"
    @change="onChange($event)"
    openText="打开了"
    closeText="关闭了"
  />
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
