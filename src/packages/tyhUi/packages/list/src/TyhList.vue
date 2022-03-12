<template>
  <div class="tyh-list">
    <div v-if="header || $slots.header" class="tyh-list-header">
      <slot v-if="$slots.header" name="header" />
      <span v-else>{{ header }}</span>
    </div>
    <div v-if="content.length" class="tyh-list-content">
      <ul class="tyh-list-ul">
        <li :class="liClass" v-for="(item, index) in content" :key="index">
          <span v-if="num" class="tyh-list-num">
            {{ index + 1 }}
          </span>
          {{ keys ? item[keys] : item }}
        </li>
      </ul>
    </div>
    <div v-else class="tyh-list-not">暂无内容...</div>
    <div v-if="footer || $slots.footer" class="tyh-list-footer">
      <slot v-if="$slots.footer" name="footer" />
      <span v-else>{{ footer }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { prop } from './prop'
const props = defineProps({ ...prop })
const liClass = computed((): (string | object)[] => {
  return [
    'tyh-list-li',
    {
      'tyh-list-zebra': props.zebra,
      'tyh-list-hoverShow': props.hoverShow
    }
  ]
})
</script>

<style lang="" src="/src/packages/THEME_STYLE/list/style/index.css"></style>
