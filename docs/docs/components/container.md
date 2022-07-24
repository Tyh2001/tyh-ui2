# Container 布局容器

## 基本使用

用于布局的容器组件，方便快速搭建页面的基本结构：

`<tyh-container>`：外层容器

`<tyh-header>`：顶栏容器

`<tyh-aside>`：侧边栏容器

`<tyh-main>`：主要区域容器

`<tyh-footer>`：底栏容器

常见页面布局

<tyh-container>
  <tyh-header>Header</tyh-header>
  <tyh-main>Main</tyh-main>
</tyh-container>

<br />

<tyh-container>
  <tyh-header>Header</tyh-header>
  <tyh-main>Main</tyh-main>
  <tyh-footer>Footer</tyh-footer>
</tyh-container>

<br />

<tyh-container>
  <tyh-aside width="200px">Aside</tyh-aside>
  <tyh-main>Main</tyh-main>
</tyh-container>

<br />

<tyh-container>
  <tyh-header>Header</tyh-header>
  <tyh-container>
    <tyh-aside width="200px">Aside</tyh-aside>
    <tyh-main>Main</tyh-main>
  </tyh-container>
</tyh-container>

<br />

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

<br />

<tyh-container>
  <tyh-aside width="200px">Aside</tyh-aside>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
  </tyh-container>
</tyh-container>

<br />

<tyh-container>
  <tyh-aside width="200px">Aside</tyh-aside>
  <tyh-container>
    <tyh-header>Header</tyh-header>
    <tyh-main>Main</tyh-main>
    <tyh-footer>Footer</tyh-footer>
  </tyh-container>
</tyh-container>

::: details 显示代码

```html
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
    background: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .tyh-aside {
    background: rgb(101, 173, 240);
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .tyh-main {
    background: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
```

:::

## Tyh-container Attributes

| 参数      | 说明             | 类型   | 可选值                | 默认值 |
| --------- | ---------------- | ------ | --------------------- | ------ |
| direction | 子元素的排列方向 | string | horizontal / vertical | ——     |

## Tyh-header Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 顶栏高度 | string | ——     | 60px   |

## Tyh-aside Attributes

| 参数  | 说明       | 类型   | 可选值 | 默认值 |
| ----- | ---------- | ------ | ------ | ------ |
| width | 侧边栏宽度 | string | ——     | 200px  |

## Tyh-footer Attributes

| 参数   | 说明     | 类型   | 可选值 | 默认值 |
| ------ | -------- | ------ | ------ | ------ |
| height | 底栏高度 | string | ——     | 60px   |

<style scoped>
  .tyh-header,
  .tyh-footer {
    background: #6b8bf5;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .tyh-aside {
    background: rgb(101, 173, 240);
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  .tyh-main {
    background: #3178c6;
    color: #fff;
    text-align: center;
    line-height: 160px;
  }
</style>
