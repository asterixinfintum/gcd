exports.ids = [45,14,15,23];
exports.modules = {

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(219);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5d525bb8", content, true, context)
};

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marginborrows_vue_vue_type_style_index_0_id_61cfab2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marginborrows_vue_vue_type_style_index_0_id_61cfab2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marginborrows_vue_vue_type_style_index_0_id_61cfab2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marginborrows_vue_vue_type_style_index_0_id_61cfab2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_marginborrows_vue_vue_type_style_index_0_id_61cfab2e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".marginborrows[data-v-61cfab2e]{min-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1000);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.marginborrows__body[data-v-61cfab2e]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.marginborrows__toparea--heading[data-v-61cfab2e]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.marginborrows__toparea--heading h2[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*22);font-weight:400;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}@media only screen and (max-width:414px){.marginborrows__toparea--heading h2[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}}.marginborrows__nav[data-v-61cfab2e]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.marginborrows__nav[data-v-61cfab2e],.marginborrows__nav span[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);display:flex;align-items:center}.marginborrows__nav span[data-v-61cfab2e]{margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*6)}@media only screen and (max-width:414px){.marginborrows__nav span[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}}.marginborrows__nav span.colored[data-v-61cfab2e]{color:#00b4c9;cursor:pointer}.marginborrows__nav svg[data-v-61cfab2e]{fill:#fff;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14)}@media only screen and (max-width:414px){.marginborrows__nav svg[data-v-61cfab2e]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60)}}.marginborrows__content[data-v-61cfab2e]{background:#111722;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);border-radius:.3rem;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.marginborrows__notenabled[data-v-61cfab2e]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.marginborrows__notenabled h3[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*7);font-weight:400}@media only screen and (max-width:414px){.marginborrows__notenabled h3[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}}.marginborrows__notenabled h4[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*35);font-weight:400;opacity:.7}@media only screen and (max-width:414px){.marginborrows__notenabled h4[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70)}}.marginborrows__notenabled button[data-v-61cfab2e]{color:#00b4c9;border:none;outline:none;text-transform:uppercase;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*12)}.marginborrows__notenabled button[data-v-61cfab2e]:hover{color:rgba(0,180,201,.8)}@media only screen and (max-width:414px){.marginborrows__notenabled button[data-v-61cfab2e]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.7fd49af.svg";

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pink-circle.a1bbd11.png";

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("ebaacffa", content, true, context)
};

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/marginborrows.vue?vue&type=template&id=61cfab2e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"marginborrows"},[_c('HeaderBox'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"marginborrows__body\" data-v-61cfab2e>","</div>",[_vm._ssrNode("<div class=\"marginborrows__toparea\" data-v-61cfab2e><section class=\"marginborrows__toparea--heading\" data-v-61cfab2e><div class=\"marginborrows__nav\" data-v-61cfab2e><span data-v-61cfab2e>Wallet</span> <span data-v-61cfab2e><svg data-v-61cfab2e><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_right"))+" data-v-61cfab2e></use></svg></span> <span data-v-61cfab2e>Margin Borrows</span> <span class=\"colored\" data-v-61cfab2e>(Margin Lending)</span></div> <h2 data-v-61cfab2e>Margin Borrows</h2></section></div> <section class=\"marginborrows__content marginborrows__notenabled\" data-v-61cfab2e><h3 data-v-61cfab2e>Margin Trading not enabled</h3> <h4 data-v-61cfab2e>Margin Trading is not enabled for your account</h4> <button data-v-61cfab2e>settings</button></section> "),_vm._ssrNode("<section class=\"marginborrows__content\" data-v-61cfab2e>","</section>",[_c('Record',{attrs:{"labels":['currency', 
                  'borrow size', 
                  'previous hourly rate', 
                  'estimated hourly borrow rate', 
                  'estimated liquidation price'
                  ],"records":[
                  [
                      'USD', 
                      '',
                      '0.0000038475',
                      '0.0000038475',
                      ''
                  ]
              ],"header":'Lending'}})],1),_vm._ssrNode(" "),_vm._ssrNode("<section class=\"marginborrows__content\" data-v-61cfab2e>","</section>",[_c('Record',{attrs:{"labels":['time', 
                  'currency', 
                  'borrow size', 
                  'hourly borrow rate', 
                  'borrow cost',
                  'cost in USD'
                  ],"records":[],"header":'Borrow History'}})],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/marginborrows.vue?vue&type=template&id=61cfab2e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/marginborrows.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var marginborrowsvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./pages/marginborrows.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_marginborrowsvue_type_script_lang_js_ = (marginborrowsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/marginborrows.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(218)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_marginborrowsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "61cfab2e",
  "0dd5b4a8"
  
)

/* harmony default export */ var marginborrows = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderBox: __webpack_require__(40).default,Record: __webpack_require__(45).default})


/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_650058a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_650058a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_650058a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_650058a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_650058a6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".header[data-v-650058a6]{position:fixed;top:0;left:0;width:100vw;z-index:10;background:#1d1d1d;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*180);display:flex;justify-content:space-between;align-items:center;transition:all .1s ease-in}@media only screen and (max-width:414px){.header[data-v-650058a6]{height:100vh;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1300);flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:0 calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);padding-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);position:fixed;transform:translateX(-123%)}.header[data-v-650058a6]:before{content:\"\";position:absolute;top:0;height:100%;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*300);right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-300);background:#1d1d1d;opacity:.3}}.header__mobile[data-v-650058a6]{display:none}@media only screen and (max-width:414px){.header__mobile[data-v-650058a6]{display:flex;justify-content:space-between;align-items:center;position:fixed;width:100vw;z-index:40;top:0;left:0;transform:translateX(100%);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*180)}}.header__mobile--logo[data-v-650058a6]{cursor:pointer}@media only screen and (max-width:414px){.header__mobile--logo[data-v-650058a6]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);margin-right:0;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}}.header__mobile--logo img[data-v-650058a6]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}@media only screen and (max-width:414px){.header__mobile--toggle[data-v-650058a6]{display:flex;flex-direction:column;align-items:flex-end}.header__mobile--toggle span[data-v-650058a6]{display:inline-block;background:#fff;border-radius:3rem;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*160)}.header__mobile--toggle span[data-v-650058a6]:nth-child(2){width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*140)}.header__mobile--toggle span[data-v-650058a6]:nth-child(3){width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*120)}}@media only screen and (max-width:414px){.header.sidenav[data-v-650058a6]{transform:translateX(0)}}.header__left[data-v-650058a6]{display:flex;align-items:center}@media only screen and (max-width:414px){.header__left[data-v-650058a6]{flex-direction:column;align-items:flex-start;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}}.header__leftlogo[data-v-650058a6]{display:flex;align-items:center;cursor:pointer}@media only screen and (max-width:414px){.header__leftlogo[data-v-650058a6]{flex-direction:column;align-items:flex-start}}.header__leftlogo--icon[data-v-650058a6]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}@media only screen and (max-width:414px){.header__leftlogo--icon[data-v-650058a6]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);margin-right:0;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}}.header__leftlogo--icon img[data-v-650058a6]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.header__leftlogo--label[data-v-650058a6]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}@media only screen and (max-width:414px){.header__leftlogo--label[data-v-650058a6]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}}.header__right[data-v-650058a6]{display:flex;align-items:center}@media only screen and (max-width:414px){.header__right[data-v-650058a6]{flex-direction:column;align-items:flex-start}}.header__right--link[data-v-650058a6]{color:#c0a161;cursor:pointer;text-decoration:none;margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}@media only screen and (max-width:414px){.header__right--link[data-v-650058a6]{flex-direction:column;align-items:flex-start;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);margin-left:0;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=650058a6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass("header",{ sidenav: _vm.sidenav }))+" data-v-650058a6><div class=\"header__mobile\" data-v-650058a6><figure class=\"header__mobile--logo\" data-v-650058a6><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" data-v-650058a6></figure> <div class=\"header__mobile--toggle\" data-v-650058a6><span data-v-650058a6></span> <span data-v-650058a6></span> <span data-v-650058a6></span></div></div> <div class=\"header__left\" data-v-650058a6><div class=\"header__leftlogo\" data-v-650058a6><figure class=\"header__leftlogo--icon\" data-v-650058a6><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" data-v-650058a6></figure> <div class=\"header__leftlogo--label\" data-v-650058a6><p data-v-650058a6>Grant Cred</p></div></div></div> <div class=\"header__right\" data-v-650058a6><a href=\"#mission\" class=\"header__right--link\" data-v-650058a6>Solutions</a> <a href=\"#benefits\" class=\"header__right--link\" data-v-650058a6>Benefits</a> <a href=\"#accounts\" class=\"header__right--link\" data-v-650058a6>Accounts</a> <span class=\"header__right--link\" data-v-650058a6>Contact</span> <span class=\"header__right--link\" data-v-650058a6>About</span></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=650058a6&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  data() {
    return {
      sidenav: false
    };
  },

  methods: {
    toggleslde() {
      this.sidenav === false ? this.sidenav = true : this.sidenav = false;
    },

    moveToRoute(route) {
      this.$router.push(route);
    }

  }
});
// CONCATENATED MODULE: ./components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "650058a6",
  "5e18e609"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(42);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("11f28607", content, true, context)
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

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_id_35a19f40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_id_35a19f40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_id_35a19f40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_id_35a19f40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Record_vue_vue_type_style_index_0_id_35a19f40_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".record__header[data-v-35a19f40]{display:flex;justify-content:space-between;align-items:center;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*35);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.record__left[data-v-35a19f40]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18);text-transform:capitalize}@media only screen and (max-width:414px){.record__left[data-v-35a19f40]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70)}}.record__right button[data-v-35a19f40]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);border-radius:.6rem;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*12);background:rgba(0,180,201,.6);border:.5px solid rgba(0,180,201,.6)}.record__labels[data-v-35a19f40]{display:grid;grid-template-columns:repeat(auto-fit,minmax(calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70),1fr));grid-gap:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*3);align-items:flex-start;text-transform:capitalize;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) 0}.record__labels.mobile[data-v-35a19f40]{display:none}@media only screen and (max-width:414px){.record__labels[data-v-35a19f40]{display:none}.record__labels.mobile[data-v-35a19f40]{display:flex;flex-direction:column}}.record__labels--label[data-v-35a19f40]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*12);opacity:.5}@media only screen and (max-width:414px){.record__labels--label[data-v-35a19f40]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60)}.record__labels--label.mobile[data-v-35a19f40]{opacity:1;display:flex;flex-direction:column}.record__labels--label.mobile span.topic[data-v-35a19f40]{opacity:.5;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}}.record__populated[data-v-35a19f40]{display:grid;grid-template-columns:repeat(auto-fit,minmax(calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70),1fr));grid-gap:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*3);align-items:flex-start;text-transform:capitalize;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) 0;border-bottom:1px solid hsla(0,0%,100%,.2)}.record__populated--label[data-v-35a19f40]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13);opacity:1}@media only screen and (max-width:414px){.record__populated[data-v-35a19f40]{display:none}}.record__empty[data-v-35a19f40]{text-align:center;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);border-top:1px solid hsla(0,0%,100%,.2);border-bottom:1px solid hsla(0,0%,100%,.2);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14)}@media only screen and (max-width:414px){.record__empty[data-v-35a19f40]{display:none}}.record__rowtog[data-v-35a19f40]{display:flex;justify-content:space-between;align-items:center;position:relative;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13)}@media only screen and (max-width:414px){.record__rowtog[data-v-35a19f40]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}}.record__rowtog--right[data-v-35a19f40]{display:flex;justify-content:space-between;align-items:center}.record__rowtog span[data-v-35a19f40]{display:flex;justify-content:center;align-items:center;margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}@media only screen and (max-width:414px){.record__rowtog span[data-v-35a19f40]{margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}}.record__rowtog span.figure[data-v-35a19f40],.record__rowtog span.svg[data-v-35a19f40]{cursor:pointer}.record__rowtog span.svg svg[data-v-35a19f40]{fill:#fff;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);opacity:.5}@media only screen and (max-width:414px){.record__rowtog span.svg svg[data-v-35a19f40]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.record__rowtog span.drop[data-v-35a19f40]{margin-left:0}.record__rowtog span.drop svg[data-v-35a19f40]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);opacity:.9}@media only screen and (max-width:414px){.record__rowtog span.drop svg[data-v-35a19f40]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.record__rowtog--dropmenu[data-v-35a19f40]{position:absolute;bottom:0;right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);background:#111722;text-align:left;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.record__rowtog--dropmenu span[data-v-35a19f40]{text-align:left;display:inline-block;width:100%;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) 0;cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Record.vue?vue&type=template&id=35a19f40&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"record"},[_vm._ssrNode("<header class=\"record__header\" data-v-35a19f40><div class=\"record__left\" data-v-35a19f40><p data-v-35a19f40>"+_vm._ssrEscape(_vm._s(_vm.header))+"</p></div> <div class=\"record__right\" data-v-35a19f40>"+((_vm.btnlabel)?("<button data-v-35a19f40>"+_vm._ssrEscape(_vm._s(_vm.btnlabel))+"</button>"):"<!---->")+"</div></header> <section class=\"record__labels\" data-v-35a19f40>"+(_vm._ssrList((_vm.labels),function(label){return ("<div class=\"record__labels--label\" data-v-35a19f40>"+_vm._ssrEscape(_vm._s(label))+"</div>")}))+"</section> <section class=\"record__labels mobile\" data-v-35a19f40>"+(_vm._ssrList((_vm.labels),function(label){return ("<div class=\"record__labels--label mobile\" data-v-35a19f40><span class=\"topic\" data-v-35a19f40>"+_vm._ssrEscape(_vm._s(label)+":")+"</span> "+(_vm._ssrList((_vm.records),function(record){return ("<span class=\"record__labels--label mobile\" data-v-35a19f40><span data-v-35a19f40>"+_vm._ssrEscape(_vm._s(record[_vm.labels.indexOf(label)]))+"</span></span>")}))+"</div>")}))+"</section> "+((!_vm.records.length && !_vm.headerType || !_vm.records && !_vm.headerType)?("<section class=\"record__empty\" data-v-35a19f40><p data-v-35a19f40>No matching records found</p></section>"):"<!---->")+" "+(_vm._ssrList((_vm.records),function(record){return ("<section class=\"record__populated\" data-v-35a19f40>"+(_vm._ssrList((record),function(item){return ("<div class=\"record__populated--label\" data-v-35a19f40>"+_vm._ssrEscape(_vm._s(item))+"</div>")}))+"</section>")}))+" "+((!_vm.headerType)?("<section class=\"record__rowtog\" data-v-35a19f40><div data-v-35a19f40></div> <div class=\"record__rowtog--right\" data-v-35a19f40><span class=\"perpage\" data-v-35a19f40>Rows per page:</span> <span class=\"figure\" data-v-35a19f40>"+_vm._ssrEscape(_vm._s(_vm.itemsperpage))+"</span> <span class=\"svg drop\" data-v-35a19f40><svg data-v-35a19f40><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-arrow_drop_down"))+" data-v-35a19f40></use></svg></span> <span class=\"svg\" data-v-35a19f40><svg data-v-35a19f40><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-chevron-left"))+" data-v-35a19f40></use></svg></span> <span class=\"svg\" data-v-35a19f40><svg data-v-35a19f40><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-chevron-right"))+" data-v-35a19f40></use></svg></span> "+((_vm.showdropdown)?("<div class=\"record__rowtog--dropmenu\" data-v-35a19f40><span data-v-35a19f40>10</span> <span data-v-35a19f40>15</span> <span data-v-35a19f40>100</span></div>"):"<!---->")+"</div></section>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Record.vue?vue&type=template&id=35a19f40&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Record.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Recordvue_type_script_lang_js_ = ({
  props: ['labels', 'records', 'header', 'btnlabel', 'headerType'],

  data() {
    return {
      itemsperpage: 10,
      showdropdown: false
    };
  },

  methods: {
    toggleitemsperpage(val) {
      this.itemsperpage = val;
      this.showdropdown = false;
    }

  }
});
// CONCATENATED MODULE: ./components/Record.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Recordvue_type_script_lang_js_ = (Recordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Record.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(41)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Recordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "35a19f40",
  "1407edcd"
  
)

/* harmony default export */ var Record = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=marginborrows.js.map