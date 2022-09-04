---
layout: home

hero:
  name: Tyh Ui2
  text: Vue3 组件库
  tagline: 一个轻量级组件库，基于 vue3 + typescript，全面拥抱 vue3
  image:
    src: https://tianyuhao.cn/images/tyh-ui/tyh-ui2.svg
    alt: tyh-ui2
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/install
    - theme: alt
      text: GitHub
      link: https://github.com/Tyh2001/tyh-ui2

features:
  - icon: 💡
    title: 简洁至上
    details: tyh-ui2 整体非常简洁明了，虽没有很多高级的组件，但它是使用最简单的方式达到实用的效果。
  - icon: ⚡️
    title: 轻量容易
    details: 使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
  - icon: 🔑
    title: 使用 TypeScript
    details: 严格的 TypeScript 类型
---

<tyh-dialog v-model="show" title="通知" width="60%">
  你好！欢迎使用 tyh-ui2！<br /><br />
  也感谢您对本组件库的支持。本组件库是<tyh-link style="font-size:16px" target="_blank" url="https://github.com/Tyh2001" type="primary">我</tyh-link>初期用于学习的一个项目，整体写法较为简单，大多数组件还不够完善。所以后续并不会添加全新组件，仅仅会维护一些较大问题或构建方式的优化。现本组件库仅适合学习！<br /><br />
  现在我重新发起了一个全新的组件库项目<tyh-link style="font-size:16px" target="_blank" url="https://github.com/FightingDesign/fighting-design" type="primary">fighting-design</tyh-link>，内置完善的组件，并一直保持密集提交维护中，也可以参与共同开发维护，可放心使用！<br /><br />
  欢迎添加我微信 VirgoTyh 一起共同学习~<br /><br />
  <tyh-link style="font-size:16px" target="_blank" url="https://github.com/Tyh2001" type="primary">田同学 2022-09-04</tyh-link>
</tyh-dialog>

<script setup>
  import { ref } from 'vue'
  const show = ref(true)
</script>
