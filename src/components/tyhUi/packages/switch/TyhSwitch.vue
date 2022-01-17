<template>
  <span
    class="tyh-switch-closeText"
    :style="[`color:${switchValue ? '#333' : '#3a6ff4'}`]"
  >
    {{ closeText }}
  </span>
  <span
    :class="['tyh-switch']"
    :style="[{ backgroundColor: switchColor }]"
    @click="clickSwitch"
  >
    <span
      :class="[
        'tyh-switch-roll',
        {
          'tyh-switch-change': switchValue,
        },
      ]"
      :style="[`border:2px solid  ${switchColor}`]"
    />
  </span>
  <span
    class="tyh-switch-openText"
    :style="[`color:${switchValue ? '#3a6ff4' : '#333'}`]"
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
    default: '#d10f1b'
  },
  openColor: {
    type: String,
    default: '#54c600'
  },
  closeText: String,
  openText: String
})
const emit = defineEmits(['update:modelValue', 'change'])

const switchValue = ref(props.modelValue)

const clickSwitch = () => {
  switchValue.value = !switchValue.value
  emit('update:modelValue', switchValue.value)
  emit('change', switchValue.value)
}

const switchColor = computed(() => {
  return switchValue.value ? '#54c600' : '#d10f1b'
})
</script>

<style src="./style/index.css"></style>
