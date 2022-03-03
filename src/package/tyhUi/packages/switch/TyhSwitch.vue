<template>
  <span
    v-if="closeText"
    class="tyh-switch-closeText"
    :style="[`color:${switchValue ? '#333' : '#3a6ff4'}`]"
  >
    {{ closeText }}
  </span>

  <span
    :class="['tyh-switch', { 'tyh-switch-disabled': disabled }]"
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
    type: [Number, String],
    default: 40
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const {
  switchValue,
  clickSwitch,
  switchStyle,
  switchRollStyle
} = _TyhSwitch()

function _TyhSwitch () {
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
    const width = ref(props.width)
    if (width.value < 20) width.value = 20
    return [{
      width: `${width.value}px`,
      height: `${width.value / 2}px`,
      backgroundColor: switchColor.value
    }]
  })

  const switchRollStyle = computed(() => {
    const width = ref(props.width)
    if (width.value < 20) width.value = 20
    return [{
      width: `${(width.value / 2) - 4}px`,
      height: `${(width.value / 2) - 4}px`,
      left: props.modelValue ? `${width.value / 2}px` : '0px'
    },
    `border:2px solid  ${switchColor.value}`
    ]
  })

  return {
    switchValue,
    clickSwitch,
    switchStyle,
    switchRollStyle
  }
}
</script>
