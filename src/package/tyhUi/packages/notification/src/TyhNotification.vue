<template>
  <div class="tyh-notification">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  message: String,
  time: Number,
  position: {
    type: String,
    default: 'top-right',
    validator (v) {
      return ['top-left', 'top-right', 'bottom-left', 'bottom-right'].includes(v)
    }
  },
  close: Boolean,
  type: {
    type: String,
    default: 'default',
    validator (v) {
      return ['default', 'primary', 'success', 'danger', 'warning'].includes(v)
    }
  },
  background: {
    type: String,
    default: '#fff'
  }
})
</script>

<style scoped>
</style>
