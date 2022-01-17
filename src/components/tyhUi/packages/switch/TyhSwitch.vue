<template>
  <span
    :class="[
      'tyh-switch',
      {
        'tyh-bac': !switchValue,
      },
    ]"
    @click="changeSwitch"
  >
  </span>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})
const emit = defineEmits(['update:modelValue'])

const switchValue = ref(props.modelValue)

const changeSwitch = () => {
  switchValue.value = !switchValue.value
  emit('update:modelValue', switchValue.value)
}
</script>

<style src="./style/index.css"></style>
