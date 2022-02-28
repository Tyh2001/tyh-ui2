<template>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
</template>

<script setup>
import { Message } from './components/tyhUi'
function change2 () {
  // 'primary', 'success', 'danger', 'warning', 'default'
  Message({
    message: '是一条成功消息',
    type: 'success',
    showClose: true,
    icon: 'tyh-ui-meh-filling',
  })
}
</script>
