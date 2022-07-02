# Avatar 头像

## 基本使用

头像的基本使用

src 属性可以添加图片路径

size 可以配置头像大小

<tyh-avatar :size="10" src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg"/>

```html
<tyh-avatar :size="10" src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
```

## 配置圆角

round 属性配置头像的圆角

<tyh-avatar round src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />

```html
<tyh-avatar round src="https://tianyuhao.cn/images/tyh-ui/giraffe.jpg" />
```

## 如何适应容器框

fit 属性配置头像如何适应到容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
