webpackJsonp([36],{183:function(t,i,s){var e=s(62)(s(337),s(506),null,null,null);t.exports=e.exports},205:function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMTA0QTQ5MzBCRTUxMUU4Qjg0QUZDNzYwRDI1QkVCMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMTA0QTQ5NDBCRTUxMUU4Qjg0QUZDNzYwRDI1QkVCMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkExMDRBNDkxMEJFNTExRThCODRBRkM3NjBEMjVCRUIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkExMDRBNDkyMEJFNTExRThCODRBRkM3NjBEMjVCRUIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sYffPgAAAP5JREFUeNpi/P//PwMIMO7YzAakMoA4Eoh1GCDgChAvB+IZ/z18f4HVgTQAFUsD2VuA2IABO7gAxD5ATU8ZGbZvApl8Eo9iGLgIxOYsQCIdppiNiYmhW12LIUZKBqxiybMnDKU3rzH8+vcPxNUH4jSQhiiYEV3qmgx58opwI0Hs73//MlTcug4TimICEkYwXqyULIY7UmXlkbmGTAykgd8gDedgvMXPHmOomPPkITL3Cgs0nC1AvLKb1xkYgTAW6unFQE/X3r6JrGE5KFjZocGqT8A5l4DYjAkYGT+BDG9o5OCLAy+QWka0pJEJxDFArAlVCArPJUA8HZY0AAIMAKDPT1IU0NkqAAAAAElFTkSuQmCC"},259:function(t,i,s){t.exports=s.p+"static/img/cardvip.ae5a1bc.png"},337:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={name:"activavip",data:function(){return{bot:""}},created:function(){this.phone=localStorage.getItem("phone"+this.$util.projectOnlyName)||""},methods:{discount:function(){if("click"===this.bot)return!1;var t=(new this.$util.Validator,{act_type:"Y",card_type:"JC"}),i=this;i.bot="click",this.Invok("88321",t,function(t){if(i.bot="",0!=t.code)return i.$weui.alert(t.msg),!1;i.$router.push({path:"/usejc",query:i.$route.query})})}}}},506:function(t,i,s){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"activavip"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"botton_0-hr"}),t._v(" "),s("div",{staticClass:"botton_0",class:t.bot,on:{click:t.discount}},[t._v("点击激活")])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",[e("img",{staticClass:"card",attrs:{src:s(259)}})])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"usevip-text"},[e("div",{staticClass:"usevip-text-title"},[t._v("权益说明")]),t._v(" "),e("div",{staticClass:"activavip-alert"},[e("div",{staticClass:"clearfix"},[e("div",{staticClass:"left"},[e("img",{staticClass:"usevip_alert",attrs:{src:s(205)}}),t._v(" "),e("h5",{staticClass:"usevip_alert-h5"},[t._v("尊享：")])]),t._v(" "),e("div",{staticClass:"weui-form-preview__value"},[t._v("汽车年检也有VIP服务，省时方便舒适")])]),t._v(" "),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"left"},[e("img",{staticClass:"usevip_alert",attrs:{src:s(205)}}),t._v(" "),e("h5",{staticClass:"usevip_alert-h5"},[t._v("安全：")])]),t._v(" "),e("div",{staticClass:"weui-form-preview__value"},[t._v("定制年检到期提醒可以避免处罚")])]),t._v(" "),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"left"},[e("img",{staticClass:"usevip_alert",attrs:{src:s(205)}}),t._v(" "),e("h5",{staticClass:"usevip_alert-h5"},[t._v("期限：")])]),t._v(" "),e("div",{staticClass:"weui-form-preview__value"},[t._v("每张卡自激活之日起，有效期三个月")])]),t._v(" "),e("div",{staticClass:"clearfix"},[e("div",{staticClass:"left"},[e("img",{staticClass:"usevip_alert",attrs:{src:s(205)}}),t._v(" "),e("h5",{staticClass:"usevip_alert-h5"},[t._v("使用：")])]),t._v(" "),e("div",{staticClass:"weui-form-preview__value"},[t._v("在车惠集“车主服务”频道，点击“年检VIP服务”，即可进行年检到期提醒和年检预约")])])])])}]}}});