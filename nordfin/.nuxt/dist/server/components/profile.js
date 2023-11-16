exports.ids = [22];
exports.modules = {

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Profile.vue?vue&type=template&id=f30c2ad6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"profile\" data-v-f30c2ad6><div class=\"profile__header\" data-v-f30c2ad6><h2 class=\"profile__header--h2\" data-v-f30c2ad6>Profile</h2> <p class=\"profile__header--p\" data-v-f30c2ad6>Update your photo and personal details here</p></div> "+((_vm.edit)?("<div class=\"profile__content\" data-v-f30c2ad6><div class=\"profile__section\" data-v-f30c2ad6><div class=\"profile__contentarea\" data-v-f30c2ad6><span class=\"profile__contentarea--label\" data-v-f30c2ad6><p data-v-f30c2ad6>First name</p></span> <span class=\"profile__contentarea--input\" data-v-f30c2ad6><input type=\"text\""+(_vm._ssrAttr("value",(_vm.firstname)))+" data-v-f30c2ad6></span></div> <div class=\"profile__contentarea\" data-v-f30c2ad6><span class=\"profile__contentarea--label\" data-v-f30c2ad6><p data-v-f30c2ad6>Last name</p></span> <span class=\"profile__contentarea--input\" data-v-f30c2ad6><input type=\"text\""+(_vm._ssrAttr("value",(_vm.lastname)))+" data-v-f30c2ad6></span></div></div> <div class=\"profile__section\" data-v-f30c2ad6><div class=\"profile__contentarea\" data-v-f30c2ad6><span class=\"profile__contentarea--label\" data-v-f30c2ad6><p data-v-f30c2ad6>Email</p></span> <span class=\"profile__contentarea--input\" data-v-f30c2ad6><input type=\"email\""+(_vm._ssrAttr("value",(_vm.email)))+" data-v-f30c2ad6></span></div> <div class=\"profile__contentarea\" data-v-f30c2ad6><span class=\"profile__contentarea--label\" data-v-f30c2ad6><p data-v-f30c2ad6>Phone number</p></span> <span class=\"profile__contentarea--input\" data-v-f30c2ad6><input type=\"text\""+(_vm._ssrAttr("value",(_vm.phonenumber)))+" data-v-f30c2ad6></span></div></div> <div class=\"profile__bottom\" data-v-f30c2ad6><span class=\"profile__bottom--btn\" data-v-f30c2ad6>\n                          Submit\n                      </span></div></div>"):"<!---->")+" "+((!_vm.edit)?("<div class=\"profile__content\" data-v-f30c2ad6><div class=\"profile__section\" data-v-f30c2ad6><div class=\"profile__contentarea\" data-v-f30c2ad6><span class=\"profile__contentarea--label\" data-v-f30c2ad6><p data-v-f30c2ad6>First name</p></span> <span class=\"profile__contentarea--input\" data-v-f30c2ad6><p class=\"detail\" data-v-f30c2ad6>"+_vm._ssrEscape(_vm._s(this.user ? this.user.firstname : ''))+"</p></span></div> <div class=\"profile__contentarea\" data-v-f30c2ad6><span class=\"profile__contentarea--label\" data-v-f30c2ad6><p data-v-f30c2ad6>Last name</p></span> <span class=\"profile__contentarea--input\" data-v-f30c2ad6><p class=\"detail\" data-v-f30c2ad6>"+_vm._ssrEscape(_vm._s(this.user ? this.user.lastname : ''))+"</p></span></div></div> <div class=\"profile__section\" data-v-f30c2ad6><div class=\"profile__contentarea\" data-v-f30c2ad6><span class=\"profile__contentarea--label\" data-v-f30c2ad6><p data-v-f30c2ad6>Email</p></span> <span class=\"profile__contentarea--input\" data-v-f30c2ad6><p class=\"detail\" data-v-f30c2ad6>"+_vm._ssrEscape(_vm._s(this.user ? this.user.email : ''))+"</p></span></div> <div class=\"profile__contentarea\" data-v-f30c2ad6><span class=\"profile__contentarea--label\" data-v-f30c2ad6><p data-v-f30c2ad6>Phone number</p></span> <span class=\"profile__contentarea--input\" data-v-f30c2ad6><p class=\"detail\" data-v-f30c2ad6>"+_vm._ssrEscape(_vm._s(this.user ? this.user.phonenumber : ''))+"</p></span></div></div> <div class=\"profile__bottom\" data-v-f30c2ad6><span class=\"profile__bottom--btn\" data-v-f30c2ad6>\n                          Click to edit profile\n                      </span></div></div>"):"<!---->")+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Profile.vue?vue&type=template&id=f30c2ad6&scoped=true&

// EXTERNAL MODULE: ./mixins/user.js
var user = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Profile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Profilevue_type_script_lang_js_ = ({
  data() {
    return {
      edit: false,
      firstname: '',
      lastname: '',
      email: '',
      phonenumber: ''
    };
  },

  methods: {
    toggleForm() {
      this.firstname = this.user.firstname;
      this.lastname = this.user.lastname;
      this.email = this.user.email;
      this.phonenumber = this.user.phonenumber;
      this.edit ? this.edit = false : this.edit = true;
    },

    submit() {
      const user_token = localStorage.getItem('nordtokenxtxtxt');
      const {
        firstname,
        lastname,
        email,
        phonenumber
      } = this;
      fetch(`${this.baseUrl}/api/edituser`, {
        method: "PATCH",
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phonenumber
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": user_token
        }
      }).then(response => response.json()).then(json => {
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.phonenumber = '';
        this.getUser();
      }).then(json => {
        this.edit = false;
      }).catch(err => console.log(err));
    }

  },
  mixins: [user["a" /* default */]]
});
// CONCATENATED MODULE: ./components/Profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Profilevue_type_script_lang_js_ = (Profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Profile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "f30c2ad6",
  "2ba6ccdd"
  
)

/* harmony default export */ var Profile = __webpack_exports__["default"] = (component.exports);

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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      pinstruction: '',
      plabel: '',
      popuptype: null
    };
  },

  mixins: [_mixins_url_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]],
  methods: {
    closePopup() {
      this.popuptype = null;
    },

    authenticate(credentials, route) {
      fetch(`${this.baseUrl}/${route}`, {
        method: "POST",
        body: JSON.stringify(credentials),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(response => response.json()).then(json => {
        const user = json.user;
        const token = json.token;
        this.setUser(user, token);
      }).then(() => {
        this.$router.push('/wallet');
      }).catch(err => console.log(err));
    },

    getUser() {
      const user_token = localStorage.getItem('nordtokenxtxtxt');

      if (user_token) {
        fetch(`${this.baseUrl}/api/getuser`, {
          method: "GET",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": user_token
          }
        }).then(response => response.json()).then(json => {
          const user = json.user;
          const token = json.token;
          this.setUser(user, token);
        });
      } else {
        this.$router.push('/');
      }
    },

    setUser(user, token) {
      localStorage.setItem('nordtokenxtxtxt', token);
      this.$store.dispatch('storeUser', user);
    },

    requestSomething(body) {
      this.popuptype = 'loading';
      setTimeout(() => {
        const user_token = localStorage.getItem('nordtokenxtxtxt');

        if (user_token) {
          fetch(`${this.baseUrl}/api/request`, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": user_token
            }
          }).then(response => response.json()).then(json => {
            this.popuptype = 'message';
          }).catch(err => {
            console.log(err);
          });
        }
      }, 5000);
    }

  },
  computed: {
    user: function () {
      return this.$store.getters.user;
    }
  },

  beforeMount() {
    this.getUser();
  }

});

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("778cba63", content, true, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_f30c2ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_f30c2ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_f30c2ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_f30c2ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_style_index_0_id_f30c2ad6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".profile[data-v-f30c2ad6]{min-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*390);width:100%;padding-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*390)}.profile__header[data-v-f30c2ad6]{line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*35);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.profile__header--h2[data-v-f30c2ad6]{font-weight:400;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.profile__header--p[data-v-f30c2ad6]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.profile__section[data-v-f30c2ad6]{display:flex;justify-content:space-between;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.profile__content[data-v-f30c2ad6]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60)}.profile__contentarea[data-v-f30c2ad6]{flex-basis:48%}.profile__contentarea--input[data-v-f30c2ad6]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);display:inline-block;width:100%}.profile__contentarea--input input[data-v-f30c2ad6]{display:inline-block;border:none;width:100%;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*45);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);border-radius:.3rem;outline:none;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);letter-spacing:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*2);background:hsla(0,0%,100%,.09);color:#fff}.profile__contentarea--input p.detail[data-v-f30c2ad6]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.profile__contentarea--input textarea[data-v-f30c2ad6]{display:inline-block;border:none;width:100%;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);border-radius:.3rem;outline:none;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);letter-spacing:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*2);background:hsla(0,0%,100%,.09);color:#fff}.profile__contentarea--stretch[data-v-f30c2ad6]{flex-basis:100%}.profile__contentarea--label[data-v-f30c2ad6]{display:inline-block;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*16);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}.profile__bottom--btn[data-v-f30c2ad6]{background:#474dff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);cursor:pointer;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);border-radius:.2rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=profile.js.map