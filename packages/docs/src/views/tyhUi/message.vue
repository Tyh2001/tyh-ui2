<template>
  <h1 class="title">Message 提示框</h1>

  <h3 class="Subtitle">使用前</h3>
  <p>使用前，你必须先引入它</p>
  <highlightjs language="javascript" :code="msg.mes4" />

  <h3 class="Subtitle">基本使用</h3>
  <p>提示框的基本使用</p>
  <p>通过引入 message 方法，接收一个对象，可以使用 message 定义内容</p>
  <p>type 属性可以定义提示框类型</p>
  <p>round 属性可以配置圆角</p>
  <tyh-button @click="change1">默认提示</tyh-button>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
  <tyh-button type="success" @click="change3">成功提示</tyh-button>
  <tyh-button type="danger" @click="change4">危险提示</tyh-button>
  <tyh-button type="warning" @click="change5">警告提示</tyh-button>
  <highlightjs language="javascript" :code="msg.mes1" />

  <h3 class="Subtitle">显示时长</h3>
  <p>time 属性可以配置提示框的显示时长，并在 xxxx 毫秒后消失</p>
  <tyh-button type="primary" @click="change6">展示5000毫秒</tyh-button>
  <highlightjs language="javascript" :code="msg.mes2" />

  <h3 class="Subtitle">带有 icon</h3>
  <p>icon 属性可以配置 icon 的类名进行配置</p>
  <tyh-button type="primary" @click="change7">点击提示</tyh-button>
  <highlightjs language="javascript" :code="msg.mes3" />

  <h3 class="Subtitle">可关闭</h3>
  <p>showClose 属性可以配置代码关闭按钮</p>
  <tyh-button type="primary" @click="change8">点击提示</tyh-button>
  <highlightjs language="javascript" :code="msg.mes5" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/backtop">
      BackTop 回到顶部
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/skeleton">
      Skeleton 骨架
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { Message } from 'tyh-ui2'
import { msg } from './index'
import table from './table'
const configures = [
  {
    param: 'message',
    explain: '显示文字',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'type',
    explain: '提示框的类型',
    type: 'string',
    value: 'default / primary / success / danger / warning',
    default: 'default'
  },
  {
    param: 'time',
    explain: '展示的时间',
    type: 'number',
    value: '——',
    default: '2000'
  },
  {
    param: 'icon',
    explain: '展示的 icon',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'showClose',
    explain: '是否展示关闭按钮',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'offset',
    explain: '距离顶部的距离',
    type: 'number',
    value: '——',
    default: '20'
  },
  {
    param: 'round',
    explain: '配置圆角',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
function change1() {
  Message({ message: '默认提示', type: 'default', round: true })
}
function change2() {
  Message({ message: '主要提示', type: 'primary', round: true })
}
function change3() {
  Message({ message: '成功提示', type: 'success', round: true })
}
function change4() {
  Message({ message: '危险提示', type: 'danger', round: true })
}
function change5() {
  Message({ message: '警告提示', type: 'warning', round: true })
}
function change6() {
  Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
}
function change7() {
  Message({ message: '主要提示', type: 'primary', icon: 'tyh-ui-smile' })
}
function change8() {
  Message({
    message: '主要提示',
    type: 'primary',
    icon: 'tyh-ui-smile',
    showClose: true
  })
}
</script>

<style scoped>
.tyh-button {
  margin-right: 13px;
  margin-bottom: 13px;
}
</style>
