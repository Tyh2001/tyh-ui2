<template>
  <div
    class="tyh-menu"
    :style="[{ background: backgroundColor }]"
    :class="{ 'tyh-menu-bottom-shadow': buttomShadow }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  backgroundColor: { // 背景色
    type: String,
    default: '#545c64'
  },
  buttomShadow: Boolean // 是否显示底部阴影
})
</script>
