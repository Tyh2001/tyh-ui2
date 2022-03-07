<template>
  <tyh-menu>
    <template v-slot:left>
      <tyh-avatar :size="7" src="https://tianyuhao.cn/v3/assets/giraffe.jpg" />
    </template>
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
    <template v-slot:right>
      <tyh-button simple>右侧插槽</tyh-button>
    </template>
  </tyh-menu>
</template>

<script setup>
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
