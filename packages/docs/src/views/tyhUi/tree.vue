<template>
  <h1 class="title">Tree 树形控件</h1>
  <tyh-alert type="danger" message="该组件尚未完善，开发中。。。" />

  <h3 class="Subtitle">基本使用</h3>
  <p>tree 的基本使用</p>
  <p>data 属性传递一个树型结构的数据</p>
  <tyh-tree :data="data" />
  <highlightjs language="javascript" :code="tree.tre1" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/radio">
      Radio 单选框
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/pageHeader">
      PageHeader 页头
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { tree } from './index'
import table from './table'
const configures = [
  {
    param: 'data',
    explain: '展示数据',
    type: 'array',
    value: '——',
    default: '[]'
  }
]
const data = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
]
</script>
