(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-car3-car3"],{"1a90":function(a,t,i){"use strict";i.r(t);var o=i("43ae"),c=i.n(o);for(var e in o)"default"!==e&&function(a){i.d(t,a,(function(){return o[a]}))}(e);t["default"]=c.a},"31ea":function(a,t,i){var o=i("b649");"string"===typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);var c=i("4f06").default;c("718a773f",o,!0,{sourceMap:!1,shadowMode:!1})},"43ae":function(a,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{slogan_timer:0,slogan_right:-200,slogan_opacity:0,bg_height_px:0,top_logo_light_src:"",car3_bg1_src:"",car3_bg2_src:"",car3_bg3_src:"",car3_arrows_src:"",car3_car_src:"",car3_slogan_src:""}},onLoad:function(){document.title="追逐梵高 — 2020奥迪青少年艺术节",this.top_logo_light_src=uni.getStorageSync("filePath0"),this.car3_bg1_src=uni.getStorageSync("filePath8"),this.car3_bg2_src=uni.getStorageSync("filePath9"),this.car3_bg3_src=uni.getStorageSync("filePath10"),this.car3_arrows_src=uni.getStorageSync("filePath11"),this.car3_car_src=uni.getStorageSync("filePath12"),this.car3_slogan_src=uni.getStorageSync("filePath13"),this.bg_height_px=uni.getSystemInfoSync()["windowHeight"]-uni.upx2px(500)},onShow:function(){var a=this;this.slogan_timer=setInterval((function(){a.slogan_opacity>=1?clearInterval(a.slogan_timer):(a.slogan_right+=27,a.slogan_opacity+=.12)}),50)},methods:{gotoNext:function(){this.slogan_opacity>=1&&uni.navigateTo({url:"../last/last"})}}};t.default=o},"88a5":function(a,t,i){"use strict";i.r(t);var o=i("992a"),c=i("1a90");for(var e in c)"default"!==e&&function(a){i.d(t,a,(function(){return c[a]}))}(e);i("bf7d");var n,r=i("f0c5"),s=Object(r["a"])(c["default"],o["b"],o["c"],!1,null,"40c9fe3a",null,!1,o["a"],n);t["default"]=s.exports},"992a":function(a,t,i){"use strict";var o;i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return e})),i.d(t,"a",(function(){return o}));var c=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("v-uni-view",{staticClass:"content",on:{click:function(t){arguments[0]=t=a.$handleEvent(t),a.gotoNext.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"car3-top"},[i("v-uni-image",{staticClass:"light-logo",attrs:{src:a.top_logo_light_src,mode:"widthFix"}}),i("v-uni-image",{staticClass:"bg bg3",attrs:{src:a.car3_bg3_src,mode:"heightFix"}}),i("v-uni-image",{staticClass:"bg bg2",attrs:{src:a.car3_bg2_src,mode:"heightFix"}}),i("v-uni-image",{staticClass:"bg bg1",attrs:{src:a.car3_bg1_src,mode:"heightFix"}})],1),i("v-uni-image",{staticClass:"arrows",attrs:{src:a.car3_arrows_src,mode:"heightFix"}}),i("v-uni-image",{staticClass:"car3-car",attrs:{src:a.car3_car_src,mode:"widthFix"}}),i("v-uni-image",{staticClass:"car3-slogan",style:{right:a.slogan_right+"rpx",opacity:a.slogan_opacity},attrs:{src:a.car3_slogan_src,mode:"widthFix"}})],1)},e=[]},b649:function(a,t,i){var o=i("24fb");t=o(!1),t.push([a.i,".content[data-v-40c9fe3a]{width:100%;max-width:%?750?%;height:100vh;position:relative;overflow-x:hidden;background-color:#000}.car3-top[data-v-40c9fe3a]{position:relative;width:%?750?%;height:100%}.car3-top .light-logo[data-v-40c9fe3a]{position:absolute;top:0;left:0;display:block;width:%?750?%;z-index:100}.car3-top .bg[data-v-40c9fe3a]{position:absolute;bottom:%?500?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);height:75vh;display:block}@-webkit-keyframes bg1animation-data-v-40c9fe3a{0%{opacity:1}22%{opacity:1}33%{opacity:0}88%{opacity:0}99%{opacity:1}100%{opacity:1}}@keyframes bg1animation-data-v-40c9fe3a{0%{opacity:1}22%{opacity:1}33%{opacity:0}88%{opacity:0}99%{opacity:1}100%{opacity:1}}@-webkit-keyframes bg2animation-data-v-40c9fe3a{0%{opacity:0}22%{opacity:0}33%{opacity:1}55%{opacity:1}66%{opacity:0}100%{opacity:0}}@keyframes bg2animation-data-v-40c9fe3a{0%{opacity:0}22%{opacity:0}33%{opacity:1}55%{opacity:1}66%{opacity:0}100%{opacity:0}}@-webkit-keyframes bg3animation-data-v-40c9fe3a{0%{opacity:0}55%{opacity:0}66%{opacity:1}88%{opacity:1}99%{opacity:0}100%{opacity:0}}@keyframes bg3animation-data-v-40c9fe3a{0%{opacity:0}55%{opacity:0}66%{opacity:1}88%{opacity:1}99%{opacity:0}100%{opacity:0}}.car3-top .bg1[data-v-40c9fe3a]{-webkit-animation:bg1animation-data-v-40c9fe3a 9s linear infinite;animation:bg1animation-data-v-40c9fe3a 9s linear infinite}.car3-top .bg2[data-v-40c9fe3a]{-webkit-animation:bg2animation-data-v-40c9fe3a 9s linear infinite;animation:bg2animation-data-v-40c9fe3a 9s linear infinite}.car3-top .bg3[data-v-40c9fe3a]{-webkit-animation:bg3animation-data-v-40c9fe3a 9s linear infinite;animation:bg3animation-data-v-40c9fe3a 9s linear infinite}@-webkit-keyframes scrolling-data-v-40c9fe3a{0%{left:0}100%{left:-80%}}@keyframes scrolling-data-v-40c9fe3a{0%{left:0}100%{left:-80%}}.arrows[data-v-40c9fe3a]{position:absolute;height:%?86?%;bottom:%?500?%;left:0;display:block;-webkit-animation:scrolling-data-v-40c9fe3a 6s linear infinite;animation:scrolling-data-v-40c9fe3a 6s linear infinite}.car3-car[data-v-40c9fe3a]{display:block;position:absolute;left:0;bottom:0;width:%?750?%}.car3-slogan[data-v-40c9fe3a]{display:block;position:absolute;bottom:%?125?%;width:%?614?%}",""]),a.exports=t},bf7d:function(a,t,i){"use strict";var o=i("31ea"),c=i.n(o);c.a}}]);