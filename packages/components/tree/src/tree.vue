<template>
  <div class="tyh-three">
    <div class="tyh-three-list" v-for="(dataItem, index) in data" :key="index">
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
