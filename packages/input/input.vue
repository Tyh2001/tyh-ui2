
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
      icon="tyh-ui-close-03"
      @click="clearInputText"
    />
  </div>
</template>

<script>
export default {
  name: 'TyhInput',
  props: {
    // 内容
    modelValue: [String, Number],
    // 文字中显示的文字
    innerText: String,
    // 类型
    inpType: {
      type: String,
      default: 'text',
      validator (value) {
        return ['text', 'password'].includes(value)
      }
    },
    // 尺寸
    size: {
      type: String,
      default: 'medium'
    },
    // 最大输入上限
    max: String,
    // 是否可以清空
    clear: {
      type: Boolean,
      default: false
    },
    // 左侧显示的图标
    showIcon: String,
    // 是否禁用
    prohibit: {
      type: Boolean,
      default: false
    },
    // 是否自动获取焦点
    autofocus: {
      type: Boolean,
      default: false
    },
    // 原生 name 属性
    name: String
  },
  setup (props, { emit }) {
    // 输入时触发 input 事件 将新的值再传递给父组件 实现双向绑定
    function handleInput (evt) {
      emit('update:modelValue', evt.target.value)
    }
    // 点击清空文本框内容
    function clearInputText () {
      emit('update:modelValue', '')
    }

    return {
      handleInput,
      clearInputText
    }
  }
}
</script>
