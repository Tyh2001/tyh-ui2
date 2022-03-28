<template>
  <template v-if="phone">
    <router-link to="/">
      <p class="urlPush">首页</p>
    </router-link>
    <router-link to="/component/install">
      <p class="urlPush">组件</p>
    </router-link>
    <router-link to="/about">
      <p class="urlPush">关于</p>
    </router-link>

    <tyh-division />
  </template>

  <p
    v-for="(item, index) in listPush"
    :key="index"
    class="urlPush list"
    :style="highLightStyle(index)"
    @click="listPushClick(index)"
  >
    {{ item.name }}
  </p>
  <br />
  <br />
  <br />
  <br />
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
defineProps({
  phone: Boolean
})
const listPush = [
  { name: '快速上手', url: '/component/install' },
  { name: 'Color 色彩', url: '/component/color' },
  { name: 'Container 布局容器', url: '/component/container' },
  { name: 'Button 按钮', url: '/component/button' },
  { name: 'List 列表', url: '/component/list' },
  { name: 'Card 卡片', url: '/component/card' },
  { name: 'Tag 标签', url: '/component/tag' },
  { name: 'Link 链接', url: '/component/link' },
  { name: 'Input 输入框', url: '/component/input' },
  { name: 'Menu 导航栏', url: '/component/menu' },
  { name: 'Division 分割线', url: '/component/division' },
  { name: 'Icon 图标', url: '/component/icon' },
  { name: 'Crumbs 面包屑', url: '/component/crumbs' },
  { name: 'TurnPage 翻页', url: '/component/turnPage' },
  { name: 'BackTop 回到顶部', url: '/component/backTop' },
  { name: 'Message 提示框', url: '/component/message' },
  { name: 'Skeleton 骨架', url: '/component/skeleton' },
  { name: 'Alert 提示', url: '/component/alert' },
  { name: 'Rate 评分', url: '/component/rate' },
  { name: 'Image 图片', url: '/component/image' },
  { name: 'Avatar 头像', url: '/component/avatar' },
  { name: 'Text 文字', url: '/component/text' },
  { name: 'Table 表格', url: '/component/table' },
  { name: 'Switch 开关', url: '/component/switch' },
  { name: 'Calendar 日历', url: '/component/calendar' },
  { name: 'Radio 单选框', url: '/component/radio' },
  { name: 'Tree 树形控件', url: '/component/tree' },
  { name: 'PageHeader 页头', url: '/component/pageHeader' },
  { name: 'Info 信息栏', url: '/component/info' },
  { name: 'Textarea 文本域', url: '/component/textarea' },
  { name: 'Select 选择器', url: '/component/select' },
  { name: 'Tagging 标注', url: '/component/tagging' },
  { name: 'Notification 通知', url: '/component/notification' },
  { name: 'Drawer 抽屉', url: '/component/drawer' },
  { name: 'Dialog 对话框', url: '/component/dialog' }
]
const router = useRouter()
const route = useRoute()
// 点击跳转
function listPushClick(index) {
  router.push(listPush[index].url)
}
// 高亮显示
function highLightStyle(index) {
  if (listPush[index].url === route.path) {
    return {
      color: '#3a6ff4',
      borderLeft: '4px solid #3a6ff4',
      fontWeight: 600,
      fontSize: '16px',
      backgroundColor: 'rgb(247, 247, 247)'
    }
  }
}
</script>

<style scoped>
.urlPush {
  width: 100%;
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  padding: 15px 20px;
  margin: 0;
}
.urlPush a {
  text-decoration: none;
}
.urlPush:hover {
  background: #f7f7f7;
}
</style>
