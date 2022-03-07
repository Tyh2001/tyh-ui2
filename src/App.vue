<template>
  <!-- <tyh-highlight>{{ code }}</tyh-highlight> -->
  <!-- <highlightjs language="javascript" :code="code" /> -->

  <!-- <el-button @click="drawer = true" type="primary"> 点我打开 </el-button> -->
  <!-- <el-drawer v-model:visible="drawer" direction="rtl">
      <span>我来啦!</span>
    </el-drawer> -->
  <!-- <pre v-tyh><code class="javascript">{{ code }}</code></pre> -->
  <tyh-button @click="open = !open">关闭</tyh-button>

  <tyh-drawer v-model="open" direction="top">哈哈哈</tyh-drawer>
</template>

<script setup>
import { ref } from 'vue'
const open = ref(false)

// import TyhHighlight from './demo/tyh-highlight/TyhHighlight.vue'
// const code = `
// import { Message } from 'tyh-ui2'
// function change1 () {
//   Message({ message: '默认提示', type: 'default', round: true })
// }
// `
</script>
