<template>
  <h1 class="title">Input 输入框</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>输入框的基本用法</p>
  <tyh-input v-model="text1" />
  <highlightjs language="javascript" :code="input.inp1" />

  <h3 class="Subtitle">输入框类型</h3>
  <p>type 属性可以规定文本框类型</p>
  <tyh-input type="text" v-model="text2" /><br />
  <tyh-input class="size-input" type="password" v-model="text3" />
  <highlightjs language="javascript" :code="input.inp2" />

  <h3 class="Subtitle">不同尺寸</h3>
  <p>size 属性可以配置文本框尺寸</p>
  <tyh-input size="large" v-model="text4" /><br />
  <tyh-input class="size-input" size="medium" v-model="text5" /><br />
  <tyh-input class="size-input" size="small" v-model="text6" /><br />
  <tyh-input class="size-input" size="mini" v-model="text7" /><br />
  <highlightjs language="javascript" :code="input.inp3" />

  <h3 class="Subtitle">可清空</h3>
  <p>clear 属性可以配置带有清空按钮的文本框</p>
  <tyh-input v-model="text8" clear />
  <highlightjs language="javascript" :code="input.inp4" />

  <h3 class="Subtitle">带有 icon</h3>
  <p>icon 属性可以配置文本框带有其他图标，直接传递 icon 的名字传递即可</p>
  <tyh-input v-model="text9" icon="tyh-ui-electronics" />
  <highlightjs language="javascript" :code="input.inp5" />

  <h3 class="Subtitle">禁用状态</h3>
  <p>disabled 属性可以配置文本框禁用状态</p>
  <tyh-input v-model="text10" disabled />
  <highlightjs language="javascript" :code="input.inp6" />

  <h3 class="Subtitle">查看密码</h3>
  <p>showPassword 属性可以配置查看密码按钮，showPassword 优先级大于 clear</p>
  <tyh-input v-model="text11" type="password" showPassword />
  <highlightjs language="javascript" :code="input.inp7" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/link">
      Link 链接
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/menu">
      Menu 导航栏
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { ref } from 'vue'
import { input } from './index'
import table from './table'
const text1 = ref('')
const text2 = ref('')
const text3 = ref('')
const text4 = ref('')
const text5 = ref('')
const text6 = ref('')
const text7 = ref('')
const text8 = ref('')
const text9 = ref('')
const text10 = ref('')
const text11 = ref('1234567')
const configures = [
  {
    param: 'v-model',
    explain: '绑定值',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'type',
    explain: '类型',
    type: 'string',
    value: 'text / password',
    default: 'text'
  },
  {
    param: 'placeholder',
    explain: '输入框占位文本',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'size',
    explain: '文本框尺寸',
    type: 'string',
    value: 'large / medium / small / mini',
    default: 'medium'
  },
  {
    param: 'max',
    explain: '最大输入上限',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'clear',
    explain: '是否可以清空文本框',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'icon',
    explain: '左侧显示的图标',
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
  }
]
const configEvt = [
  { name: 'clear', explain: '点击清空按钮触发的回调', param: '——' },
  { name: 'enter', explain: '按下回车触发的回调', param: '——' },
  { name: 'onblur', explain: '失去焦点触发的回调', param: '——' },
  { name: 'onfocus', explain: '获取焦点触发的回调', param: '——' }
]
</script>

<style scoped>
.tyh-input {
  width: 200px;
}
.size-input {
  margin-top: 8px;
}
</style>
