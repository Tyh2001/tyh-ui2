<template>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
</template>

<script setup>
import { Message } from './components/tyhUi/packages/message'
function change2 () {
  Message({
    message: '是一条成功消息',
    type: 'success',
    showClose: true
  })
}
</script>
