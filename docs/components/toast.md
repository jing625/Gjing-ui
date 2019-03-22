---
title: Toast
---

# Toast 提示

## 基础用法


- 编辑消息体内容
- toast出现的位置
- 自动关闭及设置自动关闭

<ClientOnly>
   <toast-demo1></toast-demo1>
</ClientOnly>

- 点击关闭
- 关闭回调函数
- 关闭文本可修改

<ClientOnly>
   <toast-demo2></toast-demo2>
</ClientOnly>

- 消息体支持HTML
<ClientOnly>
   <toast-demo3></toast-demo3>
</ClientOnly>

## Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ------- | ------ | ------ | :------: | :------: |
| autoClose | 是否自动关闭或关闭时间 | Boolean/Number | -- | 5 |
| closeButton | 关闭按钮的内容或触发内容 | Object | -- | '关闭' |
| enableHtml | 是否开启HTML | Boolean | -- | false |
| position | 弹出位置 | String | top/bottom/middle | top |

注意：
- autoClose为false时，closeButton将会显示默认值，除非自己写obj
- autoClose为Number时，closeButton将不显示

## 实现逻辑

- 使用plugin，用户使用Vue.use(plugin)可以避免工程问题：1）挂在原型链名字重复；2）引用Vue版本不一致；
- JS动态创建组件

```
let Constructor = Vue.extend(Toast);
let toast = new Constructor({propsData});
toast.$slots.default = message;
//slots放在$mount前面
toast.$mount();
document.body.appendChild(toast.$el);
```

- props的属性的默认值不能是一个对象，但可以是一个函数返回一个对象
- 假slot:<div v-html="$slots.default"></div> 实现可以传html进入插槽
- 解决text传入过多的内容，高度自适应。高度写成最小高度，那么子元素的高度100%就不生效了
- 如果眼睛看到的不为0 ，而JS打出来是0，一般就是异步的问题，解决方案尝试用this.$nextTick（()=>{}）加入到队列中
