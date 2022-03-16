<template>
  <h1 class="title">Text 文字</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>文字的基础用法</p>
  <p>type 自定义不同的类型</p>
  <tyh-text>这是一段普通文字</tyh-text>
  <tyh-text style="margin-left: 10px" type="primary">这是主要普通文字</tyh-text>
  <tyh-text style="margin-left: 10px" type="success">这是一段成功文字</tyh-text>
  <tyh-text style="margin-left: 10px" type="danger">这是一段危险文字</tyh-text>
  <tyh-text style="margin-left: 10px" type="warning">这是一段警告文字</tyh-text>
  <highlightjs language="javascript" :code="text.text1" />

  <h3 class="Subtitle">独占一行</h3>
  <p>block 属性可以配置独占一行</p>
  <tyh-text block>这是一段普通文字</tyh-text>
  <tyh-text block type="primary">这是主要普通文字</tyh-text>
  <tyh-text block type="success">这是一段成功文字</tyh-text>
  <tyh-text block type="danger">这是一段危险文字</tyh-text>
  <tyh-text block type="warning">这是一段警告文字</tyh-text>
  <highlightjs language="javascript" :code="text.text2" />

  <h3 class="Subtitle">文字大小</h3>
  <p>size 属性可以配置文字大小</p>
  <tyh-text block size="15">这是一段普通文字</tyh-text>
  <tyh-text block size="18" type="primary">这是主要普通文字</tyh-text>
  <tyh-text block size="21" type="success">这是一段成功文字</tyh-text>
  <tyh-text block size="24" type="danger">这是一段危险文字</tyh-text>
  <tyh-text block size="27" type="warning">这是一段警告文字</tyh-text>
  <highlightjs language="javascript" :code="text.text3" />

  <h3 class="Subtitle">自定义颜色</h3>
  <p>color 属性可以配置自定义颜色</p>
  <p>自定义颜色优先级大于 type</p>
  <tyh-text block color="red">这是一段文字</tyh-text>
  <tyh-text block color="skyblue" type="primary">这是主要文字</tyh-text>
  <tyh-text block color="orange" type="success">这是一段文字</tyh-text>
  <tyh-text block color="pink" type="danger">这是一段文字</tyh-text>
  <tyh-text block color="black" type="warning">这是一段文字</tyh-text>
  <highlightjs language="javascript" :code="text.text4" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/avatar">
      Avatar 头像
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/table">
      Table 表格
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { text } from './index'
import table from './table'
const configures = [
  {
    param: 'type',
    explain: '按钮的类型',
    type: 'string',
    value: 'default / primary / success / danger / warning',
    default: 'default'
  },
  {
    param: 'block',
    explain: '是否独占一行',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'size',
    explain: '文字大小',
    type: 'string',
    value: '——',
    default: '16'
  },
  {
    param: 'color',
    explain: '自定义颜色',
    type: 'string',
    value: '——',
    default: '——'
  }
]
</script>

<style scoped>
.small {
  width: 240px;
  margin-left: 10px;
  display: inline-block;
}
</style>
