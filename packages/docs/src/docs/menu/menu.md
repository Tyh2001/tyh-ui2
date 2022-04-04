# Menu 导航栏

## 基本使用

导航栏的基本使用

<tyh-menu>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

```html
<tyh-menu>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
```

## 主题配置

通过 theme 属性可以配置主题

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

```html
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
```

## 禁用状态

通过 prohibit 属性可以配置子组件链接是否禁用

<tyh-menu>
  <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
  <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>

```html
<tyh-menu>
  <tyh-menu-item prohibit url="/home">首页</tyh-menu-item>
  <tyh-menu-item prohibit url="/abc">内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
</tyh-menu>
```

## 不同排列状态

mode 属性可以配置不同的排列状态

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

```html
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
```

## 左右插槽

left 插槽可以定制左侧自定义内容

right 插槽可以定制右侧自定义内容

<tyh-menu>
  <template v-slot:left>
    <tyh-avatar
      :size="5"
      round
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
    />
  </template>
  <tyh-menu-item>首页</tyh-menu-item>
  <tyh-menu-item>内容</tyh-menu-item>
  <tyh-menu-item>设置</tyh-menu-item>
  <tyh-menu-item>回收站</tyh-menu-item>
  <template v-slot:right>
    <tyh-button style="margin:0" simple>右侧插槽</tyh-button>
  </template>
</tyh-menu>

```html
<tyh-menu>
  <template v-slot:left>
    <tyh-avatar
      :size="5"
      round
      src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"
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
```

## Attributes

tyh-menu

| 参数   | 说明             | 类型    | 可选值                | 默认值     |
| ------ | ---------------- | ------- | --------------------- | ---------- |
| theme  | 主题颜色         | string  | dark / light          | dark       |
| shadow | 底部是否显示阴影 | boolean | ——                    | false      |
| mode   | 排列方式         | string  | horizontal / vertical | horizontal |

tyh-menu-item

| 参数     | 说明       | 类型    | 可选值 | 默认值 |
| -------- | ---------- | ------- | ------ | ------ |
| to       | 跳转的路径 | string  | ——     | ——     |
| prohibit | 是否禁用   | boolean | ——     | ——     |

<tyh-turn-page style="margin: 50px 0">
  <tyh-turn-page-item direction="left" url="/component/input">
    Input 输入框
  </tyh-turn-page-item>
  <tyh-turn-page-item direction="right" url="/component/division">
    Division 分割线
  </tyh-turn-page-item>
</tyh-turn-page>
