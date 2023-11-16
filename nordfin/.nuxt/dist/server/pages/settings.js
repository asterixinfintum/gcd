exports.ids = [51,10,15];
exports.modules = {

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(231);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("35e19d0c", content, true, context)
};

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DropDown.vue?vue&type=template&id=1f6b5377&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown",class:{ open: _vm.open }},[_vm._ssrNode("<div class=\"dropdown__controls\" data-v-1f6b5377><div class=\"dropdown__controls--left\" data-v-1f6b5377><span data-v-1f6b5377>"+_vm._ssrEscape("\n              "+_vm._s(_vm.label)+"\n          ")+"</span> <span data-v-1f6b5377>"+_vm._ssrEscape("\n              "+_vm._s(_vm.status)+"\n          ")+"</span></div> <div class=\"dropdown__controls--right\" data-v-1f6b5377>"+((!_vm.open)?("<span data-v-1f6b5377><svg data-v-1f6b5377><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-keyboard_arrow_down"))+" data-v-1f6b5377></use></svg></span>"):"<!---->")+" "+((_vm.open)?("<span data-v-1f6b5377><svg data-v-1f6b5377><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-chevron-up"))+" data-v-1f6b5377></use></svg></span>"):"<!---->")+"</div></div> "),(_vm.open)?_vm._ssrNode("<div class=\"dropdown__content\" data-v-1f6b5377>","</div>",[_vm._t("content")],2):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DropDown.vue?vue&type=template&id=1f6b5377&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DropDown.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var DropDownvue_type_script_lang_js_ = ({
  props: ['label', 'status'],

  data() {
    return {
      open: false
    };
  }

});
// CONCATENATED MODULE: ./components/DropDown.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DropDownvue_type_script_lang_js_ = (DropDownvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DropDown.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(87)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DropDownvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1f6b5377",
  "74cf00ad"
  
)

/* harmony default export */ var DropDown = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_054af062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(156);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_054af062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_054af062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_054af062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_settings_vue_vue_type_style_index_0_id_054af062_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".settings[data-v-054af062]{min-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1000);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.settings h2[data-v-054af062]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*22);font-weight:400;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}.settings__area[data-v-054af062]{background:#111722;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);border-radius:.3rem}.settings__alignitems[data-v-054af062]{display:flex;align-items:center}.settings__body[data-v-054af062]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200)}.settings__toprow[data-v-054af062]{display:flex;align-items:center}.settings__toprow--sect[data-v-054af062]{display:flex;flex-direction:column;margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*22);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*12)}.settings__toprow--sect span[data-v-054af062]:nth-child(2){font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.settings__base[data-v-054af062]{display:flex;justify-content:space-between;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*22)}.settings__baseleft[data-v-054af062]{text-align:right;display:flex;flex-direction:column;overflow:hidden;border-radius:.3rem;background:#111722;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*350)}.settings__baseleft span[data-v-054af062]{display:inline-block;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);border-bottom:.5px solid hsla(0,0%,100%,.5);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);cursor:pointer}.settings__baseleft span[data-v-054af062]:last-child{border-bottom:none}.settings__baseleft span.current[data-v-054af062]{color:#00b4c9}.settings__baseright[data-v-054af062]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*920);min-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*500);overflow:hidden;padding-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.settings__content[data-v-054af062]{background:#111722;border-radius:0 0 .3rem .3rem}.settings__content.header-area[data-v-054af062]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);border-radius:.3rem .3rem 0 0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sprite.7fd49af.svg";

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings.vue?vue&type=template&id=054af062&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings"},[_c('HeaderBox'),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"settings__body\" data-v-054af062>","</div>",[_vm._ssrNode("<section class=\"settings__top settings__area\" data-v-054af062><h2 data-v-054af062>Profile</h2> <div class=\"settings__toprow\" data-v-054af062><div class=\"settings__toprow--sect\" data-v-054af062><span data-v-054af062>Name</span> <span data-v-054af062>mark anderson</span></div> <div class=\"settings__toprow--sect\" data-v-054af062><span data-v-054af062>Email</span> <span data-v-054af062>markanderson@gmail.com</span></div> <div class=\"settings__toprow--sect\" data-v-054af062><span data-v-054af062>Account Plan</span> <span data-v-054af062>Gold</span></div> <div class=\"settings__toprow--sect\" data-v-054af062><span data-v-054af062>Affilliate Link</span> <span data-v-054af062>https://grantcred.com/=48783773</span></div></div></section> "),_vm._ssrNode("<section class=\"settings__base\" data-v-054af062>","</section>",[_vm._ssrNode("<div class=\"settings__baseleft\" data-v-054af062><span"+(_vm._ssrClass(null,{ current: _vm.currentview === 'Account Security' }))+" data-v-054af062>Security</span></div> "),_vm._ssrNode("<div class=\"settings__baseright\" data-v-054af062>","</div>",[_vm._ssrNode("<section class=\"settings__content header-area\" data-v-054af062><h2 class=\"currentview\" data-v-054af062>"+_vm._ssrEscape(_vm._s(_vm.currentview))+"</h2></section> "),(_vm.currentview === 'Account Security')?_vm._ssrNode("<section class=\"settings__content\" data-v-054af062>","</section>",[_c('DropDown',{attrs:{"label":'Change password',"status":'Not enabled'},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('p',[_vm._v("Request an email with instructions for changing your password. This will prevent you from withdrawing for 24 hours.")]),_vm._v(" "),_c('div',{staticClass:"dropdown__btnarea"},[_c('div'),_vm._v(" "),_c('button',[_vm._v("reset password")])])]},proxy:true}],null,false,3632811882)}),_vm._ssrNode(" "),_c('DropDown',{attrs:{"label":'Withdrawal password',"status":'Not enabled'},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('p',[_vm._v("Set a separate password for withdrawals")]),_vm._v(" "),_c('div',{staticClass:"dropdown__inputarea"},[_c('input',{attrs:{"placeholder":"New withdrawal password"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown__btnarea"},[_c('div'),_vm._v(" "),_c('button',[_vm._v("set password")])])]},proxy:true}],null,false,227730545)}),_vm._ssrNode(" "),_c('DropDown',{attrs:{"label":'Withdrawal Destination Whitelisting',"status":'Not enabled'},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('p',[_vm._v("Require that all withdrawals go to predesignated whitelisted addresses.")]),_vm._v(" "),_c('p',[_vm._v("You can whitelist addresses saved to your main account from the Saved Addresses page. Doing so requires 2FA and withdrawal passwords, if enabled. After submitting an address for whitelisting, you will be notified via email, and the address will be usable after a configurable delay. You can also elect to only allow Grant Cred admins to whitelist addresses for your account. "),_c('br'),_vm._v("Disabling this setting or reducing the whitelisting delay requires contacting a Grant Cred admin.")]),_vm._v(" "),_c('div',{staticClass:"dropdown__btnarea"},[_c('div'),_vm._v(" "),_c('button',[_vm._v("Restrict withdrawals to whitelist")])])]},proxy:true}],null,false,2530404208)}),_vm._ssrNode(" "),_c('DropDown',{attrs:{"label":'Require email approval on new device',"status":''},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('p',[_vm._v("Enabled. We will require you to click an email link when you log in from a new device and country...")]),_vm._v(" "),_c('div',{staticClass:"dropdown__btnarea"},[_c('div'),_vm._v(" "),_c('button',[_vm._v("disable")])])]},proxy:true}],null,false,3718290659)}),_vm._ssrNode(" "),_c('DropDown',{attrs:{"label":'Log Out of All Sessions',"status":''},scopedSlots:_vm._u([{key:"content",fn:function(){return [_c('p',[_vm._v("Press this button to log out of all active sessions for your account (including the one you are using right now).")]),_vm._v(" "),_c('div',{staticClass:"dropdown__btnarea"},[_c('div'),_vm._v(" "),_c('button',[_vm._v("log out of all sessions")])])]},proxy:true}],null,false,2922544551)})],2):_vm._e()],2)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/settings.vue?vue&type=template&id=054af062&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/settings.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var settingsvue_type_script_lang_js_ = ({
  data() {
    return {
      currentview: 'Account Security'
    };
  },

  methods: {
    toggleview(value) {
      this.currentview = value;
    }

  }
});
// CONCATENATED MODULE: ./pages/settings.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingsvue_type_script_lang_js_ = (settingsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/settings.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(230)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "054af062",
  "57bb824a"
  
)

/* harmony default export */ var settings = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeaderBox: __webpack_require__(40).default,DropDown: __webpack_require__(181).default})


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

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("5b4e2463", content, true, context)
};

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_1f6b5377_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_1f6b5377_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_1f6b5377_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_1f6b5377_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropDown_vue_vue_type_style_index_0_id_1f6b5377_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dropdown[data-v-1f6b5377]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.dropdown.open[data-v-1f6b5377]{background:#262b36}.dropdown__controls[data-v-1f6b5377]{display:flex;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13);justify-content:space-between;align-items:center;cursor:pointer}.dropdown__controls span[data-v-1f6b5377]{display:inline-block}.dropdown__controls span svg[data-v-1f6b5377]{fill:#fff;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.dropdown__controls--left span[data-v-1f6b5377]:first-child{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*250)}.dropdown__controls--left span[data-v-1f6b5377]:nth-child(2){margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);opacity:.5}.dropdown__content[data-v-1f6b5377]{margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.dropdown__content p[data-v-1f6b5377]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25)}.dropdown__inputarea[data-v-1f6b5377]{margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.dropdown__inputarea input[data-v-1f6b5377]{border:none;border-bottom:1px solid hsla(0,0%,100%,.4);outline:none;width:100%;background:transparent;color:#fff;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);padding-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*5)}.dropdown__inputarea input[data-v-1f6b5377]::-moz-placeholder{color:hsla(0,0%,100%,.5)}.dropdown__inputarea input[data-v-1f6b5377]:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.dropdown__inputarea input[data-v-1f6b5377]::placeholder{color:hsla(0,0%,100%,.5)}.dropdown__btnarea[data-v-1f6b5377]{display:flex;justify-content:space-between;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.dropdown__btnarea button[data-v-1f6b5377]{text-transform:uppercase;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);border-radius:.5rem}.dropdown__btnarea button[data-v-1f6b5377]:hover{background:#2d2e32}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=settings.js.map