<template>
  <h1 class="title">Button 按钮</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>按钮的基础用法</p>
  <tyh-button>默认按钮</tyh-button>
  <tyh-button type="primary">主要按钮</tyh-button>
  <tyh-button type="success">成功按钮</tyh-button>
  <tyh-button type="danger">危险按钮</tyh-button>
  <tyh-button type="warning">警告按钮</tyh-button>
  <highlightjs language="javascript" :code="button.btn1" />

  <h3 class="Subtitle">简约按钮</h3>
  <p>simple 属性可以配置简约按钮</p>
  <tyh-button simple>默认按钮</tyh-button>
  <tyh-button simple type="primary">主要按钮</tyh-button>
  <tyh-button simple type="success">成功按钮</tyh-button>
  <tyh-button simple type="danger">危险按钮</tyh-button>
  <tyh-button simple type="warning">警告按钮</tyh-button>
  <highlightjs language="javascript" :code="button.btn6" />

  <h3 class="Subtitle">图标按钮</h3>
  <p>icon 属性可以配置图标按钮</p>
  <tyh-button icon="tyh-ui-setting-filling">设置</tyh-button>
  <tyh-button icon="tyh-ui-tyhui" type="primary"> tyh-ui </tyh-button>
  <tyh-button icon="tyh-ui-fabulous" type="success"></tyh-button>
  <tyh-button icon="tyh-ui-discount" type="danger"></tyh-button>
  <tyh-button icon="tyh-ui-chart-bar" type="warning"> </tyh-button>
  <br /><br />
  <tyh-button simple icon="tyh-ui-setting-filling"> 设置 </tyh-button>
  <tyh-button simple icon="tyh-ui-tyhui" type="primary"> tyh-ui </tyh-button>
  <tyh-button simple icon="tyh-ui-fabulous" type="success"></tyh-button>
  <tyh-button simple icon="tyh-ui-discount" type="danger"></tyh-button>
  <tyh-button simple icon="tyh-ui-chart-bar" type="warning"></tyh-button>
  <highlightjs language="javascript" :code="button.btn2" />

  <h3 class="Subtitle">禁用状态</h3>
  <p>disabled 属性可以配置禁用状态</p>
  <tyh-button disabled>默认按钮</tyh-button>
  <tyh-button disabled type="primary">主要按钮</tyh-button>
  <tyh-button disabled type="success">成功按钮</tyh-button>
  <tyh-button disabled type="danger">危险按钮</tyh-button>
  <tyh-button disabled type="warning">警告按钮</tyh-button>
  <br /><br />
  <tyh-button simple disabled>默认按钮</tyh-button>
  <tyh-button simple disabled type="primary">主要按钮</tyh-button>
  <tyh-button simple disabled type="success">成功按钮</tyh-button>
  <tyh-button simple disabled type="danger">危险按钮</tyh-button>
  <tyh-button simple disabled type="warning">警告按钮</tyh-button>
  <highlightjs language="javascript" :code="button.btn3" />

  <h3 class="Subtitle">圆角按钮</h3>
  <p>round 属性可以配置圆角按钮</p>
  <p>square 属性可以配置方形按钮</p>
  <tyh-button round>默认按钮</tyh-button>
  <tyh-button round type="primary">主要按钮</tyh-button>
  <tyh-button round type="success">成功按钮</tyh-button>
  <tyh-button round type="danger">危险按钮</tyh-button>
  <tyh-button round type="warning">警告按钮</tyh-button>
  <br /><br />
  <tyh-button square>默认按钮</tyh-button>
  <tyh-button square type="primary">主要按钮</tyh-button>
  <tyh-button square type="success">成功按钮</tyh-button>
  <tyh-button square type="danger">危险按钮</tyh-button>
  <tyh-button square type="warning">警告按钮</tyh-button>
  <highlightjs language="javascript" :code="button.btn4" />

  <h3 class="Subtitle">按钮组</h3>
  <p>使用 tyh-button-group 标签来嵌套按钮</p>
  <tyh-button-group>
    <tyh-button type="primary">上一页</tyh-button>
    <tyh-button type="primary">下一页</tyh-button>
  </tyh-button-group>
  <tyh-button-group>
    <tyh-button simple type="primary">左</tyh-button>
    <tyh-button simple type="success">右</tyh-button>
  </tyh-button-group>
  <tyh-button-group>
    <tyh-button icon="tyh-ui-arrow-left-filling" type="primary"></tyh-button>
    <tyh-button icon="tyh-ui-arrow-right-filling" type="success"></tyh-button>
  </tyh-button-group>
  <tyh-button-group>
    <tyh-button type="primary">左</tyh-button>
    <tyh-button type="success">中</tyh-button>
    <tyh-button type="primary">右</tyh-button>
  </tyh-button-group>

  <highlightjs language="javascript" :code="button.btn7" />

  <h3 class="Subtitle">不同尺寸</h3>
  <p>size 属性可以配置按钮尺寸</p>
  <tyh-button size="mini" type="primary">小型按钮</tyh-button>
  <br />
  <tyh-button size="small" type="primary">中等按钮</tyh-button>
  <br />
  <tyh-button type="primary">正常大小</tyh-button>
  <br />
  <tyh-button size="large" type="primary">大号按钮</tyh-button>
  <br />
  <tyh-button simple size="mini" type="primary">小型按钮</tyh-button>
  <br />
  <tyh-button simple size="small" type="primary">中等按钮</tyh-button>
  <br />
  <tyh-button simple type="primary">正常大小</tyh-button>
  <br />
  <tyh-button simple size="large" type="primary">大号按钮</tyh-button>
  <highlightjs language="javascript" :code="button.btn5" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/container">
      Container 布局容器
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/list">
      List 列表
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { button } from './index'
import table from './table'
const configures = [
  {
    param: 'type',
    explain: '按钮的类型',
    type: 'string',
    value: 'default / primary / success / danger / warning',
    default: 'default'
  },
  {
    param: 'round',
    explain: '是否为圆角按钮',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'simple',
    explain: '简约按钮',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'disabled',
    explain: '按钮是否禁用',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'icon',
    explain: '按钮上的 icon',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'size',
    explain: '按钮尺寸',
    type: 'string',
    value: 'large / small / mini',
    default: '——'
  },
  {
    param: 'square',
    explain: '方形按钮',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
</script>

<style scoped>
.tyh-button {
  margin: 0 13px 13px 0;
}
</style>
