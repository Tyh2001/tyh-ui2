<template>
  <p
    :class="[
      'tyh-turn-page-item',
      `tyh-turn-page-item-${direction}`,
      { 'tyh-turn-page-center': isCenter }
    ]"
  >
    <router-link :to="url ? url : ''">
      <tyh-icon
        v-if="direction === 'left'"
        :icon="icon ? icon : 'tyh-ui-arrow-left-bold'"
      />
      <slot />
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
    validator (val) {
      return ['left', 'right'].includes(val)
    }
  },
  url: String,
  icon: String
})
const isCenter = inject('is-center')
</script>
