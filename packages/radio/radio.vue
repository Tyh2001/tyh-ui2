<template>
  <input type="radio" @input="input" :checked="checked" />
  <slot></slot>
</template>

<script>
export default { name: 'TyhRadio' }
</script>

<script setup>
</script>

<style scoped src="./style/index.css"></style>
