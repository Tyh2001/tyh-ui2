# Crumbs 面包屑

## 基本使用

面包屑的基本用法

<tyh-crumbs>
  <tyh-crumbs-item>首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>

::: details 显示代码

```html
<tyh-crumbs>
  <tyh-crumbs-item>首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
```

:::

## 不同的分隔符

通过给父组件 `separator` 属性可以配置不同的分隔符，使用 `icon` 类名

<tyh-crumbs separator="tyh-ui-link">
  <tyh-crumbs-item>首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>

::: details 显示代码

```html
<tyh-crumbs separator="tyh-ui-link">
  <tyh-crumbs-item>首页</tyh-crumbs-item>
  <tyh-crumbs-item>学员管理</tyh-crumbs-item>
  <tyh-crumbs-item>文章管理</tyh-crumbs-item>
  <tyh-crumbs-item>设置</tyh-crumbs-item>
</tyh-crumbs>
```

:::

## Tyh-crumbs Attributes

| 参数      | 说明                | 类型   | 可选值 | 默认值            |
| --------- | ------------------- | ------ | ------ | ----------------- |
| separator | 分隔符，icon 的类名 | string | ——     | tyh-ui-xiexian-01 |
