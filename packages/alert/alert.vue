<template>
  <div
    class="tyh-alert"
    :class="[
      type ? `tyh-alert-${type}` : 'tyh-alert-',
      !simple
        ? type
          ? `tyh-alert-background-${type}`
          : 'tyh-alert-background-'
        : ''
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
  close: Boolean, // 是否显示关闭按钮
  center: Boolean, // 是否居中
  simple: Boolean // 简约的
})
const emit = defineEmits(['close-alert'])
function closeAlert () {
  emit('close-alert')
}
</script>
