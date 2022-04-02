<template>
  <notification-a v-high />
  <tyh-button type="primary" @click="open1">展示通知</tyh-button>
  <notification-b v-high />
  <tyh-button type="primary" @click="open2">主要通知</tyh-button>
  <tyh-button type="success" @click="open3">成功通知</tyh-button>
  <tyh-button type="danger" @click="open4">危险通知</tyh-button>
  <tyh-button type="warning" @click="open5">警告通知</tyh-button>
  <notification-c v-high />
  <tyh-button type="primary" @click="open6">上左</tyh-button>
  <tyh-button type="primary" @click="open7">上右</tyh-button>
  <tyh-button type="primary" @click="open8">下左</tyh-button>
  <tyh-button type="primary" @click="open9">下右</tyh-button>
  <notification-d v-high />
  <tyh-button type="primary" @click="open10">4000 毫秒后自动关闭</tyh-button>
  <notification-e v-high />
</template>

<script setup>
import notificationA from '@/docs/notification/notificationA.md'
import notificationB from '@/docs/notification/notificationB.md'
import notificationC from '@/docs/notification/notificationC.md'
import notificationD from '@/docs/notification/notificationD.md'
import notificationE from '@/docs/notification/notificationE.md'
import { Notification } from '@tyh-ui/tyh-ui2'
function open1() {
  Notification({
    title: '提示',
    message: '这里是提示的文案'
  })
}
function open2() {
  Notification({
    title: '主要提示',
    message: '这是一个主要提示',
    type: 'primary'
  })
}
function open3() {
  Notification({
    title: '成功提示',
    message: '这是一个成功提示',
    type: 'success'
  })
}
function open4() {
  Notification({
    title: '危险提示',
    message: '这是一个危险提示',
    type: 'danger'
  })
}
function open5() {
  Notification({
    title: '警告提示',
    message: '这是一个警告提示',
    type: 'warning'
  })
}
function open6() {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    position: 'top-left'
  })
}
function open7() {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    position: 'top-right'
  })
}
function open8() {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    position: 'bottom-left'
  })
}
function open9() {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    position: 'bottom-right'
  })
}
function open10() {
  Notification({
    title: '提示',
    message: '4000 毫秒后自动关闭',
    time: 4000
  })
}
</script>
