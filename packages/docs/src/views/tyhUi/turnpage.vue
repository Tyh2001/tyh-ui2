<template>
  <h1 class="title">TurnPage 翻页</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>翻页的基础用法</p>
  <p>
    direction
    属性用于配置子组件，此属性为必传参数，它决定了你的翻页标识文字的显示位置
  </p>
  <tyh-turn-page>
    <tyh-turn-page-item direction="left" url="">上一页</tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="">下一页</tyh-turn-page-item>
  </tyh-turn-page>
  <highlightjs language="javascript" :code="turnpage.tur1" />

  <h3 class="Subtitle">居中显示</h3>
  <p>center 属性可以配置居中显示</p>
  <tyh-turn-page center>
    <tyh-turn-page-item direction="left" url="">
      上一页 - 居中
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="">
      下一页 - 居中
    </tyh-turn-page-item>
  </tyh-turn-page>
  <highlightjs language="javascript" :code="turnpage.tur2" />

  <h3 class="Subtitle">自定义图标</h3>
  <p>icon 属性可以配置其他 icon</p>
  <tyh-turn-page>
    <tyh-turn-page-item direction="left" url="" icon="tyh-ui-shouye-xianxing">
      首页
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="" icon="tyh-ui-direction-right">
      下一页
    </tyh-turn-page-item>
  </tyh-turn-page>
  <highlightjs language="javascript" :code="turnpage.tur3" />

  <h3 class="Subtitle">tyh-turn-page Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">tyh-turn-page-item Attributes</h3>
  <tyh-table align="center" :data="configures2" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/crumbs">
      Crumbs 面包屑
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/backtop">
      BackTop 回到顶部
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { turnpage } from './index'
import table from './table'
const configures = [
  {
    param: 'center',
    explain: '居中显示',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
const configures2 = [
  {
    param: 'direction',
    explain: '文字位置',
    type: 'string',
    value: 'left / right',
    default: '——'
  },
  {
    param: 'url',
    explain: '跳转的路由',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'icon',
    explain: '左右的图标',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'prohibit',
    explain: '是否禁用',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
</script>
