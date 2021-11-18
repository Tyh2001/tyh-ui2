<template>
  <span
    class="tyh-crumbs-item"
    :class="[{ 'tyh-crumbs-item__to': to }]"
    @click="onRouterTo"
  >
    <span class="tyh-crumbs-item-text">
      <slot></slot>
    </span>
    <tyh-icon color="#C0C4CC" :icon="icon" />
  </span>
</template>

<script>
export default { name: 'TyhCrumbsItem' }
</script>

<script setup>
import { ref, inject } from 'vue'
import { getCurrentInstance } from 'vue'
const props = defineProps({
  to: String // 跳转的路径
})
const icon = ref('')
icon.value = inject('Crumbs-separator')
// 点击跳转对应的路由
const { proxy } = getCurrentInstance()
function onRouterTo () {
  if (!props.to) return
  proxy.$root.$router.push(props.to)
}
</script>
