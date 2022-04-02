<template>
  <tyh-button @click="change1">默认提示</tyh-button>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
  <tyh-button type="success" @click="change3">成功提示</tyh-button>
  <tyh-button type="danger" @click="change4">危险提示</tyh-button>
  <tyh-button type="warning" @click="change5">警告提示</tyh-button>

  <tyh-crumbs>
    <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
    <tyh-crumbs-item>学员管理</tyh-crumbs-item>
    <tyh-crumbs-item>文章管理</tyh-crumbs-item>
    <tyh-crumbs-item>设置</tyh-crumbs-item>
  </tyh-crumbs>
</template>

<script setup>
import { Message } from '@tyh-ui/tyh-ui2'
function change1() {
  Message({ message: '', type: 'default', round: true })
}
function change2() {
  Message({ message: '主要提示', type: 'primary', round: true })
}
function change3() {
  Message({ message: '成功提示', type: 'success', round: true })
}
function change4() {
  Message({ message: '危险提示', type: 'danger', round: true })
}
function change5() {
  Message({ message: '警告提示', type: 'warning', round: true })
}
</script>
