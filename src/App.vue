<template>
  <tyh-page-header title="返回上一层" content="详情页面" @back="goBack" />
</template>

<script setup>
const goBack = () => console.log('goBack')
</script>
