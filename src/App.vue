<template>
  <div style="height: 2000px"></div>
  <!-- <button @click="show = true">Toggle render</button>
  <tyh-dialog v-model="show" title="这是标题">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">
        主要按钮
      </tyh-button>
      <tyh-button type="success">成功按钮</tyh-button>
    </template>
  </tyh-dialog> -->
  <tyh-backTop bottom="150px" right="120px" :beyond="1000">Go</tyh-backTop>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const show2 = ref(false)
</script>

<style>
body,
html {
  height: 2000px;
  background: skyblue;
}
</style>
