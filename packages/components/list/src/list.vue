<script lang="ts" setup name="TyhList">
  import { computed } from 'vue'
  import { Props } from './props'

  const prop = defineProps(Props)

  const liClass = computed((): (string | object)[] => {
    return [
      'tyh-list-li',
      {
        'tyh-list-zebra': prop.zebra,
        'tyh-list-hoverShow': prop.hoverShow
      }
    ]
  })
</script>

<template>
  <div class="tyh-list">
    <div v-if="header || $slots.header" class="tyh-list-header">
      <slot v-if="$slots.header" name="header" />
      <span v-else>{{ header }}</span>
    </div>
    <div v-if="content.length" class="tyh-list-content">
      <ul class="tyh-list-ul">
        <li v-for="(item, index) in content" :key="index" :class="liClass">
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
