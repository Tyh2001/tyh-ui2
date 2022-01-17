<template>
  <span class="tyh-switch" @click="changeSwitch">
    <span
      :class="[
        'tyh-switch-roll',
        {
          'tyh-switch-change': switchValue,
        },
      ]"
    />
  </span>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  closeColor: {},
  openColor: {},
})
const emit = defineEmits(['update:modelValue'])

const switchValue = ref(props.modelValue)

const changeSwitch = () => {
  switchValue.value = !switchValue.value
  emit('update:modelValue', switchValue.value)
}
</script>

<style src="./style/index.css"></style>
