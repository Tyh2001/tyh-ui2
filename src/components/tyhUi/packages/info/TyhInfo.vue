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

    <div v-if="moreInfo" class="tyh-info-body">
      <ul>
        <li>姓名：{{ moreInfo.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  userInfo: String,
  describe: String,
  moreInfo: Object
})
</script>

<style scoped src="./style/index.css">
</style>
