<template>
  <tyh-alert
    v-show="isShow"
    close
    message="点击关闭普通提示"
    @close="isShow = false"
  />
  <tyh-alert
    v-show="isShow1"
    close
    type="primary"
    message="点击关闭主要提示"
    @close="isShow1 = false"
  />
  <tyh-alert
    v-show="isShow2"
    close
    type="success"
    message="点击关闭成功提示"
    @close="isShow2 = false"
  />
  <tyh-alert
    v-show="isShow3"
    close
    type="danger"
    message="点击关闭危险提示"
    @close="isShow3 = false"
  />
  <tyh-alert
    v-show="isShow4"
    close
    type="warning"
    message="点击关闭警告提示"
    @close="isShow4 = false"
  />
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref(true)
const isShow1 = ref(true)
const isShow2 = ref(true)
const isShow3 = ref(true)
const isShow4 = ref(true)
</script>
    