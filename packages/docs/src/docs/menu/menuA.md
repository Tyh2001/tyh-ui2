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

collapse 属性可以配置是否折叠导航栏，请注意，在折叠的导航栏中，title 必须使用 `span` 标签进行包裹才能正常工作。
