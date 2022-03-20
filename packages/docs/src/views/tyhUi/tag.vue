<template>
  <h1 class="title">Tag 标签</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>标签的基本使用</p>
  <tyh-tag>标签一</tyh-tag>
  <tyh-tag type="primary">标签二</tyh-tag>
  <tyh-tag type="success">标签三</tyh-tag>
  <tyh-tag type="danger">标签四</tyh-tag>
  <tyh-tag type="warning">标签五</tyh-tag>
  <highlightjs language="javascript" :code="tag.tag1" />

  <h3 class="Subtitle">不同尺寸</h3>
  <p>size 属性可以配置不同的尺寸</p>
  <tyh-tag type="primary">标签</tyh-tag>
  <tyh-tag size="small" type="primary">标签</tyh-tag>
  <tyh-tag size="mini" type="primary">标签</tyh-tag>
  <highlightjs language="javascript" :code="tag.tag2" />

  <h3 class="Subtitle">圆角标签</h3>
  <p>round 属性可以配置圆角显示</p>
  <tyh-tag round>标签一</tyh-tag>
  <tyh-tag round type="primary">标签二</tyh-tag>
  <tyh-tag round type="success">标签三</tyh-tag>
  <tyh-tag round type="danger">标签四</tyh-tag>
  <tyh-tag round type="warning">标签五</tyh-tag>
  <highlightjs language="javascript" :code="tag.tag3" />

  <h3 class="Subtitle">可关闭</h3>
  <p>设置 isclose 属性可以定义一个标签是否可移除</p>
  <p>动态编辑标签可以通过点击标签关闭按钮后触发的 onClose 事件来实现</p>
  <tyh-tag v-show="show1" isClose @close="show1 = false">标签一</tyh-tag>
  <tyh-tag v-show="show2" type="primary" isClose @close="show2 = false">
    标签二
  </tyh-tag>
  <tyh-tag v-show="show3" type="success" isClose @close="show3 = false">
    标签三
  </tyh-tag>
  <tyh-tag v-show="show4" type="danger" isClose @close="show4 = false">
    标签四
  </tyh-tag>
  <tyh-tag v-show="show5" type="warning" isClose @close="show5 = false">
    标签五
  </tyh-tag>
  <highlightjs language="javascript" :code="tag.tag4" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/card">
      Card 卡片
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/link">
      link 链接
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { tag } from './index'
import table from './table'
import { ref } from 'vue'
const show1 = ref(true)
const show2 = ref(true)
const show3 = ref(true)
const show4 = ref(true)
const show5 = ref(true)
const configures = [
  {
    param: 'type',
    explain: '标签的类型',
    type: 'string',
    value: 'default / primary / success / danger / warning',
    default: 'default'
  },
  {
    param: 'size',
    explain: '标签的尺寸',
    type: 'string',
    value: ' — / small / mini',
    default: '——'
  },
  {
    param: 'round',
    explain: '配置圆角显示',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'isClose',
    explain: '是否显示关闭按钮',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
const configEvt = [
  { name: 'close', explain: '关闭 Tag 时触发的回调', param: '——' }
]
</script>

<style scoped>
.tyh-tag {
  margin-right: 13px;
  margin-bottom: 13px;
}
</style>
