<template>
  <tyh-info userInfo="Tyh2001" describe="hello world" linkUrl="https://www.baidu.com">
    <template v-slot:photo>
      <tyh-avatar
        round
        size="5"
        src="https://tianyuhao.cn/tyhui/v3/assets/giraffe.jpg"
      />
    </template>
    <template v-slot:right>
      <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
    </template>
    <template v-slot:body>
      <p>哈哈哈哈</p>
    </template>
    <template v-slot:footer>
      <h1>我是身体部分</h1>
    </template>
  </tyh-info>
</template>

<script setup>
</script>

<style scoped>
</style>
