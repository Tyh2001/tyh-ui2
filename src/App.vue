<template>
  <tyh-button type="primary" @click="open2">成功</tyh-button>
  <tyh-button @click="add">tyh-message</tyh-button>

  <el-button plain @click="open1"> 成功 </el-button>
  <el-button plain @click="open2"> 警告 </el-button>
</template>

<script setup>
import { TyhMessage } from './components/tyhUi/packages/message/src/Message.js'
// console.log(TyhMessage)
import { Notification } from 'element3'

function open1() {
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

const add = () => {

  TyhMessage({
    message: '这是一段信息', // 提示文字
    type: 'success', // 类型
    showClose: true, // 是否显示关闭按钮
    center: true, // 文字是否居中
    iconClass: 'tyh-ui-githublogo', // 自定义左侧 icon
    offset: 20 // Message 距离窗口顶部的偏移量
  })
}

// import { ref } from 'vue'
// const aa = ref(true)
// import { Message } from 'element3'

// function open2 () {
//   Message({
//     // offset: 300,
//     showClose: true,
//     message: '恭喜你，这是一条成功消息',
//     type: 'success'
//   })
// }


</script>

<style scoped>
</style>
