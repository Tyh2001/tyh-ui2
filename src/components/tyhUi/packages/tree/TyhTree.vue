<template>
  <!-- <ul>
    <li>{{ data.label }}</li>
    <ul v-if="isChildren">
      <tyh-tree
        v-for="(dataItem, index) in data.children"
        :key="index"
        :data="dataItem"
      />
    </ul>
  </ul> -->

  <ul class="b" v-for="(dataItem, index) in data" :key="index">
    <li>{{ dataItem.label }}</li>
    <ul class="a" v-if="dataItem.children">
      <tyh-tree
        v-for="(childrenItem, index) in dataItem"
        :key="index"
        :data="childrenItem"
      />
    </ul>
  </ul>

  <!-- 
  <ul v-for="(dataItem, index) in data" :key="index">
    <li>{{ dataItem.label }}</li>
    <ul>
      <tyh-tree
        v-for="(childrenItem, index) in dataItem.children"
        :key="index"
        :data="childrenItem"
      ></tyh-tree>
    </ul>
  </ul> -->
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  data: {
    type: [Array, Object],
    // required: true
  }
})

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
