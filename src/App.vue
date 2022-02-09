<template>
  <tyh-radio v-model="radio" label="111" border size="large">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="222" border size="large">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="333" border size="large">备选项</tyh-radio>

  <tyh-radio v-model="radio" label="111" border size="medium">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="222" border size="medium">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="333" border size="medium">备选项</tyh-radio>

  <tyh-radio v-model="radio" label="111" border size="small">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="222" border size="small">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="333" border size="small">备选项</tyh-radio>

  <tyh-radio v-model="radio" label="111" border size="mini">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="222" border size="mini">备选项</tyh-radio>
  <tyh-radio v-model="radio" label="333" border size="mini">备选项</tyh-radio>


  <el-radio v-model="radio1" label="1" border>备选项1</el-radio>
  <el-radio v-model="radio1" label="2" border>备选项2</el-radio>
  <el-radio v-model="radio2" label="1" border size="medium">备选项1</el-radio>
  <el-radio v-model="radio2" label="2" border size="medium">备选项2</el-radio>
  <el-radio-group v-model="radio3" size="small">
    <el-radio label="1" border>备选项1</el-radio>
    <el-radio label="2" border disabled>备选项2</el-radio>
  </el-radio-group>
  <el-radio-group v-model="radio4" size="mini" disabled>
    <el-radio label="1" border>备选项1</el-radio>
    <el-radio label="2" border>备选项2</el-radio>
  </el-radio-group>
  <!-- <el-radio v-model="radio" label="111">备选项</el-radio>
  <el-radio v-model="radio" label="222">备选项</el-radio>
  <el-radio v-model="radio" label="333">备选项</el-radio>

  <br />
  <br />

  <el-radio v-model="radio" label="111" border>备选项1</el-radio>
  <el-radio v-model="radio" label="222" border>备选项2</el-radio>
  <el-radio v-model="radio" label="333" border>备选项2</el-radio> -->
</template>


<script setup>
import { ref } from 'vue'
const radio = ref('3')
</script>