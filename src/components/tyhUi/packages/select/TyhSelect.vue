<template>
  <div class="tyh-select">
    <input
      class="tyh-select-input"
      type="text"
      v-model="modelValue"
      readonly
      @input="input"
    />
    <ul class="tyh-select-list">
      <tyh-option value="1" @newValue="onValue($event)"></tyh-option>
      <slot />
    </ul>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String
  }
})


const emit = defineEmits(['update:modelValue', 'newValue'])

// onMounted(() => {
//   emit('newValue',props.)
// })

function onValue (e) {
  console.log(`子组件传递的${e}`)
}

const input = e => emit('update:modelValue', e.target.value)

</script>

<style scoped src="./style/index.css">
</style>
