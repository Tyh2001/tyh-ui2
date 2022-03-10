# 目前的问题

记录一些目前组件库存在的一些问题，记录以后需要更新的地方。

使用下面方式记录是否解决

- [x] 已解决
- [ ] 未解决

## 2022-03-09

- [ ] Menu 导航栏组件鼠标 hover 样式未添加
- [ ] Tree 组件尚未完善
- [ ] Select 选择器组件可以考虑添加更多配置项
- [ ] Calendar 日历组件的头部翻页样式由按钮改为 icon
- [ ] Image 图片、Avatar 头像组件计划添加图片懒加载
- [ ] Skeleton 骨架的动画效果可以做的更好
- [ ] 代码规范：引入 eslint+prettier 使用 commitizen 对提交信息规范化
- [ ] 压缩：减小体积，极少的依赖第三方库，进行 gizp 压缩
- [ ] 支持按需加载 默认支持 esm 的 tree shaking
- [ ] 使用 vitest + cypress 进行测试，其中单元测试率覆盖超过 80%，并且在持续攀升中

## 2022-03-10

**格式化配置**

- [ ] 加入忽略格式化压缩样式文件 `src\packages\tyhUi\style\index.css`
- [ ] 加入忽略格式化配置文件 `src\packages\tyhUi\package.json`
- [ ] 函数名和括号前需要有一个空格的 eslint 配置
