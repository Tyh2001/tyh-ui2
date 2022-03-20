<template>
  <h1 class="title">Dialog 对话框</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>抽屉的基本使用</p>
  <p>title 属性可以配置抽屉的标题</p>
  <p>footer 插槽可以配置操作区内容</p>
  <tyh-button simple @click="open1 = true">点我打开</tyh-button>
  <tyh-dialog v-model="open1" title="这是标题">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open1 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
  <highlightjs language="javascript" :code="dialog.dia1" />

  <h3 class="Subtitle">不带头部信息</h3>
  <p>不带有 title 和关闭按钮</p>
  <p>showHeader 属性可以配置不带头部信息</p>
  <tyh-button simple @click="open2 = true">点我打开</tyh-button>
  <tyh-dialog v-model="open2" title="这是标题" :showHeader="false">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open2 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
  <highlightjs language="javascript" :code="dialog.dia2" />

  <h3 class="Subtitle">多层嵌套</h3>
  <p>width 属性可以配置宽度</p>
  <p>top 属性可以配置距离顶部的距离</p>
  <tyh-button simple @click="open3 = true">点我打开第一层</tyh-button>
  <tyh-dialog v-model="open3" title="这是标题" width="50%">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <tyh-button type="success" @click="open4 = true">打开第二层</tyh-button>
    <tyh-dialog v-model="open4" title="这是标题" top="10vh">
      hi～我是第二层的 dialog 对话框
    </tyh-dialog>
  </tyh-dialog>
  <highlightjs language="javascript" :code="dialog.dia3" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <h3 class="Subtitle">Slots</h3>
  <tyh-table align="center" :data="slotConfig" :columns="table.columns3" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/drawer">
      Drawer 抽屉
    </tyh-turn-page-item>
    <!-- <tyh-turn-page-item direction="right" url="/component/rate">
      Rate 评分
    </tyh-turn-page-item> -->
  </tyh-turn-page>
</template>

<script setup>
import { dialog } from './index'
import table from './table'
import { ref } from 'vue'
const open1 = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
const configures = [
  {
    param: 'modelValue',
    explain: '绑定值',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'width',
    explain: '宽度',
    type: 'string',
    value: '——',
    default: '30%'
  },
  {
    param: 'top',
    explain: '顶部距离',
    type: 'string',
    value: '——',
    default: '15vh'
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
  { name: 'footer', explain: '自定义操作区' },
  { name: 'default', explain: '内容' }
]
</script>

<style scoped>
.tyh-button {
  margin-right: 20px;
}
</style>
