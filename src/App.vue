<template>
  <tyh-button>默认按钮</tyh-button>
  <tyh-button type="primary">主要按钮</tyh-button>
  <tyh-button type="success">成功按钮</tyh-button>
  <tyh-button type="danger">危险按钮</tyh-button>
  <tyh-button type="warning">警告按钮</tyh-button>

  <br />
  <el-button :plain="true" @click="open2">成功</el-button>
  <el-button :plain="true" @click="open3">警告</el-button>
  <el-button :plain="true" @click="open1">消息</el-button>
  <el-button :plain="true" @click="open4">错误</el-button>
  <br />
  <tyh-switch v-model="aa" :width="10" />
</template>

<script setup>
import { ref } from 'vue'
const aa = ref(true)
import { Message } from 'element3'
function open1 () {
  Message('这是一条消息提示')
}

function open2 () {
  Message({
    message: '恭喜你，这是一条成功消息',
    type: 'success'
  })
}

function open3 () {
  Message({
    message: '警告哦，这是一条警告消息',
    type: 'warning'
  })
}

function open4 () {
  Message.error('错了哦，这是一条错误消息')
}
</script>

<style scoped>
</style>
