<template>
  <h1 class="title">Calendar 日历</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>日历的基本使用</p>
  <p>v-model 绑定一个日期</p>
  <tyh-calendar v-model="value" />
  <highlightjs language="javascript" :code="calendar.cal1" />

  <h3 class="Subtitle">定制大小</h3>
  <p>cellWidth 属性可以配置日期单元格的宽度</p>
  <p>最小宽度为 28，如果小于 28 则按照 28 计算</p>
  <tyh-calendar v-model="value" :cellWidth="70" />
  <br />
  <tyh-calendar v-model="value" :cellWidth="10" />
  <highlightjs language="javascript" :code="calendar.cal2" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/switch">
      Switch 开关
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/radio">
      Radio 单选
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { calendar } from './index'
import table from './table'
import { ref } from 'vue'
const value = ref(new Date())
const configures = [
  {
    param: 'v-model',
    explain: '绑定的日期',
    type: 'object',
    value: '——',
    default: '——'
  },
  {
    param: 'cellWidth',
    explain: '单元格宽度',
    type: 'number',
    value: '——',
    default: '50'
  }
]
</script>
