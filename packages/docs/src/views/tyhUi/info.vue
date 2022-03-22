<template>
  <h1 class="title">Info 信息栏</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>Info 的基本使用</p>
  <p>userInfo 属性可以配置昵称</p>
  <p>describe 属性可以配置描述信息</p>
  <p>
    photo 插槽可以插入一个头像，这里使用
    <tyh-link
      url="https://tianyuhao.cn/tyhui/v3/#/component/avatar"
      type="primary"
    >
      Avatar 头像
    </tyh-link>
    组件插入
  </p>
  <p>right 插槽可以插入右侧内容</p>
  <tyh-info userInfo="Tyh2001" describe="hello world">
    <template v-slot:photo>
      <tyh-avatar
        round
        :size="5"
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      />
    </template>
    <template v-slot:right>
      <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
    </template>
  </tyh-info>
  <highlightjs language="javascript" :code="info.inf1" />

  <h3 class="Subtitle">更多扩展</h3>
  <p>body 和 footer 插槽可以进行插入身体和页脚的内容</p>
  <tyh-info userInfo="Tyh2001" describe="hello world">
    <template v-slot:photo>
      <tyh-avatar
        round
        :size="5"
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      />
    </template>
    <template v-slot:right>
      <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
    </template>

    <template v-slot:body>
      <tyh-text block type="success">这是我今天拍的照片，好看吗？</tyh-text>
      <tyh-image
        width="300px"
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      />
    </template>

    <template v-slot:footer>
      <tyh-text type="danger">2022-02-12</tyh-text>
    </template>
  </tyh-info>
  <highlightjs language="javascript" :code="info.inf2" />

  <h3 class="Subtitle">昵称超链接</h3>
  <p>使用 linkUrl 属性，传入一个 url 可以配置点击昵称的时候进行超链接跳转</p>
  <tyh-info
    userInfo="Tyh2001"
    describe="hello world"
    linkUrl="https://tianyuhao.cn"
  >
    <template v-slot:photo>
      <tyh-avatar
        round
        :size="5"
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
      />
    </template>
  </tyh-info>
  <highlightjs language="javascript" :code="info.inf3" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Slots</h3>
  <tyh-table align="center" :data="slotConfig" :columns="table.columns3" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/pageHeader">
      PageHeader 页头
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/textarea">
      Textarea 文本域
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { info } from './index'
import table from './table'
const configures = [
  {
    param: 'userInfo',
    explain: '昵称',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'describe',
    explain: '描述信息',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'linkUrl',
    explain: '点击昵称的跳转链接',
    type: 'string',
    value: '——',
    default: '——'
  }
]
const slotConfig = [
  { name: 'photo', explain: '自定义信息栏的头像' },
  { name: 'right', explain: '自定义信息栏的右侧内容' },
  { name: 'body', explain: '自定义信息栏的主要部分' },
  { name: 'footer', explain: '自定义信息栏的页脚部分' }
]
</script>
