<template>
  <tyh-container>
    <tyh-header>
      <tyh-menu>
        <tyh-menu-item>首页</tyh-menu-item>
        <tyh-menu-item>内容</tyh-menu-item>
        <tyh-menu-item>设置</tyh-menu-item>
        <tyh-menu-item>回收站</tyh-menu-item>
      </tyh-menu>
    </tyh-header>
    <tyh-container flex>
      <tyh-aside width="200px">
        <tyh-menu theme="light" mode="vertical">
          <tyh-menu-item>首页</tyh-menu-item>
          <tyh-menu-item>内容</tyh-menu-item>
          <tyh-menu-item>设置</tyh-menu-item>
          <tyh-menu-item>回收站</tyh-menu-item>
        </tyh-menu>
      </tyh-aside>
      <tyh-main>
        <tyh-card>
          <template v-slot:title>主标题</template>
          <template v-slot:subtitle>副标题</template>
          <p>这是内容部分1</p>
          <p>这是内容部分2</p>
          <p>这是内容部分3</p>
          <p>这是内容部分4</p>
        </tyh-card>
      </tyh-main>
    </tyh-container>
  </tyh-container>
</template>

<script setup>

</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
