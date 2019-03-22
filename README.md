# GjingUI - 一个Vue UI 组件

[![Build Status](https://www.travis-ci.org/jing625/gulu-demo.svg?branch=master)](https://www.travis-ci.org/jing625/gulu-demo)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，希望对你有用。

## 开始使用


1. 添加 CSS 样式
  使用本框架前，请在 CSS 中开启 border-box

  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。


2. 安装 gjing-ui
  ```
  npm i --save gjing-ui
  ```
3. 引入 gjing-ui
  ```
  import {Button, ButtonGroup, Icon} from 'gjing-ui'
  import 'gjing-ui/dist/index.css'
  export default {
    name: 'app',
    components: {
      'g-button': Button,
      'g-icon': Icon
    }
  }
  ```

## 文档 


## 联系方式



