<template>
  <span
    class="tyh-tag"
    :class="[
      color ? `tyh-tag--${color}` : 'tyh-tag--',
      size ? `tyh-tag--${size}` : '',
      {
        'tyh-tag--round': round,
      },
    ]"
  >
    <slot></slot>
    <tyh-icon
      v-if="isclose"
      size="8"
      icon="tyh-ui-close"
      :color="color ? '#fff' : ''"
      @click="closeTag"
    />
  </span>
</template>

<script>
export default {
  name: 'TyhTag',
  props: {
    // 标签颜色
    color: {
      type: String,
      default: ''
    },
    // 标签大小
    size: {
      type: String,
      default: ''
    },
    // 圆角
    round: {
      type: Boolean,
      default: false
    },
    // 是否可以关闭
    isclose: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    // 点击关闭按钮
    function closeTag () {
      emit('close')
    }

    return { closeTag }
  }
}
</script>
