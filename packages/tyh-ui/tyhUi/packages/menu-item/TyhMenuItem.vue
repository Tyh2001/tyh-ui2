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

<script lang="ts" setup>
import { getCurrentInstance, inject, computed } from 'vue'
const props = defineProps({
  to: String,
  prohibit: Boolean
})
const theme = inject('theme')

const isStyle = computed((): object[] => [
  { color: theme === 'dark' ? '#fff' : '#000' }
])
const { proxy }: any = getCurrentInstance()
const link = (): void => {
  if (props.prohibit) return
  try {
    proxy.$router.push(props.to)
  } catch (e) {
    console.log(e)
  }
}
</script>
