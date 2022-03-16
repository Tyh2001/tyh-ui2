<template>
  <h1 class="title">Textarea 文本域</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>文本域的基本用法</p>
  <tyh-textarea v-model="value1" placeholder="请输入内容..." />
  <highlightjs language="javascript" :code="textarea.text1" />

  <h3 class="Subtitle">拉伸方式</h3>
  <p>resize 属性可以规定文本域的拉伸方式</p>
  <tyh-textarea v-model="value7" /><br />
  <tyh-textarea v-model="value8" resize="vertical" /><br />
  <tyh-textarea v-model="value9" resize="horizontal" /><br />
  <tyh-textarea v-model="value10" resize="none" /><br />
  <highlightjs language="javascript" :code="textarea.text2" />

  <h3 class="Subtitle">不同尺寸</h3>
  <p>rows 属性可以配置文本域的行数</p>
  <p>cols 属性可以配置文本域的宽度</p>
  <tyh-textarea v-model="value3" rows="5" /><br />
  <tyh-textarea v-model="value4" cols="10" />
  <highlightjs language="javascript" :code="textarea.text3" />

  <h3 class="Subtitle">禁用状态</h3>
  <p>disabled 属性可以配置文本域禁用状态</p>
  <tyh-textarea v-model="value5" disabled />
  <highlightjs language="javascript" :code="textarea.text4" />

  <h3 class="Subtitle">最大上限</h3>
  <p>max 属性可以配置文本域输入的最大上限文本</p>
  <tyh-textarea v-model="value6" max="10" />
  <highlightjs language="javascript" :code="textarea.text5" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/info">
      Info 信息栏
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/select">
      Select 选择器
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { ref } from 'vue'
import { textarea } from './index'
import table from './table'
const value1 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('禁用状态')
const value6 = ref('')
const value7 = ref('随意拉伸')
const value8 = ref('只能纵向拉伸')
const value9 = ref('只能横向拉伸')
const value10 = ref('禁止拉伸')
const configures = [
  {
    param: 'v-model',
    explain: '绑定值',
    type: 'string / number',
    value: '——',
    default: '——'
  },
  {
    param: 'placeholder',
    explain: '输入框占位文本',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'max',
    explain: '最大输入上限',
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
    param: 'autofocus',
    explain: '是否自动获取焦点',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'name',
    explain: '原生 name 属性',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'resize',
    explain: '拉伸方式',
    type: 'string',
    value: 'vertical / horizontal / none',
    default: '——'
  },
  { param: 'rows', explain: '行数', type: 'string', value: '——', default: '3' },
  { param: 'cols', explain: '宽度', type: 'string', value: '——', default: '——' }
]
const configEvt = [
  { name: 'onblur', explain: '失去焦点触发的回调', param: '——' },
  { name: 'onfocus', explain: '获取焦点触发的回调', param: '——' }
]
</script>

<style scoped>
.tyh-textarea {
  margin-top: 8px;
}
</style>
