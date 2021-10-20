<template>
  <div class="tyh-card" :class="[shadowClass]">
    <div class="tyh-card-header" v-if="!simple">
      <!-- 左侧标题 -->
      <p class="tyh-card-title">
        <slot name="title"></slot>
      </p>

      <!-- 右侧普通标题 -->
      <p class="tyh-card-subtitle">
        <slot name="subtitle"></slot>
      </p>
    </div>

    <!-- 内容 -->
    <div class="tyh-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'TyhCard',
  props: {
    // 阴影显示时机
    shadow: {
      type: String,
      default: ''
    },
    // 简约卡片
    simple: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    // 阴影显示时机 class
    const shadowClass = computed(() => {
      return props.shadow ? `tyh-card-shadow-${props.shadow}` : ''
    })

    return {
      shadowClass
    }
  }
}
</script>
