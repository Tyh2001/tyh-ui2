<template>
  <tyh-list
    num
    header="很大很大回到家"
    :content="arr2"
    keys="name1"
    hoverShow
    zebra
  >
    <template v-slot:header>
      <button>回到家啊哈大家</button>
    </template>
    <template v-slot:footer>
      <button>回到家啊哈大家</button>
      <button>回到家啊哈大家</button>
      <button>回到家啊哈大家</button>
      <button>回到家啊哈大家</button>
    </template>
  </tyh-list>
</template>

<script setup>
const arr = ['dadas', 'dada', 'dadsa', 'dada']
const arr2 = [
  { name1: '小明1', age: 11 },
  { name1: '小明2', age: 12 },
  { name1: '小明3', age: 13 },
  { name1: '小明4', age: 14 },
  { name1: '小明5', age: 15 },
  { name1: '小明6', age: 16 },
  { name1: '小明7', age: 17 },
  { name1: '小明8', age: 18 }
]
</script>
