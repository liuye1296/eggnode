webpackJsonp([69],{156:function(s,c,a){var t=a(62)(a(303),a(489),null,null,null);s.exports=t.exports},303:function(s,c,a){"use strict";Object.defineProperty(c,"__esModule",{value:!0}),c.default={name:"peccancysuccess",data:function(){return{obj:{},i:0,carType:"02"}},created:function(){this.carType=this.$route.query.carType;var s=sessionStorage.getItem("peccancy"+this.$util.projectOnlyName);s=JSON.parse(s),this.obj=s},methods:{select_type:function(s,c){this[s]=c}}}},489:function(s,c){s.exports={render:function(){var s=this,c=s.$createElement,a=s._self._c||c;return a("div",{attrs:{id:"peccancysuccess"}},[a("div",{staticClass:"head"},[a("router-link",{staticClass:"head-jt",attrs:{to:"/peccancy"}}),s._v(" "),a("div",{staticClass:"head-text"},[s._v("违章查询")])],1),s._v(" "),a("div",{staticClass:"center"},[a("div",{staticClass:"peccancysuccess-top"},[a("div",{staticClass:"weui-flex peccancysuccessli hassub"},[a("div",{staticClass:"peccancysuccessli-lable"},[s._v("车型类型")]),s._v(" "),"01"==s.carType?a("div",{staticClass:"peccancysuccessli_tab"},[s._v("大型车")]):a("div",{staticClass:"peccancysuccessli_tab"},[s._v("小型汽车")])]),s._v(" "),a("div",{staticClass:"weui-flex peccancysuccessli hassub"},[a("div",{staticClass:"peccancysuccessli-lable"},[s._v("发动机号")]),s._v(" "),a("div",{staticClass:"peccancysuccessli_tab"},[s._v(s._s(s.obj.engineNo))])]),s._v(" "),a("div",{staticClass:"weui-flex peccancysuccessli hassub"},[a("div",{staticClass:"peccancysuccessli-lable"},[s._v("车架号")]),s._v(" "),a("div",{staticClass:"peccancysuccessli_tab"},[s._v(s._s(s.obj.vin))])]),s._v(" "),a("div",{staticClass:"weui-flex peccancysuccessli hassub"},[a("div",{staticClass:"peccancysuccessli-lable"},[s._v("违章次数")]),s._v(" "),a("div",{staticClass:"peccancysuccessli_tab"},[s._v(s._s(s.obj.untreated)+"条")])]),s._v(" "),a("div",{staticClass:"weui-flex peccancysuccessli hassub"},[a("div",{staticClass:"peccancysuccessli-lable"},[s._v("总扣分")]),s._v(" "),a("div",{staticClass:"peccancysuccessli_tab"},[s._v(s._s(s.obj.totalPoints)+"分")])]),s._v(" "),a("div",{staticClass:"weui-flex peccancysuccessli"},[a("div",{staticClass:"peccancysuccessli-lable"},[s._v("总罚款")]),s._v(" "),a("div",{staticClass:"peccancysuccessli_tab"},[s._v(s._s(s.obj.totalFine)+"元")])])]),s._v(" "),a("div",s._l(s.obj.violations,function(c,t){return a("div",{on:{click:function(c){s.select_type("i",t)}}},[a("div",{staticClass:"peccancysuccess-dow-li",class:s.i==t?"click":""},[s._v(s._s(t+1)+":  计 "),a("span",{staticClass:"color-r"},[s._v(s._s(c.point))]),s._v(" 分，罚款 "),a("span",{staticClass:"color-r"},[s._v(s._s(c.fine))]),s._v(" 元")]),s._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:s.i==t,expression:"i==index"}],staticClass:"peccancysuccess-dow-litext"},[a("p",[a("span",{staticClass:"dow-litext-span"},[s._v("违章城市："+s._s(c.violationCity))])]),s._v(" "),s._m(0,!0),s._v(" "),a("p",[a("span",{staticClass:"dow-litext-span"},[s._v("地点：")]),s._v(s._s(c.province||"")+s._s(c.violationCity||"")+"-"+s._s(c.address))]),s._v(" "),a("p",[a("span",{staticClass:"dow-litext-span"},[s._v("描述：")]),s._v(s._s(c.reason))]),s._v(" "),a("p",[a("span",{staticClass:"dow-litext-span"},[s._v("违章代码：")]),s._v(s._s(c.code))])])])}))])])},staticRenderFns:[function(){var s=this,c=s.$createElement,a=s._self._c||c;return a("p",[a("span",{staticClass:"dow-litext-span"},[s._v("时间：")]),s._v("2018-01-20  09:31")])}]}}});