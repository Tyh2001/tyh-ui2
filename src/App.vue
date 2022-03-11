<template>
  <tyh-card>
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>这是内容部分1</p>
    <p>这是内容部分2</p>
    <p>这是内容部分3</p>
    <p>这是内容部分4</p>
  </tyh-card>
</template>

<script setup>
import { Message } from './packages/tyhUi'
function change1() {
  Message({ message: '默认提示', type: 'default', round: true })
}
</script>
