<template>
  <table-a v-high />
  <tyh-table :data="tableData" :columns="columns" />
  <table-b v-high />
  <tyh-table :data="tableData" :columns="columns" trHeight="50px" />
  <table-c v-high />
  <tyh-table :data="tableData" :columns="columns" align="center" />
  <table-d v-high />
  <tyh-table :data="tableData" :columns="columns" align="center" border zebra />
  <table-e v-high />
  <tyh-table
    :data="tableData"
    :columns="columns"
    align="center"
    width="500px"
    height="200px"
  />
  <table-f v-high />
  <tyh-table :data="tableData" :columns="columns" align="center" num />
  <table-g v-high />
  <tyh-table
    :data="tableData"
    :columns="columns"
    align="center"
    num
    :important="[2, 4]"
  />
  <table-h v-high />
  <tyh-table :data="tableData" :columns="columns2" align="center" />
  <table-i v-high />
</template>

<script setup>
  import tableA from '@/docs/table/tableA.md'
  import tableB from '@/docs/table/tableB.md'
  import tableC from '@/docs/table/tableC.md'
  import tableD from '@/docs/table/tableD.md'
  import tableE from '@/docs/table/tableE.md'
  import tableF from '@/docs/table/tableF.md'
  import tableG from '@/docs/table/tableG.md'
  import tableH from '@/docs/table/tableH.md'
  import tableI from '@/docs/table/tableI.md'
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
