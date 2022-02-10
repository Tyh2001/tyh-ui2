<template>
  <ul v-for="(dataItem, index) in data" :key="index">
    <li @click="onOpen">
      {{ dataItem.label }} <span>{{ isClose ? "-" : "+" }}</span>
    </li>
    <div v-if="dataItem.children" v-show="isClose">
      <tyh-tree :data="dataItem.children" />
    </div>
  </ul>
</template>

<script setup>
import { computed, ref } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    default: []
  }
})

const isClose = ref(false)

const onOpen = () => {
  isClose.value = !isClose.value
}
</script>

<style scoped src="./style/index.css">
</style>

