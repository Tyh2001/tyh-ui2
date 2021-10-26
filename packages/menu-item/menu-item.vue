<template>
  <span class="tyh-menu-item">
    <span
      class="tyh-menu-item-span"
      :class="[prohibit ? 'tyh-menu-item-prohibit' : '']"
      :style="[{ color: color }]"
      @click="url ? onRouterLink() : ''"
    >
      <slot></slot>
    </span>
  </span>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  name: 'TyhMenuItem',
  props: {
    // 跳转的地址
    url: {
      type: String,
      default: null
    },
    // 是否禁用
    prohibit: {
      type: Boolean,
      default: false
    },
    // 文字颜色
    color: {
      type: String,
      default: '#fff'
    }
  },
  setup (props) {
    const { proxy } = getCurrentInstance()
    // 按钮是如果禁用 就直接返回 否则就跳转对应路由
    function onRouterLink () {
      if (props.prohibit) return
      proxy.$root.$router.push(props.url)
    }

    return {
      onRouterLink
    }
  }
}
</script>
