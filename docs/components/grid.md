---
title: Grid
---

# Grid 网格布局

## 基础用法

- 布局一

<ClientOnly>
   <grid-demo1></grid-demo1>
</ClientOnly>

- 布局二 gutter

<ClientOnly>
   <grid-demo2></grid-demo2>
</ClientOnly>

- 布局三 offset

<ClientOnly>
   <grid-demo3></grid-demo3>
</ClientOnly>

## Attributes

- g-row Attributes

| 参数   | 说明   | 类型  | 可选值 | 默认值 |
| -------- | -------- | ------- | :------: | :------: |
| gutter | 栅格间隔 | Number/String  | --  | 0 |
| align     | flex布局下的水平排列方式 | String  | left/right/center |left |

- g-col Attributes

| 参数   | 说明   | 类型  | 可选值 | 默认值 |
| -------- | -------- | ------- | :------: | :------: |
| span | 栅格占据的列数 | Number/String  | --  |  24  |
| offset  | 栅格左侧的间隔格数 | Number/String  | --   | 0 |

