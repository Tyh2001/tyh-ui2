<template>
  <tyh-info userInfo="Tyh2001" describe="hello world" :moreInfo="moreInfo">
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
  </tyh-info>
</template>

<script setup>
const moreInfo = {
  name: '张三',
}
</script>

<style scoped>
</style>
