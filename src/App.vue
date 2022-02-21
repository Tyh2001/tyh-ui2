<template>
  <div>
    <tyh-button size="mini" type="primary">小型按钮</tyh-button>
    <tyh-button size="small" type="primary">中等按钮</tyh-button>
    <tyh-button type="primary">正常大小</tyh-button>
    <tyh-button size="large" type="primary">大号按钮</tyh-button>
  </div>
  <div>
    <tyh-alert message="这是一个普通提示" />
    <tyh-alert type="primary" message="这是一个主要提示" />
    <tyh-alert type="success" message="这是一个成功提示" />
    <tyh-alert type="danger" message="这是一个危险提示" />
    <tyh-alert type="warning" message="这是一个警告提示" />
  </div>
  <div>
    <div class="fitBox">
      <div class="item" v-for="fit in fits" :key="fit">
        <span class="text">{{ fit }}</span>
        <tyh-avatar
          round
          src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
          :fit="fit"
        />
      </div>
    </div>
  </div>
  <tyh-card shadow="always">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>总是显示阴影</p>
  </tyh-card>

  <tyh-card shadow="hover">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>鼠标移入显示</p>
  </tyh-card>

  <tyh-card shadow="noShadow">
    <template v-slot:title>主标题</template>
    <template v-slot:subtitle>副标题</template>
    <p>从不显示</p>
  </tyh-card>

  <div>
    <tyh-radio v-model="radio3" label="备选项1" border>备选项1</tyh-radio>
    <tyh-radio v-model="radio3" label="备选项2" border>备选项2</tyh-radio>
    <tyh-radio v-model="radio3" label="备选项3" border>备选项3</tyh-radio>
  </div>
  <!-- <tyh-tagging type="">你在干什么</tyh-tagging>
    <tyh-tagging type="primary">你在干什么</tyh-tagging>
    <tyh-tagging type="success">你在干什么</tyh-tagging>
    <tyh-tagging type="danger">你在干什么</tyh-tagging>
    <tyh-tagging type="warning">你在干什么</tyh-tagging> -->
  <tyh-radio v-model="radio4" label="备选项1" border size="large"
    >备选项1</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项2" border size="large"
    >备选项2</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项3" border size="large"
    >备选项3</tyh-radio
  >

  <tyh-radio v-model="radio4" label="备选项1" border size="medium"
    >备选项1</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项2" border size="medium"
    >备选项2</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项3" border size="medium"
    >备选项3</tyh-radio
  >

  <tyh-radio v-model="radio4" label="备选项1" border size="small"
    >备选项1</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项2" border size="small"
    >备选项2</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项3" border size="small"
    >备选项3</tyh-radio
  >

  <tyh-radio v-model="radio4" label="备选项1" border size="mini"
    >备选项1</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项2" border size="mini"
    >备选项2</tyh-radio
  >
  <tyh-radio v-model="radio4" label="备选项3" border size="mini"
    >备选项3</tyh-radio
  >
</template>

<script setup>
import { ref } from 'vue'
const radio3 = ref('备选项3')
const radio4 = ref('备选项3')
// import { ref, nextTick, reactive, provide } from 'vue'
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const fun = (x) => x + 1
fun(2)
// provide('newValue', '123')
// 图片懒加载简单逻辑
// nextTick(() => {
//   const int = new IntersectionObserver(changes => {
//     changes.forEach(change => {
//       console.log('改变了')
//     })
//   })
//   int.observe(myRef.value)
// })
</script>

<style scoped>
</style>
