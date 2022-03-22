<template>
  <div id="about">
    <div class="logoBox">
      <img
        draggable="false"
        class="logo"
        src="https://tianyuhao.cn/images/tyh-ui/tyh-ui-logo.svg"
        alt="logo"
      />
    </div>
    <h3 class="about_title">关于</h3>
    <tyh-text block>
      一个轻量级组件库，基于 vue3 + typescript，全面拥抱 vue3。
    </tyh-text>

    <h3 class="about_title">加入我们</h3>
    <tyh-text block>
      欢迎你加入
      <tyh-link
        type="primary"
        target="_blank"
        url="https://github.com/Tyh2001/tyh-ui"
      >
        tyh-ui
      </tyh-link>
    </tyh-text>

    <tyh-text>
      在这里，不需要你的技术有多么优秀，只希望你对做开源有足够的热爱。如果你有技术，你可以参加主要的开发；如果你是一个新手，可以来写
      Ui
      设计方面的开发，就算你技术水平一团糟，还可以看看文档，找一找错别字，提一提
      issues 或 pr 呢，不是吗？
    </tyh-text>

    <h3 class="about_title">赞助我们</h3>
    <tyh-text>开发不易，欢迎大家赞助！</tyh-text>
    <div id="sponsor">
      <img
        draggable="false"
        src="https://tianyuhao.cn/images/tyh-ui/weixin.jpg"
        alt="weixin"
      />
      <img
        draggable="false"
        src="https://tianyuhao.cn/images/tyh-ui/zhifubao.jpg"
        alt="zhifubao"
      />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
#about {
  max-width: 800px;
  margin: auto;
  padding: 22px;
  box-sizing: border-box;
  padding-bottom: 99px;
}
#about .logoBox {
  width: 150px;
  margin: auto;
  user-select: none;
}
#about .logoBox .logo {
  width: 220px;
  height: 220px;
}
#about .about_title {
  margin: 40px 0 20px 0;
  font-weight: 600;
  color: #515a6e;
}
#about #sponsor {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#about #sponsor img {
  max-width: 280px;
  user-select: none;
}
@media screen and (max-width: 700px) {
  #about #sponsor {
    flex-wrap: wrap;
  }
  #about .logoBox .logo {
    width: 150px;
  }
}
</style>
