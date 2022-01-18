<template>
<div style="height:200px"></div>
  <tyh-button
    aria-label="Hey tooltip!"
    data-microtip-position="top"
    role="tooltip"
  >
    按钮
  </tyh-button>

  <tyh-button
    aria-label="Hey tooltip!"
    data-microtip-position="top-left"
    role="tooltip"
  >
    按钮
  </tyh-button>
  <button
    aria-label="Hey tooltip!"
    data-microtip-position="top"
    role="tooltip"
  ></button>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)

function onChange (e) {
  console.log(e)
}
</script>

<style scoped>
.a {
  /* background-color: rgb(190, 112, 112); */
}
</style>
