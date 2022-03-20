<template>
  <h1 class="title">Drawer 抽屉</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>抽屉的基本使用</p>
  <p>title 属性可以配置抽屉的标题</p>
  <p>direction 属性可以配置抽屉的弹出方向</p>
  <tyh-button type="primary" @click="open = true">点我打开</tyh-button>
  <tyh-radio v-model="radio" label="right">从右面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="left">从左面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="bottom">从下面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="top">从上面弹出</tyh-radio>
  <tyh-drawer v-model="open" :direction="radio" title="这是标题">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
  <highlightjs language="javascript" :code="drawer.dra1" />

  <h3 class="Subtitle">不带头部信息</h3>
  <p>不带有 title 和关闭按钮</p>
  <p>showHeader 属性可以配置不带头部信息</p>
  <tyh-button type="primary" @click="open2 = true">点我打开</tyh-button>
  <tyh-drawer v-model="open2" direction="right" :showHeader="false">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
  <highlightjs language="javascript" :code="drawer.dra2" />

  <h3 class="Subtitle">多层嵌套</h3>
  <p>size 属性可以配置宽度或者高度</p>
  <tyh-button type="primary" @click="open3 = true">点我打开</tyh-button>
  <tyh-drawer v-model="open3" direction="right" size="50%">
    <tyh-button type="primary" @click="open4 = true">点我打开内层</tyh-button>
    hello，欢迎使用 tyh-ui!
    <tyh-drawer v-model="open4" direction="right"> 这是内层的 </tyh-drawer>
  </tyh-drawer>
  <highlightjs language="javascript" :code="drawer.dra3" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <h3 class="Subtitle">Slots</h3>
  <tyh-table align="center" :data="slotConfig" :columns="table.columns3" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/notification">
      Notification 通知
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/dialog">
      Dialog 对话框
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { drawer } from './index'
import table from './table'
import { ref } from 'vue'
const radio = ref('right')
const open = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
const configures = [
  {
    param: 'v-model',
    explain: '绑定值',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'direction',
    explain: '弹出方向',
    type: 'string',
    value: 'top / left / bottom / right',
    default: 'right'
  },
  {
    param: 'size',
    explain: '宽度或高度',
    type: 'string',
    value: '——',
    default: '30%'
  },
  {
    param: 'title',
    explain: '标题',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'appendToBody',
    explain: '是否镶嵌到 body 上',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'modal',
    explain: '是否显示遮罩层',
    type: 'boolean',
    value: '——',
    default: 'true'
  },
  {
    param: 'modalClose',
    explain: '点击遮罩层是否可以关闭',
    type: 'boolean',
    value: '——',
    default: 'true'
  },
  {
    param: 'showClose',
    explain: '是否显示关闭按钮',
    type: 'boolean',
    value: '——',
    default: 'true'
  },
  {
    param: 'showHeader',
    explain: '是否显示头部信息',
    type: 'boolean',
    value: '——',
    default: 'true'
  },
  {
    param: 'zIndex',
    explain: 'z-index 属性',
    type: 'number',
    value: '——',
    default: '3500'
  }
]
const configEvt = [
  { name: 'open', explain: '打开时的回调', param: '——' },
  { name: 'onOpen', explain: '打开动画结束时的回调', param: '——' },
  { name: 'close', explain: '关闭时的回调', param: '——' },
  { name: 'onClose', explain: '关闭动画结束时的回调', param: '——' }
]
const slotConfig = [
  { name: 'title', explain: '自定义标题' },
  { name: 'default', explain: '内容' }
]
</script>

<style scoped>
.tyh-button {
  margin-right: 20px;
}
</style>
