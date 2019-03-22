---
title: 快速上手
---

# 引入
一般在webpack入口页面main.js中如下配置：
```
import Vue from 'vue'
import GjingUI from 'gjing-ui'

Vue.use(GjingUI)
```
# 特别提醒
使用本框架前，需要使用border-box盒模型，否则会影响样式。
```
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
