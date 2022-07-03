<template>
  <li :class="isClass" :style="isStyle" @click="link">
    <slot v-if="$slots.default" />
    <span v-else>{{ title }}</span>
  </li>
</template>

<script lang="ts" setup name="TyhMenuItem">
  import { getCurrentInstance, inject, computed } from 'vue'
  import { menuItemProps } from './props'

  const props = defineProps(menuItemProps)
  const theme = inject('theme')
  const mode = inject('mode')
  const textColor = inject('textColor')

  const isStyle = computed((): object[] => {
    return [
      {
        color: textColor ? textColor : theme === 'dark' ? '#fff' : '#333'
      }
    ]
  })

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
