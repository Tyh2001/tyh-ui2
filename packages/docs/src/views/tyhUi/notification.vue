<template>
  <h1 class="title">Notification 通知</h1>

  <h3 class="Subtitle">使用前</h3>
  <p>使用前，你必须先引入它</p>
  <highlightjs language="javascript" :code="notification.not1" />

  <h3 class="Subtitle">基本使用</h3>
  <p>通知的基本使用</p>
  <p>通过引入 Notification 方法，接收一个对象</p>
  <p>title 属性可以定义标题</p>
  <p>message 属性可以定义内容</p>
  <tyh-button type="primary" @click="open1">展示通知</tyh-button>
  <highlightjs language="javascript" :code="notification.not2" />

  <h3 class="Subtitle">不同类型的</h3>
  <p>type 属性可以配置不同类型的通知</p>
  <tyh-button type="primary" @click="open2">主要通知</tyh-button>
  <tyh-button type="success" @click="open3">成功通知</tyh-button>
  <tyh-button type="danger" @click="open4">危险通知</tyh-button>
  <tyh-button type="warning" @click="open5">警告通知</tyh-button>
  <highlightjs language="javascript" :code="notification.not3" />

  <h3 class="Subtitle">不同的弹出位置</h3>
  <p>position 属性可以配置不同类型的通知</p>
  <tyh-button type="primary" @click="open6">上左</tyh-button>
  <tyh-button type="primary" @click="open7">上右</tyh-button>
  <tyh-button type="primary" @click="open8">下左</tyh-button>
  <tyh-button type="primary" @click="open9">下右</tyh-button>
  <highlightjs language="javascript" :code="notification.not4" />

  <h3 class="Subtitle">自定义时长</h3>
  <p>time 属性可以自定义通知展示的时长</p>
  <tyh-button type="primary" @click="open10">4000 毫秒后自动关闭</tyh-button>
  <highlightjs language="javascript" :code="notification.not5" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/tagging">
      Tagging 标注
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/drawer">
      Drawer 抽屉
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { notification } from './index'
import table from './table'
import { ref } from 'vue'
import { Notification } from 'tyh-ui2'
const configures = [
  {
    param: 'title',
    explain: '标题',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'message',
    explain: '提示信息',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'type',
    explain: '通知类型',
    type: 'string',
    value: 'primary / success / danger / warning',
    default: "''"
  },
  {
    param: 'time',
    explain: '展示的市场',
    type: 'number',
    value: '——',
    default: '3500'
  },
  {
    param: 'position',
    explain: '弹出位置',
    type: 'string',
    value: 'top-left / top-right / bottom-left / bottom-right',
    default: 'top-right'
  },
  {
    param: 'close',
    explain: '是否显示关闭按钮',
    type: 'boolean',
    value: '——',
    default: 'true'
  }
]
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

<style scoped>
.tyh-button {
  margin: 0 13px 13px 0;
}
</style>
