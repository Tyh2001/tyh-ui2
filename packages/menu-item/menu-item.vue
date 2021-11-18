<template>
  <span class="tyh-menu-item">
    <span
      class="tyh-menu-item-span"
      :class="[prohibit ? 'tyh-menu-item-prohibit' : '']"
      :style="[{ color: color }]"
      @click="url && onRouterLink()"
    >
      <slot></slot>
    </span>
  </span>
</template>

<script>
export default { name: 'TyhMenuItem' }
</script>

<script setup>
import { getCurrentInstance } from 'vue'
const props = defineProps({
  url: String, // 跳转的地址
  prohibit: Boolean, // 是否禁用
  color: { // 文字颜色
    type: String,
    default: '#fff'
  }
})
const { proxy } = getCurrentInstance()
function onRouterLink () {
  if (props.prohibit) return
  proxy.$root.$router.push(props.url)
}
</script>
