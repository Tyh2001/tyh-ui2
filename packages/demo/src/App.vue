<template>
  <tyh-button type="primary" @click="change1">主要按钮</tyh-button>
  <Demo :num="1">哈哈哈</Demo>
  <Demo :num="2">哈哈哈</Demo>
  <Demo :num="3">哈哈哈</Demo>
  <Demo :num="4">哈哈哈</Demo>
  <Demo :num="5">哈哈哈</Demo>
  <Demo :num="6">哈哈哈</Demo>
</template>

<script lang="ts" setup>
import Demo from './components/demo.jsx'
import { Message } from './message/index'
function change1() {
  Message({ message: '默认提示', type: 'default', round: true })
}
</script>

<style scoped></style>
