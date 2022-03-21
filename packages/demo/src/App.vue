<template>
  <h1>hello</h1>
  <input v-model="value" type="checkbox" value="游泳" />游泳
  <input v-model="value" type="checkbox" value="健身" />健身
  <input v-model="value" type="checkbox" value="旅游" />旅游

  <br />

  <tyh-checkbox v-model="value2" label="游泳">游泳</tyh-checkbox>
  <tyh-checkbox v-model="value2" label="健身">健身</tyh-checkbox>
  <tyh-checkbox v-model="value2" label="旅游">旅游</tyh-checkbox>

  <br />

  <tyh-alert message="这是一个普通提示" />
  <tyh-alert type="primary" message="这是一个主要提示" />
  <tyh-alert type="success" message="这是一个成功提示" />
  <tyh-alert type="danger" message="这是一个危险提示" />
  <tyh-alert type="warning" message="这是一个警告提示" />

  <br />
  <tyh-card>
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>这是内容部分1</p>
    <p>这是内容部分2</p>
    <p>这是内容部分3</p>
    <p>这是内容部分4</p>
  </tyh-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(['健身', '游泳'])
const value2 = ref([])
</script>

<style scoped></style>
