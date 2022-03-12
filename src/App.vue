<template>
  <tyh-button type="primary" @click="open1">展示通知</tyh-button>
</template>

<script setup>
import { Notification } from './packages/tyhUi'
function open1() {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    type: ''
  })
}
</script>
