exports.ids = [34];
exports.modules = {

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(256);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7e5a8430", content, true, context)
};

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_50063806_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(170);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_50063806_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_50063806_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_50063806_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_50063806_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dashboard[data-v-50063806]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}.dashboard__h1[data-v-50063806]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.dashboard__h1[data-v-50063806],.dashboard__h2[data-v-50063806]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);font-weight:400}.dashboard__h2[data-v-50063806]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.dashboard__topbtns a[data-v-50063806]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);cursor:pointer;border:none;outline:none;background:#3761f9;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);border-radius:.5rem;text-decoration:none;color:#fff;margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.dashboard__list[data-v-50063806]{margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.dashboard__user[data-v-50063806]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);color:#000;background:#fff;border-radius:.5rem;position:relative;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17)}.dashboard__user--area[data-v-50063806]{display:flex;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);text-transform:capitalize;justify-content:space-between;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*700)}.dashboard__user--section[data-v-50063806]{display:flex;flex-direction:column;flex-basis:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200)}.dashboard__user--section span[data-v-50063806]{display:inline-block}.dashboard__user--section span[data-v-50063806]:first-child{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*7);font-weight:700;color:#474dff}.dashboard__user--section span[data-v-50063806]:nth-child(2){font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18)}.dashboard__user--section span.email[data-v-50063806]{text-transform:lowercase;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.dashboard__user--edit[data-v-50063806]{position:absolute;right:0;top:0;background:#474dff;border-radius:.3rem;color:#fff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);cursor:pointer}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


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

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard.vue?vue&type=template&id=50063806&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dashboard"},[_vm._ssrNode("<h1 class=\"dashboard__h1\" data-v-50063806>Admin Dashboard</h1> "),_vm._ssrNode("<div class=\"dashboard__topbtns\" data-v-50063806>","</div>",[_c('NuxtLink',{staticClass:"createasset",attrs:{"to":"/admin/createasset"}},[_vm._v("Create Asset")]),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"createasset",attrs:{"to":"/admin/viewassets"}},[_vm._v("View Assets")])],2),_vm._ssrNode(" "+((_vm.users)?("<div class=\"dashboard__list\" data-v-50063806><h2 class=\"dashboard__h2\" data-v-50063806>Grant Cred Users</h2> <h2 data-v-50063806>"+_vm._ssrEscape(_vm._s(_vm.user ? _vm.user.name : ''))+"</h2> "+(_vm._ssrList((_vm.users),function(item){return ("<div class=\"dashboard__user\" data-v-50063806><span class=\"dashboard__user--edit\" data-v-50063806>Edit user</span> <div class=\"dashboard__user--area\" data-v-50063806><div class=\"dashboard__user--section\" data-v-50063806><span data-v-50063806>Firstname:</span> <span data-v-50063806>"+_vm._ssrEscape(_vm._s(item.firstname))+"</span></div> <div class=\"dashboard__user--section\" data-v-50063806><span data-v-50063806>Lastname:</span> <span data-v-50063806>"+_vm._ssrEscape(_vm._s(item.lastname))+"</span></div></div> <div class=\"dashboard__user--area\" data-v-50063806><div class=\"dashboard__user--section email\" data-v-50063806><span data-v-50063806>Email:</span> <span data-v-50063806>"+_vm._ssrEscape(_vm._s(item.email))+"</span></div> <div class=\"dashboard__user--section\" data-v-50063806><span data-v-50063806>Account number:</span> <span data-v-50063806>"+_vm._ssrEscape(_vm._s(item.phonenumber))+"</span></div></div> <div class=\"dashboard__user--area\" data-v-50063806><div class=\"dashboard__user--section\" data-v-50063806><span data-v-50063806>Phonenumber:</span> <span data-v-50063806>"+_vm._ssrEscape(_vm._s(item.accountNumber))+"</span></div> <div class=\"dashboard__user--section\" data-v-50063806><span data-v-50063806>Balance</span> <span data-v-50063806>"+_vm._ssrEscape(_vm._s(item.balance))+"</span></div></div></div>")}))+"</div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/admin/dashboard.vue?vue&type=template&id=50063806&scoped=true&

// EXTERNAL MODULE: ./mixins/admin.js
var admin = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/admin/dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var dashboardvue_type_script_lang_js_ = ({
  mixins: [admin["a" /* default */]],

  mounted() {//console.log(this.users)
  },

  methods: {
    editUser(id) {
      this.$router.push(`/admin/user?id=${id}`);
    }

  },

  beforeMount() {
    this.getUsers();
  },

  computed: {
    users() {
      return this.$store.getters.users;
    }

  }
});
// CONCATENATED MODULE: ./pages/admin/dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var admin_dashboardvue_type_script_lang_js_ = (dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/admin/dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(255)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  admin_dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "50063806",
  "640916cc"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

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
//# sourceMappingURL=dashboard.js.map