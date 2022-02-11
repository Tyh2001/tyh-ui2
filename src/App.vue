<template>
  <button @click="throwError">Throw error</button>
</template>

<script setup>
function throwError () {
  console.log(a)
}
// onerror = function (msg, url, row, col) {
//   console.log(msg)
//   console.log(url)
//   console.log(row)
//   console.log(col)
// }
</script>

<style scoped>
.errBox {
  color: rgb(232, 232, 232);
  line-height: 3.2;
  white-space: pre;
  font-family: Menlo, Consolas, monospace;
  font-size: 13px;
  position: fixed;
  z-index: 9999;
  padding: 10px;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  overflow: auto;
  background: rgba(0, 0, 0, 0.85098);
}
.errBox .errUrl {
  background-color: #e36049;
  color: #fff;
  padding: 2px 4px;
  border-radius: 2px;
}
</style>
