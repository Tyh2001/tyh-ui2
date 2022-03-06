<template>
  <div
    v-if="$slots.default"
    class="tyh-menu-item"
    :style="[{ color }]"
    @click="url && link()"
  >
    <slot />
  </div>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const props = defineProps({
  url: String,
  prohibit: Boolean,
  color: {
    type: String,
    default: '#fff'
  }
})
const { proxy } = getCurrentInstance()
const link = () => {
  if (props.prohibit) return
  try {
    proxy.$router.push(props.url)
  } catch (e) {
    console.log(e)
  }
}
</script>

<style src="./style/index.css" scoped>
</style>
