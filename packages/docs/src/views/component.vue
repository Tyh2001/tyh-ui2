<template>
  <div id="component">
    <div class="contentList">
      <Sidebar />
    </div>

    <div class="content">
      <router-view />
    </div>

    <tyh-backTop v-if="route.path !== '/component/backtop'">
      <tyh-icon icon="tyh-ui-top" color="#409eff" />
    </tyh-backTop>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
const route = useRoute()
</script>

<style scoped>
#component {
  display: flex;
  width: 1100px;
  margin: auto;
  position: relative;
}
#component .contentList {
  width: 200px;
  border-right: 1px solid #eee;
  position: fixed;
  overflow-y: auto;
  overflow-x: hidden;
  background: #fff;
  top: 60px;
  padding-top: 40px;
  bottom: 0px;
  user-select: none;
}
#component .content {
  background: #fff;
  padding: 24px;
  box-sizing: border-box;
  width: 900px;
  position: absolute;
  right: 0px;
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
