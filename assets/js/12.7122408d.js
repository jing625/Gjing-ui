(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{213:function(e,t,n){},214:function(e,t,n){},243:function(e,t,n){"use strict";var s=n(213);n.n(s).a},244:function(e,t,n){"use strict";var s=n(214);n.n(s).a},246:function(e,t,n){},269:function(e,t,n){"use strict";n(54);var s=n(0),a={name:"GjingCollapse",props:{single:{type:Boolean,default:!1},selected:{type:Array}},data:function(){return{eventBus:new s.a}},provide:function(){return{eventBus:this.eventBus}},mounted:function(){var e=this;this.eventBus.$emit("update:selected",this.selected),this.eventBus.$on("update:addSelected",function(t){var n=JSON.parse(JSON.stringify(e.selected));e.single?n=[t]:n.push(t),e.eventBus.$emit("update:selected",n),e.$emit("update:selected",n)}),this.eventBus.$on("update:removeSelected",function(t){var n=JSON.parse(JSON.stringify(e.selected)),s=n.indexOf(t);n.splice(s,1),e.eventBus.$emit("update:selected",n),e.$emit("update:selected",n)})}},i=(n(243),n(1)),l=Object(i.a)(a,function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"collapse"},[this._t("default")],2)},[],!1,null,"18eeafb0",null);t.a=l.exports},271:function(e,t,n){"use strict";n(55),n(54);var s={name:"GjingCollapse-item",inject:["eventBus"],props:{title:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{open:!1}},mounted:function(){var e=this;this.eventBus&&this.eventBus.$on("update:selected",function(t){t.indexOf(e.name)>=0?e.open=!0:e.open=!1})},methods:{toggle:function(){this.open?this.eventBus&&this.eventBus.$emit("update:removeSelected",this.name):this.eventBus&&this.eventBus.$emit("update:addSelected",this.name)}}},a=(n(244),n(1)),i=Object(a.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"collapseItem",on:{click:e.toggle}},[n("div",{staticClass:"title"},[e._v("\n        "+e._s(e.title)+"\n    ")]),e._v(" "),e.open?n("div",{staticClass:"content"},[e._t("default")],2):e._e()])},[],!1,null,"46ed9562",null);t.a=i.exports},284:function(e,t,n){"use strict";var s=n(246);n.n(s).a},321:function(e,t,n){"use strict";n.r(t);n(96);var s=n(269),a=n(271),i={name:"collapse-demo1",data:function(){return{tabs:["game"],content:'\n<g-collapse :selected.sync="tabs" single>\n    <g-collapse-item title="社会" name="social">这是社会相关的内容</g-collapse-item>\n    <g-collapse-item title="财经" name="finance">这是财经相关的内容</g-collapse-item>\n    <g-collapse-item title="体育" name="sports">这是体育相关的内容</g-collapse-item>\n    <g-collapse-item title="游戏" name="game">这是游戏相关的内容</g-collapse-item>\n</g-collapse>\n\ntabs:[\'game\'],\n\n                '.trim()}},components:{"g-collapse":s.a,"g-collapse-item":a.a}},l=(n(284),n(1)),c=Object(l.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"demo"},[n("g-collapse",{attrs:{selected:e.tabs,single:""},on:{"update:selected":function(t){e.tabs=t}}},[n("g-collapse-item",{attrs:{title:"社会",name:"social"}},[e._v("这是社会相关的内容")]),e._v(" "),n("g-collapse-item",{attrs:{title:"财经",name:"finance"}},[e._v("这是财经相关的内容")]),e._v(" "),n("g-collapse-item",{attrs:{title:"体育",name:"sports"}},[e._v("这是体育相关的内容")]),e._v(" "),n("g-collapse-item",{attrs:{title:"游戏",name:"game"}},[e._v("这是游戏相关的内容")])],1)],1),e._v(" "),n("pre",[n("code",[e._v(e._s(e.content))])])])},[],!1,null,"c337af74",null);t.default=c.exports}}]);