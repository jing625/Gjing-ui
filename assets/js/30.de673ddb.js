(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{327:function(t,e,s){"use strict";s.r(e);var i=s(1),_=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("ClientOnly",[s("toast-demo1")],1),t._v(" "),t._m(3),t._v(" "),s("ClientOnly",[s("toast-demo2")],1),t._v(" "),s("ul",[s("li",[t._v("消息体支持HTML\n"),s("ClientOnly",[s("toast-demo3")],1)],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("注意：")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),s("ul",[s("li",[t._v("props的属性的默认值不能是一个对象，但可以是一个函数返回一个对象")]),t._v(" "),s("li",[t._v("假slot:"),s("div",{domProps:{innerHTML:t._s(t.$slots.default)}}),t._v(" 实现可以传html进入插槽")]),t._v(" "),s("li",[t._v("解决text传入过多的内容，高度自适应。高度写成最小高度，那么子元素的高度100%就不生效了")]),t._v(" "),s("li",[t._v("如果眼睛看到的不为0 ，而JS打出来是0，一般就是异步的问题，解决方案尝试用this.$nextTick（()=>{}）加入到队列中")])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"toast-提示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#toast-提示","aria-hidden":"true"}},[this._v("#")]),this._v(" Toast 提示")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基础用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础用法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("编辑消息体内容")]),this._v(" "),e("li",[this._v("toast出现的位置")]),this._v(" "),e("li",[this._v("自动关闭及设置自动关闭")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("点击关闭")]),this._v(" "),e("li",[this._v("关闭回调函数")]),this._v(" "),e("li",[this._v("关闭文本可修改")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"attributes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attributes","aria-hidden":"true"}},[this._v("#")]),this._v(" Attributes")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("可选值")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("autoClose")]),t._v(" "),s("td",[t._v("是否自动关闭或关闭时间")]),t._v(" "),s("td",[t._v("Boolean/Number")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("closeButton")]),t._v(" "),s("td",[t._v("关闭按钮的内容或触发内容")]),t._v(" "),s("td",[t._v("Object")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("'关闭'")])]),t._v(" "),s("tr",[s("td",[t._v("enableHtml")]),t._v(" "),s("td",[t._v("是否开启HTML")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("--")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[t._v("弹出位置")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("top/bottom/middle")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("top")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("autoClose为false时，closeButton将会显示默认值，除非自己写obj")]),this._v(" "),e("li",[this._v("autoClose为Number时，closeButton将不显示")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"实现逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现逻辑","aria-hidden":"true"}},[this._v("#")]),this._v(" 实现逻辑")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("使用plugin，用户使用Vue.use(plugin)可以避免工程问题：1）挂在原型链名字重复；2）引用Vue版本不一致；")]),this._v(" "),e("li",[this._v("JS动态创建组件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("let Constructor = Vue.extend(Toast);\nlet toast = new Constructor({propsData});\ntoast.$slots.default = message;\n//slots放在$mount前面\ntoast.$mount();\ndocument.body.appendChild(toast.$el);\n")])])])}],!1,null,null,null);e.default=_.exports}}]);