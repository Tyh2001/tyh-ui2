<template>
  <tyh-alert
    v-show="isShow1"
    close
    message="点击关闭普通提示"
    @close="change"
  />
</template>

<script setup>
import { ref } from 'vue'
const isShow1 = ref(true)
function change(e) {
  isShow1.value = false
  console.log(e)
}
</script>
