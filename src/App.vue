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
    <template v-slot:body>
      <h1>我是身体部分</h1>
    </template>
    <template v-slot:footer>
      <h1>我是身体部分</h1>
    </template>
  </tyh-info>
</template>

<script setup>
const moreInfo = {
  name: '张三',
  gender: '男',
  age: '12',
  signature: 'hello world',
  region: '北京',
  occupation: '程序员',
  company: '开发公司',
  phone: '1234567890',
  email: '123456',
  explain: 'hello',
}
</script>

<style scoped>
</style>
