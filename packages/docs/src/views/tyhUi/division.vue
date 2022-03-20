<template>
  <h1 class="title">Division 分割线</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>分割线的基本使用</p>
  <tyh-division></tyh-division>
  <p>这是一段文字</p>
  <tyh-division></tyh-division>
  <highlightjs language="javascript" :code="division.div1" />

  <h3 class="Subtitle">文字位置</h3>
  <p>position 属性可以配置文字的位置</p>
  <tyh-division position="left">这是左边文字</tyh-division>
  <p>这是一段文字</p>
  <tyh-division position="center">这是中间文字</tyh-division>
  <p>这是一段文字</p>
  <tyh-division position="right">这是右边文字</tyh-division>
  <highlightjs language="javascript" :code="division.div2" />

  <h3 class="Subtitle">文字颜色</h3>
  <p>color 属性可以配置文字的颜色</p>
  <tyh-division position="left" color="red">这是左边文字</tyh-division>
  <p>这是一段文字</p>
  <tyh-division position="center" color="blue">这是中间文字</tyh-division>
  <p>这是一段文字</p>
  <tyh-division position="right" color="green">这是右边文字</tyh-division>
  <highlightjs language="javascript" :code="division.div3" />

  <h3 class="Subtitle">上下的边距</h3>
  <p>margin 属性可以配置上下的边距</p>
  <tyh-division position="left" margin="0px">这是左边文字</tyh-division>
  <p>这是一段文字</p>
  <tyh-division position="center" margin="20px">这是中间文字</tyh-division>
  <p>这是一段文字</p>
  <tyh-division position="right">这是右边文字</tyh-division>
  <highlightjs language="javascript" :code="division.div4" />

  <h3 class="Subtitle">带有 Icon</h3>
  <p>icon 属性可以配置 icon</p>
  <p>icon 的优先级大于描述文字</p>
  <tyh-division position="left" color="red" icon="tyh-ui-githublogo" />
  <p>这是一段文字</p>
  <tyh-division
    position="center"
    color="blue"
    icon="tyh-ui-notification-filling"
  />
  <p>这是一段文字</p>
  <tyh-division position="right" color="black" icon="tyh-ui-cry" />
  <highlightjs language="javascript" :code="division.div5" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/menu">
      Menu 导航栏
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/icon">
      Icon 图标
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { division } from './index'
import table from './table'
const configures = [
  {
    param: 'position',
    explain: '文字位置',
    type: 'string',
    value: 'left / center / right',
    default: 'left'
  },
  {
    param: 'color',
    explain: '文字颜色',
    type: 'string',
    value: '——',
    default: '#515a6e'
  },
  {
    param: 'margin',
    explain: '上下的边距',
    type: 'string',
    value: '——',
    default: '25px'
  },
  {
    param: 'icon',
    explain: '配置 icon',
    type: 'string',
    value: '——',
    default: '——'
  }
]
</script>
