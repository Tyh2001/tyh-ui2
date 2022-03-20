<template>
  <h1 class="title">Select 选择器</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>选择器的基本用法</p>
  <tyh-select v-model="value">
    <tyh-option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
    >
      {{ item.label }}
    </tyh-option>
  </tyh-select>
  <highlightjs language="javascript" :code="select.sel1" />

  <h3 class="Subtitle">tyh-select Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">tyh-option Attributes</h3>
  <tyh-table align="center" :data="configures2" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/textarea">
      Textarea 文本域
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/tagging">
      Tagging 标注
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { ref } from 'vue'
import { select } from './index'
import table from './table'
const value = ref('选项2')
const configures = [
  {
    param: 'v-model',
    explain: '绑定值',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'name',
    explain: '原生 name',
    type: 'string',
    value: '——',
    default: '——'
  }
]
const configures2 = [
  {
    param: 'value',
    explain: '选项的值',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'label',
    explain: '分组的组名',
    type: 'string',
    value: '——',
    default: '——'
  }
]
const options = [
  {
    value: '选项1',
    label: '上海'
  },
  {
    value: '选项2',
    label: '北京'
  },
  {
    value: '选项3',
    label: '杭州'
  },
  {
    value: '选项4',
    label: '天津'
  },
  {
    value: '选项5',
    label: '大连'
  }
]
</script>
