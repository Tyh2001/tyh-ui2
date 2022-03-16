<template>
  <h1 class="title">BackTop 回到顶部</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>回到顶部的基础用法</p>
  <tyh-back-top>Top</tyh-back-top>
  <highlightjs language="javascript" :code="back.back1" />

  <h3 class="Subtitle">位置偏移</h3>
  <p>bottom 和 right 属性可以配置距离右边和下边的距离</p>
  <tyh-backTop bottom="150px" right="120px">Go</tyh-backTop>
  <highlightjs language="javascript" :code="back.back2" />

  <h3 class="Subtitle">插入 Icon</h3>
  <tyh-backTop bottom="100px">
    <tyh-icon icon="tyh-ui-top" color="#409eff" />
  </tyh-backTop>
  <highlightjs language="javascript" :code="back.back3" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/crumbs">
      Turnpage 分页
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/message">
      Message 提示框
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { back } from './index'
import table from './table'
const configures = [
  {
    param: 'bottom',
    explain: '距离下面的距离',
    type: 'string',
    value: '——',
    default: '50px'
  },
  {
    param: 'right',
    explain: '距离右面的距离',
    type: 'string',
    value: '——',
    default: '50px'
  },
  {
    param: 'behavior',
    explain: '滚动模式',
    type: 'string',
    value: 'smooth / instant',
    default: 'smooth'
  },
  {
    param: 'beyond',
    explain: '超出xx范围显示',
    type: 'number',
    value: '——',
    default: '100'
  }
]
</script>
