exports.ids = [49,7,14];
exports.modules = {

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(227);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("1dfd9151", content, true, context)
};

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_style_index_0_id_3280fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(154);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_style_index_0_id_3280fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_style_index_0_id_3280fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_style_index_0_id_3280fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_password_vue_vue_type_style_index_0_id_3280fae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".password[data-v-3280fae0]{position:relative;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1200);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);min-height:70vh;padding-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200)}.password__feedback[data-v-3280fae0]{position:absolute;top:0;left:0;width:100vw;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);display:flex;justify-content:center;align-items:center;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100)}.password__feedback--p[data-v-3280fae0]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*500);background:#fff;color:#000;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);text-align:center}.password__error[data-v-3280fae0]{color:red;background:#fff;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*5)}.password__header[data-v-3280fae0]{line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*35);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.password__header--h2[data-v-3280fae0]{font-weight:400;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.password__header--p[data-v-3280fae0]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.password__section[data-v-3280fae0]{display:flex;justify-content:space-between;flex-direction:column;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.password__contentarea[data-v-3280fae0]{flex-basis:48%;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);position:relative}.password__contentarea--eye[data-v-3280fae0]{position:absolute;height:70%;width:3%;right:0;bottom:0;cursor:pointer;display:flex;align-items:center}.password__contentarea--eye svg[data-v-3280fae0]{fill:hsla(0,0%,100%,.7);height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.password__contentarea--input[data-v-3280fae0]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);display:inline-block;width:100%}.password__contentarea--input input[data-v-3280fae0]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*45)}.password__contentarea--input input[data-v-3280fae0],.password__contentarea--input textarea[data-v-3280fae0]{display:inline-block;border:none;width:100%;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);border-radius:.3rem;outline:none;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);letter-spacing:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*2);background:hsla(0,0%,100%,.09);color:#fff}.password__contentarea--input textarea[data-v-3280fae0]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200)}.password__contentarea--stretch[data-v-3280fae0]{flex-basis:100%}.password__contentarea--label[data-v-3280fae0]{display:inline-block;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*16);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}.password__bottom--btn[data-v-3280fae0]{background:#474dff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);cursor:pointer;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);border-radius:.2rem}", ""]);
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

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/password.vue?vue&type=template&id=3280fae0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode(((_vm.passwordchanged)?("<div class=\"password__feedback\" data-v-3280fae0><div class=\"password__feedback--p\" data-v-3280fae0><p data-v-3280fae0>Your password has been changed successfully</p></div></div>"):"<!---->")+" "),_c('Dashboard',{attrs:{"title":_vm.user ? ((_vm.user.firstname) + " " + (_vm.user.lastname)) : ''},scopedSlots:_vm._u([{key:"base",fn:function(){return [_c('div',{staticClass:"password"},[_c('div',{staticClass:"password__header"},[_c('h2',{staticClass:"password__header--h2"},[_vm._v("Password")]),_vm._v(" "),_c('p',{staticClass:"password__header--p"},[_vm._v("Update your password details here")])]),_vm._v(" "),_c('div',{staticClass:"password__body"},[_c('div',{staticClass:"password__section"},[(_vm.error)?_c('div',{staticClass:"password__error"},[_vm._v("*"+_vm._s(_vm.error))]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"password__contentarea"},[_c('span',{staticClass:"password__contentarea--eye",on:{"click":function($event){return _vm.toggleVisibility('old')}}},[_c('svg',[_c('use',{attrs:{"xlink:href":__webpack_require__(26) + "#icon-eye"}})])]),_vm._v(" "),_c('span',{staticClass:"password__contentarea--label"},[_c('p',[_vm._v("Old password")])]),_vm._v(" "),_c('span',{staticClass:"password__contentarea--input"},[((_vm.oldpasswordVisible ? 'text' : 'password')==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.oldpassword),expression:"oldpassword"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.oldpassword)?_vm._i(_vm.oldpassword,null)>-1:(_vm.oldpassword)},on:{"change":function($event){var $$a=_vm.oldpassword,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.oldpassword=$$a.concat([$$v]))}else{$$i>-1&&(_vm.oldpassword=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.oldpassword=$$c}}}}):((_vm.oldpasswordVisible ? 'text' : 'password')==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.oldpassword),expression:"oldpassword"}],attrs:{"type":"radio"},domProps:{"checked":_vm._q(_vm.oldpassword,null)},on:{"change":function($event){_vm.oldpassword=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.oldpassword),expression:"oldpassword"}],attrs:{"type":_vm.oldpasswordVisible ? 'text' : 'password'},domProps:{"value":(_vm.oldpassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.oldpassword=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"password__contentarea"},[_c('span',{staticClass:"password__contentarea--eye",on:{"click":function($event){return _vm.toggleVisibility('new')}}},[_c('svg',[_c('use',{attrs:{"xlink:href":__webpack_require__(26) + "#icon-eye"}})])]),_vm._v(" "),_c('span',{staticClass:"password__contentarea--label"},[_c('p',[_vm._v("New password")])]),_vm._v(" "),_c('span',{staticClass:"password__contentarea--input"},[((_vm.newpasswordVisible ? 'text' : 'password')==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpassword),expression:"newpassword"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.newpassword)?_vm._i(_vm.newpassword,null)>-1:(_vm.newpassword)},on:{"change":function($event){var $$a=_vm.newpassword,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.newpassword=$$a.concat([$$v]))}else{$$i>-1&&(_vm.newpassword=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.newpassword=$$c}}}}):((_vm.newpasswordVisible ? 'text' : 'password')==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpassword),expression:"newpassword"}],attrs:{"type":"radio"},domProps:{"checked":_vm._q(_vm.newpassword,null)},on:{"change":function($event){_vm.newpassword=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.newpassword),expression:"newpassword"}],attrs:{"type":_vm.newpasswordVisible ? 'text' : 'password'},domProps:{"value":(_vm.newpassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.newpassword=$event.target.value}}})])]),_vm._v(" "),_c('div',{staticClass:"password__contentarea"},[_c('span',{staticClass:"password__contentarea--eye",on:{"click":function($event){return _vm.toggleVisibility('conf')}}},[_c('svg',[_c('use',{attrs:{"xlink:href":__webpack_require__(26) + "#icon-eye"}})])]),_vm._v(" "),_c('span',{staticClass:"password__contentarea--label"},[_c('p',[_vm._v("Confirm new password")])]),_vm._v(" "),_c('span',{staticClass:"password__contentarea--input"},[((_vm.confirmpassVisible ? 'text' : 'password')==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmnewpassword),expression:"confirmnewpassword"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.confirmnewpassword)?_vm._i(_vm.confirmnewpassword,null)>-1:(_vm.confirmnewpassword)},on:{"change":function($event){var $$a=_vm.confirmnewpassword,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.confirmnewpassword=$$a.concat([$$v]))}else{$$i>-1&&(_vm.confirmnewpassword=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.confirmnewpassword=$$c}}}}):((_vm.confirmpassVisible ? 'text' : 'password')==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmnewpassword),expression:"confirmnewpassword"}],attrs:{"type":"radio"},domProps:{"checked":_vm._q(_vm.confirmnewpassword,null)},on:{"change":function($event){_vm.confirmnewpassword=null}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.confirmnewpassword),expression:"confirmnewpassword"}],attrs:{"type":_vm.confirmpassVisible ? 'text' : 'password'},domProps:{"value":(_vm.confirmnewpassword)},on:{"input":function($event){if($event.target.composing){ return; }_vm.confirmnewpassword=$event.target.value}}})])])]),_vm._v(" "),_c('div',{staticClass:"password__bottom"},[_c('span',{staticClass:"password__bottom--btn",on:{"click":_vm.submitpasswordChange}},[_vm._v("\n                        Submit\n                    ")])])])])]},proxy:true}])})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/password.vue?vue&type=template&id=3280fae0&scoped=true&

// EXTERNAL MODULE: ./mixins/user.js
var user = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/password.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var passwordvue_type_script_lang_js_ = ({
  data() {
    return {
      confirmpassVisible: false,
      oldpasswordVisible: false,
      newpasswordVisible: false,
      oldpassword: null,
      newpassword: null,
      confirmnewpassword: null,
      error: false,
      passwordchanged: false
    };
  },

  methods: {
    toggleVisibility(password) {
      if (password === 'conf') {
        this.confirmpassVisible ? this.confirmpassVisible = false : this.confirmpassVisible = true;
      }

      if (password === 'old') {
        this.oldpasswordVisible ? this.oldpasswordVisible = false : this.oldpasswordVisible = true;
      }

      if (password === 'new') {
        this.newpasswordVisible ? this.newpasswordVisible = false : this.newpasswordVisible = true;
      }
    },

    submitpasswordChange() {
      const {
        oldpassword,
        newpassword,
        confirmnewpassword
      } = this;

      if (oldpassword && newpassword && confirmnewpassword) {
        if (newpassword !== confirmnewpassword) {
          this.error = 'confirm password should be the same as new password';
        } else {
          if (newpassword.length <= 8) {
            this.error = 'password should be more than 9 characters';
          } else {
            const user_token = localStorage.getItem('nordtokenxtxtxt');

            if (user_token !== null && user_token !== undefined) {
              const {
                email
              } = this.user;
              fetch(`${this.baseUrl}/api/edituserpw`, {
                method: "PATCH",
                body: JSON.stringify({
                  email,
                  oldpassword,
                  newpassword
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                  "Authorization": user_token
                }
              }).then(res => {
                return res.json();
              }).then(json => {
                const {
                  message
                } = json;

                if (message === 'password changed') {
                  this.passwordchanged = true;
                  setTimeout(() => {
                    this.passwordchanged = false;
                  }, 10000);
                } else {
                  this.error = 'wrong password, did you forget your password?';
                }
              }).catch(err => {
                console.log(err.json);
              });
            }
          }
        }
      } else {
        this.error = 'please fill out all the inputs';
      }
    }

  },
  mixins: [user["a" /* default */]],
  watch: {
    oldpassword: function () {
      this.error = false;
    },
    newpassword: function () {
      this.error = false;
    },
    confirmnewpassword: function () {
      this.error = false;
    }
  }
});
// CONCATENATED MODULE: ./pages/password.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_passwordvue_type_script_lang_js_ = (passwordvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/password.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(226)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_passwordvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3280fae0",
  "53d57d5a"
  
)

/* harmony default export */ var pages_password = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Dashboard: __webpack_require__(48).default})


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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("00b2601b", content, true, context)
};

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_3f8492e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_3f8492e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_3f8492e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_3f8492e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_style_index_0_id_3f8492e6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wallet[data-v-3f8492e6]{color:#fff}.wallet__slide[data-v-3f8492e6]{position:absolute;top:0;right:0;background:rgba(0,0,0,.2);height:100vh;width:100vw;z-index:16;box-shadow:-11px 3px 85px 13px rgba(0,0,0,.62);-webkit-box-shadow:-11px 3px 85px 13px rgba(0,0,0,.62);-moz-box-shadow:-11px 3px 85px 13px rgba(0,0,0,.62);color:#000;display:flex;justify-content:space-between}.wallet__slide--h2[data-v-3f8492e6]{font-weight:500;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*24)}.wallet__slide--body[data-v-3f8492e6]{background:#fff;height:100%;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*400);overflow:scroll}.wallet__slide--transaction[data-v-3f8492e6]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*850)}.wallet__notifications[data-v-3f8492e6]{background:#fff;webkit-box-shadow:0 0 27px 0 rgba(71,77,255,.3);box-shadow:0 0 27px 0 rgba(71,77,255,.3);margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25);border-radius:.4rem}.wallet__notification[data-v-3f8492e6]{border-bottom:1px solid rgba(0,0,0,.4);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25)}.wallet__notification p[data-v-3f8492e6]:first-child{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);font-weight:500;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}.wallet__notification p[data-v-3f8492e6]:nth-child(2){font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13);color:rgba(0,0,0,.3);font-weight:500}.wallet__middletop[data-v-3f8492e6]{display:flex;justify-content:space-between;border-bottom:.4px solid rgba(0,0,0,.4)}.wallet__middletop--left[data-v-3f8492e6]{display:flex}.wallet__middletop--right[data-v-3f8492e6]{display:flex;align-items:center}.wallet__middletop--btn[data-v-3f8492e6]{outline:none;background:none;color:rgba(71,77,255,.9);cursor:pointer;border:none;font-weight:500;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13)}.wallet__middletop--item[data-v-3f8492e6]{margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*12) 0;cursor:pointer;color:rgba(0,0,0,.4);position:relative;transition:all .1s ease-in}.wallet__middletop--item p[data-v-3f8492e6]{font-weight:500}.wallet__middletop--item[data-v-3f8492e6]:before{content:\"\";position:absolute;bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);left:0;background:transparent;height:2px;width:100%;border-radius:3rem;transition:all .1s ease-in}.wallet__middletop--item.current[data-v-3f8492e6]{color:#000}.wallet__middletop--item.current[data-v-3f8492e6]:before{background:#000;bottom:0}.wallet__middle[data-v-3f8492e6]{position:relative;background:#fff;webkit-box-shadow:0 0 27px 0 rgba(71,77,255,.3);box-shadow:0 0 27px 0 rgba(71,77,255,.3);flex-basis:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*800);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);border-radius:.9rem;color:#000;transition:all .3s ease-in}.wallet__middlecontent--notransactions[data-v-3f8492e6]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);text-align:center;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);font-weight:500}.wallet__middleconitem[data-v-3f8492e6]{display:flex;align-items:center;justify-content:space-between;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) 0;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14);color:rgba(0,0,0,.6);border-bottom:.4px solid rgba(0,0,0,.4);display:none}.wallet__middleconitem.visible[data-v-3f8492e6]{display:flex}.wallet__middleconitem[data-v-3f8492e6]:last-child{border:none}.wallet__middleconitem--area[data-v-3f8492e6]{text-align:left;flex-shrink:0}.wallet__middleconitem--area.capitalize p[data-v-3f8492e6]{text-transform:capitalize}.wallet__middleconitem--area[data-v-3f8492e6]:first-child,.wallet__middleconitem--area[data-v-3f8492e6]:nth-child(2){flex-basis:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*150)}.wallet__middleconitem--area[data-v-3f8492e6]:nth-child(3){flex-basis:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}.wallet__middleconitem--area[data-v-3f8492e6]:nth-child(4){flex-basis:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*180)}.wallet__middleconitem--area[data-v-3f8492e6]:nth-child(5){flex-basis:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70)}.wallet__middleconitem--amount[data-v-3f8492e6]{display:flex;align-items:center}.wallet__middleconitem--total.transfer[data-v-3f8492e6]{color:rgba(19,141,117,.9)}.wallet__middleconitem--total.deposit[data-v-3f8492e6]{color:rgba(71,77,255,.9)}.wallet__middleconitem--total.withdrawal[data-v-3f8492e6]{color:rgba(192,57,43,.9)}.wallet__middleconitem--label[data-v-3f8492e6]{border-radius:100%;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*24);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*24);display:flex;align-items:center;justify-content:center;background:red;margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);color:#fff}.wallet__middleconitem--label.transfer[data-v-3f8492e6]{background:rgba(19,141,117,.9)}.wallet__middleconitem--label.deposit[data-v-3f8492e6]{background:rgba(71,77,255,.9)}.wallet__middleconitem--label.withdrawal[data-v-3f8492e6]{background:rgba(192,57,43,.9)}.wallet__header[data-v-3f8492e6]{padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);border-bottom:1px solid hsla(0,0%,100%,.2);color:#feb019;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25);display:flex;align-items:center;justify-content:space-between}@media only screen and (max-width:414px){.wallet__header[data-v-3f8492e6]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90)}}.wallet__headerleft[data-v-3f8492e6]{position:relative;display:flex;align-items:center;cursor:pointer}.wallet__headerleft figure[data-v-3f8492e6]{position:absolute;top:0;left:0;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);display:flex;justify-content:center;align-items:center;transform:translateY(calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-20))}.wallet__headerleft figure img[data-v-3f8492e6]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.wallet__headerleft p[data-v-3f8492e6]{margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.wallet__headerright[data-v-3f8492e6]{color:#fff;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18);font-weight:400;display:flex;align-items:center}.wallet__headersec[data-v-3f8492e6]{position:relative;margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*55);cursor:pointer}.wallet__headersec--dropdown[data-v-3f8492e6]{color:#fff}.wallet__headersec--dropdown:hover~.wallet__headersec--dropdowns[data-v-3f8492e6]{display:flex}.wallet__headersec--dropdown figure[data-v-3f8492e6]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);transform:translateY(calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-3))}.wallet__headersec--dropdown figure img[data-v-3f8492e6]{display:inline-block;border-radius:50%;-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.wallet__headersec--dropdown span.svg svg[data-v-3f8492e6]{fill:#fff}.wallet__headersec--dropdown span.notification[data-v-3f8492e6],.wallet__headersec--dropdown span.svg svg[data-v-3f8492e6]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.wallet__headersec--dropdown span.notification[data-v-3f8492e6]{background:red;border-radius:3rem;position:absolute;top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-11);right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-9);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);display:flex;justify-content:center;align-items:center}.wallet__headersec--dropdowns[data-v-3f8492e6]{position:absolute;top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*16);right:0;background:#1e2329;color:#fff;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*180);display:none;flex-direction:column;-ms-box-shadow:0 0 7px 0 rgba(0,0,0,.09);box-shadow:0 0 7px 0 rgba(0,0,0,.09);border-radius:2px}.wallet__headersec--dropdowns[data-v-3f8492e6]:hover{display:flex}.wallet__headersec--dropdowns span[data-v-3f8492e6]{display:inline-block;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.wallet__headersec--dropdowns span[data-v-3f8492e6]:hover{background:#000}.wallet__body[data-v-3f8492e6]{display:flex}.wallet__sidenav[data-v-3f8492e6]{height:100vh;position:absolute;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*180);top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*136);left:0;color:#fff;border-right:1px solid hsla(0,0%,100%,.2);padding-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}.wallet__sidenav--item[data-v-3f8492e6]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);cursor:pointer;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*18)}.wallet__sidenav--item.logout[data-v-3f8492e6]{position:absolute;bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*180);right:0}.wallet__sidenav--item.logout[data-v-3f8492e6],.wallet__sidenav--item a[data-v-3f8492e6]{display:block;text-decoration:none;outline:none;cursor:pointer;color:#fff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.wallet__sidenav--item span[data-v-3f8492e6]{display:inline-block}.wallet__sidenav--item span[data-v-3f8492e6]:first-child{margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}.wallet__sidenav--item span:first-child svg[data-v-3f8492e6]{fill:#fff;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.wallet__sidenav--item.current[data-v-3f8492e6],.wallet__sidenav--item[data-v-3f8492e6]:hover{background:#1e2329}.wallet__container[data-v-3f8492e6]{display:flex;flex-direction:column;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1350)}.wallet__top[data-v-3f8492e6]{display:flex;justify-content:space-between;align-items:center;background:#000;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}.wallet__top--h1[data-v-3f8492e6]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30);font-weight:700;text-transform:capitalize;margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*220)}.wallet__top--rightbtn button[data-v-3f8492e6]{border:none;background:#474d57;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);color:#fff;font-weight:500;border-radius:2px;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13);margin-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*25);cursor:pointer}.wallet__top--rightbtn button.current[data-v-3f8492e6]{background:#474dff;color:#fff}.wallet__top--rightbtn button.current[data-v-3f8492e6]:hover{background:rgba(71,77,255,.8)}.wallet__top--rightbtn button[data-v-3f8492e6]:hover{background:rgba(71,77,87,.8)}.wallet__base[data-v-3f8492e6]{display:flex;justify-content:space-between;padding-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*250)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dashboard.vue?vue&type=template&id=3f8492e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wallet"},[_vm._ssrNode(((_vm.slide === 'cards')?("<div class=\"wallet__slide\" data-v-3f8492e6><div data-v-3f8492e6></div> <div class=\"wallet__slide--body\" data-v-3f8492e6><h2 class=\"wallet__slide--h2\" data-v-3f8492e6>Your Cards</h2> <div data-v-3f8492e6>You don't have any cards currently</div> <div data-v-3f8492e6><button data-v-3f8492e6>Apply for a card</button></div></div></div>"):"<!---->")+" "+((_vm.slide === 'notifications' && _vm.user)?("<div class=\"wallet__slide\" data-v-3f8492e6><div data-v-3f8492e6></div> <div class=\"wallet__slide--body\" data-v-3f8492e6><h2 class=\"wallet__slide--h2\" data-v-3f8492e6>Your Notifications</h2> <div class=\"wallet__notifications\" data-v-3f8492e6>"+(_vm._ssrList((_vm.user.notifications),function(notif){return ("<div class=\"wallet__notification\" data-v-3f8492e6><p data-v-3f8492e6>"+_vm._ssrEscape(_vm._s(notif.notifcontent))+"</p> <p data-v-3f8492e6>"+_vm._ssrEscape(_vm._s(notif.notifdate))+"</p></div>")}))+"</div></div></div>"):"<!---->")+" "+((_vm.slide === 'messages')?("<div class=\"wallet__slide\" data-v-3f8492e6><div data-v-3f8492e6></div> <div class=\"wallet__slide--body\" data-v-3f8492e6><h2 class=\"wallet__slide--h2\" data-v-3f8492e6>Your Messages</h2> <div class=\"wallet__notifications\" data-v-3f8492e6></div></div></div>"):"<!---->")+" "+((_vm.slide === 'transactions')?("<div class=\"wallet__slide\" data-v-3f8492e6><div data-v-3f8492e6></div> <div class=\"wallet__slide--body wallet__slide--transaction\" data-v-3f8492e6><h2 class=\"wallet__slide--h2\" data-v-3f8492e6>Your Transactions</h2> <div class=\"wallet__right\" data-v-3f8492e6><div class=\"wallet__middle\" data-v-3f8492e6><div class=\"wallet__middletop\" data-v-3f8492e6><div class=\"wallet__middletop--left\" data-v-3f8492e6><div"+(_vm._ssrClass("wallet__middletop--item",{
        current: _vm.transPage === 'all'
    }))+" data-v-3f8492e6><p data-v-3f8492e6>All transactions</p></div> <div"+(_vm._ssrClass("wallet__middletop--item",{
        current: _vm.transPage === 'deposit'
    }))+" data-v-3f8492e6><p data-v-3f8492e6>Deposits</p></div> <div"+(_vm._ssrClass("wallet__middletop--item",{
        current: _vm.transPage === 'withdrawal'
    }))+" data-v-3f8492e6><p data-v-3f8492e6>Withdrawals</p></div> <div"+(_vm._ssrClass("wallet__middletop--item",{
        current: _vm.transPage === 'transfer'
    }))+" data-v-3f8492e6><p data-v-3f8492e6>Transfers</p></div></div> <div class=\"wallet__middletop--right\" data-v-3f8492e6><button class=\"wallet__middletop--btn\" data-v-3f8492e6></button></div></div> "+((_vm.user)?("<div class=\"wallet__middlecontent\" data-v-3f8492e6>"+((!_vm.user.transactions.length)?("<div class=\"wallet__middlecontent--notransactions\" data-v-3f8492e6><p data-v-3f8492e6>Currently you have made no transactions</p></div>"):"<!---->")+" "+(_vm._ssrList((_vm.user.transactions),function(transaction){return ("<div"+(_vm._ssrClass("wallet__middleconitem",{
        visible: _vm.transPage === transaction.transactionType || _vm.transPage === 'all'
    }))+" data-v-3f8492e6>"+((transaction.transactionType === 'deposit')?("<div class=\"wallet__middleconitem--amount wallet__middleconitem--area\" data-v-3f8492e6><span class=\"wallet__middleconitem--label deposit\" data-v-3f8492e6><p data-v-3f8492e6>D</p></span> <span class=\"wallet__middleconitem--total deposit\" data-v-3f8492e6><p data-v-3f8492e6>"+_vm._ssrEscape("+$ "+_vm._s(_vm.truncate(parseFloat(transaction.amount).toLocaleString('en-US'))))+"</p></span></div>"):"<!---->")+" "+((transaction.transactionType === 'withdrawal')?("<div class=\"wallet__middleconitem--amount wallet__middleconitem--area\" data-v-3f8492e6><span class=\"wallet__middleconitem--label withdrawal\" data-v-3f8492e6><p data-v-3f8492e6>W</p></span> <span class=\"wallet__middleconitem--total withdrawal\" data-v-3f8492e6><p data-v-3f8492e6>"+_vm._ssrEscape("-$ "+_vm._s(_vm.truncate(parseFloat(transaction.amount).toLocaleString('en-US'))))+"</p></span></div>"):"<!---->")+" "+((transaction.transactionType === 'transfer')?("<div class=\"wallet__middleconitem--amount wallet__middleconitem--area\" data-v-3f8492e6><span class=\"wallet__middleconitem--label transfer\" data-v-3f8492e6><p data-v-3f8492e6>T</p></span> <span class=\"wallet__middleconitem--total transfer\" data-v-3f8492e6><p data-v-3f8492e6>"+_vm._ssrEscape("-$ "+_vm._s(_vm.truncate(parseFloat(transaction.amount).toLocaleString('en-US'))))+"</p></span></div>"):"<!---->")+" <div class=\"wallet__middleconitem--area capitalize\" data-v-3f8492e6><p data-v-3f8492e6>"+_vm._ssrEscape(_vm._s(transaction.dateTime))+"</p></div> <div class=\"wallet__middleconitem--area capitalize\" data-v-3f8492e6><p data-v-3f8492e6>"+_vm._ssrEscape(_vm._s(transaction.transactionType))+"</p></div> <div class=\"wallet__middleconitem--area\" data-v-3f8492e6>"+_vm._ssrEscape("\n            Trans ID: "+_vm._s(transaction.transactionId)+"\n        ")+"</div> <div class=\"wallet__middleconitem--area fee\" data-v-3f8492e6><p data-v-3f8492e6>"+_vm._ssrEscape("$"+_vm._s(_vm.truncate(parseFloat(transaction.fee).toLocaleString('en-US'))))+"</p></div></div>")}))+"</div>"):"<!---->")+"</div></div></div></div>"):"<!---->")+" <header class=\"wallet__header\" data-v-3f8492e6><div class=\"wallet__headerleft\" data-v-3f8492e6><figure data-v-3f8492e6><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" data-v-3f8492e6></figure></div> <div class=\"wallet__headerright\" data-v-3f8492e6><div class=\"wallet__headersec\" data-v-3f8492e6><div class=\"wallet__headersec--dropdown\" data-v-3f8492e6><span data-v-3f8492e6>Transactions</span></div></div> <div class=\"wallet__headersec\" data-v-3f8492e6><div class=\"wallet__headersec--dropdown\" data-v-3f8492e6><span class=\"svg\" data-v-3f8492e6><svg data-v-3f8492e6><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-bell"))+" data-v-3f8492e6></use></svg></span></div></div> <div class=\"wallet__headersec\" data-v-3f8492e6><div class=\"wallet__headersec--dropdown\" data-v-3f8492e6><span class=\"svg\" data-v-3f8492e6><svg data-v-3f8492e6><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-wallet1"))+" data-v-3f8492e6></use></svg></span></div></div></div></header> "),_vm._ssrNode("<div class=\"wallet__body\" data-v-3f8492e6>","</div>",[_vm._ssrNode("<div class=\"wallet__sidenav\" data-v-3f8492e6>","</div>",[_vm._ssrNode("<div"+(_vm._ssrClass("wallet__sidenav--item",{
                    'current': _vm.currentroute === 'wallet_old'
                }))+" data-v-3f8492e6>","</div>",[_c('router-link',{attrs:{"to":"/wallet_old"}},[_c('span',[_c('svg',[_c('use',{attrs:{"xlink:href":__webpack_require__(26) + "#icon-wallet1"}})])]),_vm._v(" "),_c('span',[_vm._v("Account")])])],1),_vm._ssrNode(" <div"+(_vm._ssrClass("wallet__sidenav--item",{
                    'current': _vm.currentroute === 'transfer'
                }))+" data-v-3f8492e6></div> "),_vm._ssrNode("<div class=\"wallet__sidenav--item\" data-v-3f8492e6>","</div>",[_c('router-link',{attrs:{"to":"/profile"}},[_c('span',[_c('svg',[_c('use',{attrs:{"xlink:href":__webpack_require__(26) + "#icon-profile"}})])]),_vm._v(" "),_c('span',[_vm._v("Profile")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"wallet__sidenav--item\" data-v-3f8492e6>","</div>",[_c('router-link',{attrs:{"to":"/kycupload"}},[_c('span',[_c('svg',[_c('use',{attrs:{"xlink:href":__webpack_require__(26) + "#icon-profile"}})])]),_vm._v(" "),_c('span',[_vm._v("KYC")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"wallet__sidenav--item\" data-v-3f8492e6>","</div>",[_c('router-link',{attrs:{"to":"/password"}},[_c('span',[_c('svg',[_c('use',{attrs:{"xlink:href":__webpack_require__(26) + "#icon-profile"}})])]),_vm._v(" "),_c('span',[_vm._v("Password")])])],1),_vm._ssrNode(" <div class=\"wallet__sidenav--item logout\" data-v-3f8492e6><div data-v-3f8492e6><span data-v-3f8492e6><svg data-v-3f8492e6><use"+(_vm._ssrAttr("xlink:href",__webpack_require__(26) + "#icon-info"))+" data-v-3f8492e6></use></svg></span> <span data-v-3f8492e6>Logout</span></div></div>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"wallet__container\" data-v-3f8492e6>","</div>",[_vm._ssrNode("<div class=\"wallet__top\" data-v-3f8492e6><div class=\"wallet__top--left\" data-v-3f8492e6><h1 class=\"wallet__top--h1\" data-v-3f8492e6>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1></div> <div class=\"wallet__top--right\" data-v-3f8492e6></div></div> "),_vm._ssrNode("<div class=\"wallet__base\" data-v-3f8492e6>","</div>",[_vm._t("base")],2)],2)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Dashboard.vue?vue&type=template&id=3f8492e6&scoped=true&

// EXTERNAL MODULE: ./mixins/user.js
var user = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Dashboard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Dashboardvue_type_script_lang_js_ = ({
  data() {
    return {
      current: 'overview',
      transPage: 'all',
      slide: null
    };
  },

  props: ['title'],
  mixins: [user["a" /* default */]],
  methods: {
    truncate(input) {
      if (input.length > 10) {
        return input.substring(0, 10) + '...';
      }

      return input;
    },

    toggleTransPage(page) {
      this.transPage = page;
    },

    btnselect(val) {
      this.current = val;
    },

    logout() {
      localStorage.removeItem('norduserxtxtxt');
      localStorage.removeItem('nordtokenxtxtxt');
      this.$router.push('/');
    },

    closeslide() {
      this.slide = null;
    },

    openslide(val) {
      this.slide = val;
    }

  },
  computed: {
    currentroute() {
      return this.$route.name;
    }

  }
});
// CONCATENATED MODULE: ./components/Dashboard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Dashboardvue_type_script_lang_js_ = (Dashboardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Dashboardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3f8492e6",
  "3173e948"
  
)

/* harmony default export */ var Dashboard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=password.js.map