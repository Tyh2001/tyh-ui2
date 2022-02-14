<template>
  <tyh-info userInfo="Tyh2001" describe="hello world">
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
      <tyh-text block type="success">这是我今天拍的照片，好看吗？</tyh-text>
      <tyh-image
        width="300px"
        src="https://tianyuhao.cn/tyhui/v3/assets/giraffe.jpg"
      />
    </template>

    <template v-slot:footer>
      <tyh-text type="danger">2022-02-12</tyh-text>
    </template>
  </tyh-info>
</template>

<script setup>
</script>

<style scoped>
</style>
