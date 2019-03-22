---
title: Collapse
---

# Collapse 折叠面板

## 基础用法

- 设置默认打开的面板
- 可以同时展开多个面板

<ClientOnly>
   <collapse-demo1></collapse-demo1>
</ClientOnly>

- 每次仅展示一个面板

<ClientOnly>
   <collapse-demo2></collapse-demo2>
</ClientOnly>

## Attributes

- vi-collapse Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| single | 是否显示单项 | Boolean | -- | false |
| selected | 被选择的项 | Array | -- | -- |
备注：如果selected绑定的是参数，想要实现双向绑定请在后面加上.sync

- vi-collapse-item Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| title | 单项小标题 | String | -- | -- |
| name | 选择标记 | String | -- | -- |

## 实现逻辑

- 单向数据流
collapse-item自己得到了点击不更改状态，但通知collapse。由collapse通知所有的item后再修改
