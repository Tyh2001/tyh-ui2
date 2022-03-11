<template>
  <tyh-alert
    v-show="isShow1"
    close
    message="点击关闭普通提示"
    @close="isShow1 = false"
  />
  <tyh-alert
    v-show="isShow2"
    close
    type=""
    message="点击关闭主要提示"
    @close="isShow2 = false"
  />

</template>

<script setup>
import { ref } from 'vue'
const isShow1 = ref(true)
const isShow2 = ref(true)
const isShow3 = ref(true)
const isShow4 = ref(true)
const isShow5 = ref(true)
</script>