# Alert 提示

## 基本使用

提示的基本使用

message 属性可以配置提示文字

type 属性可以配置类型

<tyh-alert message="这是一个普通提示" />
<tyh-alert type="primary" message="这是一个主要提示" />
<tyh-alert type="success" message="这是一个成功提示" />
<tyh-alert type="danger" message="这是一个危险提示" />
<tyh-alert type="warning" message="这是一个警告提示" />

```html
<tyh-alert message="这是一个普通提示" />
<tyh-alert type="primary" message="这是一个主要提示" />
<tyh-alert type="success" message="这是一个成功提示" />
<tyh-alert type="danger" message="这是一个危险提示" />
<tyh-alert type="warning" message="这是一个警告提示" />
```

## 带有 icon

icon 属性可以配置 icon
<tyh-alert icon="tyh-ui-githublogo" message="这是一个普通提示" />
<tyh-alert icon="tyh-ui-home" type="primary" message="这是一个主要提示" />
<tyh-alert icon="tyh-ui-history" type="success" message="这是一个成功提示" />
<tyh-alert icon="tyh-ui-smile" type="danger" message="这是一个危险提示" />
<tyh-alert icon="tyh-ui-warning" type="warning" message="这是一个警告提示" />

```html
<tyh-alert icon="tyh-ui-githublogo" message="这是一个普通提示" />
<tyh-alert icon="tyh-ui-home" type="primary" message="这是一个主要提示" />
<tyh-alert icon="tyh-ui-history" type="success" message="这是一个成功提示" />
<tyh-alert icon="tyh-ui-smile" type="danger" message="这是一个危险提示" />
<tyh-alert icon="tyh-ui-warning" type="warning" message="这是一个警告提示" />
```

## 可以关闭的

close 属性可以配置宽度

动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现
