<template>
  <tyh-button @click="click">点击</tyh-button>
</template>

<script setup>
import { Notification } from './package/tyhUi'
function click () {
  Notification({
    // title: '标题',
    // message: '内容'
  })
}
</script>

<style scoped>
</style>
