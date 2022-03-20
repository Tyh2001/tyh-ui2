<template>
  <h1 class="title">Container 布局容器</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
  <p>&lt;tyh-container&gt;：外层容器</p>
  <p>&lt;tyh-header&gt;：顶栏容器</p>
  <p>&lt;tyh-aside&gt;：侧边栏容器</p>
  <p>&lt;tyh-main&gt;：主要区域容器</p>
  <p>&lt;tyh-footer&gt;：底栏容器</p>

  <h3 class="Subtitle">常见页面布局</h3>
  <p>flex 属性可以配置是否水平排列，否则为竖直排列</p>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <br /><br /><br /><br />

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
    <tyh-footer>Footer</tyh-footer>
  </tyh-container>

  <br /><br /><br /><br />

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <br /><br /><br /><br />

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <br /><br /><br /><br />

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-container>
        <tyh-main>Main</tyh-main>
        <tyh-footer>Footer</tyh-footer>
      </tyh-container>
    </tyh-container>
  </tyh-container>

  <br /><br /><br /><br />

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <br /><br /><br /><br />

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
      <tyh-footer>Footer</tyh-footer>
    </tyh-container>
  </tyh-container>
  <highlightjs language="javascript" :code="container.cont1" />

  <h3 class="Subtitle">tyh-container Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">tyh-header Attributes</h3>
  <tyh-table align="center" :data="configures1" :columns="table.columns" />

  <h3 class="Subtitle">tyh-aside Attributes</h3>
  <tyh-table align="center" :data="configures2" :columns="table.columns" />

  <h3 class="Subtitle">tyh-footer Attributes</h3>
  <tyh-table align="center" :data="configures3" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/color">
      Color 色彩
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/button">
      Button 按钮
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { container } from './index'
import table from './table'
const configures = [
  {
    param: 'direction',
    explain: '子元素的排列方向',
    type: 'string',
    value: 'horizontal / vertical',
    default: '——'
  }
]
const configures1 = [
  {
    param: 'height',
    explain: '顶栏高度',
    type: 'string',
    value: '——',
    default: '60px'
  }
]
const configures2 = [
  {
    param: 'width',
    explain: '侧边栏宽度',
    type: 'string',
    value: '——',
    default: '200px'
  }
]
const configures3 = [
  {
    param: 'height',
    explain: '底栏高度',
    type: 'string',
    value: '——',
    default: '60px'
  }
]
</script>

<style scoped>
.tyh-header,
.tyh-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.tyh-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.tyh-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .tyh-container {
  margin-bottom: 40px;
}

.tyh-container:nth-child(5) .tyh-aside,
.tyh-container:nth-child(6) .tyh-aside {
  line-height: 260px;
}

.tyh-container:nth-child(7) .tyh-aside {
  line-height: 320px;
}
</style>
