<template>
  <tyh-calendar v-model="value" /><tyh-crumbs>
    <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
    <tyh-crumbs-item>学员管理</tyh-crumbs-item>
    <tyh-crumbs-item>文章管理</tyh-crumbs-item>
    <tyh-crumbs-item>设置</tyh-crumbs-item>
  </tyh-crumbs>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>