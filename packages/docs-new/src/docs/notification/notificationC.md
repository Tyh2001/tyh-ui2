```html
<template>
  <tyh-button type="primary" @click="open2">主要通知</tyh-button>
  <tyh-button type="success" @click="open3">成功通知</tyh-button>
  <tyh-button type="danger" @click="open4">危险通知</tyh-button>
  <tyh-button type="warning" @click="open5">警告通知</tyh-button>
</template>

<script setup>
  import { Notification } from 'tyh-ui2'
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
</script>
```

## 不同的弹出位置

position 属性可以配置不同类型的通知
