<template>
  <menu-a v-high />

  <tyh-switch v-model="isCollapse" />
  <br />
  <tyh-menu theme="dark" mode="vertical" :collapse="isCollapse">
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-shouye-xianxing" />
      <span>首页</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-pdf" />
      <span>内容</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-setting" />
      <span>设置</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-ashbin" />
      <span>回收站</span>
    </tyh-menu-item>
  </tyh-menu>
  <br />
  <tyh-menu theme="light" mode="vertical" :collapse="isCollapse">
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-shouye-xianxing" />
      <span>首页</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-pdf" />
      <span>内容</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-setting" />
      <span>设置</span>
    </tyh-menu-item>
    <tyh-menu-item>
      <tyh-icon icon="tyh-ui-ashbin" />
      <span>回收站</span>
    </tyh-menu-item>
  </tyh-menu>

  <menu-b v-high />
</template>

<script setup>
import menuA from '@/docs/menu/menuA.md'
import menuB from '@/docs/menu/menuB.md'
import { ref } from 'vue'
const isCollapse = ref(false)
</script>
