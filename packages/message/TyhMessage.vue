<template>
  <div v-if="isShow" class="tyh-message">
    <span
      class="tyh-message-body"
      :class="[type ? `tyh-message-body--${type}` : 'tyh-message-body--']"
    >
      <tyh-icon v-if="iconClass" size="15" :icon="iconClass" />
      <span class="tyh-message-message">
        {{ message }}
      </span>
    </span>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import TyhIcon from '../icon/icon.vue'
defineProps({
  message: String,
  type: String,
  iconClass: String
})
const isShow = ref(false)
onMounted(() => {
  isShow.value = true
})
</script>
