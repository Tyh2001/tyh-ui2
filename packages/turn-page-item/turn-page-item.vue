<template>
  <p
    class="tyh-turn-page-item"
    :class="[
      `tyh-turn-page-item-${direction}`,
      { 'tyh-turn-page-center': isCenter },
    ]"
  >
    <router-link :to="url">
      <tyh-icon
        v-if="direction === 'left'"
        :icon="icon ? icon : 'tyh-ui-left-02'"
      />
      <slot></slot>
      <tyh-icon
        v-if="direction === 'right'"
        :icon="icon ? icon : 'tyh-ui-right-02'"
      />
    </router-link>
  </p>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'TyhTurnPageItem',
  props: {
    // 指向方向
    direction: {
      type: String,
      required: true,
      validator (value) {
        return ['left', 'right'].includes(value)
      }
    },
    // 路由地址
    url: {
      type: String,
      default: ''
    },
    // 图标
    icon: String,
  },
  setup () {
    // 是否居中显示
    const isCenter = inject('is-center')
    return { isCenter }
  }
}
</script>
