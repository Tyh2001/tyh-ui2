<template>
  <ul>
    <li v-for="index in 10" :key="index">
      {{ users[index + numList - 1] }}
    </li>
  </ul>

  <tyh-button @click="page++">下一页</tyh-button>
</template>

<script setup>
import { computed, ref } from 'vue'
const users = []
for (let i = 0; i < 100000; i++) {
  users.push(`张三${i + 1}`)
}

const page = ref(0)
const numList = computed(() => {
  return page.value * 10
})
</script>

<style scoped>
</style>
