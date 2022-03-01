<template>
  <div class="tyh-three">
    <div class="tyh-three-list" v-for="(dataItem, index) in data" :key="index">
      <div class="tyh-three-label" @click="onOpen(dataItem, index)">
        <tyh-icon
          icon="tyh-ui-arrow-right-filling"
          color="#c0c4cc"
          :class="[{ 'tyh-three-icon': isClose }]"
        />
        <span class="tyh-three-label-text">{{ dataItem.label }}</span>
      </div>

      <transition name="slide-fade">
        <div
          class="tyh-three-children"
          v-if="dataItem.children"
          v-show="isClose"
        >
          <tyh-tree :data="dataItem.children" />
        </div>
      </transition>
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

const isClose = ref(false)

const onOpen = item => {
  if (item.children && item.children.length) {
    isClose.value = !isClose.value
  }
}
</script>

<style scoped src="../../../allStyle/tree/style/index.css"></style>
