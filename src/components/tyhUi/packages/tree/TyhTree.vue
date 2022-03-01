<template>
  <div class="tyh-three">
    <!-- 循环出具体多少分组 -->
    <div class="tyh-three-list" v-for="(dataItem, index) in data" :key="index">
      <!-- 点击的位置 -->
      <div class="tyh-three-label" @click="onOpen(dataItem, index)">
        {{ dataItem.label }}
      </div>

      <div class="tyh-three-children" v-if="dataItem.children" v-show="isClose">
        <tyh-tree :data="dataItem.children" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
  data: {
    type: Array,
  }
})

// const isClose = ref(false)

const isClose = index => {
}

const onOpen = (item, index) => {
  console.log(item, index)
  // if (item.children && item.children.length) {
  //   isClose.value = !isClose.value
  // }
}
</script>

<style scoped src="../../../allStyle/tree/style/index.css"></style>
