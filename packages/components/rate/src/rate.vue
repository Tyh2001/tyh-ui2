<script lang="ts" setup name="TyhRate">
  import { ref, watch, computed } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  const emit = defineEmits(['update:modelValue', 'change'])

  const width = ref<number>(prop.modelValue)
  watch(
    () => prop.modelValue,
    (v) => (width.value = v)
  )
  const upDataValue = (): void => {
    emit('update:modelValue', width.value)
    if (width.value !== prop.modelValue) emit('change')
  }
  const showSayFn = computed((): string | void | null => {
    if (!prop.showText) return
    let showSay = ''
    watch(
      () => width.value,
      (): void => {
        switch (width.value) {
          case 1:
            showSay = prop.sayText[0]
            break
          case 2:
            showSay = prop.sayText[1]
            break
          case 3:
            showSay = prop.sayText[2]
            break
          case 4:
            showSay = prop.sayText[3]
            break
          case 5:
            showSay = prop.sayText[4]
            break
          default:
            showSay = ''
        }
      },
      { immediate: true }
    )
    return showSay
  })
</script>

<template>
  <div class="tyh-rate">
    <div class="tyh-rate-mouseout" @mouseout="width = modelValue">
      <i
        v-for="num in 5"
        :key="num"
        class="tyh-icon tyh-ui-favorite"
        @mouseover="width = num"
      />
      <span class="solid" :style="`width:${width * 18}px;`">
        <i
          v-for="num in 5"
          :key="num"
          class="tyh-icon tyh-ui-favorite-filling"
          :style="{ color }"
          @mouseover="width = num"
          @click="upDataValue"
        />
      </span>
    </div>
    <div v-if="showText" class="show-text">{{ showSayFn }}</div>
  </div>
</template>
