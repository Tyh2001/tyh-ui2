<template>
  <h1 class="title">Radio 单选框</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>Radio 的基本使用</p>
  <p>label 属性可配置 Radio 的 value</p>
  <tyh-radio v-model="radio1" label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项3">备选项3</tyh-radio>
  <highlightjs language="javascript" :code="radio.rad1" />

  <h3 class="Subtitle">禁用状态</h3>
  <p>disabled 属性可以配置禁用状态</p>
  <tyh-radio v-model="radio2" disabled label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项3">备选项3</tyh-radio>
  <highlightjs language="javascript" :code="radio.rad2" />

  <h3 class="Subtitle">带有边框</h3>
  <p>border 属性可以配置边框</p>
  <tyh-radio v-model="radio3" label="备选项1" border>备选项1</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项2" border>备选项2</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项3" border>备选项3</tyh-radio>
  <highlightjs language="javascript" :code="radio.rad3" />

  <h3 class="Subtitle">配置大小</h3>
  <p>size 属性可以大小，但是必须是带有 border 属性的前提才可以正常工作</p>
  <tyh-radio v-model="radio4" label="备选项1" border size="large">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="large">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="large">
    备选项3
  </tyh-radio>
  <br /><br />
  <tyh-radio v-model="radio4" label="备选项1" border size="medium">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="medium">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="medium">
    备选项3
  </tyh-radio>
  <br /><br />
  <tyh-radio v-model="radio4" label="备选项1" border size="small">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="small">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="small">
    备选项3
  </tyh-radio>
  <br /><br />
  <tyh-radio v-model="radio4" label="备选项1" border size="mini">
    备选项1
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="mini">
    备选项2
  </tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="mini">
    备选项3
  </tyh-radio>
  <br />
  <highlightjs language="javascript" :code="radio.rad4" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/calendar">
      Calendar 日历
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/tree">
      Tree 树形控件
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { radio } from './index'
import table from './table'
import { ref } from 'vue'
const radio1 = ref('备选项1')
const radio2 = ref('备选项2')
const radio3 = ref('备选项3')
const radio4 = ref('备选项1')
const configures = [
  {
    param: 'modelValue / v-model',
    explain: '绑定的值',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'label',
    explain: 'Radio 的 value',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'name',
    explain: '原生 name 属性',
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
    param: 'Boolean',
    explain: '是否显示边框',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'size',
    explain: '大小尺寸',
    type: 'string',
    value: 'large / medium / small / mini',
    default: 'large'
  }
]
const configEvt = [
  { name: 'change', explain: '改变 Radio 时触发', param: '选中的值' }
]
</script>
