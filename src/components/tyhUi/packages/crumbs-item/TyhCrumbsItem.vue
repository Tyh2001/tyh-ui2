<template>
  <span
    :class="['tyh-crumbs-item', { 'tyh-crumbs-item__to': to }]"
    @click="link"
  >
    <span class="tyh-crumbs-item-text">
      <slot />
    </span>
    <tyh-icon color="#C0C4CC" :icon="icon" />
  </span>
</template>

<script setup>
import { ref, inject } from 'vue'
import { getCurrentInstance } from 'vue'
const props = defineProps({
  to: String
})
const icon = ref('')
const { proxy } = getCurrentInstance()
icon.value = inject('Crumbs-separator')
const link = () => {
  if (!props.to) return
  try {
    proxy.$router.push(props.to)
  } catch (e) {
    console.log(e)
  }
}
</script>
