<template>
  <div class="tyh-rate">
    <div class="tyh-rate-mouseout" @mouseout="mouseOut">
      <!-- 空心星星 -->
      <tyh-icon
        v-for="num in 5"
        icon="tyh-ui-favorite"
        size="17"
        :key="num"
        :color="voidColor"
        @mouseover="mouseOver(num)"
      />

      <!-- 实心星星 -->
      <span class="solid" :style="fontWidth">
        <tyh-icon
          v-for="num in 5"
          icon="tyh-ui-favorite-filling"
          size="17"
          :color="fontColor"
          :key="num"
          @mouseover="mouseOver(num)"
          @click="upDataValue"
        />
      </span>
    </div>
    <div v-if="showText" class="show-text">{{ showSay }}</div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
const props = defineProps({
  modelValue: Number,
  color: { // 选中的颜色
    type: String,
    default: '#fbcc30'
  },
  voidColor: { // 未选中的颜色
    type: String,
    default: '#C6D1DE'
  },
  showText: Boolean,
  SayText: {
    type: Array,
    default: ['极差', '失望', '一般', '惊喜', '满意']
  }
})
const emit = defineEmits(['update:modelValue', 'change'])
const width = ref(props.modelValue)
const fontColor = computed(() => props.color)
const voidColor = computed(() => props.voidColor)
function mouseOut () {
  width.value = props.modelValue
}
function mouseOver (num) {
  width.value = num
}
const fontWidth = computed(() => `width:${width.value * 17}px;`)
function upDataValue () {
  emit('update:modelValue', width.value)
  if (width.value !== props.modelValue) emit('change') // 当发生改变的时候
}
const showSay = ref(null)
const SayArr = ref([...props.SayText])
watch(() => width.value, () => {
  switch (width.value) {
    case 1: showSay.value = SayArr.value[0]
      break
    case 2: showSay.value = SayArr.value[1]
      break
    case 3: showSay.value = SayArr.value[2]
      break
    case 4: showSay.value = SayArr.value[3]
      break
    case 5: showSay.value = SayArr.value[4]
      break
    default: showSay.value = ''
  }
})
</script>
