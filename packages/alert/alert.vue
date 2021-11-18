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
    <div class="tyh-alert-message">
      <tyh-icon v-if="iconClass" :icon="iconClass" />
      {{ message }}
    </div>
    <tyh-icon v-if="close" icon="tyh-ui-guanbi" @click="closeAlert" />
  </div>
</template>

<script>
export default { name: 'tyh-alert' }
</script>

<script setup>
defineProps({
  message: String, // 展示的文字
  type: String, // 类型
  iconClass: String, // 文字前面的 icon
  close: { // 是否显示关闭按钮
    type: Boolean,
    default: false
  },
  center: { // 是否居中显示
    type: Boolean,
    default: false
  },
  simple: { // 简约的
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close-alert'])
function closeAlert () {
  emit('close-alert')
}
</script>
