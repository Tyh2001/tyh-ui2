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
function load () {
  console.log('ok')
}
function error () {
  console.log('err')
}
</script>

<style scoped>
</style>
