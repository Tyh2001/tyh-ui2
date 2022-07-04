<template>
  <span
    v-if="closeText"
    class="tyh-switch-closeText"
    :style="[`color:${switchValue ? '#333' : '#3a6ff4'}`]"
  >
    {{ closeText }}
  </span>
  <span
    :class="['tyh-switch', { 'tyh-switch-disabled': disabled }]"
    :style="switchStyle"
    @click="clickSwitch"
  >
    <span class="tyh-switch-roll" :style="switchRollStyle" />
  </span>
  <span
    v-if="openText"
    class="tyh-switch-openText"
    :style="[`color:${modelValue ? '#3a6ff4' : '#333'}`]"
  >
    {{ openText }}
  </span>
</template>

<script lang="ts" setup name="TyhSwitch">
  import { ref, computed } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)
  const emit = defineEmits(['update:modelValue', 'change'])

  const switchValue = ref<boolean>(prop.modelValue)

  const clickSwitch = (): void => {
    if (prop.disabled) return
    switchValue.value = !switchValue.value
    emit('update:modelValue', switchValue.value)
    emit('change', switchValue.value)
  }

  const switchColor = computed((): string => {
    return prop.modelValue ? prop.openColor : prop.closeColor
  })

  const switchStyle = computed((): object[] => {
    const width = ref<number>(prop.width)
    if (width.value < 20) width.value = 20
    return [
      {
        width: `${width.value}px`,
        height: `${width.value / 2}px`,
        backgroundColor: switchColor.value
      }
    ]
  })

  const switchRollStyle = computed((): (object | string)[] => {
    const width = ref<number>(prop.width)
    if (width.value < 20) width.value = 20
    return [
      {
        width: `${width.value / 2 - 4}px`,
        height: `${width.value / 2 - 4}px`,
        left: prop.modelValue ? `${width.value / 2}px` : '0px'
      },
      `border:2px solid  ${switchColor.value}`
    ]
  })
</script>
