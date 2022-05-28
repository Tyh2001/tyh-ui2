<template>
  <div class="tyh-rate">
    <div class="tyh-rate-mouseout" @mouseout="width = modelValue">
      <i
        class="tyh-icon tyh-ui-favorite"
        v-for="num in 5"
        :key="num"
        @mouseover="width = num"
      />
      <span class="solid" :style="`width:${width * 18}px;`">
        <i
          class="tyh-icon tyh-ui-favorite-filling"
          v-for="num in 5"
          :key="num"
          :style="{ color }"
          @mouseover="width = num"
          @click="upDataValue"
        />
      </span>
    </div>
    <div v-if="showText" class="show-text">{{ showSayFn }}</div>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch, computed } from 'vue'
  import { rateProps } from './props.ts'

  const props = defineProps(rateProps)
  const emit = defineEmits(['update:modelValue', 'change'])

  const width = ref<number | undefined>(props.modelValue)
  watch(
    () => props.modelValue,
    (v) => (width.value = v)
  )
  const upDataValue = (): void => {
    emit('update:modelValue', width.value)
    if (width.value !== props.modelValue) emit('change')
  }
  const showSayFn = computed((): string | void | null => {
    if (!props.showText) return
    const showSay = ref<null | string>(null)
    watch(
      () => width.value,
      (): void => {
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
</script>
