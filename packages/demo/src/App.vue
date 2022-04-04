<template>
  <tyh-menu router>
    <tyh-menu-item title="哈哈哈哈" route="/home"></tyh-menu-item>
    <tyh-menu-item route="/abc"> 内容 </tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>

  <br />
  <br />
  <br />

  <tyh-menu theme="dark" mode="vertical">
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>

  <br />
  <br />
  <br />
  <tyh-menu theme="light" mode="vertical">
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>
</template>

<script lang="ts" setup></script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
