exports.ids = [19];
exports.modules = {

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/KycUploader.vue?vue&type=template&id=4b0c52a7&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"kycuploader"},[_vm._ssrNode("<div class=\"kycuploader__body\" data-v-4b0c52a7><p class=\"kycuploader__body--p\" data-v-4b0c52a7>"+_vm._ssrEscape(_vm._s(_vm.label))+"</p> <div class=\"kycuploader__body--form\" data-v-4b0c52a7><p class=\"kycuploader__body--p kycupload__body--p\" data-v-4b0c52a7>"+_vm._ssrEscape(_vm._s(_vm.filename))+"</p> <label class=\"kycuploader__body--inputarea\" data-v-4b0c52a7><input type=\"file\" id=\"file\" data-v-4b0c52a7></label></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/KycUploader.vue?vue&type=template&id=4b0c52a7&scoped=true&

// EXTERNAL MODULE: ./mixins/user.js
var user = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/KycUploader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var KycUploadervue_type_script_lang_js_ = ({
  props: ['label'],

  data() {
    return {
      file: '',
      filename: ''
    };
  },

  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      this.filename = this.file.name;
      const {
        label
      } = this;
      this.$bus.$emit('handleUpload', label);
    },

    submit(route) {
      const user_token = localStorage.getItem('nordtokenxtxtxt');
      const formData = new FormData();
      formData.append('kycfile', this.file);
      fetch(`${this.baseUrl}/${route}`, {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": user_token
        }
      }).then(res => res.json()).then(json => {
        console.log('uploaded', json);
        this.$bus.$emit('kycUploaded', this.label);
        this.file = '';
        this.filename = '';
        this.$refs.file.value = '';
      }).catch(err => console.error(err));
    }

  },
  mixins: [user["a" /* default */]],
  computed: {
    kycFiles() {
      return this.$store.getters.kycFiles;
    }

  },

  mounted() {
    this.$bus.$on('uploadkyc', () => {
      if (!this.file) {
        return this.$bus.$emit('warning', 'empty file input field');
      }

      return this.submit('api/upload');
    });
  }

});
// CONCATENATED MODULE: ./components/KycUploader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_KycUploadervue_type_script_lang_js_ = (KycUploadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/KycUploader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(83)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_KycUploadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b0c52a7",
  "b308d312"
  
)

/* harmony default export */ var KycUploader = __webpack_exports__["default"] = (component.exports);

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

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("16f77d54", content, true, context)
};

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KycUploader_vue_vue_type_style_index_0_id_4b0c52a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KycUploader_vue_vue_type_style_index_0_id_4b0c52a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KycUploader_vue_vue_type_style_index_0_id_4b0c52a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KycUploader_vue_vue_type_style_index_0_id_4b0c52a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KycUploader_vue_vue_type_style_index_0_id_4b0c52a7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".kycuploader__body[data-v-4b0c52a7]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);display:flex;flex-direction:column}.kycuploader__body--p[data-v-4b0c52a7]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}.kycuploader__body--name[data-v-4b0c52a7]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.kycuploader__body--form[data-v-4b0c52a7]{display:flex;flex-direction:column}.kycuploader__body--inputarea[data-v-4b0c52a7]{display:flex;align-items:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=kyc-uploader.js.map