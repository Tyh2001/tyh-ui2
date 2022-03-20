// 安装
const install = {
  ins1: 'npm i tyh-ui2',
  ins2: `
import { createApp } from 'vue'
import App from './App.vue'
import tyhUi2 from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

createApp(App).use(tyhUi2).mount('#app')
`,
  ins3: `
import { createApp } from 'vue'
import App from './App.vue'
import { 
  TyhButton,
  TyhCard,
  // ...
} from 'tyh-ui2'
import 'tyh-ui2/style/index.css'

createApp(App)
  .use(TyhButton)
  .use(TyhCard)
  .mount('#app')
    `
}
// 按钮
const button = {
  btn1: `
<tyh-button>默认按钮</tyh-button>
<tyh-button type="primary">主要按钮</tyh-button>
<tyh-button type="success">成功按钮</tyh-button>
<tyh-button type="danger">危险按钮</tyh-button>
<tyh-button type="warning">警告按钮</tyh-button>
    `,
  btn2: `
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
    `,
  btn3: `
<tyh-button disabled>默认按钮</tyh-button>
<tyh-button disabled type="primary">主要按钮</tyh-button>
<tyh-button disabled type="success">成功按钮</tyh-button>
<tyh-button disabled type="danger">危险按钮</tyh-button>
<tyh-button disabled type="warning">警告按钮</tyh-button>

<tyh-button simple disabled>默认按钮</tyh-button>
<tyh-button simple disabled type="primary">主要按钮</tyh-button>
<tyh-button simple disabled type="success">成功按钮</tyh-button>
<tyh-button simple disabled type="danger">危险按钮</tyh-button>
<tyh-button simple disabled type="warning">警告按钮</tyh-button>
    `,
  btn4: `
<tyh-button round>默认按钮</tyh-button>
<tyh-button round type="primary">主要按钮</tyh-button>
<tyh-button round type="success">成功按钮</tyh-button>
<tyh-button round type="danger">危险按钮</tyh-button>
<tyh-button round type="warning">警告按钮</tyh-button>

<tyh-button square>默认按钮</tyh-button>
<tyh-button square type="primary">主要按钮</tyh-button>
<tyh-button square type="success">成功按钮</tyh-button>
<tyh-button square type="danger">危险按钮</tyh-button>
<tyh-button square type="warning">警告按钮</tyh-button>
    `,
  btn5: `
<tyh-button size="mini" type="primary">小型按钮</tyh-button>
<tyh-button size="small" type="primary">中等按钮</tyh-button>
<tyh-button type="primary">正常大小</tyh-button>
<tyh-button size="large" type="primary">大号按钮</tyh-button>

<tyh-button simple size="mini" type="primary">小型按钮</tyh-button>
<tyh-button simple size="small" type="primary">中等按钮</tyh-button>
<tyh-button simple type="primary">正常大小</tyh-button>
<tyh-button simple size="large" type="primary">大号按钮</tyh-button>
    `,
  btn6: `
<tyh-button simple>默认按钮</tyh-button>
<tyh-button simple type="primary">主要按钮</tyh-button>
<tyh-button simple type="success">成功按钮</tyh-button>
<tyh-button simple type="danger">危险按钮</tyh-button>
<tyh-button simple type="warning">警告按钮</tyh-button>
    `,
  btn7: `
<tyh-button-group>
  <tyh-button type="primary">上一页</tyh-button>
  <tyh-button type="primary">下一页</tyh-button>
</tyh-button-group>

<tyh-button-group>
  <tyh-button simple type="primary">左</tyh-button>
  <tyh-button simple type="success">右</tyh-button>
</tyh-button-group>

<tyh-button-group>
  <tyh-button icon="tyh-ui-arrow-left-filling" type="primary"></tyh-button>
  <tyh-button icon="tyh-ui-arrow-right-filling" type="success"></tyh-button>
</tyh-button-group>

<tyh-button-group>
  <tyh-button type="primary">左</tyh-button>
  <tyh-button type="success">中</tyh-button>
  <tyh-button type="primary">右</tyh-button>
</tyh-button-group>
    `
}
// 列表
const list = {
  lis1: `
<template>
  <tyh-list :content="arr" keys="name" />
</template>

<script setup>
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>
    `,
  lis2: `
<template>
  <tyh-list :content="arr" keys="name" header="这是头部" footer="这是页脚" />
</template>

<script setup>
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>
    `,
  lis3: `
<template>
  <tyh-list zebra num :content="arr" keys="name" header="这是头部" footer="这是页脚" />
</template>

<script setup>
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>
    `,
  lis4: `
<template>
  <tyh-list hoverShow :content="arr" keys="name" />
</template>

<script setup>
const arr = [
  { name: '小明1', age: 11 },
  { name: '小明2', age: 12 },
  { name: '小明3', age: 13 },
  { name: '小明4', age: 14 },
  { name: '小明5', age: 15 },
  { name: '小明6', age: 16 },
  { name: '小明7', age: 17 },
  { name: '小明8', age: 18 }
]
</script>  
    `
}
// 卡片
const card = {
  car1: `
<tyh-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</tyh-card>
    `,
  car2: `
<tyh-card simple>
  <p>这是内容部分1</p>
  <p>这是内容部分2</p>
  <p>这是内容部分3</p>
  <p>这是内容部分4</p>
</tyh-card>
    `,
  car3: `
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

<tyh-card>
  <template v-slot:title>主标题</template>
  <template v-slot:subtitle>副标题</template>
  <p>从不显示</p>
</tyh-card>
    `
}
// 标签
const tag = {
  tag1: `
<tyh-tag>标签一</tyh-tag>
<tyh-tag type="primary">标签二</tyh-tag>
<tyh-tag type="success">标签三</tyh-tag>
<tyh-tag type="danger">标签四</tyh-tag>
<tyh-tag type="warning">标签五</tyh-tag>
    `,
  tag2: `
<tyh-tag type="primary">标签</tyh-tag>
<tyh-tag size="small" type="primary">标签</tyh-tag>
<tyh-tag size="mini" type="primary">标签</tyh-tag>
    `,
  tag3: `
<tyh-tag round>标签一</tyh-tag>
<tyh-tag round type="primary">标签二</tyh-tag>
<tyh-tag round type="success">标签三</tyh-tag>
<tyh-tag round type="danger">标签四</tyh-tag>
<tyh-tag round type="warning">标签五</tyh-tag>
    `,
  tag4: `
<template>
  <tyh-tag v-show="show1" isClose @close="show1 = false">标签一</tyh-tag>
  <tyh-tag v-show="show2" type="primary" isClose @close="show2 = false">
    标签二
  </tyh-tag>
  <tyh-tag v-show="show3" type="success" isClose @close="show3 = false">
    标签三
  </tyh-tag>
  <tyh-tag v-show="show4" type="danger" isClose @close="show4 = false">
    标签四
  </tyh-tag>
  <tyh-tag v-show="show5" type="warning" isClose @close="show5 = false">
    标签五
  </tyh-tag>
</template>

<script setup>
import { ref } from 'vue'
const show1 = ref(true)
const show2 = ref(true)
const show3 = ref(true)
const show4 = ref(true)
const show5 = ref(true)
</script>
    `
}
// 链接
const link = {
  lin1: `
<tyh-link url="">链接一</tyh-link>
<tyh-link url="" type="primary">链接二</tyh-link>
<tyh-link url="" type="success">链接三</tyh-link>
<tyh-link url="" type="danger">链接四</tyh-link>
<tyh-link url="" type="warning">链接五</tyh-link>
    `,
  lin2: `
<tyh-link :underline="false">链接一</tyh-link>
<tyh-link :underline="false" type="primary">链接二</tyh-link>
<tyh-link :underline="false" type="success">链接三</tyh-link>
<tyh-link :underline="false" type="danger">链接四</tyh-link>
<tyh-link :underline="false" type="warning">链接五</tyh-link>
    `,
  lin3: `
<tyh-link url="" prohibit>禁用链接一</tyh-link>
<tyh-link url="" prohibit type="primary">禁用链接二</tyh-link>
<tyh-link url="" prohibit type="success">禁用链接三</tyh-link>
<tyh-link url="" prohibit type="danger">禁用链接四</tyh-link>
<tyh-link url="" prohibit type="warning">禁用链接五</tyh-link>
    `,
  lin4: `
<tyh-link url="" icon="tyh-ui-favorite-filling">链接一</tyh-link>
<tyh-link url="" icon="tyh-ui-attachment" type="primary">链接二</tyh-link>
<tyh-link url="" icon="tyh-ui-customer-service" type="success">链接三</tyh-link>
<tyh-link url="" icon="tyh-ui-filter" type="danger">链接四</tyh-link>
<tyh-link url="" icon="tyh-ui-good" type="warning">链接五</tyh-link>
    `
}
// 文本框
const input = {
  inp1: `
<template>
  <tyh-input v-model="text1" />
</template>

<script setup>
import { ref } from 'vue'
const text1 = ref('')
</script>
    `,
  inp2: `
<template>
  <tyh-input type="text" v-model="text2" />
  <tyh-input type="password" v-model="text3" />
</template>

<script setup>
import { ref } from 'vue'
const text2 = ref('')
const text3 = ref('')
</script>
    `,
  inp3: `
<template>
  <tyh-input size="large" v-model="text4" />
  <tyh-input size="medium" v-model="text5" />
  <tyh-input size="small" v-model="text6" />
  <tyh-input size="mini" v-model="text7" />
</template>

<script setup>
import { ref } from 'vue'
const text4 = ref('')
const text5 = ref('')
const text6 = ref('')
const text7 = ref('')
</script>
    `,
  inp4: `
<template>
  <tyh-input v-model="text8" clear />
</template>

<script setup>
import { ref } from 'vue'
const text8 = ref('')
</script>
    `,
  inp5: `
<template>
  <tyh-input v-model="text9" icon="tyh-ui-electronics" />
</template>

<script setup>
import { ref } from 'vue'
const text9 = ref('')
</script>
    `,
  inp6: `
<template>
  <tyh-input v-model="text10" disabled />
</template>

<script setup>
import { ref } from 'vue'
const text10 = ref('')
</script>
    `,
  inp7: `
<template>
  <tyh-input v-model="text11" type="password" showPassword />
</template>

<script setup>
import { ref } from 'vue'
const text11 = ref('')
</script>
    `
}
// 导航栏
const menu = {
  men1: `
<tyh-menu>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
    `,
  men2: `
<tyh-menu theme="dark">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

<tyh-menu theme="light">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
    `,
  men3: `
<tyh-menu>
  <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
  <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
    `,
  men4: `
<tyh-menu theme="dark" mode="vertical">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

<tyh-menu theme="light" mode="vertical">
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
    `,
  men5: `
<template>
  <tyh-menu>
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
    <template v-slot:right>
      <tyh-button>右侧插槽</tyh-button>
    </template>
  </tyh-menu>

  <tyh-menu>
    <template v-slot:left>
      <tyh-switch v-model="false" />
    </template>
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
  </tyh-menu>

  <tyh-menu>
    <template v-slot:left>
      <tyh-avatar
        :size="5"
        round
        src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
      />
    </template>
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
    <template v-slot:right>
      <tyh-button simple>右侧插槽</tyh-button>
    </template>
  </tyh-menu>

  <tyh-menu mode="vertical" style="width: 200px">
    <template v-slot:left>
      <tyh-avatar
        :size="5"
        round
        src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
      />
    </template>
    <tyh-menu-item>首页</tyh-menu-item>
    <tyh-menu-item>内容</tyh-menu-item>
    <tyh-menu-item>设置</tyh-menu-item>
    <tyh-menu-item>回收站</tyh-menu-item>
    <template v-slot:right>
      <tyh-button simple>右侧插槽</tyh-button>
    </template>
  </tyh-menu>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(true)
</script>
  `
}
// 分割线
const division = {
  div1: `
<tyh-division></tyh-division>
<p>这是一段文字</p>
<tyh-division></tyh-division>
  `,
  div2: `
<tyh-division position="left">这是左边文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="center">这是中间文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="right">这是右边文字</tyh-division>
    `,
  div3: `
<tyh-division position="left" color="red">这是左边文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="center" color="blue">这是中间文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="right" color="green">这是右边文字</tyh-division>
    `,
  div4: `
<tyh-division position="left" margin="0px">这是左边文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="center" margin="20px">这是中间文字</tyh-division>
<p>这是一段文字</p>
<tyh-division position="right">这是右边文字</tyh-division>
    `,
  div5: `
<tyh-division position="left" color="red" icon="tyh-ui-githublogo" />
<p>这是一段文字</p>
<tyh-division position="center" color="blue" icon="tyh-ui-notification-filling"/>
<p>这是一段文字</p>
<tyh-division position="right" color="black" icon="tyh-ui-cry"/>
    `
}
// 面包屑
const crumbs = {
  cru1: `
<tyh-crumbs>
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
    `,
  cru2: `
<tyh-crumbs separator="tyh-ui-link">
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
    `,
  cru3: `
<tyh-crumbs>
  <tyh-crumbs-item to="/">首页</tyh-crumbs-item>
  <tyh-crumbs-item to="/student">学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>`
}
// icon
const icon = {
  icon1: `
<tyh-icon icon="tyh-ui-tyhui" />
<tyh-icon icon="tyh-ui-ashbin" />
<tyh-icon icon="tyh-ui-data-view" />
    `,
  icon2: `
<tyh-icon color="skyblue" icon="tyh-ui-favorite" />
<tyh-icon color="red" icon="tyh-ui-fabulous" />
<tyh-icon color="pink" icon="tyh-ui-good" />
    `,
  icon3: `
<tyh-icon size="50" icon="tyh-ui-hide" />
<tyh-icon size="40" icon="tyh-ui-shouye-xianxing" />
<tyh-icon size="30" icon="tyh-ui-huojian" />
    `
}
// 翻页
const turnpage = {
  tur1: `
<tyh-turn-page>
  <tyh-turn-page-item direction="left" url="">上一页</tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="">下一页</tyh-turn-page-item>
</tyh-turn-page>
    `,
  tur2: `
<tyh-turn-page center>
  <tyh-turn-page-item direction="left" url="">
    上一页 - 居中
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="">
    下一页 - 居中
  </tyh-turn-page-item>
</tyh-turn-page>
    `,
  tur3: `
<tyh-turn-page>
  <tyh-turn-page-item direction="left" url="" icon="tyh-ui-shouye-xianxing">
    首页
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="" icon="tyh-ui-direction-right">
    下一页
  </tyh-turn-page-item>
</tyh-turn-page>
    `
}
// 回到顶部
const back = {
  back1: `<tyh-back-top>Top</tyh-back-top>`,
  back2: ` <tyh-backTop bottom="150px" right="120px">Go</tyh-backTop>`,
  back3: `
<tyh-backTop bottom="100px">
  <tyh-icon icon="tyh-ui-top" color="#409eff" />
</tyh-backTop>
    `
}
// 提示框
const msg = {
  mes1: `
<template>
  <tyh-button @click="change1">默认提示</tyh-button>
  <tyh-button type="primary" @click="change2">主要提示</tyh-button>
  <tyh-button type="success" @click="change3">成功提示</tyh-button>
  <tyh-button type="danger" @click="change4">危险提示</tyh-button>
  <tyh-button type="warning" @click="change5">警告提示</tyh-button>
</template>

<script setup>
import { Message } from 'tyh-ui2'
function change1 () {
  Message({ message: '默认提示', type: 'default', round: true })
}
function change2 () {
  Message({ message: '主要提示', type: 'primary', round: true })
}
function change3 () {
  Message({ message: '成功提示', type: 'success', round: true })
}
function change4 () {
  Message({ message: '危险提示', type: 'danger', round: true })
}
function change5 () {
  Message({ message: '警告提示', type: 'warning', round: true })
}
</script>
    `,
  mes2: `
<template>
  <tyh-button type="primary" @click="change6">展示5000毫秒</tyh-button>
</template>

<script setup>
import { Message } from 'tyh-ui2'
function change6 () {
  Message({ message: '5000毫秒后隐藏', type: 'primary', time: 5000 })
}
</script>
    `,
  mes3: `
<template>
  <tyh-button type="primary" @click="change7">点击提示</tyh-button>
</template>

<script setup>
import { Message } from 'tyh-ui2'
function change7 () {
  Message({ message: '主要提示', type: 'primary', icon: 'tyh-ui-smile' })
}
</script>
    `,
  mes4: `import { Message } from 'tyh-ui2'`,
  mes5: `
<template>
  <tyh-button type="primary" @click="change8">点击提示</tyh-button>
</template>

<script setup>
import { Message } from 'tyh-ui2'
function change8 () {
  Message({ message: '主要提示', type: 'primary', icon: 'tyh-ui-smile', showClose: true })
}
</script>
  `
}
// 骨架
const skeleton = {
  ske1: `
<tyh-skeleton />
<tyh-skeleton />
<tyh-skeleton />
    `,
  ske2: `
<tyh-skeleton round />
<tyh-skeleton round />
<tyh-skeleton round />
    `,
  ske3: `
<tyh-skeleton width="75%" />
<tyh-skeleton width="150px" />
<tyh-skeleton width="100px" height="100px" />
    `,
  ske4: `
<tyh-skeleton animation />
<tyh-skeleton animation />
<tyh-skeleton animation />
    `
}
// 提示
const alert = {
  ale1: `
<tyh-alert message="这是一个普通提示" />
<tyh-alert type="primary" message="这是一个主要提示" />
<tyh-alert type="success" message="这是一个成功提示" />
<tyh-alert type="danger" message="这是一个危险提示" />
<tyh-alert type="warning" message="这是一个警告提示" />
    `,
  ale2: `
<tyh-alert icon="tyh-ui-githublogo" message="这是一个普通提示" />
<tyh-alert icon="tyh-ui-home" type="primary" message="这是一个主要提示" />
<tyh-alert icon="tyh-ui-history" type="success" message="这是一个成功提示" />
<tyh-alert icon="tyh-ui-smile" type="danger" message="这是一个危险提示" />
<tyh-alert icon="tyh-ui-warning" type="warning" message="这是一个警告提示" />
    `,
  ale3: `
<template>
  <tyh-alert v-show="isShow1" close message="点击关闭普通提示" @close="isShow1 = false" />
  <tyh-alert v-show="isShow2" close type="primary" message="点击关闭主要提示" @close="isShow2 = false" />
  <tyh-alert v-show="isShow3" close type="success" message="点击关闭成功提示" @close="isShow3 = false" />
  <tyh-alert v-show="isShow4" close type="danger" message="点击关闭危险提示" @close="isShow4 = false" />
  <tyh-alert v-show="isShow5" close type="warning" message="点击关闭警告提示" @close="isShow5 = false" />
</template>

<script setup>
import { ref } from 'vue'
const isShow1 = ref(true)
const isShow2 = ref(true)
const isShow3 = ref(true)
const isShow4 = ref(true)
const isShow5 = ref(true)
</script>
    `,
  ale4: `
<tyh-alert center message="这是一个普通提示" />
<tyh-alert center type="primary" message="这是一个主要提示" />
<tyh-alert center type="success" message="这是一个成功提示" />
<tyh-alert center type="danger" message="这是一个危险提示" />
<tyh-alert center type="warning" message="这是一个警告提示" />
    `,
  ale5: `
<tyh-alert simple message="简约的普通提示" />
<tyh-alert simple type="primary" message="简约的主要提示" />
<tyh-alert simple type="success" message="简约的成功提示" />
<tyh-alert simple type="danger" message="简约的危险提示" />
<tyh-alert simple type="warning" message="简约的警告提示" />
    `
}
// 评分
const rate = {
  rate1: `
<template>
  <tyh-rate v-model="value1" />
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(2)
</script>
    `,
  rate2: `
<template>
  <tyh-rate v-model="value2" />
  <tyh-rate v-model="value2" color="red" voidColor="#eee" />
</template>

<script setup>
import { ref } from 'vue'
const value2 = ref(2)
</script>
    `,
  rate3: `
<template>
  <tyh-rate v-model="value3" showText />
  <tyh-rate v-model="value3" showText :sayText="['1星', '2星', '3星', '4星', '5星']" />
</template>

<script setup>
import { ref } from 'vue'
const value3 = ref(2)
</script>
    `
}
// 图片
const image = {
  img1: `
<tyh-image width="300px" src="https://tianyuhao.cn/v3/assets/giraffe.jpg" />
    `,
  img2: `
<template>
  <div class="fitBox">
    <div class="item" v-for="fit in fits" :key="fit">
      <span class="text">{{ fit }}</span>
      <tyh-image
        width="100px"
        height="100px"
        src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
        :fit="fit"
      />
    </div>
  </div>
</template>

<script setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
    `
}
// 头像
const avatar = {
  ava1: `
<tyh-avatar
  :size="10"
  src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
/>
    `,
  ava2: `
<tyh-avatar round src="https://tianyuhao.cn/v3/assets/giraffe.jpg" />
    `,
  ava3: `
<template>
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
</template>

<script setup>
const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
</script>
    `,
  ava4: `
<tyh-avatar border src="https://tianyuhao.cn/v3/assets/giraffe.jpg" />
<tyh-avatar
  border
  round
  src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
/>
    `,
  ava5: `
<tyh-avatar src="https://tianyuhao.cn2/v3/assets/giraffe.jpg" />
<tyh-avatar
  errorIcon="tyh-ui-githublogo"
  src="https://tianyuhao.cn2/v3/assets/giraffe.jpg"
/>
    `
}
// 布局
const container = {
  cont1: `
<template>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
    <tyh-footer>Footer</tyh-footer>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-main>Main</tyh-main>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-container>
      <tyh-aside width="200px">Aside</tyh-aside>
      <tyh-container>
        <tyh-main>Main</tyh-main>
        <tyh-footer>Footer</tyh-footer>
      </tyh-container>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
    </tyh-container>
  </tyh-container>

  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-container>
      <tyh-header>Header</tyh-header>
      <tyh-main>Main</tyh-main>
      <tyh-footer>Footer</tyh-footer>
    </tyh-container>
  </tyh-container>
</template>

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
    `
}
// 文字
const text = {
  text1: `
<tyh-text>这是一段普通文字</tyh-text>
<tyh-text type="primary">这是主要普通文字</tyh-text>
<tyh-text type="success">这是一段成功文字</tyh-text>
<tyh-text type="danger">这是一段危险文字</tyh-text>
<tyh-text type="warning">这是一段警告文字</tyh-text>
    `,
  text2: `
<tyh-text block>这是一段普通文字</tyh-text>
<tyh-text block type="primary">这是主要普通文字</tyh-text>
<tyh-text block type="success">这是一段成功文字</tyh-text>
<tyh-text block type="danger">这是一段危险文字</tyh-text>
<tyh-text block type="warning">这是一段警告文字</tyh-text>
    `,
  text3: `
<tyh-text block size="15">这是一段普通文字</tyh-text>
<tyh-text block size="18" type="primary">这是主要普通文字</tyh-text>
<tyh-text block size="21" type="success">这是一段成功文字</tyh-text>
<tyh-text block size="24" type="danger">这是一段危险文字</tyh-text>
<tyh-text block size="27" type="warning">这是一段警告文字</tyh-text>
    `,
  text4: `
<tyh-text block color="red">这是一段文字</tyh-text>
<tyh-text block color="skyblue" type="primary">这是主要文字</tyh-text>
<tyh-text block color="orange" type="success">这是一段文字</tyh-text>
<tyh-text block color="pink" type="danger">这是一段文字</tyh-text>
<tyh-text block color="black" type="warning">这是一段文字</tyh-text>
    `
}
// 表格
const tableCode = {
  tab1: `
<template>
  <tyh-table :data="tableData" :columns="columns" />
</template>

<script setup>
const columns = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
</script>
    `,
  tab2: `
<template>
  <tyh-table :data="tableData" :columns="columns" trHeight="50px" />
</template>

<script setup>
const columns = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
</script>
        `,
  tab3: `
<template>
  <tyh-table :data="tableData" :columns="columns" align="center" />
</template>

<script setup>
const columns = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
</script>
      `,
  tab4: `
<template>
  <tyh-table :data="tableData" :columns="columns" align="center" border zebra />
</template>

<script setup>
const columns = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
</script>
      `,
  tab5: `
<template>
  <tyh-table
    :data="tableData"
    :columns="columns"
    align="center"
    width="500px"
    height="200px"
  />
</template>

<script setup>
const columns = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
</script>
      `,
  tab6: `
<template>
  <tyh-table :data="tableData" :columns="columns" align="center" num />
</template>

<script setup>
const columns = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
</script>
            `,
  tab7: `
<template>
  <tyh-table
    :data="tableData"
    :columns="columns"
    align="center"
    num
    :important="[2, 4]"
  />
</template>

<script setup>
const columns = [
  {
    title: '日期',
    key: 'date'
  },
  {
    title: '姓名',
    key: 'name'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
</script>
    `,
  tab8: `
<template>
  <tyh-table :data="tableData" :columns="columns2" align="center" />
</template>

<script setup>
const columns2 = [
  {
    title: '日期',
    key: 'date',
    width: '100px'
  },
  {
    title: '姓名',
    key: 'name',
    width: '100px'
  },
  {
    title: '地址',
    key: 'address'
  }
]
const tableData = [
  {
    date: '2021-11-02',
    name: '张三',
    address: '浙江省杭州市上城区 231 号'
  },
  {
    date: '2021-12-04',
    name: '李四',
    address: '浙江省杭州市西湖区 12 号'
  },
  {
    date: '2021-10-01',
    name: '王英',
    address: '浙江省杭州市临平区 2 号'
  },
  {
    date: '2021-11-03',
    name: '李逵',
    address: '浙江省杭州市拱墅区 199 号'
  }
]
</script>
        `
}
// 开关
const Switch = {
  swi1: `
<template>
  <tyh-switch v-model="value1" />
  <tyh-switch v-model="value1" />
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(true)
</script>
    `,
  swi2: `
<template>
  <tyh-switch v-model="value2" closeText="关闭" openText="开启" />
</template>

<script setup>
import { ref } from 'vue'
const value2 = ref(true)
</script>
    `,
  swi3: `
<template>
  <tyh-switch v-model="value3" disabled />
  <tyh-switch v-model="value4" disabled />
</template>

<script setup>
import { ref } from 'vue'
const value3 = ref(true)
const value4 = ref(false)
</script>
    `,
  swi4: `
<template>
  <tyh-switch v-model="value5" closeColor="red" openColor="green" />
  <tyh-switch v-model="value6" closeColor="black" openColor="#eee" />
</template>

<script setup>
import { ref } from 'vue'
const value5 = ref(true)
const value6 = ref(false)
</script>
    `,
  swi5: `
<template>
  <tyh-switch v-model="value7" :width="60" />
</template>

<script setup>
import { ref } from 'vue'
const value7 = ref(true)
</script>
    `
}
// 日历
const calendar = {
  cal1: `
<template>
  <tyh-calendar v-model="value" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>
    `,
  cal2: `
<template>
  <tyh-calendar v-model="value" :cellWidth="70" />
  <tyh-calendar v-model="value" :cellWidth="10" />
</template>

<script setup>
import { ref } from 'vue'
const value = ref(new Date())
</script>
    `
}
// 单选框
const radio = {
  rad1: `
<template>
  <tyh-radio v-model="radio1" label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio1" label="备选项3">备选项3</tyh-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio1 = ref('备选项1')
</script>
  `,
  rad2: `
<template>
  <tyh-radio v-model="radio2" disabled label="备选项1">备选项1</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项2">备选项2</tyh-radio>
  <tyh-radio v-model="radio2" label="备选项3">备选项3</tyh-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio2 = ref('备选项2')
</script>
  `,
  rad3: `
<template>
  <tyh-radio v-model="radio3" label="备选项1" border>备选项1</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项2" border>备选项2</tyh-radio>
  <tyh-radio v-model="radio3" label="备选项3" border>备选项3</tyh-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio3 = ref('备选项3')
</script>
  `,
  rad4: `
<template>
  <tyh-radio v-model="radio4" label="备选项1" border size="large">备选项1</tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="large">备选项2</tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="large">备选项3</tyh-radio>

  <tyh-radio v-model="radio4" label="备选项1" border size="medium">备选项1</tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="medium">备选项2</tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="medium">备选项3</tyh-radio>

  <tyh-radio v-model="radio4" label="备选项1" border size="small">备选项1</tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="small">备选项2</tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="small">备选项3</tyh-radio>

  <tyh-radio v-model="radio4" label="备选项1" border size="mini">备选项1</tyh-radio>
  <tyh-radio v-model="radio4" label="备选项2" border size="mini">备选项2</tyh-radio>
  <tyh-radio v-model="radio4" label="备选项3" border size="mini">备选项3</tyh-radio>
</template>

<script setup>
import { ref } from 'vue'
const radio4 = ref('备选项1')
</script>
  `
}
// 树形控件
const tree = {
  tre1: `
<template>
  <tyh-tree :data="data" />
</template>

<script setup>
const data = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [
          {
            label: '三级 1-1-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 2',
    children: [
      {
        label: '二级 2-1',
        children: [
          {
            label: '三级 2-1-1'
          }
        ]
      },
      {
        label: '二级 2-2',
        children: [
          {
            label: '三级 2-2-1'
          }
        ]
      }
    ]
  },
  {
    label: '一级 3',
    children: [
      {
        label: '二级 3-1',
        children: [
          {
            label: '三级 3-1-1'
          }
        ]
      },
      {
        label: '二级 3-2',
        children: [
          {
            label: '三级 3-2-1'
          }
        ]
      }
    ]
  }
]
</script>
  `
}
// 页头
const pageHeader = {
  pageHeader1: `
<template>
  <tyh-page-header title="返回上一层" content="详情页面" @back="goBack" />
</template>

<script setup>
const goBack = () => console.log('goBack')
</script>
  `,
  pageHeader2: `
<template>
  <tyh-page-header content="详情页面" icon="tyh-ui-close" />
</template>
  `
}
// 信息栏
const info = {
  inf1: `
<tyh-info userInfo="Tyh2001" describe="hello world">
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
  </template>
</tyh-info>
  `,
  inf2: `
<tyh-info userInfo="Tyh2001" describe="hello world">
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
    />
  </template>
  <template v-slot:right>
    <tyh-button simple type="primary" size="mini">关注 TA</tyh-button>
  </template>

  <template v-slot:body>
    <tyh-text block type="success">这是我今天拍的照片，好看吗？</tyh-text>
    <tyh-image
      width="300px"
      src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
    />
  </template>

  <template v-slot:footer>
    <tyh-text type="danger">2022-02-12</tyh-text>
  </template>
</tyh-info>
  `,
  inf3: `
<tyh-info
  userInfo="Tyh2001"
  describe="hello world"
  linkUrl="https://tianyuhao.cn"
>
  <template v-slot:photo>
    <tyh-avatar
      round
      :size="5"
      src="https://tianyuhao.cn/v3/assets/giraffe.jpg"
    />
  </template>
</tyh-info>
  `
}
// 文本域
const textarea = {
  text1: `
<template>
  <tyh-textarea v-model="value1" placeholder="请输入内容..." />
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref('')
</script>
    `,
  text2: `
<template>
  <tyh-textarea v-model="value7" />
  <tyh-textarea v-model="value8" resize="vertical" />
  <tyh-textarea v-model="value9" resize="horizontal" />
  <tyh-textarea v-model="value10" resize="none" />
</template>

<script setup>
import { ref } from 'vue'
const value7 = ref('随意拉伸')
const value8 = ref('只能纵向拉伸')
const value9 = ref('只能横向拉伸')
const value10 = ref('禁止拉伸')
</script>
    `,
  text3: `
<template>
  <tyh-textarea v-model="value3" rows="5" />
  <tyh-textarea v-model="value4" cols="10" />
</template>

<script setup>
import { ref } from 'vue'
const value3 = ref('')
const value4 = ref('')
</script>
    `,
  text4: `
<template>
  <tyh-textarea v-model="value5" disabled />
</template>

<script setup>
import { ref } from 'vue'
const text5 = ref('禁用状态')
</script>
    `,
  text5: `
<template>
  <tyh-textarea v-model="value6" max="10" />
</template>

<script setup>
import { ref } from 'vue'
const value6 = ref('')
</script>
    `
}
// 选择器
const select = {
  sel1: `
<template>
  <tyh-select v-model="value" placeholder="请选择">
    <tyh-option
      v-for="(item, index) in options"
      :key="index"
      :value="item.value"
    >
      {{ item.label }}
    </tyh-option>
  </tyh-select>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('选项2')
const options = [
  {
    value: '选项1',
    label: '上海'
  }, {
    value: '选项2',
    label: '北京'
  }, {
    value: '选项3',
    label: '杭州'
  }, {
    value: '选项4',
    label: '天津'
  }, {
    value: '选项5',
    label: '大连'
  }
]
</script>
  `
}
// 标注
const tagging = {
  tag1: `
<tyh-tagging>标注1</tyh-tagging>
<tyh-tagging type="primary">标注2</tyh-tagging>
<tyh-tagging type="success">标注3</tyh-tagging>
<tyh-tagging type="danger">标注4</tyh-tagging>
<tyh-tagging type="warning">标注5</tyh-tagging>
  `,
  tag2: `
<tyh-tagging size="14">
  使用方便，配置简单，目录清晰，结构简单，组件轻量级，上手简单，像复制粘贴一样容易。
</tyh-tagging>
  `
}
// 通知
const notification = {
  not1: `
import { Notification } from 'tyh-ui2'
  `,
  not2: `
<template>
  <tyh-button type="primary" @click="open1">展示通知</tyh-button>
</template>

<script setup>
import { Notification } from 'tyh-ui2'
function open1 () {
  Notification({
    title: '提示',
    message: '这里是提示的文案'
  })
}
</script>
  `,
  not3: `
<template>
  <tyh-button type="primary" @click="open2">主要通知</tyh-button>
  <tyh-button type="success" @click="open3">成功通知</tyh-button>
  <tyh-button type="danger" @click="open4">危险通知</tyh-button>
  <tyh-button type="warning" @click="open5">警告通知</tyh-button>
</template>

<script setup>
import { Notification } from 'tyh-ui2'
function open2 () {
  Notification({
    title: '主要提示',
    message: '这是一个主要提示',
    type: 'primary'
  })
}
function open3 () {
  Notification({
    title: '成功提示',
    message: '这是一个成功提示',
    type: 'success'
  })
}
function open4 () {
  Notification({
    title: '危险提示',
    message: '这是一个危险提示',
    type: 'danger'
  })
}
function open5 () {
  Notification({
    title: '警告提示',
    message: '这是一个警告提示',
    type: 'warning'
  })
}
</script>
  `,
  not4: `
<template>
  <tyh-button type="primary" @click="open6">上左</tyh-button>
  <tyh-button type="primary" @click="open7">上右</tyh-button>
  <tyh-button type="primary" @click="open8">下左</tyh-button>
  <tyh-button type="primary" @click="open9">下右</tyh-button>
</template>

<script setup>
import { Notification } from 'tyh-ui2'
function open6 () {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    position: 'top-left'
  })
}
function open7 () {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    position: 'top-right'
  })
}
function open8 () {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    position: 'bottom-left'
  })
}
function open9 () {
  Notification({
    title: '提示',
    message: '这里是提示的文案',
    position: 'bottom-right'
  })
}
</script>
  `,
  not5: `
<template>
  <tyh-button type="primary" @click="open10">4000 毫秒后自动关闭</tyh-button>
</template>

<script setup>
import { Notification } from 'tyh-ui2'
function open10 () {
  Notification({
    title: '提示',
    message: '4000 毫秒后自动关闭',
    time: 4000
  })
}
</script>
  `
}
const drawer = {
  dra1: `
<template>
  <tyh-button type="primary" @click="open = true">点我打开</tyh-button>

  <tyh-radio v-model="radio" label="right">从右面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="left">从左面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="bottom">从下面弹出</tyh-radio>
  <tyh-radio v-model="radio" label="top">从上面弹出</tyh-radio>

  <tyh-drawer v-model="open" :direction="radio" title="这是标题">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
</template>

<script setup>
import { ref } from 'vue'
const radio = ref('right')
const open = ref(false)
</script>
  `,
  dra2: `
<template>
  <tyh-button type="primary" @click="open2 = true">点我打开</tyh-button>

  <tyh-drawer v-model="open2" direction="right" :showHeader="false">
    hello，欢迎使用 tyh-ui!
  </tyh-drawer>
</template>

<script setup>
import { ref } from 'vue'
const open2 = ref(false)
</script>
  `,
  dra3: `
<template>
  <tyh-button type="primary" @click="open3 = true">点我打开</tyh-button>

  <tyh-drawer v-model="open3" direction="right" size="50%">
    <tyh-button type="primary" @click="open4 = true">点我打开内层</tyh-button>
    hello，欢迎使用 tyh-ui!
    <tyh-drawer v-model="open4" direction="right"> 这是内层的 </tyh-drawer>
  </tyh-drawer>
</template>

<script setup>
import { ref } from 'vue'
const open3 = ref(false)
const open4 = ref(false)
</script>
  `
}
// 对话框
const dialog = {
  dia1: `
<template>
  <tyh-button simple @click="open1 = true">点我打开</tyh-button>

  <tyh-dialog v-model="open1" title="这是标题">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open1 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
</template>

<script setup>
import { ref } from 'vue'
const open1 = ref(false)
</script>
  `,
  dia2: `
<template>
  <tyh-button simple @click="open2 = true">点我打开</tyh-button>

  <tyh-dialog v-model="open2" title="这是标题" :showHeader="false">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <template v-slot:footer>
      <tyh-button type="primary" style="margin-right: 20px">确定</tyh-button>
      <tyh-button type="primary" simple @click="open2 = false">取消</tyh-button>
    </template>
  </tyh-dialog>
</template>

<script setup>
import { ref } from 'vue'
const open2 = ref(false)
</script>
  `,
  dia3: `
<template>
  <tyh-button simple @click="open3 = true">点我打开第一层</tyh-button>

  <tyh-dialog v-model="open3" title="这是标题" width="50%">
    欢迎使用 tyh-ui 的 dialog 对话框！
    <tyh-button type="success" @click="open4 = true">打开第二层</tyh-button>
    <tyh-dialog v-model="open4" title="这是标题" top="10vh">
      hi～我是第二层的 dialog 对话框
    </tyh-dialog>
  </tyh-dialog>
</template>

<script setup>
import { ref } from 'vue'
const open3 = ref(false)
const open4 = ref(false)
</script>
  `
}

export {
  install,
  button,
  list,
  card,
  tag,
  link,
  input,
  menu,
  division,
  crumbs,
  icon,
  turnpage,
  back,
  msg,
  skeleton,
  alert,
  rate,
  image,
  avatar,
  container,
  text,
  tableCode,
  Switch,
  calendar,
  radio,
  tree,
  pageHeader,
  info,
  textarea,
  select,
  tagging,
  notification,
  drawer,
  dialog
}
