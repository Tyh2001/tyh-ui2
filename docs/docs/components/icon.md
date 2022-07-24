# Icon 图标

## 基本使用

`icon` 的基本使用

通过 `icon` 属性来给 `icon` 添加类名，来显示不同的图标

<tyh-icon icon="tyh-ui-tyhui" />
<tyh-icon icon="tyh-ui-ashbin" />
<tyh-icon icon="tyh-ui-data-view" />

::: details 显示代码

```html
<tyh-icon icon="tyh-ui-tyhui" />
<tyh-icon icon="tyh-ui-ashbin" />
<tyh-icon icon="tyh-ui-data-view" />
```

:::

## 配置颜色

`color` 属性改变 `icon` 的颜色

<tyh-icon color="skyblue" icon="tyh-ui-favorite" />
<tyh-icon color="red" icon="tyh-ui-fabulous" />
<tyh-icon color="pink" icon="tyh-ui-good" />

::: details 显示代码

```html
<tyh-icon color="skyblue" icon="tyh-ui-favorite" />
<tyh-icon color="red" icon="tyh-ui-fabulous" />
<tyh-icon color="pink" icon="tyh-ui-good" />
```

:::

## 配置大小

`size` 属性可以改变 `icon` 的大小

这里采用的是字体大小形式，只需要传递具体数值，并不需要传递单位

<tyh-icon size="50" icon="tyh-ui-hide" />
<tyh-icon size="40" icon="tyh-ui-shouye-xianxing" />
<tyh-icon size="30" icon="tyh-ui-huojian" />

::: details 显示代码

```html
<tyh-icon size="50" icon="tyh-ui-hide" />
<tyh-icon size="40" icon="tyh-ui-shouye-xianxing" />
<tyh-icon size="30" icon="tyh-ui-huojian" />
```

:::

## Attributes

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| ----- | -------- | ------ | ------ | ------ |
| icon  | 类名     | string | ——     | ——     |
| color | 颜色     | string | ——     | ——     |
| size  | 字体大小 | string | ——     | 16     |

## Icon 集合

点击即可复制代码
