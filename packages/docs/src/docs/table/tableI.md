```html
<template>
  <tyh-table :data="tableData" :columns="columns2" align="center" />
</template>

<script setup>
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
</script>
```

## Attributes

| 参数           | 说明             | 类型    | 可选值                | 默认值  |
| -------------- | ---------------- | ------- | --------------------- | ------- |
| data           | 表单的内容数据   | array   | ——                    | []      |
| columns        | 表头和键值       | array   | ——                    | []      |
| trHeight       | 行高             | string  | ——                    | 40px    |
| align          | 内容排向         | string  | left / right / center | left    |
| zebra          | 是否显示斑马纹   | boolean | ——                    | false   |
| border         | 是否显示边框     | boolean | ——                    | false   |
| width          | 表格宽度         | string  | ——                    | 100%    |
| height         | 表格高度         | string  | ——                    | auto    |
| num            | 是否显示序号     | boolean | ——                    | false   |
| important      | 重点行标注       | array   | ——                    | []      |
| importantColor | 重点行标注背景色 | string  | ——                    | #fdf5e6 |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/text">
    Text 文字
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/switch">
    Switch 开关
  </tyh-turn-page-item>
</tyh-turn-page>
