<template>
  <div class="tyh-info">
    <div class="tyh-info-header">
      <div class="tyh-info-left">
        <div class="tyh-info-photo">
          <slot name="photo" />
        </div>

        <div class="tyh-info-data">
          <span class="tyh-info-userInfo">{{ userInfo }}</span>
          <span class="tyh-info-describe">{{ describe }}</span>
        </div>
      </div>
      <div class="tyh-info-right">
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

<script setup>
defineProps({
  userInfo: String,
  describe: String
})
</script>

<style scoped src="./style/index.css">
</style>
