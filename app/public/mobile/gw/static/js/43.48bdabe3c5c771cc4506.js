webpackJsonp([43],{190:function(e,t,n){var i=n(62)(n(344),n(457),null,null,null);e.exports=i.exports},344:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(32),s=n.n(i);t.default={name:"landingfx",data:function(){return{}},created:function(){},mounted:function(){this.fx()},methods:{fx:function(){var e=this,t=localStorage.getItem("user_id"+e.$util.projectOnlyName),n=encodeURIComponent(window.location.href.split("#")[0]);e.$http.get(e.$util.serviceUrl+"/wechat/getJsapiTicket.do?ticketurl="+n).then(function(n){if(n.data){var i=n.data,a=i.appId,o=i.timestamp,r=i.noncestr,c=i.signature,l=["onMenuShareTimeline","onMenuShareAppMessage"];e.$wx.config({debug:!1,appId:a,timestamp:o,nonceStr:r,signature:c,jsApiList:l}),e.$wx.ready(function(){e.$wx.onMenuShareTimeline({title:"拼团购车，全城底价，赢万元壕礼",link:window.location.href.split("#")[0]+"#/landing?to_user_id="+t,imgUrl:"https://isalesimg.oss-cn-shanghai.aliyuncs.com/data/1519975237646.png",success:function(){e.wxfx_su()}}),e.$wx.onMenuShareAppMessage({title:"拼团购车，全城底价，赢万元壕礼",desc:"8折洗车，88折加油，888元新车安全大礼包，8888元实惠大礼包",link:window.location.href.split("#")[0]+"#/landing?to_user_id="+t,imgUrl:"https://isalesimg.oss-cn-shanghai.aliyuncs.com/data/1519975237646.png",success:function(){e.wxfx_su()}})}),e.$wx.error(function(t){var n="签名信息验证失败:"+s()(t);e.$weui.alert(n)})}else e.$weui.alert("获取微信接口调用参数错误,请刷新或重新进入页面!")},function(t){e.$weui.alert(t)})},wxfx_su:function(){var e=this;e.Invok("88602",{},function(t){if(0!=t.code)return e.$weui.alert(t.msg),!1})}}}},394:function(e,t,n){e.exports=n.p+"static/img/fenxing.2ab1562.png"},457:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"landingfx"}},[i("div",{staticClass:"landingfx-item"},[i("img",{staticClass:"landingfx-item-img",attrs:{src:n(394)}})]),e._v(" "),i("div",{staticClass:"goldeneggsgamefx-top"},[i("div",{staticClass:"goldeneggsgamefx"},[i("div",{staticClass:"goldeneggsgamefx-div"},[i("div",{staticClass:"goldeneggsgamethis_fx"},[e._v("\n          邀请好友拼团购车，"),i("br"),e._v("\n          成交奖百元\n        ")]),e._v(" "),i("div",{staticClass:"goldeneggsgamefx-div-fx"},[i("div",[e._v("（请点击“…”分享朋友圈或转发好友）")])])])])])])}]}}});