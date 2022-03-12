<template>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
</template>

<script setup>
import { Message } from './packages/tyhUi'

function change2() {
  Message({
    message: '主要提示',
    type: '',
    round: true,
    icon: 'tyh-ui-smile',
    showClose: true
  })
}
</script>
