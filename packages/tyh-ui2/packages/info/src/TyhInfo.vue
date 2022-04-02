<template>
  <div class="tyh-info">
    <div class="tyh-info-header">
      <div class="tyh-info-left">
        <div v-if="$slots.photo" class="tyh-info-photo">
          <slot name="photo" />
        </div>
        <div class="tyh-info-data">
          <tyh-link v-if="linkUrl" :url="linkUrl">
            <span class="tyh-info-userInfo">{{ userInfo }}</span>
          </tyh-link>
          <span v-else class="tyh-info-userInfo">{{ userInfo }}</span>
          <span class="tyh-info-describe">{{ describe }}</span>
        </div>
      </div>
      <div v-if="$slots.right" class="tyh-info-right">
        <slot name="right" />
      </div>
    </div>
    <div v-if="$slots.body" class="tyh-info-body">
      <slot name="body" />
    </div>
    <div v-if="$slots.footer" class="tyh-info-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { infoProps } from './info.ts'
defineProps(infoProps)
</script>
