<template>
  <a
    class="tyh-link"
    :class="[
      type ? `tyh-link--${type}` : 'tyh-link--',
      hoverline
        ? type
          ? `tyh-link--hoverline--${type}`
          : 'tyh-link--hoverline'
        : '',
      underline
        ? type
          ? `tyh-link--underline--${type}`
          : 'tyh-link--underline'
        : '',
      prohibit
        ? type
          ? `tyh-link-prohibit-${type}`
          : 'tyh-link-prohibit-'
        : '',
    ]"
    :href="prohibit ? 'javascript:void(0)' : url"
    :target="target"
  >
    <tyh-icon
      v-if="iconClass"
      :icon="iconClass"
      size="15"
      style="margin-right: 3px"
    />
    <slot></slot>
  </a>
</template>

<script>
export default { name: 'TyhLink' }
</script>

<script setup>
defineProps({
  url: String, // 跳转的路径参数
  type: String, // 字体颜色
  hoverline: Boolean, // 移入显示下划线
  underline: Boolean, // 显示下划线
  target: String, // 是否以一个新的标签页打开
  iconClass: String, // icon
  prohibit: Boolean // 是否禁用
})
</script>
