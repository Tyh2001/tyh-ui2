<template>
  <div :class="isClass" :style="isStyle" @click="link">
    <slot v-if="$slots.default" />
    <template v-else>{{ title }}</template>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, computed } from 'vue'
import { menuItemProps } from './menuItem.ts'

const props = defineProps(menuItemProps)

const theme = inject('theme')
const mode = inject('mode')

const isStyle = computed((): object[] => [
  { color: theme === 'dark' ? '#fff' : '#000' }
])

const { proxy }: any = getCurrentInstance()
const link = (): void => {
  if (props.prohibit) return
  if (props.link) {
    window.open(props.link, 'link')
    return
  }
  if (props.route) {
    try {
      proxy.$router.push(props.route)
    } catch (e: any) {
      console.log(e)
    }
  }
}

const isClass = computed((): (string | object)[] => {
  return [
    'tyh-menu-item',
    `tyh-menu-item-hover-${mode}`,
    { 'tyh-menu-item-prohibit': props.prohibit }
  ]
})
</script>
