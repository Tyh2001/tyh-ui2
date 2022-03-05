<template>
  <tyh-button @click="click">点击</tyh-button>
</template>

<script setup>
import { Notification } from './package/tyhUi'
function click () {
  Notification({
    title: '标题',
    position: 'top-left',
    message: '内容'
  })

  Notification({
    title: '标题标题标题标题标题标题标题标题标题标题',
    position: 'top-right',
    message: '标题标题标题标题标题标题标题标题标题标题',
    type: 'primary'
  })

  Notification({
    title: '标题',
    position: 'bottom-left',
    message: '内容'
  })

  Notification({
    title: '标题',
    position: 'bottom-right',
    message: '内容'
  })
}
</script>

<style scoped>
</style>
