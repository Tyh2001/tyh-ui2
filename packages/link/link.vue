<template>
  <a
    class="tyh-link"
    :class="[
      color ? `tyh-link--${color}` : 'tyh-link--',
      hoverline
        ? color
          ? `tyh-link--hoverline--${color}`
          : 'tyh-link--hoverline'
        : '',
      underline
        ? color
          ? `tyh-link--underline--${color}`
          : 'tyh-link--underline'
        : '',
    ]"
    :href="url"
    :target="target"
  >
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'TyhLink',
  props: {
    // 跳转的路径参数
    url: String,
    // 字体颜色
    color: String,
    // 移入显示下划线
    hoverline: Boolean,
    // 显示下划线
    underline: Boolean,
    // 是否以一个新的标签页打开
    target: String
  }
}
</script>
