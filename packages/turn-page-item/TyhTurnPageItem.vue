<template>
  <p
    class="tyh-turn-page-item"
    :class="[
      `tyh-turn-page-item-${direction}`,
      { 'tyh-turn-page-center': isCenter },
    ]"
  >
    <router-link :to="url ? url : ''">
      <tyh-icon
        v-if="direction === 'left'"
        :icon="icon ? icon : 'tyh-ui-arrow-left-bold'"
      />
      <slot></slot>
      <tyh-icon
        v-if="direction === 'right'"
        :icon="icon ? icon : 'tyh-ui-arrow-right-bold'"
      />
    </router-link>
  </p>
</template>

<script setup>
import { inject } from 'vue'
defineProps({
  // 指向方向
  direction: {
    type: String,
    required: true,
    validator (value) {
      return ['left', 'right'].includes(value)
    }
  },
  url: String,
  icon: String
})
// 是否居中显示
const isCenter = inject('is-center')
</script>
