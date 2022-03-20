<template>
  <h1 class="title">Tagging 标注</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>标注的基本用法，用于在文本之间标记重点信息</p>
  <p>type 属性可以配置标注的类型</p>
  <tyh-tagging>标注1</tyh-tagging>
  <tyh-tagging type="primary">标注2</tyh-tagging>
  <tyh-tagging type="success">标注3</tyh-tagging>
  <tyh-tagging type="danger">标注4</tyh-tagging>
  <tyh-tagging type="warning">标注5</tyh-tagging>
  <highlightjs language="javascript" :code="tagging.tag1" />

  <h3 class="Subtitle">文字配置</h3>
  <p>size 属性可以配置标注的文字大小</p>
  <tyh-tagging size="14">
    使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
  </tyh-tagging>
  <highlightjs language="javascript" :code="tagging.tag2" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/select">
      Select 选择器
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/notification">
      Notification 通知
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { ref } from 'vue'
import { tagging } from './index'
import table from './table'
const configures = [
  {
    param: 'type',
    explain: '类型',
    type: 'string',
    value: 'default / primary / success / danger / warning',
    default: 'default'
  },
  {
    param: 'size',
    explain: '文字大小',
    type: 'string',
    value: '——',
    default: '13'
  },
  {
    param: 'color',
    explain: '文字颜色',
    type: 'string',
    value: '——',
    default: '——'
  }
]
</script>

<style scoped>
.tyh-tagging {
  margin-right: 13px;
  margin-bottom: 13px;
}
</style>
