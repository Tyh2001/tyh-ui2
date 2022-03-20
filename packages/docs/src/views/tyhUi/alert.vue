<template>
  <h1 class="title">Alert 提示</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>提示的基本使用</p>
  <p>message 属性可以配置提示文字</p>
  <p>type 属性可以配置类型</p>
  <tyh-alert message="这是一个普通提示" />
  <tyh-alert type="primary" message="这是一个主要提示" />
  <tyh-alert type="success" message="这是一个成功提示" />
  <tyh-alert type="danger" message="这是一个危险提示" />
  <tyh-alert type="warning" message="这是一个警告提示" />
  <highlightjs language="javascript" :code="alert.ale1" />

  <h3 class="Subtitle">带有 icon</h3>
  <p>icon 属性可以配置 icon</p>
  <tyh-alert icon="tyh-ui-githublogo" message="这是一个普通提示" />
  <tyh-alert icon="tyh-ui-home" type="primary" message="这是一个主要提示" />
  <tyh-alert icon="tyh-ui-history" type="success" message="这是一个成功提示" />
  <tyh-alert icon="tyh-ui-smile" type="danger" message="这是一个危险提示" />
  <tyh-alert icon="tyh-ui-warning" type="warning" message="这是一个警告提示" />
  <highlightjs language="javascript" :code="alert.ale2" />

  <h3 class="Subtitle">可以关闭的</h3>
  <p>close 属性可以配置宽度</p>
  <p>动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现</p>
  <tyh-alert
    v-show="isShow"
    close
    message="点击关闭默认提示"
    @close="isShow = false"
  />
  <tyh-alert
    v-show="isShow1"
    close
    type="primary"
    message="点击关闭主要提示"
    @close="isShow1 = false"
  />
  <tyh-alert
    v-show="isShow2"
    close
    type="success"
    message="点击关闭成功提示"
    @close="isShow2 = false"
  />
  <tyh-alert
    v-show="isShow3"
    close
    type="danger"
    message="点击关闭危险提示"
    @close="isShow3 = false"
  />
  <tyh-alert
    v-show="isShow4"
    close
    type="warning"
    message="点击关闭警告提示"
    @close="isShow4 = false"
  />
  <highlightjs language="javascript" :code="alert.ale3" />

  <h3 class="Subtitle">文字居中</h3>
  <p>center 属性可以配置文字居中</p>
  <tyh-alert center message="这是一个普通提示" />
  <tyh-alert center type="primary" message="这是一个主要提示" />
  <tyh-alert center type="success" message="这是一个成功提示" />
  <tyh-alert center type="danger" message="这是一个危险提示" />
  <tyh-alert center type="warning" message="这是一个警告提示" />
  <highlightjs language="javascript" :code="alert.ale4" />

  <h3 class="Subtitle">简约提示</h3>
  <p>simple 属性可以配置简约提示</p>
  <tyh-alert simple message="简约的普通提示" />
  <tyh-alert simple type="primary" message="简约的主要提示" />
  <tyh-alert simple type="success" message="简约的成功提示" />
  <tyh-alert simple type="danger" message="简约的危险提示" />
  <tyh-alert simple type="warning" message="简约的警告提示" />
  <highlightjs language="javascript" :code="alert.ale5" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <h3 class="Subtitle">Events</h3>
  <tyh-table align="center" :data="configEvt" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/skeleton">
      Skeleton 骨架
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/rate">
      Rate 评分
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { alert } from './index'
import table from './table'
import { ref } from 'vue'
const isShow = ref(true)
const isShow1 = ref(true)
const isShow2 = ref(true)
const isShow3 = ref(true)
const isShow4 = ref(true)
const configures = [
  {
    param: 'message',
    explain: '提示的文字',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'type',
    explain: '提示类型',
    type: 'string',
    value: 'primary / success / danger / warning',
    default: '——'
  },
  {
    param: 'icon',
    explain: 'icon 类名',
    type: 'string',
    value: '——',
    default: '——'
  },
  {
    param: 'close',
    explain: '是否展示关闭按钮',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'center',
    explain: '是否文字居中对齐',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'simple',
    explain: '简约的提示',
    type: 'boolean',
    value: '——',
    default: 'false'
  }
]
const configEvt = [
  { name: 'close', explain: '关闭 Alert 时触发的回调', param: '——' }
]
</script>

<style scoped>
.tyh-alert {
  margin-top: 20px;
}
</style>
