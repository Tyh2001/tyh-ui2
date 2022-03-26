<template>
  <drawer-a v-high />
  <tyh-button type="primary" @click="open = true">点我打开</tyh-button>

  <tyh-radio v-model="radio" label="right">从右面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="left">从左面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="bottom">从下面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="top">从上面弹出</tyh-radio>

  <tyh-drawer v-model="open" :direction="radio" title="这是标题">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
  <drawer-b v-high />
  <tyh-button type="primary" @click="open2 = true">点我打开</tyh-button>

  <tyh-drawer v-model="open2" direction="right" :showHeader="false">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
  <drawer-c v-high />
  <tyh-button type="primary" @click="open3 = true">点我打开</tyh-button>

  <tyh-drawer v-model="open3" direction="right" size="50%">
    <tyh-button type="primary" @click="open4 = true">点我打开内层</tyh-button>
    hello，欢迎使用 tyh-ui!
    <tyh-drawer v-model="open4" direction="right"> 这是内层的 </tyh-drawer>
  </tyh-drawer>
  <drawer-d v-high />
</template>

<script lang="ts" setup>
import drawerA from '@/docs/drawer/drawerA.md'
import drawerB from '@/docs/drawer/drawerB.md'
import drawerC from '@/docs/drawer/drawerC.md'
import drawerD from '@/docs/drawer/drawerD.md'
import { ref } from 'vue'
const radio = ref('right')
const open = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
</script>
