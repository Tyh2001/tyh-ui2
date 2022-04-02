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
import { ref, inject, ComponentInternalInstance, getCurrentInstance } from 'vue'
const props = defineProps({
  to: String
} as const)

const { icon, link } = TyhCrumbsItem()

function TyhCrumbsItem() {
  const icon = ref<string>('')
  const { proxy } = getCurrentInstance() as ComponentInternalInstance
  icon.value = inject('Crumbs-separator')
  const link = (): void => {
    if (!props.to) return
    try {
      proxy.$router.push(props.to)
    } catch (e: any) {
      console.log(e)
    }
  }

  return { icon, link }
}
</script>
