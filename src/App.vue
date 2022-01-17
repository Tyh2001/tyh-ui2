<template>
  <tyh-switch v-model="value" openText="打开了" closeText="关闭了" />
  <br />
  <tyh-switch
    v-model="value"
    openText="打开了"
    closeText="关闭了"
  />
  <br />
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="按月付费"
    inactive-text="按年付费"
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
