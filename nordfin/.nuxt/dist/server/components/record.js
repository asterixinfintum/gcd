exports.ids = [23,14];
exports.modules = {

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
//# sourceMappingURL=record.js.map