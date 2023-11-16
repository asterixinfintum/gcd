exports.ids = [15];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.7fd49af.svg";

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("6afbff9a", content, true, context)
};

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBox_vue_vue_type_style_index_0_id_cce2daf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBox_vue_vue_type_style_index_0_id_cce2daf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBox_vue_vue_type_style_index_0_id_cce2daf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBox_vue_vue_type_style_index_0_id_cce2daf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBox_vue_vue_type_style_index_0_id_cce2daf4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dexheader[data-v-cce2daf4]{position:relative;display:flex;justify-content:space-between;align-items:center;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) 0;z-index:5;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14)}.dexheader__burger[data-v-cce2daf4]{display:none}@media only screen and (max-width:414px){.dexheader__burger[data-v-cce2daf4]{display:flex;flex-direction:column;position:absolute;left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-210);top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*130)}.dexheader__burger span[data-v-cce2daf4]{display:inline-block;background:#fff;border-radius:3rem;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*120);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}}.dexheader__overlay[data-v-cce2daf4]{display:none}@media only screen and (max-width:414px){.dexheader__overlay[data-v-cce2daf4]{display:block;position:absolute;top:0;width:100%;height:100%;background:rgba(0,0,0,.7);transition:all .3s ease;transform:translateX(0)}.dexheader__overlay.sidenav[data-v-cce2daf4]{transform:translateX(calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-1300));z-index:20}}@media only screen and (max-width:414px){.dexheader[data-v-cce2daf4]{flex-direction:column;background:#1d1f2b;align-items:flex-start;position:fixed;top:0;right:0;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);height:100vh;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1200);justify-content:flex-start;font-weight:300;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*178) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);transition:all .3s ease;transform:translateX(calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1200))}.dexheader.sidenav[data-v-cce2daf4]{transform:translateX(0);z-index:20}}.dexheader__menu[data-v-cce2daf4]{display:flex;align-items:center}@media only screen and (max-width:414px){.dexheader__menu[data-v-cce2daf4]{flex-direction:column;align-items:flex-start}}.dexheader__menu--item[data-v-cce2daf4]{display:flex;align-items:center;margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);cursor:pointer}@media only screen and (max-width:414px){.dexheader__menu--item[data-v-cce2daf4]{margin-right:0;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90)}}.dexheader__menu--item.right[data-v-cce2daf4]{margin-right:0;margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}@media only screen and (max-width:414px){.dexheader__menu--item.right[data-v-cce2daf4]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90)}}.dexheader__dropdown[data-v-cce2daf4]{position:relative;flex-direction:column;align-items:flex-start}.dexheader__dropdown--btn[data-v-cce2daf4],.dexheader__dropdown--btn span[data-v-cce2daf4]{display:flex;align-items:center}.dexheader__dropdown--btn span svg[data-v-cce2daf4]{fill:#fff;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}@media only screen and (max-width:414px){.dexheader__dropdown--btn span svg[data-v-cce2daf4]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60)}}.dexheader__dropdown--btn:hover~.dexheader__dropdown--body[data-v-cce2daf4]{display:flex}.dexheader__dropdown--body[data-v-cce2daf4]{position:absolute;display:none;flex-direction:column;top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);background:#263238;border-radius:1rem;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*8);min-width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*180)}@media only screen and (max-width:414px){.dexheader__dropdown--body[data-v-cce2daf4]{z-index:10;min-width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*900)}}.dexheader__dropdown--body span[data-v-cce2daf4]{display:inline-block;border-radius:1rem;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);border:.5px solid hsla(0,0%,100%,0);cursor:pointer}@media only screen and (max-width:414px){.dexheader__dropdown--body span[data-v-cce2daf4]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60)}}.dexheader__dropdown--body span[data-v-cce2daf4]:hover{border:.5px solid hsla(0,0%,100%,.5)}.dexheader__dropdown--body[data-v-cce2daf4]:hover{display:flex}.dexheader__right button[data-v-cce2daf4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*16);background:#007994;border-radius:.3rem;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);outline:none;border:none}@media only screen and (max-width:414px){.dexheader__right button[data-v-cce2daf4]{margin-left:0;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);border-radius:3rem;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90)}}.dexheader__right button.transparent[data-v-cce2daf4]{color:#007994;border:none;background:transparent}.dexheader__right button.bordered[data-v-cce2daf4]{border:1px solid #007994;border-radius:.9rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderBox.vue?vue&type=template&id=cce2daf4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dexheader",class:{ sidenav: _vm.sidenav }},[_vm._ssrNode("<div class=\"dexheader__burger\" data-v-cce2daf4><span data-v-cce2daf4></span> <span data-v-cce2daf4></span> <span data-v-cce2daf4></span></div> <div"+(_vm._ssrClass("dexheader__overlay",{ sidenav: _vm.sidenav }))+" data-v-cce2daf4></div> <section class=\"dexheader__left\" data-v-cce2daf4><div class=\"dexheader__menu\" data-v-cce2daf4><div class=\"dexheader__menu--item dexheader__dropdown\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span data-v-cce2daf4>Cryptocurrencies</span> <span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-cce2daf4></use></svg></span></div> <div class=\"dexheader__dropdown--body\" data-v-cce2daf4><span data-v-cce2daf4>All Markets</span> <span data-v-cce2daf4>Bitcoin(BTC/USD)</span> <span data-v-cce2daf4>Ethereum(ETH/USD)</span> <span data-v-cce2daf4>Solana(SOL/USD)</span></div></div> <div class=\"dexheader__menu--item dexheader__dropdown\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span data-v-cce2daf4>Forex</span> <span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-cce2daf4></use></svg></span></div> <div class=\"dexheader__dropdown--body\" data-v-cce2daf4><span data-v-cce2daf4>All Markets</span> <span data-v-cce2daf4>Bitcoin(BTC/USD)</span> <span data-v-cce2daf4>Ethereum(ETH/USD)</span> <span data-v-cce2daf4>Solana(SOL/USD</span></div></div> <div class=\"dexheader__menu--item dexheader__dropdown\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span data-v-cce2daf4>Stocks</span> <span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-cce2daf4></use></svg></span></div> <div class=\"dexheader__dropdown--body\" data-v-cce2daf4><span data-v-cce2daf4>All Markets</span> <span data-v-cce2daf4>Bitcoin(BTC/USD)</span> <span data-v-cce2daf4>Ethereum(ETH/USD)</span> <span data-v-cce2daf4>Solana(SOL/USD</span></div></div> <div class=\"dexheader__menu--item dexheader__dropdown\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span data-v-cce2daf4>ETFs</span> <span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-cce2daf4></use></svg></span></div> <div class=\"dexheader__dropdown--body\" data-v-cce2daf4><span data-v-cce2daf4>All Markets</span> <span data-v-cce2daf4>Bitcoin(BTC/USD)</span> <span data-v-cce2daf4>Ethereum(ETH/USD)</span> <span data-v-cce2daf4>Solana(SOL/USD</span></div></div> <div class=\"dexheader__menu--item dexheader__dropdown\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span data-v-cce2daf4>IPOs</span> <span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-cce2daf4></use></svg></span></div> <div class=\"dexheader__dropdown--body\" data-v-cce2daf4><span data-v-cce2daf4>All Markets</span> <span data-v-cce2daf4>Bitcoin(BTC/USD)</span> <span data-v-cce2daf4>Ethereum(ETH/USD)</span> <span data-v-cce2daf4>Solana(SOL/USD</span></div></div> <div class=\"dexheader__menu--item dexheader__dropdown\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span data-v-cce2daf4>Grant Cred Card</span></div></div></div></section> "+((!_vm.user)?("<section class=\"dexheader__right\" data-v-cce2daf4><button class=\"dexheader__btn dex__btn transparent\" data-v-cce2daf4>Login</button> <button class=\"dexheader__btn dex__btn colored\" data-v-cce2daf4>Create an account</button></section>"):"<!---->")+" "+((_vm.user)?("<section class=\"dexheader__right\" data-v-cce2daf4><div class=\"dexheader__menu\" data-v-cce2daf4><button class=\"dexheader__btn dex__btn transparent bordered\" data-v-cce2daf4>Deposit</button> <div class=\"dexheader__menu--item dexheader__dropdown right\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span data-v-cce2daf4>Wallet</span> <span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-cce2daf4></use></svg></span></div> <div class=\"dexheader__dropdown--body\" data-v-cce2daf4><span data-v-cce2daf4>Portfolio</span> <span data-v-cce2daf4>Grant Cred Card</span> <span data-v-cce2daf4>Borrowing/Lending</span></div></div> <div class=\"dexheader__menu--item dexheader__dropdown right\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span data-v-cce2daf4>Orders</span> <span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-cce2daf4></use></svg></span></div> <div class=\"dexheader__dropdown--body\" data-v-cce2daf4><span data-v-cce2daf4>Orders</span> <span data-v-cce2daf4>Order History</span> <span data-v-cce2daf4>Trade Hitsory</span></div></div> <div class=\"dexheader__menu--item dexheader__dropdown right\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-bell"))+" data-v-cce2daf4></use></svg></span></div></div> <div class=\"dexheader__menu--item dexheader__dropdown right\" data-v-cce2daf4><div class=\"dexheader__dropdown--btn\" data-v-cce2daf4><span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg focusable=\"false\" aria-hidden=\"true\" viewBox=\"0 0 24 24\" data-testid=\"PersonOutlineIcon\" class=\"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv\" data-v-cce2daf4><path d=\"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z\" data-v-cce2daf4></path></svg></span> <span data-v-cce2daf4>markanderson@gmail.com</span> <span class=\"dexheader__dropdown--svg\" data-v-cce2daf4><svg data-v-cce2daf4><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-cce2daf4></use></svg></span></div> <div class=\"dexheader__dropdown--body\" data-v-cce2daf4><span data-v-cce2daf4>Historical Balances</span> <span data-v-cce2daf4>Documents</span> <span data-v-cce2daf4>Redeem Promo</span> <span data-v-cce2daf4>Referrals</span> <span data-v-cce2daf4>Settings</span> <span data-v-cce2daf4>Grant Cred Card</span> <span data-v-cce2daf4>Logout</span></div></div></div></section>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/HeaderBox.vue?vue&type=template&id=cce2daf4&scoped=true&

// CONCATENATED MODULE: ./mixins/symbols.js
/* harmony default export */ var symbols = ({
  data() {
    return {
      symbols: ["BTC", "ETH", "USDT", "USDC", "BNB", "XRP", "ADA", "BUSD", "SOL", "DOT", "DOGE", "AVAX", "DAI", "MATIC", "UNI", "SHIB", "TRX", "WBTC", "ETC", "LEO", "NEAR", "LTC", "LINK", "FTT", "CRO", "ATOM", "XLM", "FLOW", "XMR", "BCH", "ALGO", "VET", "APE", "FIL", "ICP", "MANA", "SAND", "XTZ", "HBAR", "THETA", "AAVE", "AXS", "QNT", "EGLD", "EOS", "TUSD", "BSV", "ZEC", "OKB", "MKR", "HNT", "KCS", "FTM", "GRT", "RUNE", "MIOTA", "BTT", "USDP", "CHZ", "XEC", "LDO", "KLAY", "NEO", "USDD", "CRV", "USDN", "BAT", "HT", "WAVES", "STX", "CAKE", "ENJ", "LRC", "MINA", "PAXG", "ZIL", "DASH", "GMT", "KAVA", "CEL", "KSM", "ROSE", "CELO", "BTG", "AR", "DCR", "CVX", "1INCH", "NEXO", "TWT", "SNX", "COMP", "XEM", "GNO", "HOT", "GALA", "QTUM", "KDA", "FEI", "YFI"]
    };
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeaderBox.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var HeaderBoxvue_type_script_lang_js_ = ({
  data() {
    return {
      user: true,
      sidenav: false
    };
  },

  mixins: [symbols],
  methods: {
    opensidenav() {
      this.sidenav ? this.sidenav = false : this.sidenav = true;
    }

  }
});
// CONCATENATED MODULE: ./components/HeaderBox.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeaderBoxvue_type_script_lang_js_ = (HeaderBoxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeaderBox.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(37)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeaderBoxvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "cce2daf4",
  "499735b2"
  
)

/* harmony default export */ var HeaderBox = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=header-box.js.map