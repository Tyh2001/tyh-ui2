<template>
  <div
    class="tyh-menu"
    :style="[{ background: backgroundColor }]"
    :class="{ 'tyh-menu-bottom-shadow': buttomShadow }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TyhMenu',
  props: {
    // 背景色
    backgroundColor: {
      type: String,
      default: '#545c64'
    },
    // 是否显示底部阴影
    buttomShadow: Boolean
  }
}
</script>
