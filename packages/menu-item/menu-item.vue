<template>
  <span class="tyh-menu-item">
    <span
      class="tyh-menu-item-span"
      :class="[prohibitClass]"
      :style="[colorStyle]"
      @click="url ? onRouterLink() : ''"
    >
      <slot></slot>
    </span>
  </span>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
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
    // 是否禁用
    const prohibitClass = computed(() => {
      return props.prohibit ? 'tyh-menu-item-prohibit' : ''
    })
    // 文字颜色
    const colorStyle = computed(() => {
      return { color: props.color }
    })
    const router = useRouter()
    // 按钮是如果禁用 就直接返回 否则就跳转对应路由
    function onRouterLink () {
      if (props.prohibit) return
      router.push(props.url)
    }

    return {
      prohibitClass,
      colorStyle,
      onRouterLink
    }
  }
}
</script>
