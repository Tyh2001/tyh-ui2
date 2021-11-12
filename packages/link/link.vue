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
export default {
  name: 'TyhLink',
  props: {
    // 跳转的路径参数
    url: String,
    // 字体颜色
    type: String,
    // 移入显示下划线
    hoverline: {
      type: Boolean,
      default: false
    },
    // 显示下划线
    underline: {
      type: Boolean,
      default: false
    },
    // 是否以一个新的标签页打开
    target: String,
    // icon
    iconClass: String,
    // 是否禁用
    prohibit: {
      type: Boolean,
      default: false
    }
  }
}
</script>
