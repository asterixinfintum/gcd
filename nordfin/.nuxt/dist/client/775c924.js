(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{283:function(t,e,r){var content=r(313);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(109).default)("dc14b3f4",content,!0,{sourceMap:!1})},312:function(t,e,r){"use strict";r(283)},313:function(t,e,r){var n=r(108)(!1);n.push([t.i,'.grapharea[data-v-2069927a]{background:#111722;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*740);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*810);border-radius:.5rem;position:relative}@media only screen and (max-width:414px){.grapharea[data-v-2069927a]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1500);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*2040)}}.grapharea[data-v-2069927a]:before{content:"";position:absolute;left:0;bottom:0;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*740);background:#111722;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*160)}.grapharea__graph[data-v-2069927a]{position:relative;width:100%;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*770);overflow:hidden}@media only screen and (max-width:414px){.grapharea__graph[data-v-2069927a]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*2000)}}',""]),t.exports=n},402:function(t,e,r){"use strict";r.r(e);var n={mixins:[r(271).a],mounted:function(){this.assetcategory&&"stocks"===this.assetcategory||this.assetcategory&&"ipos"===this.assetcategory?new TradingView.widget({width:document.getElementById("tradingview_114f3").clientWidth,height:document.getElementById("tradingview_114f3").clientHeight,symbol:"NASDAQ:".concat(this.asset),interval:"D",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",enable_publishing:!1,allow_symbol_change:!0,container_id:"tradingview_114f3"}):new TradingView.widget({width:document.getElementById("tradingview_114f3").clientWidth,height:document.getElementById("tradingview_114f3").clientHeight,symbol:"BINANCE:".concat(this.asset,"USD"),interval:"D",timezone:"Etc/UTC",theme:"dark",style:"1",locale:"en",toolbar_bg:"#f1f3f6",enable_publishing:!1,allow_symbol_change:!0,container_id:"tradingview_114f3"})}},l=(r(312),r(42)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grapharea"},[r("div",{staticClass:"grapharea__body"},[r("div",{staticClass:"grapharea__graph",attrs:{id:"tradingview_114f3"}}),t._v(" "),r("div",{staticClass:"tradingview-widget-copyright"},[r("a",{attrs:{href:"https://www.tradingview.com/symbols/BTCUSD/?exchange=BITSTAMP",rel:"noopener",target:"_blank"}},[r("span",{staticClass:"blue-text"},[t._v("BTCUSD Chart")])]),t._v(" by TradingView")])])])}],!1,null,"2069927a",null);e.default=component.exports}}]);