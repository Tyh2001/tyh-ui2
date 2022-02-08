<template>
  <input type="radio" v-model="radio" value="1" />是1
  <input type="radio" v-model="radio" value="2" />是2
  <input type="radio" v-model="radio" value="3" />是3
  <br />
  <tyh-radio v-model="radio" label="1">是1</tyh-radio>
  <tyh-radio v-model="radio" label="2">是2</tyh-radio>
  <tyh-radio v-model="radio" label="3">是3</tyh-radio>
  <br />
  <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
  <el-radio v-model="radio" label="3">备选项</el-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('3')
</script>