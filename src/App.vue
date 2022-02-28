<template>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
</template>

<script setup>
import { Message } from './components/tyhUi/packages/message'

// console.log(Message)
function change2 () {
  Message({
    message: '恭喜你，这是一条成功消息',
    type: 'success'
  })
}
</script>

<style scoped>
</style>
