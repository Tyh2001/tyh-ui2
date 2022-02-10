<template>
  <div class="tyh-three">
    <div class="tyh-three-list" v-for="(dataItem, index) in data" :key="index">
      <div class="tyh-three-label" @click="onOpen(dataItem)">
        <tyh-icon icon="tyh-ui-arrow-right-filling" />
        <span class="tyh-three-label-text">{{ dataItem.label }}</span>
      </div>
      <div class="tyh-three-children" v-if="dataItem.children" v-show="isClose">
        <tyh-tree :data="dataItem.children" />
      </div>
    </div>
  </div>
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

const onOpen = item => {
  if (item.children && item.children.length) {
    isClose.value = !isClose.value
  }
}
</script>

<style scoped src="./style/index.css"></style>

