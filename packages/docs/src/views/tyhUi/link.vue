<template>
  <h1 class="title">Link 链接</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>链接的基本使用</p>
  <tyh-link url="">链接一</tyh-link>
  <tyh-link url="" type="primary">链接二</tyh-link>
  <tyh-link url="" type="success">链接三</tyh-link>
  <tyh-link url="" type="danger">链接四</tyh-link>
  <tyh-link url="" type="warning">链接五</tyh-link>
  <highlightjs language="javascript" :code="link.lin1" />

  <h3 class="Subtitle">带有下划线</h3>
  <p>underline 属性可以配置带有下划线</p>
  <tyh-link :underline="false">链接一</tyh-link>
  <tyh-link :underline="false" type="primary">链接二</tyh-link>
  <tyh-link :underline="false" type="success">链接三</tyh-link>
  <tyh-link :underline="false" type="danger">链接四</tyh-link>
  <tyh-link :underline="false" type="warning">链接五</tyh-link>
  <highlightjs language="javascript" :code="link.lin2" />

  <h3 class="Subtitle">禁用链接</h3>
  <p>prohibit 属性可以禁用链接标签</p>
  <tyh-link url="" prohibit>禁用链接一</tyh-link>
  <tyh-link url="" prohibit type="primary">禁用链接二</tyh-link>
  <tyh-link url="" prohibit type="success">禁用链接三</tyh-link>
  <tyh-link url="" prohibit type="danger">禁用链接四</tyh-link>
  <tyh-link url="" prohibit type="warning">禁用链接五</tyh-link>
  <highlightjs language="javascript" :code="link.lin3" />

  <h3 class="Subtitle">带有 Icon</h3>
  <p>icon 属性可以配置 icon</p>
  <tyh-link url="" icon="tyh-ui-favorite-filling">链接一</tyh-link>
  <tyh-link url="" icon="tyh-ui-attachment" type="primary"> 链接二 </tyh-link>
  <tyh-link url="" icon="tyh-ui-customer-service" type="success">
    链接三
  </tyh-link>
  <tyh-link url="" icon="tyh-ui-filter" type="danger"> 链接四 </tyh-link>
  <tyh-link url="" icon="tyh-ui-good" type="warning"> 链接五 </tyh-link>
  <highlightjs language="javascript" :code="link.lin4" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/tag">
      Tag 标签
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/input">
      Input 输入框
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { link } from './index'
import table from './table'
const configures = [
  {
    param: 'url',
    explain: '跳转的路径',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'type',
    explain: '链接的类型',
    type: 'string',
    value: 'primary / success / danger / warning',
    default: '——'
  },
  {
    param: 'underline',
    explain: '无下划线',
    type: 'boolean',
    value: '——',
    default: 'true'
  },
  {
    param: 'target',
    explain: '以新的窗口打开',
    type: 'string',
    value: '同原生 target 属性 _blank',
    default: '——'
  },
  {
    param: 'icon',
    explain: 'icon',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'prohibit',
    explain: '禁用状态',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
</script>

<style scoped>
.tyh-link {
  margin-right: 13px;
  margin-bottom: 13px;
}
</style>
