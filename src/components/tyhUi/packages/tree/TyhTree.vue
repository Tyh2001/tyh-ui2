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
    type: [Array, Object],
    // required: true
  }
})

const isClose = ref(false)

const onOpen = () => {
  isClose.value = !isClose.value
}

const dataType = computed(() => {
  return props.data instanceof Object
})

const isChildren = computed(() => {
  return props.data.children && props.data.children.length
})

// const isChildren_ = item => {
//   console.log(item)
//   return item.children && item.children.length
// }

// console.log(isChildren_())

</script>

<style scoped src="./style/index.css">
</style>

