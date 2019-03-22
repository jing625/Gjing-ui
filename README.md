# GjingUI - 一个Vue UI 组件

[![Build Status](https://www.travis-ci.org/jing625/Gjing-ui.svg?branch=master)](https://www.travis-ci.org/jing625/Gjing-ui)![NPM](https://img.shields.io/npm/l/gjing-ui.svg)

## 介绍

这是我出于提升自己对Vue和组件化开发的理解而制作的一个UI组件库，希望对你有用，目前还有很多不足，欢迎大家指正。
本项目正在不断完善更新中，仅供学习使用，切勿在生产环境中使用

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
  import {Button,Icon} from 'gjing-ui'
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

[文档链接](https://jing625.github.io/Gjing-ui/)

## 联系方式
邮箱： lgjing625@foxmail.com



