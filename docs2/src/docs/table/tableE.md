```html
<template>
  <tyh-table :data="tableData" :columns="columns" align="center" border zebra />
</template>

<script setup>
  const columns = [
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

## 自定义宽高

width 属性可以配置表格宽度

height 属性可以配置表格高度
