<template>
  <ul>
    <li v-for="index in 10" :key="index">
      {{ users[index + numList - 1] }}
    </li>
  </ul>

  <tyh-button-group>
    <tyh-button @click="pagePev">上一页</tyh-button>
    <tyh-button @click="pageAdd">下一页</tyh-button>
  </tyh-button-group>
</template>

<script setup>
import { computed, ref } from 'vue'
const users = []
for (let i = 0; i < 1000002; i++) {
  users.push(`张三${i + 1}`)
}

const page = ref(0)
const numList = computed(() => {
  return page.value * 10
})

function pageAdd () {
  if (page.value <= users.length / 10) {
    page.value++
  }
}
function pagePev () {
  if (page.value !== 0) {
    page.value--
  }
}

</script>

<style scoped>
</style>
