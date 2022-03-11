<template>
  <span
    :class="['tyh-crumbs-item', { 'tyh-crumbs-item__to': to }]"
    @click="link"
  >
    <span class="tyh-crumbs-item-text"><slot /></span>
    <i :class="['tyh-icon', icon]" />
  </span>
</template>

<script lang="ts" setup>
import { ref, inject } from 'vue'
import { getCurrentInstance } from 'vue'
const props = defineProps({
  to: String
})
const { icon, link } = TyhCrumbsItem()
function TyhCrumbsItem() {
  const icon = ref('')
  const { proxy }: any = getCurrentInstance()
  icon.value = inject('Crumbs-separator')
  const link = () => {
    if (!props.to) return
    try {
      proxy.$router.push(props.to)
    } catch (e) {
      console.log(e)
    }
  }
  return { icon, link }
}
</script>
