<template>
  <h1 class="title">Switch 开关</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>开关的基本使用</p>
  <tyh-switch v-model="value1" />
  <br />
  <tyh-switch v-model="value1" />
  <highlightjs language="javascript" :code="Switch.swi1" />

  <h3 class="Subtitle">文字描述</h3>
  <p>closeText 属性可以配置左侧的文字</p>
  <p>openText 属性可以配置右侧的文字</p>
  <tyh-switch v-model="value2" closeText="关闭" openText="开启" />
  <highlightjs language="javascript" :code="Switch.swi2" />

  <h3 class="Subtitle">禁用状态</h3>
  <p>disabled 属性可以配置禁用开关</p>
  <tyh-switch v-model="value3" disabled /><br />
  <tyh-switch v-model="value4" disabled />
  <highlightjs language="javascript" :code="Switch.swi3" />

  <h3 class="Subtitle">自定义颜色</h3>
  <p>closeColor 属性可以配置自定义关闭颜色</p>
  <p>openColor 属性可以配置自定义开启颜色</p>
  <tyh-switch v-model="value5" closeColor="red" openColor="green" /><br />
  <tyh-switch v-model="value6" closeColor="black" openColor="#eee" />
  <highlightjs language="javascript" :code="Switch.swi4" />

  <h3 class="Subtitle">自定义尺寸</h3>
  <p>width 属性可以自定义开关的尺寸 最小宽度为20</p>
  <tyh-switch v-model="value7" :width="60" />
  <highlightjs language="javascript" :code="Switch.swi5" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/table">
      Table 表格
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/calendar">
      Calendar 日历
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { Switch } from './index'
import table from './table'
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(false)
const value5 = ref(true)
const value6 = ref(false)
const value7 = ref(true)
const configures = [
  {
    param: 'v-model',
    explain: '绑定的值',
    type: 'boolean',
    value: '',
    default: 'true'
  },
  {
    param: 'closeColor',
    explain: '关闭的颜色',
    type: 'string',
    value: '——',
    default: '#dcdfe6'
  },
  {
    param: 'openColor',
    explain: '开启的颜色',
    type: 'string',
    value: '——',
    default: '#3a6ff4'
  },
  {
    param: 'closeText',
    explain: '左侧的文字描述',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'openText',
    explain: '右侧的文字描述',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'disabled',
    explain: '是否禁用',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'width',
    explain: '开关尺寸',
    type: 'number',
    value: '——',
    default: '40'
  }
]
const configEvt = [
  {
    name: 'change',
    explain: 'switch 状态发生变化时的回调函数',
    param: '新状态的值'
  }
]
</script>
