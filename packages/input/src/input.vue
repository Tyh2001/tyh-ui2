
<template>
  <div class="tyh-input" :class="prohibitClass">
    <tyh-icon
      v-if="showIcon"
      class="tyh-input-icon__showIcon"
      :class="[iconHeightClass]"
      :icon="showIcon"
      size="12"
      color="rgb(199, 199, 199)"
    />
    <input
      class="tyh-input_inp"
      :class="[sizeClass, clearClass, prohibitClass, paddingLeftClass]"
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
      :class="[iconHeightClass]"
      size="12"
      color="rgb(199, 199, 199)"
      icon="tyh-ui-close-03"
      @click="clearInputText"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import TyhIcon from '../../icon'
export default {
  name: 'TyhInput',
  components: {
    TyhIcon
  },
  props: {
    // 通过父组件 v-model 默认监听 value 事件
    modelValue: [String, Number],
    // 文字中显示的文字
    innerText: String,
    // 文本框类型
    inpType: {
      type: String,
      default: 'text',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['text', 'password'].indexOf(value) !== -1
      }
    },
    // 文本框尺寸
    size: {
      type: String,
      default: 'medium'
    },
    // 最大输入上限
    max: String,
    // 是否可以清空文本框
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
    // 尺寸 class
    const sizeClass = computed(() => {
      return props.size
        ? `tyh-input_inp--${props.size}`
        : 'tyh-input_inp--medium'
    })
    // 可清空的文本框
    const clearClass = computed(() => {
      return props.clear ? 'tyh-input-clear-padding' : ''
    })
    // 不同尺寸的行高
    const iconHeightClass = computed(() => {
      return `tyh-input-icon-${props.size}-height`
    })
    // 是否禁用
    const prohibitClass = computed(() => {
      return props.prohibit ? 'tyh-button-prohibit' : ''
    })
    // 当左边有小图标时候，则增加左边距
    const paddingLeftClass = computed(() => {
      return props.showIcon ? 'tyh-input__padding-left' : ''
    })
    // 输入时触发 input 事件 将新的值再传递给父组件 实现双向绑定
    function handleInput (evt) {
      emit('update:modelValue', evt.target.value)
    }
    // 点击清空文本框内容
    function clearInputText () {
      emit('update:modelValue', '')
    }

    return {
      sizeClass,
      clearClass,
      iconHeightClass,
      prohibitClass,
      paddingLeftClass,
      handleInput,
      clearInputText
    }
  }
}
</script>

<style src="../style/index.css" scoped></style>
