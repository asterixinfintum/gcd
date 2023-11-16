exports.ids = [40];
exports.modules = {

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(211);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("c4b9573a", content, true, context)
};

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4ea76e2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4ea76e2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4ea76e2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4ea76e2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_vue_vue_type_style_index_0_id_4ea76e2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".contact[data-v-4ea76e2c]{display:flex;justify-content:center;position:relative;padding-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);background:#fff}.contact[data-v-4ea76e2c]:before{content:\"\";position:absolute;background:#0a0e17;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*270);width:100%;left:0;top:0}.contact__container[data-v-4ea76e2c]{position:relative;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);background:#fff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);border-radius:1rem;-ms-box-shadow:0 0 7px 0 rgba(0,0,0,.09);box-shadow:0 0 7px 0 rgba(0,0,0,.09)}@media only screen and (max-width:414px){.contact__container[data-v-4ea76e2c]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}}.contact__top[data-v-4ea76e2c]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*44)}@media only screen and (max-width:414px){.contact__top[data-v-4ea76e2c]{display:flex;flex-direction:column;justify-content:center;align-items:center}}.contact__top h1[data-v-4ea76e2c]{position:relative;color:#4d4d4d;font-weight:500;text-transform:capitalize;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*26);letter-spacing:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*2);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:center;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*5)}@media only screen and (max-width:414px){.contact__top h1[data-v-4ea76e2c]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);font-weight:500;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}}.contact__top p[data-v-4ea76e2c]{line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);font-weight:500;color:#4d4d4d}@media only screen and (max-width:414px){.contact__top p[data-v-4ea76e2c]{text-align:center;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*67);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);font-weight:300}}@media only screen and (max-width:414px){.contact__form[data-v-4ea76e2c]{display:flex;flex-direction:column;justify-content:center;align-items:center}}.contact__formarea[data-v-4ea76e2c]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*600);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}@media only screen and (max-width:414px){.contact__formarea[data-v-4ea76e2c]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1400);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*130)}}.contact__formarea--input input[data-v-4ea76e2c]{width:100%;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);border:2px solid rgba(0,0,0,.1);border-radius:5px;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17)}@media only screen and (max-width:414px){.contact__formarea--input input[data-v-4ea76e2c]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);min-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.contact__formarea--input textarea[data-v-4ea76e2c]{width:100%;min-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*150);border:2px solid rgba(0,0,0,.1);border-radius:5px;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17)}@media only screen and (max-width:414px){.contact__formarea--input textarea[data-v-4ea76e2c]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);min-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*900);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.contact__formarea--label[data-v-4ea76e2c]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);color:#4d4d4d}@media only screen and (max-width:414px){.contact__formarea--label[data-v-4ea76e2c]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);display:flex;align-items:center}}.contact__formarea--label span[data-v-4ea76e2c]{display:inline-block}.contact__formarea--label span[data-v-4ea76e2c]:nth-child(2){color:red;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17)}@media only screen and (max-width:414px){.contact__formarea--label span[data-v-4ea76e2c]:nth-child(2){font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17)}}@media only screen and (max-width:414px){.contact__submit[data-v-4ea76e2c]{align-self:baseline;padding-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70)}}.contact__submit button[data-v-4ea76e2c]{border-radius:6px;background:#2d7ff9;color:#fff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);outline:none;border:none;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);cursor:pointer}@media only screen and (max-width:414px){.contact__submit button[data-v-4ea76e2c]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.contact__warn[data-v-4ea76e2c]{line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);font-weight:500;opacity:.5}@media only screen and (max-width:414px){.contact__warn[data-v-4ea76e2c]{line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);font-weight:300;align-self:baseline;padding-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=4ea76e2c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"contact\" data-v-4ea76e2c><div class=\"contact__container\" data-v-4ea76e2c><div class=\"contact__top\" data-v-4ea76e2c><h1 data-v-4ea76e2c>Contact us</h1> <p data-v-4ea76e2c>Someone from Grant Cred will reach back to you as soon as possible</p></div> <div class=\"contact__base\" data-v-4ea76e2c><form class=\"contact__form\" data-v-4ea76e2c><div class=\"contact__formarea\" data-v-4ea76e2c><div class=\"contact__formarea--label\" data-v-4ea76e2c><span data-v-4ea76e2c>Name</span> <span data-v-4ea76e2c>*</span></div> <div class=\"contact__formarea--input\" data-v-4ea76e2c><input type=\"email\""+(_vm._ssrAttr("value",(_vm.name)))+" data-v-4ea76e2c></div></div> <div class=\"contact__formarea\" data-v-4ea76e2c><div class=\"contact__formarea--label\" data-v-4ea76e2c><span data-v-4ea76e2c>Email</span> <span data-v-4ea76e2c>*</span></div> <div class=\"contact__formarea--input\" data-v-4ea76e2c><input type=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-4ea76e2c></div></div> <div class=\"contact__formarea\" data-v-4ea76e2c><div class=\"contact__formarea--label\" data-v-4ea76e2c><span data-v-4ea76e2c>Message</span> <span data-v-4ea76e2c>*</span></div> <div class=\"contact__formarea--input\" data-v-4ea76e2c><textarea type=\"email\" data-v-4ea76e2c>"+_vm._ssrEscape(_vm._s(_vm.message))+"</textarea></div></div> <div class=\"contact__submit\" data-v-4ea76e2c><button data-v-4ea76e2c>Submit</button></div> <p class=\"contact__warn\" data-v-4ea76e2c>Never submit passwords through this form</p></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=4ea76e2c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  }

});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(210)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4ea76e2c",
  "94c90dd0"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map