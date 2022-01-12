<template>
  <tyh-avatar
    size="10"
    round
    src="https://tianyuhao.cn/tyhui/v3/assets/giraffe.jpg"
    @error="error"
    errorIcon="tyh-ui-add"
    @load="load"
  />
</template>

<script setup>
function load (a, b) {
  console.log(a)
  console.log('ok')
}
function error () {
  console.log('error')
}
</script>

<style scoped>
</style>
