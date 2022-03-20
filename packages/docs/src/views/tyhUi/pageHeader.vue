<template>
  <h1 class="title">PageHeader 页头</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>PageHeader 的基本使用</p>
  <p>title 属性可以配置页头的标题</p>
  <p>content 属性可以配置页头的内容</p>
  <tyh-page-header title="返回上一层" content="详情页面" @back="goBack" />
  <highlightjs language="javascript" :code="pageHeader.pageHeader1" />

  <h3 class="Subtitle">基本使用</h3>
  <p>PageHeader 的基本使用</p>
  <p>title 属性可以配置页头的标题</p>
  <p>icon 属性可以配置页头的 icon</p>
  <tyh-page-header content="详情页面" icon="tyh-ui-close" />
  <highlightjs language="javascript" :code="pageHeader.pageHeader2" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/tree">
      Tree 树形控件
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/info">
      Info 信息栏
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { pageHeader } from './index'
import table from './table'
const configures = [
  {
    param: 'title',
    explain: '标题',
    type: 'string',
    value: '——',
    default: '返回'
  },
  {
    param: 'content',
    explain: '内容',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'icon',
    explain: 'icon',
    type: 'string',
    value: '——',
    default: 'tyh-ui-direction-left'
  }
]
const configEvt = [{ name: 'back', explain: '点击左侧区域触发', param: '——' }]
const goBack = () => console.log('goBack')
</script>
