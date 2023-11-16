exports.ids = [32];
exports.modules = {

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(205);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f5ae57d0", content, true, context)
};

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/peoplehappy.435d538.webp";

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/circle.7261e23.webp";

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fenw.de4f124.webp";

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/lightspeed.d210b53.png";

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/multicoin.1375489.webp";

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ribbit.827162d.png";

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/paradigm.7567370.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pc.64bec70.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/paxos.7c76a0b.webp";

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_41e12dc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_41e12dc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_41e12dc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_41e12dc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_about_vue_vue_type_style_index_0_id_41e12dc4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".about[data-v-41e12dc4]{background:#1c1c17}.about__logo[data-v-41e12dc4]{position:absolute;top:0;left:0;cursor:pointer;display:flex;align-items:center;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*270)}@media only screen and (max-width:414px){.about__logo[data-v-41e12dc4]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*140) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*120)}}.about__logo figure[data-v-41e12dc4]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);overflow:hidden;border-radius:.3rem}@media only screen and (max-width:414px){.about__logo figure[data-v-41e12dc4]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200)}}.about__logo figure img[data-v-41e12dc4]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.about__logo--right[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18);margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}@media only screen and (max-width:414px){.about__logo--right[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}}.about__area[data-v-41e12dc4]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*140) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*270)}@media only screen and (max-width:414px){.about__area[data-v-41e12dc4]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*140) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*120)}}.about__area h1[data-v-41e12dc4]{font-weight:400;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25);letter-spacing:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*3.5);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}@media only screen and (max-width:414px){.about__area h1[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}}.about__area--summary[data-v-41e12dc4]{padding-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*500);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*150);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);font-weight:200}@media only screen and (max-width:414px){.about__area--summary[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);padding-left:0}}.about__area--summary p[data-v-41e12dc4]:first-child{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}@media only screen and (max-width:414px){.about__area--summary p[data-v-41e12dc4]:first-child{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}}.about__top[data-v-41e12dc4]{background:#1c1c17;padding-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*270)}@media only screen and (max-width:414px){.about__top[data-v-41e12dc4]{padding-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*600)}.about__top h1[data-v-41e12dc4]{padding-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.about__top--paras[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*65);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);font-weight:200}@media only screen and (max-width:414px){.about__top--paras[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*140);padding-left:0}}.about__top--paras span.highlight[data-v-41e12dc4]{color:#f5853d}.about__midtext[data-v-41e12dc4]{background:#ede8df;color:#000}.about__midtext--h2[data-v-41e12dc4]{font-weight:400;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25);letter-spacing:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*3.5);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}@media only screen and (max-width:414px){.about__midtext--h2[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}}.about__midtext--toppara[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);font-weight:500}@media only screen and (max-width:414px){.about__midtext--toppara[data-v-41e12dc4]{margin:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90) 0;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*140)}}.about__midtext--bottom[data-v-41e12dc4]{padding-left:0;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);display:flex;justify-content:space-between}@media only screen and (max-width:414px){.about__midtext--bottom[data-v-41e12dc4]{flex-direction:column}}.about__midtext--bottom p[data-v-41e12dc4]:first-child{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.about__midtext--bottom p[data-v-41e12dc4]:nth-child(2){margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60)}@media only screen and (max-width:414px){.about__midtext--bottom p[data-v-41e12dc4]:nth-child(2){margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*150)}}.about__midtext--left[data-v-41e12dc4]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*600)}@media only screen and (max-width:414px){.about__midtext--left[data-v-41e12dc4]{width:100%;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*150)}}.about__midtext--right[data-v-41e12dc4]{display:flex}@media only screen and (max-width:414px){.about__midtext--right[data-v-41e12dc4]{width:100%;padding-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*150)}}.about__midtext--right figure[data-v-41e12dc4]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*400);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*400);overflow:hidden;border-radius:.3rem}@media only screen and (max-width:414px){.about__midtext--right figure[data-v-41e12dc4]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1000);width:100%}}.about__midtext--right figure img[data-v-41e12dc4]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.about__midtext--btn[data-v-41e12dc4]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25);color:#fff;background:#474dff;border-radius:3rem;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18)}@media only screen and (max-width:414px){.about__midtext--btn[data-v-41e12dc4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.about__partners[data-v-41e12dc4]{background:#fff;color:#000}.about__partnerboxes[data-v-41e12dc4]{display:flex;justify-content:space-between;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60)}@media only screen and (max-width:414px){.about__partnerboxes[data-v-41e12dc4]{flex-direction:column}}.about__partnerbox[data-v-41e12dc4]{position:relative;cursor:pointer}.about__partnerbox:hover>.about__partnerbox--label[data-v-41e12dc4]{opacity:.7}.about__partnerbox figure[data-v-41e12dc4]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*230)}@media only screen and (max-width:414px){.about__partnerbox figure[data-v-41e12dc4]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*900);width:100%}}.about__partnerbox figure img[data-v-41e12dc4]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.about__partnerbox--label[data-v-41e12dc4]{position:absolute;transition:all .1s ease-in;top:0;left:0;text-align:center;height:100%;width:100%;display:flex;align-items:center;justify-content:center;background:#337ab7;color:#fff;opacity:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pink-circle.a1bbd11.png";

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=41e12dc4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"about\" data-v-41e12dc4>","</div>",[_vm._ssrNode("<div class=\"about__logo\" data-v-41e12dc4><figure class=\"about__logo--left\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" data-v-41e12dc4></figure> <div class=\"about__logo--right\" data-v-41e12dc4><p data-v-41e12dc4>Grant Cred Financials</p></div></div> <div class=\"about__top about__area\" data-v-41e12dc4><h1 data-v-41e12dc4>Our Mission</h1> <div class=\"about__top--paras\" data-v-41e12dc4><p data-v-41e12dc4>Wealth and value preservation</p> <p data-v-41e12dc4>through <span class=\"highlight\" data-v-41e12dc4>sustained</span>, <span class=\"highlight\" data-v-41e12dc4>verifiable</span>,</p> <p data-v-41e12dc4><span class=\"highlight\" data-v-41e12dc4>algorithmic</span> investment strategies</p></div> <div class=\"about__area--summary\" data-v-41e12dc4><p data-v-41e12dc4>Grant Cred is a secure and decentralized banking system built on the world's most secure tradfi and defi networks. With markets experiencing volatility, Grant Cred's role is keeping your money valuable in an often unstable market. Such stability is achieved by algorithmically moving your money across a selection of assets specifically chosen by our team of experts all aided by some of the world's most advanced finance AI.</p> <p data-v-41e12dc4>We envision a world where money does not lose value just because some assets are no longer needed by the market. Saving money or investing in an asset can be profitable and without uncertainty</p></div></div> "),_vm._ssrNode("<div class=\"about__midtext about__area\" data-v-41e12dc4>","</div>",[_vm._ssrNode("<div class=\"about__midtext--top\" data-v-41e12dc4><h2 class=\"about__midtext--h2\" data-v-41e12dc4>Economic growth and value preservasion</h2> <p class=\"about__midtext--toppara\" data-v-41e12dc4>Our responsibility to our partners and users</p></div> "),_vm._ssrNode("<div class=\"about__midtext--bottom about__area--summary\" data-v-41e12dc4>","</div>",[_vm._ssrNode("<div class=\"about__midtext--left\" data-v-41e12dc4>","</div>",[_vm._ssrNode("<p data-v-41e12dc4>Traditional finance is not to be totally done away with as we adopt blockchain and decentralized finance. Our goal is to combine the best of both technologies to bring our partners and users a resillient financial and investment interface.</p> <p data-v-41e12dc4>Through our advanced AI and Blockchain infrastructure, and together with our partners, we have managed to serve and provide value for over 8,000,000 users and investors. Our global financial solutions are underpinned with the utilizing the power of blockchain and traditional technology.</p> "),_c('router-link',{attrs:{"to":"/signup"}},[_c('button',{staticClass:"about__midtext--btn"},[_vm._v("Join the financial frontier")])])],2),_vm._ssrNode(" <div class=\"about__midtext--right\" data-v-41e12dc4><figure data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(195)))+" data-v-41e12dc4></figure></div>")],2)],2),_vm._ssrNode(" <div id=\"partners\" class=\"about__area about__partners\" data-v-41e12dc4><div class=\"about__section--header\" data-v-41e12dc4><h1 class=\"about__section--h1\" data-v-41e12dc4>0ur Partners</h1> <span data-v-41e12dc4></span></div> <div class=\"about__area--summary\" data-v-41e12dc4>\n                    Grant Cred is proud to have partnered and collaborated with many leading tradfi and defi firms, including but not limited to:\n                </div> <div class=\"about__partners\" data-v-41e12dc4><div class=\"about__partnerboxes\" data-v-41e12dc4><div class=\"about__partnerbox\" data-v-41e12dc4><figure class=\"about__partnerbox--fig\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(196)))+" data-v-41e12dc4></figure> <div class=\"about__partnerbox--label\" data-v-41e12dc4><p data-v-41e12dc4>Circle</p></div></div> <div class=\"about__partnerbox\" data-v-41e12dc4><figure class=\"about__partnerbox--fig\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(197)))+" data-v-41e12dc4></figure> <div class=\"about__partnerbox--label\" data-v-41e12dc4><p data-v-41e12dc4>Fenwick and West</p></div></div> <div class=\"about__partnerbox\" data-v-41e12dc4><figure class=\"about__partnerbox--fig\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(198)))+" data-v-41e12dc4></figure> <div class=\"about__partnerbox--label\" data-v-41e12dc4><p data-v-41e12dc4>Light Speed Venture Partners</p></div></div> <div class=\"about__partnerbox\" data-v-41e12dc4><figure class=\"about__partnerbox--fig\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(199)))+" data-v-41e12dc4></figure> <div class=\"about__partnerbox--label\" data-v-41e12dc4><p data-v-41e12dc4>Multicoin Capital</p></div></div></div></div> <div class=\"about__partners\" data-v-41e12dc4><div class=\"about__partnerboxes\" data-v-41e12dc4><div class=\"about__partnerbox\" data-v-41e12dc4><figure class=\"about__partnerbox--fig\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(200)))+" data-v-41e12dc4></figure> <div class=\"about__partnerbox--label\" data-v-41e12dc4><p data-v-41e12dc4>Ribbit Capital</p></div></div> <div class=\"about__partnerbox\" data-v-41e12dc4><figure class=\"about__partnerbox--fig\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(201)))+" data-v-41e12dc4></figure> <div class=\"about__partnerbox--label\" data-v-41e12dc4><p data-v-41e12dc4>Paradigm Capital</p></div></div> <div class=\"about__partnerbox\" data-v-41e12dc4><figure class=\"about__partnerbox--fig\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(202)))+" data-v-41e12dc4></figure> <div class=\"about__partnerbox--label\" data-v-41e12dc4><p data-v-41e12dc4>Proof of Capital</p></div></div> <div class=\"about__partnerbox\" data-v-41e12dc4><figure class=\"about__partnerbox--fig\" data-v-41e12dc4><img"+(_vm._ssrAttr("src",__webpack_require__(203)))+" data-v-41e12dc4></figure> <div class=\"about__partnerbox--label\" data-v-41e12dc4><p data-v-41e12dc4>Paxos PAX</p></div></div></div></div></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=41e12dc4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
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
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  methods: {
    moveToRoute(route) {
      this.$router.push(route);
    }

  }
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(204)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "41e12dc4",
  "a4c9dbf6"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map