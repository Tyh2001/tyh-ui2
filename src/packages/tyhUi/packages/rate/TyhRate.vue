<template>
  <div class="tyh-rate">
    <div class="tyh-rate-mouseout" @mouseout="width = modelValue">
      <tyh-icon
        v-for="num in 5"
        icon="tyh-ui-favorite"
        size="17"
        :key="num"
        :color="voidColor"
        @mouseover="width = num"
      />

      <span class="solid" :style="`width:${width * 17}px;`">
        <tyh-icon
          v-for="num in 5"
          icon="tyh-ui-favorite-filling"
          size="17"
          :color="color"
          :key="num"
          @mouseover="width = num"
          @click="upDataValue"
        />
      </span>
    </div>
    <div v-if="showText" class="show-text">{{ showSayFn }}</div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
const props = defineProps({
  modelValue: Number,
  color: {
    type: String,
    default: '#fbcc30'
  },
  voidColor: {
    type: String,
    default: '#C6D1DE'
  },
  showText: Boolean,
  sayText: {
    type: Array,
    default: () => ['极差', '失望', '一般', '惊喜', '满意']
  }
})
const emit = defineEmits(['update:modelValue', 'change'])
const { width, upDataValue, showSayFn } = _TyhRate()

function _TyhRate () {
  const width = ref(props.modelValue)
  watch(
    () => props.modelValue,
    newVal => (width.value = newVal)
  )
  const upDataValue = () => {
    emit('update:modelValue', width.value)
    if (width.value !== props.modelValue) emit('change')
  }

  const showSayFn = computed(() => {
    if (!props.showText) return
    const showSay = ref(null)
    watch(
      () => width.value,
      () => {
        switch (width.value) {
          case 1:
            showSay.value = props.sayText[0]
            break
          case 2:
            showSay.value = props.sayText[1]
            break
          case 3:
            showSay.value = props.sayText[2]
            break
          case 4:
            showSay.value = props.sayText[3]
            break
          case 5:
            showSay.value = props.sayText[4]
            break
          default:
            showSay.value = ''
        }
      },
      { immediate: true }
    )
    return showSay.value
  })
  return { width, upDataValue, showSayFn }
}
</script>
