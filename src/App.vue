<template>
  <tyh-button icon="tyh-ui-setting-filling">设置</tyh-button>
  <tyh-button icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
  <tyh-button icon="tyh-ui-fabulous" type="success"></tyh-button>
  <tyh-button icon="tyh-ui-discount" type="danger"></tyh-button>
  <tyh-button icon="tyh-ui-chart-bar" type="warning"></tyh-button>

  <tyh-button simple icon="tyh-ui-setting-filling">设置</tyh-button>
  <tyh-button simple icon="tyh-ui-tyhui" type="primary">tyh-ui</tyh-button>
  <tyh-button simple icon="tyh-ui-fabulous" type="success"></tyh-button>
  <tyh-button simple icon="tyh-ui-discount" type="danger"></tyh-button>
  <tyh-button simple icon="tyh-ui-chart-bar" type="warning"></tyh-button>
  <Tiger />
</template>

<script setup>
import Tiger from './demo/tiger.vue'
</script>

<style scoped>
.tyh-header,
.tyh-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.tyh-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.tyh-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .tyh-container {
  margin-bottom: 40px;
}

.tyh-container:nth-child(5) .tyh-aside,
.tyh-container:nth-child(6) .tyh-aside {
  line-height: 260px;
}

.tyh-container:nth-child(7) .tyh-aside {
  line-height: 320px;
}
</style>
