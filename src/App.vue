
<template>
  <el-button plain @click="open1"> 成功 </el-button>
  <el-button plain @click="open2"> 警告 </el-button>
</template>
<script setup>
import { Notification } from 'element3'

function open1 () {
  Notification.success({
    title: '成功',
    message: '这是一条成功的提示消息',
    type: 'success'
  })
}
function open2 () {
  Notification.warning({
    title: '警告',
    message: '这是一条警告的提示消息',
    type: 'warning'
  })
}


</script>