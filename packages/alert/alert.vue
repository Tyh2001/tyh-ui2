<template>
  <div
    class="tyh-alert"
    :class="[
      type ? `tyh-alert-${type}` : 'tyh-alert-',
      !simple
        ? type
          ? `tyh-alert-background-${type}`
          : 'tyh-alert-background-'
        : '',
    ]"
    :style="[{ justifyContent: center && 'center' }]"
  >
    <p class="tyh-alert-message" style="text-align: center">
      <tyh-icon v-if="iconClass" :icon="iconClass" />
      {{ message }}
    </p>
    <tyh-icon v-if="close" icon="tyh-ui-guanbi" @click="closeAlert" />
  </div>
</template>

<script>
export default {
  name: 'TyhAlert',
  props: {
    // 展示的文字
    message: String,
    // 类型
    type: String,
    // 文字前面的 icon
    iconClass: String,
    // 是否显示关闭按钮
    close: {
      type: Boolean,
      default: false
    },
    // 是否居中显示
    center: {
      type: Boolean,
      default: false
    },
    // 简约的
    simple: {
      type: Boolean,
      default: false
    }
  },
  setup (props, { emit }) {
    // 点击关闭按钮
    function closeAlert () {
      emit('close-alert')
    }

    return { closeAlert }
  }
}
</script>
