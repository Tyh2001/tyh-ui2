<template>
  <dialog-a v-high />
  <tyh-button simple @click="open1 = true">点我打开</tyh-button>
  <tyh-dialog v-model="open1" title="这是标题">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open1 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
  <dialog-b v-high />
  <tyh-button simple @click="open2 = true">点我打开</tyh-button>

  <tyh-dialog v-model="open2" title="这是标题" :showHeader="false">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open2 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
  <dialog-c v-high />
  <tyh-button simple @click="open3 = true">点我打开第一层</tyh-button>

  <tyh-dialog v-model="open3" title="这是标题" width="50%">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <tyh-button type="success" @click="open4 = true">打开第二层</tyh-button>
    <tyh-dialog v-model="open4" title="这是标题" top="10vh">
      hi～我是第二层的 dialog 对话框
    </tyh-dialog>
  </tyh-dialog>
  <dialog-d v-high />
</template>

<script setup>
import dialogA from '@/docs/dialog/dialogA.md'
import dialogB from '@/docs/dialog/dialogB.md'
import dialogC from '@/docs/dialog/dialogC.md'
import dialogD from '@/docs/dialog/dialogD.md'
import { ref } from 'vue'
const open1 = ref(false)
const open2 = ref(false)
const open3 = ref(false)
const open4 = ref(false)
</script>
