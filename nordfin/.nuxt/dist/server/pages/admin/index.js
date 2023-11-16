exports.ids = [36,14];
exports.modules = {

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(207);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("00f34d18", content, true, context)
};

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ffda145_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ffda145_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ffda145_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ffda145_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1ffda145_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes spinFive-data-v-1ffda145{0%{transform:rotate(0deg)}50%{opacity:0}to{transform:rotate(1turn)}}@keyframes spinFive-data-v-1ffda145{0%{transform:rotate(0deg)}50%{opacity:0}to{transform:rotate(1turn)}}.signin[data-v-1ffda145]{background:#0a0e17;color:#fff;height:100vh}.signin__header[data-v-1ffda145]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);border-bottom:1px solid hsla(0,0%,100%,.2);color:#fff;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);display:flex;align-items:center;cursor:pointer}@media only screen and (max-width:414px){.signin__header[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90)}}.signin__container[data-v-1ffda145]{background:#1d1f2b;border-radius:10px;margin:0 auto;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*600);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);color:#fff;transition:box-shadow .3s cubic-bezier(.4,0,.2,1) 0ms;background-image:linear-gradient(hsla(0,0%,100%,0),hsla(0,0%,100%,0));padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50);display:flex;flex-direction:column}@media only screen and (max-width:414px){.signin__container[data-v-1ffda145]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1500);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*2100);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200)}}.signin__container--top h1[data-v-1ffda145]{position:relative;color:#fff;font-weight:500;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*22);letter-spacing:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:center;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*16)}@media only screen and (max-width:414px){.signin__container--top h1[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);font-weight:500;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.signin__containerform--checkbox[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);display:flex;align-items:center}@media only screen and (max-width:414px){.signin__containerform--checkbox[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*65);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70)}}.signin__containerform--checkbox span[data-v-1ffda145]{display:inline-block}.signin__containerform--checkbox span[data-v-1ffda145]:first-child{margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}@media only screen and (max-width:414px){.signin__containerform--checkbox span[data-v-1ffda145]:first-child{margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}}.signin__containerform--checkbox a[data-v-1ffda145]{text-decoration:none;color:#007994}.signin__containerform--button button[data-v-1ffda145]{background:#007994;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);border-radius:5px;color:#fff;cursor:pointer;border:none;width:100%;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}@media only screen and (max-width:414px){.signin__containerform--button button[data-v-1ffda145]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*210);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*65)}}.signin__containerformarea[data-v-1ffda145]{position:relative;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25)}@media only screen and (max-width:414px){.signin__containerformarea[data-v-1ffda145]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70)}}.signin__containerformarea span[data-v-1ffda145]:first-child{position:relative}.signin__containerformarea span:first-child input[data-v-1ffda145]{position:relative;background:hsla(0,0%,100%,.09);display:inline-block;border:none;outline:none;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*53);width:100%;border-radius:5px;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);color:#fff;z-index:2;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14)}@media only screen and (max-width:414px){.signin__containerformarea span:first-child input[data-v-1ffda145]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*79)}}.signin__containerformarea span:first-child input:-moz-placeholder-shown~span[data-v-1ffda145]{position:absolute;top:0;z-index:1;height:100%;width:100%;display:flex;align-items:center;color:#fff;opacity:.5;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);-moz-transition:all .2s ease;transition:all .2s ease}.signin__containerformarea span:first-child input:-ms-input-placeholder~span[data-v-1ffda145]{position:absolute;top:0;z-index:1;height:100%;width:100%;display:flex;align-items:center;color:#fff;opacity:.5;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);-ms-transition:all .2s ease;transition:all .2s ease}.signin__containerformarea span:first-child input:placeholder-shown~span[data-v-1ffda145]{position:absolute;top:0;z-index:1;height:100%;width:100%;display:flex;align-items:center;color:#fff;opacity:.5;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);transition:all .2s ease}.signin__containerformarea span:first-child input:-moz-placeholder-shown~span p[data-v-1ffda145]{font-weight:300;display:inline-block;-moz-transition:all .2s ease;transition:all .2s ease;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);color:#fff}.signin__containerformarea span:first-child input:-ms-input-placeholder~span p[data-v-1ffda145]{font-weight:300;display:inline-block;-ms-transition:all .2s ease;transition:all .2s ease;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);color:#fff}.signin__containerformarea span:first-child input:placeholder-shown~span p[data-v-1ffda145]{font-weight:300;display:inline-block;transition:all .2s ease;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);color:#fff}@media only screen and (max-width:414px){.signin__containerformarea span:first-child input:-moz-placeholder-shown~span p[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*55);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.signin__containerformarea span:first-child input:-ms-input-placeholder~span p[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*55);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.signin__containerformarea span:first-child input:placeholder-shown~span p[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*55);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}}.signin__containerformarea span:first-child input[data-v-1ffda145]:focus{border:1px solid #007994}.signin__containerformarea span:first-child input:focus~span[data-v-1ffda145]{opacity:1;top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-16)}.signin__containerformarea span:first-child input:focus~span p[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*9);color:#007994}.signin__containerformarea span:first-child span[data-v-1ffda145]{position:absolute;top:0;z-index:1;height:100%;width:100%;display:flex;align-items:center;color:#fff;opacity:.5;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);transition:all .2s ease;opacity:1;top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-16)}.signin__containerformarea span:first-child span p[data-v-1ffda145]{font-weight:300;display:inline-block;transition:all .2s ease;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*9);color:#007994}@media only screen and (max-width:414px){.signin__containerformarea span:first-child span p[data-v-1ffda145]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*79)}}.signin__containernamearea[data-v-1ffda145]{display:flex;justify-content:space-between}.signin__containernameareaname[data-v-1ffda145]{position:relative;flex-basis:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*240)}@media only screen and (max-width:414px){.signin__containernameareaname[data-v-1ffda145]{flex-basis:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*680)}}.signin__already span[data-v-1ffda145]{display:flex;justify-content:center;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*28)}.signin__already span p[data-v-1ffda145]{margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}.signin__already span a[data-v-1ffda145]{text-decoration:none;color:#007994;cursor:pointer}.loading[data-v-1ffda145]{position:relative;display:flex;justify-content:center;align-items:center;background:rgba(0,121,148,.3)!important}.loading[data-v-1ffda145]:before{content:\"\";width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*35);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*35);border-radius:50%;border:2px solid #fff;border-left-color:#1d1f2b;transition:all .5s ease-in;background:transparent;position:absolute;top:12%;left:45%;-webkit-animation:spinFive-data-v-1ffda145 1s linear 1s infinite;animation:spinFive-data-v-1ffda145 1s linear 1s infinite}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pink-circle.a1bbd11.png";

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=template&id=1ffda145&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"signin\" data-v-1ffda145>","</div>",[_vm._ssrNode("<header class=\"signin__header\" data-v-1ffda145><p data-v-1ffda145>Grant Cred Financials</p></header> <div class=\"signin__container\" data-v-1ffda145><div class=\"signin__container--top\" data-v-1ffda145><h1 data-v-1ffda145>Login to your account</h1></div> <div class=\"signin__containerform\" data-v-1ffda145><div class=\"signin__containerformarea\" data-v-1ffda145><span data-v-1ffda145><input type=\"email\" placeholder=\" \""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-1ffda145> <span data-v-1ffda145><p data-v-1ffda145>Email</p></span></span></div> <div class=\"signin__containerformarea\" data-v-1ffda145><span data-v-1ffda145><input type=\"password\" placeholder=\" \""+(_vm._ssrAttr("value",(_vm.password)))+" data-v-1ffda145> <span data-v-1ffda145><p data-v-1ffda145>Password</p></span></span></div> <div class=\"signin__containerform--button\" data-v-1ffda145>"+((!_vm.loading)?("<button data-v-1ffda145>Login</button>"):"<!---->")+" "+((_vm.loading)?("<button class=\"loading\" data-v-1ffda145></button>"):"<!---->")+"</div></div></div> "),_vm._ssrNode("<div class=\"signin__already\" data-v-1ffda145>","</div>",[_vm._ssrNode("<span data-v-1ffda145>","</span>",[_vm._ssrNode("<p data-v-1ffda145>Don't have an account?</p> "),_c('router-link',{attrs:{"to":"/signup"}},[_vm._v("Sign up")])],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=template&id=1ffda145&scoped=true&

// EXTERNAL MODULE: ./mixins/admin.js
var admin = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var adminvue_type_script_lang_js_ = ({
  data() {
    return {
      email: '',
      password: '',
      loading: false
    };
  },

  mixins: [admin["a" /* default */]],
  methods: {
    moveToRoute(route) {
      this.$router.push(route);
    },

    signin() {
      const {
        email,
        password
      } = this;
      const credentials = {
        email,
        password
      };
      this.loading = true;
      this.authenticate(credentials, 'api/signinadmin');
    }

  },
  watch: {
    user: function (newVal, oldVal) {
      if (newVal) {
        if (newVal._id) {
          this.$router.push('/admin/dashboard');
        } else {
          this.$router.push('/admin');
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/admin/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_adminvue_type_script_lang_js_ = (adminvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(206)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_adminvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1ffda145",
  "26d6d60a"
  
)

/* harmony default export */ var pages_admin = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(33).default})


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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    baseUrl() {
      return `https://grantcred.com`;
    }

  }
});

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

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {};
  },

  mixins: [_mixins_url_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]],
  computed: {
    user() {
      return this.$store.getters.user;
    }

  },
  methods: {
    authenticate(credentials, route) {
      fetch(`${this.baseUrl}/${route}`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json()).then(json => {
        //console.log(json)
        if (json.message === 'no such user') {
          return alert('invalid admin');
        }

        const user = json.user;
        const token = json.token; //console.log(user, token);

        this.setUser(user, token);
      }).catch(err => {
        console.log(err);
      });
    },

    setUser(user, token) {
      localStorage.setItem('nordtokenxtxtxt', token);
      this.$store.dispatch('storeUser', user);
    },

    getUsers() {
      const user_token = localStorage.getItem('nordtokenxtxtxt');
      fetch(`${this.baseUrl}/api/getusers`, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": user_token
        }
      }).then(response => response.json()).then(json => {
        const users = json.users; //console.log(users, 'the users are here')

        this.$store.dispatch('storeUsers', users);
      });
    }

  }
});

/***/ })

};;
//# sourceMappingURL=index.js.map