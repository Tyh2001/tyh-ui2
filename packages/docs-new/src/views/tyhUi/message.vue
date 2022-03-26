<template>
  <message-a v-high />
  <tyh-button @click="change1">默认提示</tyh-button>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
  <tyh-button type="success" @click="change3">成功提示</tyh-button>
  <tyh-button type="danger" @click="change4">危险提示</tyh-button>
  <tyh-button type="warning" @click="change5">警告提示</tyh-button>
  <message-b v-high />
  <tyh-button type="primary" @click="change6">展示5000毫秒</tyh-button>
  <message-c v-high />
  <tyh-button type="primary" @click="change7">点击提示</tyh-button>
  <message-d v-high />
  <tyh-button type="primary" @click="change8">点击提示</tyh-button>
  <message-e v-high />
</template>

<script lang="ts" setup>
import messageA from '@/docs/message/messageA.md'
import messageB from '@/docs/message/messageB.md'
import messageC from '@/docs/message/messageC.md'
import messageD from '@/docs/message/messageD.md'
import messageE from '@/docs/message/messageE.md'
import { Message } from 'tyh-ui2'
function change1() {
  Message({ message: '默认提示', type: 'default', round: true })
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
function change6() {
  Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
}
function change7() {
  Message({ message: '主要提示', type: 'primary', icon: 'tyh-ui-smile' })
}
function change8() {
  Message({
    message: '主要提示',
    type: 'primary',
    icon: 'tyh-ui-smile',
    showClose: true
  })
}
</script>
