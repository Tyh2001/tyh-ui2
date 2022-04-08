<template>
  <!-- <tyh-menu router text-color="red" background-color="skyblue">
    <tyh-menu-item title="哈哈哈哈" route="/home"></tyh-menu-item>
    <tyh-menu-item route="/abc"> 内容 </tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu> -->
  <tyh-switch v-model="value1" />
  <br />

  <tyh-menu theme="dark" :collapse="value1" mode="vertical" width="300px">
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-tyhui" />
      <span> 首页</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-tyhui" />
      <span> 首页</span></tyh-menu-item
    >
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-tyhui" />
      <span> 首页</span></tyh-menu-item
    >
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-tyhui" />
      <span> 首页</span></tyh-menu-item
    >
  </tyh-menu>

  <br />
  <tyh-menu theme="light" :collapse="value1" mode="vertical">
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>

  <br />
  <br />
  <br />
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group>

  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <el-menu-item index="1">
      <!-- <i class="el-icon-menu"></i> -->
      <!-- <span>导航二</span> -->
      首页
    </el-menu-item>
    <el-menu-item index="2">
      <!-- <i class="el-icon-menu"></i> -->
      <!-- <span>导航二</span> -->
      哈哈和大家喝酒哈酒
    </el-menu-item>
    <el-menu-item index="3">
      <!-- <i class="el-icon-menu"></i> -->
      <!-- <span>导航二</span> -->
      哈哈和大家喝酒哈酒
    </el-menu-item>
    <el-menu-item index="4">
      <!-- <i class="el-icon-menu"></i> -->
      <!-- <span>导航二</span> -->

      哈哈和大家喝酒哈酒
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'

let isCollapse = ref(true)
const value1 = ref(true)
function handleOpen(key, keyPath) {
  console.log(key, keyPath)
}
function handleClose(key, keyPath) {
  console.log(key, keyPath)
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
