<template>
  <div id="component">
    <div class="contentList">
      <Sidebar />
    </div>

    <div class="content">
      <router-view />
    </div>

    <tyh-backTop v-if="route.path !== '/component/backtop'" bottom="150px">
      <tyh-icon icon="tyh-ui-top" color="#409eff" />
    </tyh-backTop>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
const route = useRoute()
</script>

<style scoped>
#component {
  display: flex;
  width: 1100px;
  margin: 0 auto;
  position: relative;
}
#component .contentList {
  position: fixed;
  width: 200px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100;
  top: 60px;
  padding-top: 40px;
  bottom: 0px;
  user-select: none;
  background: #fff;
}
#component .content {
  padding: 24px;
  box-sizing: border-box;
  width: 900px;
  position: absolute;
  right: 0px;
  background: #fff;
}
@media screen and (max-width: 700px) {
  .contentList {
    display: none;
  }
  #component {
    width: 100%;
  }
  #component .content {
    width: 100%;
  }
}
@media screen and (min-width: 700px) {
  .contentList_phone {
    display: none;
  }
}
</style>
