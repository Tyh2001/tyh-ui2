<template>
  <div
    class="tyh-skeleton"
    :class="[
      {
        'tyh-skeleton-round': round,
        'tyh-skeleton-animation': animation,
      },
    ]"
    :style="[{ width, height }]"
  />
</template>

<script>
export default {
  name: 'TyhSkeleton',
  props: {
    // 是否为圆角
    round: {
      type: Boolean,
      default: false
    },
    // 宽度
    width: String,
    // 高度
    height: String,
    // 是否启用动画
    animation: {
      type: Boolean,
      default: false
    }
  }
}
</script>
