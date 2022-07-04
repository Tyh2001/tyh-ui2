<template>
  <span
    :class="['tyh-crumbs-item', { 'tyh-crumbs-item__to': to }]"
    @click="link"
  >
    <span class="tyh-crumbs-item-text"><slot /></span>
    <i :class="['tyh-icon', icon]" />
  </span>
</template>

<script lang="ts" setup name="TyhCrumbsItem">
  import {
    ref,
    inject,
    ComponentInternalInstance,
    getCurrentInstance
  } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)

  const icon = ref<string | undefined>('')
  const { proxy }: any = getCurrentInstance() as ComponentInternalInstance
  icon.value = inject('Crumbs-separator')
  const link = (): void => {
    if (!prop.to) return
    try {
      proxy.$router.push(prop.to)
    } catch (e: any) {
      console.log(e)
    }
  }
</script>
