<template>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <tyh-avatar
        round
        src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
  <tyh-card>
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>这是内容部分1</p>
    <p>这是内容部分2</p>
    <p>这是内容部分3</p>
    <p>这是内容部分4</p>
  </tyh-card>
  <tyh-button>默认按钮</tyh-button>
  <tyh-button type="primary">主要按钮</tyh-button>
  <tyh-button type="success">成功按钮</tyh-button>
  <tyh-button type="danger">危险按钮</tyh-button>
  <tyh-button type="warning">警告按钮</tyh-button>

  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <h1>22</h1>
  <tyh-backTop bottom="150px" right="120px">Go</tyh-backTop>
</template>

<script setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
