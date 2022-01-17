<template>
  <span
    v-if="closeText"
    class="tyh-switch-closeText"
    :style="[`color:${switchValue ? '#333' : '#3a6ff4'}`]"
  >
    {{ closeText }}
  </span>

  <span
    :class="[
      'tyh-switch',
      {
        'tyh-switch-disabled': disabled,
      },
    ]"
    :style="switchStyle"
    @click="clickSwitch"
  >
    <span class="tyh-switch-roll" :style="switchRollStyle" />
  </span>

  <span
    v-if="openText"
    class="tyh-switch-openText"
    :style="[`color:${modelValue ? '#3a6ff4' : '#333'}`]"
  >
    {{ openText }}
  </span>
</template>

<script setup>
import { ref, computed } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  closeColor: {
    type: String,
    default: '#dcdfe6'
  },
  openColor: {
    type: String,
    default: '#3a6ff4'
  },
  closeText: String,
  openText: String,
  disabled: Boolean,
  width: {
    type: Number,
    default: 40,
    validator (val) {
      return val < 40 ? 40 : val
    }
  }
})
const emit = defineEmits(['update:modelValue', 'change'])

const switchValue = ref(props.modelValue)

const clickSwitch = () => {
  if (props.disabled) return
  switchValue.value = !switchValue.value
  emit('update:modelValue', switchValue.value)
  emit('change', switchValue.value)
}

const switchColor = computed(() => {
  return props.modelValue ? props.openColor : props.closeColor
})

const switchStyle = computed(() => {
  return [{
    width: `${props.width}px`,
    height: `${props.width / 2}px`,
    backgroundColor: switchColor.value
  }]
})

const switchRollStyle = computed(() => {
  return [{
    width: `${(props.width / 2) - 4}px`,
    height: `${(props.width / 2) - 4}px`,
    left: props.modelValue ? `${props.width / 2}px` : '0px'
  },
  `border:2px solid  ${switchColor.value}`
  ]
})
</script>
