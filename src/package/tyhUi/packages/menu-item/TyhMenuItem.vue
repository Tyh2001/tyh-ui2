<template>
  <div
    v-if="$slots.default"
    :class="['tyh-menu-item', { 'tyh-menu-item-prohibit': prohibit }]"
    :style="isStyle"
    @click="to && link()"
  >
    <slot />
  </div>
</template>

<script setup>
import { getCurrentInstance, inject, computed } from 'vue'
const props = defineProps({
  to: String,
  prohibit: Boolean
})
const theme = inject('theme')

const isStyle = computed(() => [{ color: theme === 'dark' ? '#fff' : '#000' }])
const { proxy } = getCurrentInstance()
const link = () => {
  if (props.prohibit) return
  try {
    proxy.$router.push(props.to)
  } catch (e) {
    console.log(e)
  }
}
</script>

<style src="./style/index.css" scoped></style>
