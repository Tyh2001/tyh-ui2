<template>
  <i
    :class="[`tyh-icon ${icon}`]"
    :style="[{ color, fontSize: `${size}px` }]"
  />
</template>

<script>
export default {
  name: 'TyhIcon',
  props: {
    // icon 的 Class
    icon: String,
    // icon 的颜色
    color: {
      type: String,
      default: ''
    },
    // icon 的大小
    size: {
      type: String,
      default: '18'
    }
  }
}
</script>

<style src="./style/index.css" scoped></style>
