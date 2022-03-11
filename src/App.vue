<template>
  <tyh-button simple @click="open1 = true">点我打开</tyh-button>

  <tyh-dialog v-model="open1" title="这是标题">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open1 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
</template>

<script setup>
import { ref } from 'vue'
const open1 = ref(false)
</script>
