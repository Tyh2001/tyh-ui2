<template>
  <tyh-radio v-model="radio" label="1" disabled>备选项</tyh-radio>
  <tyh-radio v-model="radio" label="2">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="3">备选项</tyh-radio>
  <br />
  <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
  <el-radio v-model="radio" label="3">备选项</el-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('3')
</script>