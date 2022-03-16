<template>
  <h1 class="title">List 列表</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>列表的基本使用</p>
  <p>content 属性可以绑定需要展示的数组元素</p>
  <p>keys 属性可以绑定数组中每个元素的键值</p>
  <tyh-list :content="arr" keys="name" />
  <highlightjs language="javascript" :code="list.lis1" />

  <h3 class="Subtitle">配置表头和页脚</h3>
  <p>header 表头内容</p>
  <p>footer 页脚内容</p>
  <tyh-list :content="arr" keys="name" header="这是头部" footer="这是页脚" />
  <highlightjs language="javascript" :code="list.lis2" />

  <h3 class="Subtitle">斑马纹</h3>
  <p>zebra 是否显示斑马纹</p>
  <p>num 是否显示序号</p>
  <tyh-list
    zebra
    num
    :content="arr"
    keys="name"
    header="这是头部"
    footer="这是页脚"
  />
  <highlightjs language="javascript" :code="list.lis3" />

  <h3 class="Subtitle">hover 状态展示投影</h3>
  <p>hoverShow 配置 Hover 状态展示投影</p>
  <tyh-list hoverShow :content="arr" keys="name" />
  <highlightjs language="javascript" :code="list.lis4" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Slots</h3>
  <tyh-table align="center" :data="slotConfig" :columns="table.columns3" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/button">
      Button 按钮
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/card">
      Card 卡片
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { list } from './index'
import table from './table'
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
const configures = [
  {
    param: 'header',
    explain: '表头信息',
    type: 'string / number',
    value: '——',
    default: '——'
  },
  {
    param: 'footer',
    explain: '页脚信息',
    type: 'string / number',
    value: '——',
    default: '——'
  },
  {
    param: 'content',
    explain: '主体内容',
    type: 'array',
    value: '——',
    default: '[]'
  },
  {
    param: 'keys',
    explain: '循环对象键名',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'zebra',
    explain: '是否显示斑马纹',
    type: 'boolean',
    value: '——',
    default: '——'
  },
  {
    param: 'num',
    explain: '是否显示序号',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'hoverShow',
    explain: 'hover 状态显示阴影',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
const slotConfig = [
  { name: 'header', explain: '自定义头部内容' },
  { name: 'footer', explain: '自定义底部内容' }
]
</script>
