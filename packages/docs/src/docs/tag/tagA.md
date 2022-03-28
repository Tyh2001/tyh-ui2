# Tag 标签

## 基本使用

标签的基本使用

<tyh-tag>标签一</tyh-tag>
<tyh-tag type="primary">标签二</tyh-tag>
<tyh-tag type="success">标签三</tyh-tag>
<tyh-tag type="danger">标签四</tyh-tag>
<tyh-tag type="warning">标签五</tyh-tag>

```html
<tyh-tag>标签一</tyh-tag>
<tyh-tag type="primary">标签二</tyh-tag>
<tyh-tag type="success">标签三</tyh-tag>
<tyh-tag type="danger">标签四</tyh-tag>
<tyh-tag type="warning">标签五</tyh-tag>
```

## 不同尺寸

size 属性可以配置不同的尺寸

<tyh-tag type="primary">标签</tyh-tag>
<tyh-tag size="small" type="primary">标签</tyh-tag>
<tyh-tag size="mini" type="primary">标签</tyh-tag>

```html
<tyh-tag type="primary">标签</tyh-tag>
<tyh-tag size="small" type="primary">标签</tyh-tag>
<tyh-tag size="mini" type="primary">标签</tyh-tag>
```

## 圆角标签

round 属性可以配置圆角显示

<tyh-tag round>标签一</tyh-tag>
<tyh-tag round type="primary">标签二</tyh-tag>
<tyh-tag round type="success">标签三</tyh-tag>
<tyh-tag round type="danger">标签四</tyh-tag>
<tyh-tag round type="warning">标签五</tyh-tag>

```html
<tyh-tag round>标签一</tyh-tag>
<tyh-tag round type="primary">标签二</tyh-tag>
<tyh-tag round type="success">标签三</tyh-tag>
<tyh-tag round type="danger">标签四</tyh-tag>
<tyh-tag round type="warning">标签五</tyh-tag>
```

## 可关闭

设置 isclose 属性可以定义一个标签是否可移除

动态编辑标签可以通过点击标签关闭按钮后触发的 onClose 事件来实现
