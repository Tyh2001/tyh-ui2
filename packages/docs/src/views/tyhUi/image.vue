<template>
  <h1 class="title">Image 图片</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>图片的基本使用</p>
  <p>src 属性可以添加图片路径</p>
  <p>width，height 可以配置图片宽高</p>
  <tyh-image width="300px" src="https://tianyuhao.cn/v3/assets/giraffe.jpg" />
  <highlightjs language="javascript" :code="image.img1" />

  <h3 class="Subtitle">如何适应容器框</h3>
  <p>
    fit 属性配置图片如何适应到容器框，同原生
    <tyh-link
      url="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
      type="primary"
      target="_blank"
    >
      object-fit
    </tyh-link>
  </p>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <tyh-image
        width="100px"
        height="100px"
        src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
  <highlightjs language="javascript" :code="image.img2" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns2" />

  <h3 class="Subtitle">Slots</h3>
  <tyh-table align="center" :data="slotConfig" :columns="table.columns3" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/rate">
      Rate 评分
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/avatar">
      Avatar 头像
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { image } from './index'
import table from './table'
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const configures = [
  {
    param: 'src',
    explain: '图片路径',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'width',
    explain: '图片宽度',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'height',
    explain: '图片高度',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'fit',
    explain: '确定图片如何适应容器框',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'alt',
    explain: '原生 alt 属性',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'select',
    explain: '是否可以选择',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'draggable',
    explain: '是否可以拖动',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
const configEvt = [
  { name: 'load', explain: '图片加载成功触发', param: '——' },
  { name: 'error', explain: '图片加载失败触发', param: '——' }
]
const slotConfig = [{ name: 'error', explain: '自定义失败提示' }]
onerror = _ => true
</script>

<style scoped>
.fitBox {
  display: flex;
}
.fitBox .item {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fitBox .item .text {
  color: #333333;
  margin-bottom: 20px;
}
</style>
