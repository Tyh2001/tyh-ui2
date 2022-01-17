<template>
  <span
    class="tyh-switch"
    :style="[{ backgroundColor: switchColor }]"
    @click="changeSwitch"
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
})
const emit = defineEmits(['update:modelValue'])

const switchValue = ref(props.modelValue)

const changeSwitch = () => {
  switchValue.value = !switchValue.value
  emit('update:modelValue', switchValue.value)
}

const switchColor = computed(() => {
  return switchValue.value ? '#54c600' : '#d10f1b'
})
</script>

<style src="./style/index.css"></style>
