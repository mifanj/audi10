(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-car2-car2"],{"10ef":function(t,a,o){var i=o("24fb");a=i(!1),a.push([t.i,".content[data-v-15fc936a]{width:100%;max-width:%?750?%;height:100vh;position:relative;overflow-x:hidden;background-color:#000}.car2-top[data-v-15fc936a]{position:relative;width:%?750?%;height:%?832?%}.car2-top .light-logo[data-v-15fc936a]{position:absolute;top:0;left:0;display:block;width:%?750?%;z-index:100}@-webkit-keyframes zoom-data-v-15fc936a{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(1.5);transform:scale(1.5)}}@keyframes zoom-data-v-15fc936a{0%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:scale(1.5);transform:scale(1.5)}}.car2-top .bg[data-v-15fc936a]{position:absolute;width:%?750?%;top:0;left:0;display:block;-webkit-animation:zoom-data-v-15fc936a 15s linear forwards;animation:zoom-data-v-15fc936a 15s linear forwards}.car2-car[data-v-15fc936a]{display:block;position:absolute;left:0;bottom:0;width:%?750?%}.car2-slogan[data-v-15fc936a]{display:block;position:absolute;bottom:%?230?%;width:%?440?%}",""]),t.exports=a},"30f4":function(t,a,o){"use strict";o.r(a);var i=o("7db7"),r=o.n(i);for(var n in i)"default"!==n&&function(t){o.d(a,t,(function(){return i[t]}))}(n);a["default"]=r.a},4932:function(t,a,o){"use strict";var i=o("9099"),r=o.n(i);r.a},"6a27":function(t,a,o){"use strict";o.r(a);var i=o("8723"),r=o("30f4");for(var n in r)"default"!==n&&function(t){o.d(a,t,(function(){return r[t]}))}(n);o("4932");var c,s=o("f0c5"),e=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"15fc936a",null,!1,i["a"],c);a["default"]=e.exports},"7db7":function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i={data:function(){return{slogan_timer:0,slogan_left:-200,slogan_opacity:0,top_logo_light_src:"",car2_bg_src:"",car2_car_src:"",car2_slogan_src:""}},onLoad:function(){document.title="追逐梵高 — 2020奥迪青少年艺术节",this.top_logo_light_src=uni.getStorageSync("filePath0"),this.car2_bg_src=uni.getStorageSync("filePath5"),this.car2_car_src=uni.getStorageSync("filePath6"),this.car2_slogan_src=uni.getStorageSync("filePath7")},onShow:function(){var t=this;this.slogan_timer=setInterval((function(){t.slogan_opacity>=1?clearInterval(t.slogan_timer):(t.slogan_left+=30,t.slogan_opacity+=.12)}),50)},methods:{gotoNext:function(){this.slogan_opacity>=1&&uni.navigateTo({url:"../car3/car3"})}}};a.default=i},8723:function(t,a,o){"use strict";var i;o.d(a,"b",(function(){return r})),o.d(a,"c",(function(){return n})),o.d(a,"a",(function(){return i}));var r=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("v-uni-view",{staticClass:"content",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.gotoNext.apply(void 0,arguments)}}},[o("v-uni-view",{staticClass:"car2-top"},[o("v-uni-image",{staticClass:"light-logo",attrs:{src:t.top_logo_light_src,mode:"widthFix"}}),o("v-uni-image",{staticClass:"bg",attrs:{src:t.car2_bg_src,mode:"widthFix"}})],1),o("v-uni-image",{staticClass:"car2-car",attrs:{src:t.car2_car_src,mode:"widthFix"}}),o("v-uni-image",{staticClass:"car2-slogan",style:{left:t.slogan_left+"rpx",opacity:t.slogan_opacity},attrs:{src:t.car2_slogan_src,mode:"widthFix"}})],1)},n=[]},9099:function(t,a,o){var i=o("10ef");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=o("4f06").default;r("14b7da67",i,!0,{sourceMap:!1,shadowMode:!1})}}]);