---
footer: false
---

# 2121212

## 111

<tyh-button type="primary" @click="open1">展示通知</tyh-button>

## 222

<tyh-button type="primary" @click="open2">主要通知</tyh-button>
<tyh-button type="success" @click="open3">成功通知</tyh-button>
<tyh-button type="danger" @click="open4">危险通知</tyh-button>

<tyh-menu theme="dark">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

<tyh-menu theme="light">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

<script setup>
  import { Notification } from 'tyh-ui2'
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
</script>
