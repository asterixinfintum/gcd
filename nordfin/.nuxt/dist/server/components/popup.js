exports.ids = [21];
exports.modules = {

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(272);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("390db15a", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.7fd49af.svg";

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_32c2a292_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_32c2a292_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_32c2a292_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_32c2a292_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Popup_vue_vue_type_style_index_0_id_32c2a292_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes spinFive-data-v-32c2a292{0%{transform:rotate(0deg)}50%{opacity:0}to{transform:rotate(1turn)}}@keyframes spinFive-data-v-32c2a292{0%{transform:rotate(0deg)}50%{opacity:0}to{transform:rotate(1turn)}}.popup[data-v-32c2a292]{position:fixed;top:0;left:0;height:100vh;width:100vw;background:rgba(0,0,0,.5);z-index:10}.popup__body[data-v-32c2a292]{background:#fff;margin:0 auto;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*400);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*600);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);color:#000;display:flex;flex-direction:column;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);align-items:center;padding-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}.popup__body--loading[data-v-32c2a292]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);background:none;border-radius:100%;border:5px solid #fff;border-left-color:#474dff;transition:all .3s ease-in;-webkit-animation:spinFive-data-v-32c2a292 1s linear 1s infinite;animation:spinFive-data-v-32c2a292 1s linear 1s infinite}.popup__body svg[data-v-32c2a292]{fill:#474dff;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.popup__body p[data-v-32c2a292]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25);text-align:center;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);font-weight:400;opacity:.6}.popup__body span.button[data-v-32c2a292]{background:#474dff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50);border-radius:.1rem;cursor:pointer;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);font-weight:700;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);box-shadow:-2px 10px 91px -13px rgba(71,77,255,.75);-webkit-box-shadow:-2px 10px 91px -13px rgba(71,77,255,.75);-moz-box-shadow:-2px 10px 91px -13px rgba(71,77,255,.75);color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup.vue?vue&type=template&id=32c2a292&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"popup\" data-v-32c2a292>"+((_vm.popuptype === 'loading')?("<div class=\"popup__body\" data-v-32c2a292><div class=\"popup__body--loading\" data-v-32c2a292></div> <p data-v-32c2a292>Processing</p></div>"):"<!---->")+" "+((_vm.popuptype === 'message')?("<div class=\"popup__body\" data-v-32c2a292><span data-v-32c2a292><svg data-v-32c2a292><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-bubble2"))+" data-v-32c2a292></use></svg></span> <p data-v-32c2a292>You need a regulation code in order for us to process this request</p> <span class=\"button\" data-v-32c2a292>Close</span></div>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Popup.vue?vue&type=template&id=32c2a292&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Popup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Popupvue_type_script_lang_js_ = ({
  props: ['label', 'instruction', 'popuptype', 'closePopup']
});
// CONCATENATED MODULE: ./components/Popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Popupvue_type_script_lang_js_ = (Popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Popup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(271)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Popupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "32c2a292",
  "4e0e1160"
  
)

/* harmony default export */ var Popup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=popup.js.map