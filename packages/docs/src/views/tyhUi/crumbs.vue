<template>
  <h1 class="title">Crumbs 面包屑</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>面包屑的基本用法</p>
  <tyh-crumbs>
    <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
    <tyh-crumbs-item>学员管理</tyh-crumbs-item>
    <tyh-crumbs-item>文章管理</tyh-crumbs-item>
    <tyh-crumbs-item>设置</tyh-crumbs-item>
  </tyh-crumbs>
  <highlightjs language="javascript" :code="crumbs.cru1" />

  <h3 class="Subtitle">不同的分隔符</h3>
  <p>通过给父组件 separator 属性可以配置不同的分隔符，使用 icon 类名</p>
  <tyh-crumbs separator="tyh-ui-link">
    <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
    <tyh-crumbs-item>学员管理</tyh-crumbs-item>
    <tyh-crumbs-item>文章管理</tyh-crumbs-item>
    <tyh-crumbs-item>设置</tyh-crumbs-item>
  </tyh-crumbs>
  <highlightjs language="javascript" :code="crumbs.cru2" />

  <h3 class="Subtitle">跳转路由</h3>
  <p>
    通过给子组件to
    属性可以配置跳转路径，添加该属性后文章点击会跳转，并且加粗显示
  </p>
  <tyh-crumbs>
    <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
    <tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>
    <tyh-crumbs-item>文章管理</tyh-crumbs-item>
    <tyh-crumbs-item>设置</tyh-crumbs-item>
  </tyh-crumbs>
  <highlightjs language="javascript" :code="crumbs.cru3" />

  <h3 class="Subtitle">tyh-crumbs Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">tyh-crumbs-item Attributes</h3>
  <tyh-table align="center" :data="configures2" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/icon">
      Icon 图标
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/turnpage">
      TurnPage 翻页
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { crumbs } from './index'
import table from './table'
const configures = [
  {
    param: 'separator',
    explain: '分隔符，icon 的类名',
    type: 'string',
    value: '——',
    default: 'tyh-ui-xiexian-01'
  }
]
const configures2 = [
  {
    param: 'to',
    explain: '跳转的路径',
    type: 'string',
    value: '——',
    default: '——'
  }
]
</script>
