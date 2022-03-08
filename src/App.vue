<template>
  <tyh-button type="primary" @click="open = true">点我打开</tyh-button>
  <tyh-drawer v-model="open" direction="right" :showHeader="false">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('right')
const open = ref(false)
const open2 = ref(false)

function close () {
  console.log('点击关闭的回调')
}
function onClose () {
  console.log('动画结束的回调')
}

function isOpen () {
  console.log('点击打开的回调----------->')
}
function onOpen () {
  console.log('动画打开结束的回调----------->')
}
</script>
