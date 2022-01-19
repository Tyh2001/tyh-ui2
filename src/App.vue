<template>
  <tyh-alert message="这是一个普通提示" />
  <tyh-alert type="primary" message="这是一个主要提示" />
  <tyh-alert type="success" message="这是一个成功提示" />
  <tyh-alert type="danger" message="这是一个危险提示" />
  <tyh-alert type="warning" message="这是一个警告提示" />

  <tyh-button>默认按钮</tyh-button>
  <tyh-button type="primary">主要按钮</tyh-button>
  <tyh-button type="success">成功按钮</tyh-button>
  <tyh-button type="danger">危险按钮</tyh-button>
  <tyh-button type="warning">警告按钮</tyh-button>
  <br />

  <tyh-link url="">链接一</tyh-link>
  <tyh-link url="" type="primary">链接二</tyh-link>
  <tyh-link url="" type="success">链接三</tyh-link>
  <tyh-link url="" type="danger">链接四</tyh-link>
  <tyh-link url="" type="warning">链接五</tyh-link>
  <br />
  <tyh-rate v-model="value3" showText />
  <tyh-rate
    v-model="value3"
    showText
    :sayText="['1星', '2星', '3星', '4星', '5星']"
  />
  <tyh-calendar v-model="value" />
</template>

<script setup>
const value = new Date()
import { ref } from 'vue'
const value3 = ref(2)
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
