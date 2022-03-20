<template>
  <h1 class="title">Card 卡片</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>卡片的基础用法</p>
  <p>title 自定义卡片的主标题</p>
  <p>subtitle 自定义卡片的副标题</p>
  <tyh-card>
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>这是内容部分1</p>
    <p>这是内容部分2</p>
    <p>这是内容部分3</p>
    <p>这是内容部分4</p>
  </tyh-card>
  <highlightjs language="javascript" :code="card.car1" />

  <h3 class="Subtitle">简约卡片</h3>
  <tyh-card>
    <p>这是内容部分1</p>
    <p>这是内容部分2</p>
    <p>这是内容部分3</p>
    <p>这是内容部分4</p>
  </tyh-card>
  <highlightjs language="javascript" :code="card.car2" />

  <h3 class="Subtitle">阴影显示时机</h3>
  <p>shadow 属性可以配置阴影显示时机</p>
  <tyh-card class="small" shadow="always">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>总是显示阴影</p>
  </tyh-card>
  <tyh-card class="small" shadow="hover">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>鼠标移入显示</p>
  </tyh-card>
  <tyh-card class="small">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>从不显示</p>
  </tyh-card>
  <highlightjs language="javascript" :code="card.car3" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Slots</h3>
  <tyh-table align="center" :data="slotConfig" :columns="table.columns3" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/list">
      List 列表
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/tag">
      Tag 标签
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { card } from './index'
import table from './table'
const configures = [
  {
    param: 'shadow',
    explain: '阴影显示时机',
    type: 'string',
    value: 'always / hover',
    default: '——'
  },
  {
    param: 'body-style',
    explain: '自定义 body 样式',
    type: 'object',
    value: '——',
    default: '{padding:20px}'
  }
]
const slotConfig = [
  { name: 'title', explain: '自定义卡片的主标题' },
  { name: 'subtitle', explain: '自定义卡片的副标题' }
]
</script>

<style scoped>
.small {
  width: 240px;
  margin-left: 10px;
  display: inline-block;
}
.tyh-card {
  margin-bottom: 13px;
}
</style>
