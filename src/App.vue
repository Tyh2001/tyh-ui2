<template>
  <tyh-button @click="open = true">点我打开</tyh-button>

  <tyh-drawer
    v-model="open"
    direction="right"
    @close="close"
    @onClose="onClose"
    @open="isOpen"
    @onOpen="onOpen"
    title="这是标题"
    size="50%"
  >
    哈哈哈
    <tyh-button @click="open2 = true">点我打开</tyh-button>
    <tyh-drawer v-model="open2" direction="right" title="第二个">
      哈哈哈
    </tyh-drawer>
  </tyh-drawer>
</template>

<script setup>
import { ref } from 'vue'
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
