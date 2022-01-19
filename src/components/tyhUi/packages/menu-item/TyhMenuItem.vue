<template>
  <span class="tyh-menu-item">
    <span
      :class="['tyh-menu-item-span', { 'tyh-menu-item-prohibit': prohibit }]"
      :style="[{ color: color }]"
      @click="url && link()"
    >
      <slot />
    </span>
  </span>
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
