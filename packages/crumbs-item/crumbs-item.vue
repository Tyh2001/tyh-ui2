<template>
  <span
    class="tyh-crumbs-item"
    :class="[to ? 'tyh-crumbs-item__to' : '']"
    @click="onRouterTo"
  >
    <span class="tyh-crumbs-item-text">
      <slot></slot>
    </span>
    <tyh-icon color="#C0C4CC" :icon="icon" />
  </span>
</template>

<script>
import { ref, inject } from 'vue'
import { getCurrentInstance } from 'vue'
export default {
  name: 'TyhCrumbsItem',
  props: {
    // 跳转的路径
    to: {
      type: String
    }
  },
  setup (props) {
    // 将图标转换为父组件传入的图标
    const icon = ref('')
    icon.value = inject('Crumbs-separator')
    // 点击跳转对应的路由
    const { proxy } = getCurrentInstance()
    function onRouterTo () {
      if (!props.to) return
      proxy.$root.$router.push(props.to)
    }

    return {
      onRouterTo,
      icon
    }
  }
}
</script>
