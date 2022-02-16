<template>
  <li class="tyh-option" @click="send">
    <span class="tyh-option-text">
      <slot />
    </span>
  </li>
</template>

<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  value: String
})

const emit = defineEmits(['update:modelValue', 'newValue'])

function send () {
  emit('newValue', props.value)
  console.log(props.value)
}
</script>

<style scoped src="./style/index.css">
</style>
