webpackJsonp([76],{135:function(n,t,e){var i=e(62)(e(282),e(462),null,null,null);n.exports=i.exports},282:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(32),a=e.n(i);t.default={name:"",data:function(){return{}},created:function(){},mounted:function(){var n=this,t=encodeURIComponent(window.location.href.split("#")[0]);n.$http.get(n.$util.serviceUrl+"/wechat/getJsapiTicket.do?ticketurl="+t).then(function(t){if(t.data){var e=t.data,i=e.appId,s=e.timestamp,o=e.noncestr,c=e.signature,r=["onMenuShareTimeline","onMenuShareAppMessage","scanQRCode"];n.$wx.config({debug:!1,appId:i,timestamp:s,nonceStr:o,signature:c,jsApiList:r}),n.$wx.ready(function(){n.$wx.onMenuShareTimeline({title:"车惠集商家版下载",link:window.location.href.split("#")[0]+"#/down",imgUrl:"https://isalesimg.oss-cn-shanghai.aliyuncs.com/data/1519975237646.png",success:function(){}}),n.$wx.onMenuShareAppMessage({title:"车惠集商家版下载",desc:"专门为车惠集商家提供方便快捷的订单服务App",link:window.location.href.split("#")[0]+"#/down",imgUrl:"https://isalesimg.oss-cn-shanghai.aliyuncs.com/data/1519975237646.png",success:function(){}})}),n.$wx.error(function(t){var e="签名信息验证失败:"+a()(t);n.$weui.alert(e)})}else n.$weui.alert("获取微信接口调用参数错误,请刷新或重新进入页面!")},function(t){n.$weui.alert(t)})},methods:{down:function(){/iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())?window.location.href="https://itunes.apple.com/cn/app/%E8%BD%A6%E6%83%A0%E9%9B%86%E5%95%86%E5%AE%B6%E7%89%88/id1346967339?mt=8":window.location.href="http://www.isales.cn/download/app-bus-1.0.0_unsign_signed.apk"}}}},462:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"down"}},[e("div",{staticClass:"down_bj"}),n._v(" "),e("div",{staticClass:"down-flex-div"},[e("div",{staticClass:"dow-foot-butta",on:{click:n.down}},[n._v("点击下载")]),n._v(" "),e("p",{staticClass:"entry-con"},[n._v("如无法下载，请在右上角选择“在浏览器中打开”，再选择下载应用")])])])},staticRenderFns:[]}}});