
<template>
  <div class="tyh-input" :class="prohibit ? 'tyh-button-prohibit' : ''">
    <tyh-icon
      v-if="showIcon"
      class="tyh-input-icon__showIcon"
      :class="[`tyh-input-icon-${size}-height`]"
      :icon="showIcon"
      size="12"
      color="rgb(199, 199, 199)"
    />
    <input
      class="tyh-input_inp"
      :class="[
        size ? `tyh-input_inp--${size}` : 'tyh-input_inp--medium',
        clear ? 'tyh-input-clear-padding' : '',
        prohibit ? 'tyh-button-prohibit' : '',
        showIcon ? 'tyh-input__padding-left' : '',
      ]"
      :type="inpType"
      :value="modelValue"
      :placeholder="innerText"
      :maxlength="max"
      :disabled="prohibit"
      :autofocus="autofocus"
      :name="name"
      @input="handleInput"
    />
    <tyh-icon
      v-if="clear"
      class="tyh-input-icon__clear"
      :class="[`tyh-input-icon-${size}-height`]"
      size="12"
      color="rgb(199, 199, 199)"
      icon="tyh-ui-guanbi"
      @click="clearInputText"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: String, // 内容
  innerText: String, // 文字中显示的文字
  inpType: { // 类型
    type: String,
    default: 'text',
    validator (value) {
      return ['text', 'password'].includes(value)
    }
  },
  size: { // 尺寸
    type: String,
    default: 'medium'
  },
  max: String, // 最大输入上限
  clear: Boolean, // 是否可以清空
  showIcon: String, // 左侧显示的图标
  prohibit: Boolean, // 是否禁用
  autofocus: Boolean, // 是否自动获取焦点
  name: String // 原生 name 属性
})
const emit = defineEmits(['update:modelValue', 'update:modelValue'])
function handleInput (evt) {
  emit('update:modelValue', evt.target.value)
}
function clearInputText () {
  emit('update:modelValue', '')
}
</script>
