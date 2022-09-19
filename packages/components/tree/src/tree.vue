<script lang="ts" setup name="TyhTree">
  import { ref } from 'vue'
  import { Props } from './props'

  defineProps(Props)
  const isClose = ref<boolean>(false)

  const onOpen = (item: any): void => {
    if (item.children && item.children.length) {
      isClose.value = !isClose.value
    }
  }
</script>

<template>
  <div class="tyh-three">
    <div v-for="(dataItem, index) in data" :key="index" class="tyh-three-list">
      <div class="tyh-three-label" @click="onOpen(dataItem)">
        <tyh-icon
          icon="tyh-ui-arrow-right-filling"
          color="#c0c4cc"
          :class="[{ 'tyh-three-icon': isClose }]"
        />
        <span class="tyh-three-label-text">{{ dataItem.label }}</span>
      </div>

      <transition name="slide-fade">
        <div
          v-if="dataItem.children"
          v-show="isClose"
          class="tyh-three-children"
        >
          <tyh-tree :data="dataItem.children" />
        </div>
      </transition>
    </div>
  </div>
</template>
