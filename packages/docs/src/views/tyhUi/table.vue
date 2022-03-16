<template>
  <h1 class="title">Table 表格</h1>

  <h3 class="Subtitle">基本使用</h3>
  <p>表格的基本使用</p>
  <p>data 属性可以配置表格的数据，接收一个数组</p>
  <p>
    columns 属性可以配置表格的标题和键值，它接收一个数组，里面是对象，对象的
    title 配置标题，key 配置键值，名字是必须的，否则将不能正常工作！详情参考文档
  </p>
  <tyh-table :data="tableData" :columns="columns3" />
  <highlightjs language="javascript" :code="tableCode.tab1" />

  <h3 class="Subtitle">配置行高</h3>
  <p>trHeight 属性可以表格行高</p>
  <tyh-table :data="tableData" :columns="columns3" trHeight="50px" />
  <highlightjs language="javascript" :code="tableCode.tab2" />

  <h3 class="Subtitle">文字放置方向</h3>
  <p>align 属性可以表格文字居中还是居两侧</p>
  <tyh-table :data="tableData" :columns="columns3" align="center" />
  <highlightjs language="javascript" :code="tableCode.tab3" />

  <h3 class="Subtitle">斑马纹和边框</h3>
  <p>zebra 属性可以配置斑马纹</p>
  <p>border 属性可以配置边框</p>
  <tyh-table
    :data="tableData"
    :columns="columns3"
    align="center"
    border
    zebra
  />
  <highlightjs language="javascript" :code="tableCode.tab4" />

  <h3 class="Subtitle">自定义宽高</h3>
  <p>width 属性可以配置表格宽度</p>
  <p>height 属性可以配置表格高度</p>
  <tyh-table
    :data="tableData"
    :columns="columns3"
    align="center"
    width="500px"
    height="200px"
  />
  <highlightjs language="javascript" :code="tableCode.tab5" />

  <h3 class="Subtitle">带有序号</h3>
  <p>num 属性可以配置带有序号的表格</p>
  <tyh-table :data="tableData" :columns="columns3" align="center" num />
  <highlightjs language="javascript" :code="tableCode.tab6" />

  <h3 class="Subtitle">重点行标注</h3>
  <p>
    important 属性可以配置重点行着重标注，它接收一个数组，里面包含重点行的行号
  </p>
  <tyh-table
    :data="tableData"
    :columns="columns3"
    align="center"
    num
    :important="[2, 4]"
  />
  <highlightjs language="javascript" :code="tableCode.tab7" />

  <h3 class="Subtitle">单独配置列度</h3>
  <p>
    每一列的宽度也是可以单独配置的，可以在 columns 数组对象中添加 width
    键值，来配置单独的列宽，比如下面将第一列和第二列设置宽度为 100px
  </p>
  <tyh-table :data="tableData" :columns="columns2" align="center" />
  <highlightjs language="javascript" :code="tableCode.tab8" />

  <h3 class="Subtitle">Attributes</h3>
  <tyh-table align="center" :data="configures" :columns="table.columns" />

  <tyh-turn-page style="margin: 50px 0">
    <tyh-turn-page-item direction="left" url="/component/text">
      Text 文字
    </tyh-turn-page-item>
    <tyh-turn-page-item direction="right" url="/component/switch">
      Switch 开关
    </tyh-turn-page-item>
  </tyh-turn-page>
</template>

<script setup>
import { tableCode } from './index'
import table from './table'
const columns3 = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const columns2 = [
  {
    title: '日期',
    key: 'date',
    width: '100px'
  },
  {
    title: '姓名',
    key: 'name',
    width: '100px'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
const configures = [
  {
    param: 'data',
    explain: '表单的内容数据',
    type: 'array',
    value: '——',
    default: '[]'
  },
  {
    param: 'columns',
    explain: '表头和键值',
    type: 'array',
    value: '——',
    default: '[]'
  },
  {
    param: 'trHeight',
    explain: '行高',
    type: 'string',
    value: '——',
    default: '40px'
  },
  {
    param: 'align',
    explain: '内容排向',
    type: 'string',
    value: 'left / right / center',
    default: 'left'
  },
  {
    param: 'zebra',
    explain: '是否显示斑马纹',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'border',
    explain: '是否显示边框',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'width',
    explain: '表格宽度',
    type: 'string',
    value: '——',
    default: '100%'
  },
  {
    param: 'height',
    explain: '表格高度',
    type: 'string',
    value: '——',
    default: 'auto'
  },
  {
    param: 'num',
    explain: '是否显示序号',
    type: 'boolean',
    value: '——',
    default: 'false'
  },
  {
    param: 'important',
    explain: '重点行标注',
    type: 'array',
    value: '——',
    default: '[]'
  },
  {
    param: 'importantColor',
    explain: '重点行标注背景色',
    type: 'string',
    value: '——',
    default: '#fdf5e6'
  }
]
</script>

<style scoped>
.tyh-alert {
  margin-top: 20px;
}
</style>
