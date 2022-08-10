<template>
  <div id="home">
    <img
      draggable="false"
      class="logo"
      src="https://tianyuhao.cn/images/tyh-ui/tyh-ui-logo.svg"
      alt="logo"
    />
    <h1 class="MainTitle">Tyh UI</h1>
    <p class="Subtitle">
      一个轻量级组件库，基于 vue3 + typescript，全面拥抱 vue3
    </p>

    <div class="btnBox">
      <a href="/docs/install">
        <tyh-button type="primary" round> 快速开始 </tyh-button>
      </a>

      <a target="_back" href="https://github.com/Tyh2001/tyh-ui2">
        <tyh-button round>Github</tyh-button>
      </a>
    </div>

    <div class="summary">
      <div class="summary-left">
        <h2 class="summary-title">
          <tyh-icon icon="tyh-ui-huojian-01" size="22" color="#67a1ff" />
          简洁至上
        </h2>
        <p class="summary-content">
          tyh-ui
          整体非常简洁明了，虽没有很多高级的组件，但它是使用最简单的方式达到实用的效果。
        </p>
      </div>
      <div class="summary-right">
        <h2 class="summary-title">
          <tyh-icon icon="tyh-ui-channel-01" size="22" color="#bd34fe" />
          轻量容易
        </h2>
        <p class="summary-content">
          使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
        </p>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup></script>

<style scoped>
  #home {
    width: 800px;
    padding-bottom: 40px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #home .logo {
    width: 220px;
    height: 220px;
    user-select: none;
  }
  #home .MainTitle {
    text-align: center;
    color: #515a6e;
    margin-top: 20px;
    font-size: 40px;
    align-items: center;
    position: relative;
  }
  #home .MainTitle .version {
    text-align: center;
    position: absolute;
    font-size: 18px;
    display: inline-block;
    background: #3a6ff4;
    color: #fff;
    border-radius: 10px;
    padding: 3px 10px;
    left: 140px;
    top: 0px;
  }
  #home .Subtitle {
    text-align: center;
    color: #515a6e;
    margin-top: 20px;
    font-size: 22px;
    padding: 0 19px;
  }
  #home .btnBox {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #home .btnBox .tyh-button {
    width: 200px;
    height: 50px;
    margin: 20px;
  }
  #home .btnBox .tyh-button .tyh-ui-github {
    color: #606266 !important;
  }
  #home .summary {
    width: 800px;
    border-top: 1px solid #dbdbdb;
    margin: auto;
    display: flex;
    margin-top: 50px;
  }
  #home .summary .summary-left,
  #home .summary .summary-right {
    flex: 1;
    padding: 25px;
    box-sizing: border-box;
  }
  #home .summary .summary-left .summary-title,
  #home .summary .summary-right .summary-title {
    line-height: 60px;
    color: #2d3035;
    font-weight: 500;
  }
  #home .summary .summary-left .summary-content,
  #home .summary .summary-right .summary-content {
    color: #515a6e;
    line-height: 25px;
  }
  @media screen and (max-width: 700px) {
    #home {
      width: 100%;
      display: flex;
    }
    #home .logo {
      width: 150px;
      height: 150px;
    }
    #home .summary {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    #home .btnBox {
      display: flex;
      flex-direction: column;
    }
  }
</style>
