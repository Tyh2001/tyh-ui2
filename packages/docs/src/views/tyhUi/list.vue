<template>
  <list-a v-high />
  <tyh-list :content="arr" keys="name" />
  <list-b v-high />
  <tyh-list :content="arr" keys="name" header="这是头部" footer="这是页脚" />
  <list-c v-high />
  <tyh-list
    zebra
    num
    :content="arr"
    keys="name"
    header="这是头部"
    footer="这是页脚"
  />
  <list-d v-high />
  <tyh-list hoverShow :content="arr" keys="name" />
  <list-e v-high />
</template>

<script setup>
import listA from '@/docs/list/listA.md'
import listB from '@/docs/list/listB.md'
import listC from '@/docs/list/listC.md'
import listD from '@/docs/list/listD.md'
import listE from '@/docs/list/listE.md'
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>
