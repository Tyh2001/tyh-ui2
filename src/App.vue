<template>
  <tyh-menu shadow mode="horizontal">
    <tyh-menu-item to="/home">首页</tyh-menu-item>
    <tyh-menu-item to="/abc">内容</tyh-menu-item>
    <tyh-menu-item prohibit>设置</tyh-menu-item>
    <tyh-menu-item prohibit>回收站</tyh-menu-item>
  </tyh-menu>

  <br />
  <br />

  <tyh-menu shadow mode="vertical" theme="light">
    <!-- <tyh-menu shadow mode="horizontal"> -->
    <template v-slot:left>
      <tyh-button type="primary">主要按钮</tyh-button>
    </template>

    <template v-slot:right>
      <tyh-input v-model="text1" />
    </template>

    <tyh-menu-item to="/home">首页</tyh-menu-item>
    <tyh-menu-item to="/abc">内容</tyh-menu-item>
    <tyh-menu-item prohibit>设置</tyh-menu-item>
    <tyh-menu-item prohibit>回收站</tyh-menu-item>
  </tyh-menu>
<!-- </div> -->

</template>

<script setup>
const text1 = ''
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
