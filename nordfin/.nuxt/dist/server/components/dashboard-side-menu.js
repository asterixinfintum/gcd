exports.ids = [8];
exports.modules = {

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pink-circle.a1bbd11.png";

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

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("78fc6836", content, true, context)
};

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSideMenu_vue_vue_type_style_index_0_id_714a9940_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSideMenu_vue_vue_type_style_index_0_id_714a9940_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSideMenu_vue_vue_type_style_index_0_id_714a9940_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSideMenu_vue_vue_type_style_index_0_id_714a9940_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardSideMenu_vue_vue_type_style_index_0_id_714a9940_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".dsm[data-v-714a9940]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*300);position:fixed;top:0;left:0;height:100vh;border-right:.5px solid hsla(0,0%,100%,.16);padding-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90);padding-left:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}@media only screen and (max-width:414px){.dsm[data-v-714a9940]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1200);z-index:10;background:#181c27;padding-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*150);transition:all .4s ease;transform:translateX(-100%)}}.dsm__link[data-v-714a9940]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);overflow:hidden;border-radius:.75rem;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*230);cursor:pointer}@media only screen and (max-width:414px){.dsm__link[data-v-714a9940]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1000);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*90)}}.dsm__link[data-v-714a9940]:hover{background:#212631}.dsm__link span[data-v-714a9940]{display:flex;align-items:center;margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*6)}@media only screen and (max-width:414px){.dsm__link span[data-v-714a9940]{margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30)}}.dsm__link span svg[data-v-714a9940]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}@media only screen and (max-width:414px){.dsm__link span svg[data-v-714a9940]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80)}}.dsm__link a[data-v-714a9940]{text-decoration:none;color:#718096;display:flex;align-items:center;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);width:100%;height:100%;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}@media only screen and (max-width:414px){.dsm__link a[data-v-714a9940]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*50)}}.dsm__link.current[data-v-714a9940]{background:#2d3748}.dsm__link.current a[data-v-714a9940]{color:#fff}.dsm__mobile[data-v-714a9940]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*1000);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*100);display:none}@media only screen and (max-width:414px){.dsm__mobile[data-v-714a9940]{display:block}}.dsm__mobile--top[data-v-714a9940]{display:flex;justify-content:space-between;align-items:center;margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70)}.dsm__mobile--close svg[data-v-714a9940]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);color:#718096}.dsm__mobile--bottom[data-v-714a9940]{display:flex;justify-content:space-between;align-items:center}.dsm__mobile--logo[data-v-714a9940]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200);width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200)}.dsm__mobile--logo img[data-v-714a9940]{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}.dsm__mobile--name[data-v-714a9940]{display:flex;align-items:center;text-transform:capitalize;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);background:rgba(1,1,1,.2);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*30) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*80);border-radius:.5rem}.sidenav[data-v-714a9940]{transform:translate(0)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DashboardSideMenu.vue?vue&type=template&id=714a9940&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div"+(_vm._ssrClass("dsm",{
        sidenav: _vm.sidenav
    }))+" data-v-714a9940>","</div>",[_vm._ssrNode("<div class=\"dsm__mobile\" data-v-714a9940><div class=\"dsm__mobile--top\" data-v-714a9940><span data-v-714a9940></span> <span class=\"dsm__mobile--close\" data-v-714a9940><svg viewBox=\"0 0 24 24\" focusable=\"false\" aria-hidden=\"true\" class=\"chakra-icon css-1vwvp6d\" data-v-714a9940><path fill=\"currentColor\" d=\"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z\" data-v-714a9940></path></svg></span></div> <div class=\"dsm__mobile--bottom\" data-v-714a9940><figure class=\"dsm__mobile--logo\" data-v-714a9940><img"+(_vm._ssrAttr("src",__webpack_require__(27)))+" data-v-714a9940></figure> "+((_vm.user)?("<div class=\"dsm__mobile--name\" data-v-714a9940><span data-v-714a9940>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.user.firstname)+"\n                    ")+"</span> <span data-v-714a9940>"+_vm._ssrEscape("\n                        "+_vm._s(_vm.user.lastname)+"\n                    ")+"</span></div>"):"<!---->")+"</div></div> "),_vm._ssrNode("<div"+(_vm._ssrClass("dsm__link",{
            current: _vm.$route.name === 'userdashboard'
        }))+" data-v-714a9940>","</div>",[_c('NuxtLink',{staticClass:"dsm__link--a",attrs:{"to":"/userdashboard"}},[_c('span',[_c('span',{staticClass:"chakra-button__icon css-1j0khbq"},[_c('svg',{staticClass:"chakra-icon css-onkibi",attrs:{"viewBox":"0 0 24 24","focusable":"false","aria-hidden":"true"}},[_c('g',{attrs:{"fill":"currentColor","fill-rule":"nonzero"}},[_c('g',{attrs:{"id":"circular-graph"}},[_c('path',{attrs:{"d":"M20.23,0H3.77C1.69,0,0,1.69,0,3.77V20.23c0,2.08,1.69,3.77,3.77,3.77H20.23c2.08,0,3.77-1.69,3.77-3.77V3.77c0-2.08-1.69-3.77-3.77-3.77ZM3.77,2.06H20.23c.95,0,1.71,.77,1.71,1.71v.76L13.45,13.23l-3.23-4.53c-.19-.26-.48-.44-.8-.47s-.65,.07-.88,.29L2.06,14.46V3.77c0-.95,.77-1.71,1.71-1.71ZM20.23,21.94H3.77c-.95,0-1.71-.77-1.71-1.71v-2.71s.04-.02,.05-.03l7.01-6.43,3.27,4.59c.19,.27,.5,.45,.84,.47,.33,.03,.66-.1,.9-.34l7.82-8.01v12.45c0,.95-.77,1.71-1.71,1.71Z","id":"Shape"}})])])])])]),_vm._v(" "),_c('span',[_vm._v("Dashboard")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("dsm__link",{
            current: _vm.$route.name === 'defi'
        }))+" data-v-714a9940>","</div>",[_c('NuxtLink',{attrs:{"to":"/defi"}},[_c('span',[_c('svg',{staticClass:"chakra-icon css-onkibi",attrs:{"viewBox":"0 0 24 24","focusable":"false","aria-hidden":"true"}},[_c('g',{attrs:{"clip-path":"url(#clip0_25_654)"}},[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M16.3467 13.8434C16.8135 13.6394 17.3574 13.8525 17.5614 14.3193C18.2584 15.9145 18.4299 17.69 18.0513 19.389C17.6726 21.0881 16.7633 22.6227 15.4549 23.7709C15.0894 24.0915 14.5379 24.0736 14.1941 23.7298L10.7254 20.2611C10.3651 19.9009 10.3651 19.3168 10.7254 18.9565C11.0857 18.5962 11.6698 18.5962 12.0301 18.9565L14.8461 21.7726C15.5352 20.9786 16.0198 20.0225 16.2504 18.9877C16.5439 17.6707 16.4109 16.2945 15.8707 15.0581C15.6667 14.5912 15.8798 14.0474 16.3467 13.8434Z","fill":"currentColor"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.61097 5.94874C6.31005 5.57006 8.08553 5.74162 9.68066 6.43862C10.1475 6.64262 10.3606 7.18647 10.1566 7.65334C9.95263 8.1202 9.40878 8.3333 8.94192 8.1293C7.70551 7.58905 6.32931 7.45607 5.01234 7.74959C3.9775 7.98023 3.02138 8.46481 2.22744 9.15388L5.04351 11.9699C5.40378 12.3302 5.40378 12.9143 5.04351 13.2746C4.68324 13.6349 4.09914 13.6349 3.73887 13.2746L0.270202 9.80592C-0.0735815 9.46214 -0.0915507 8.91055 0.229129 8.54512C1.37731 7.23671 2.9119 6.32742 4.61097 5.94874Z","fill":"currentColor"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M21.5071 0.0254028C21.8432 -0.0266898 22.1868 0.00158717 22.5099 0.107917C22.8329 0.214248 23.1261 0.395606 23.3656 0.637127C23.605 0.878648 23.7838 1.17346 23.8873 1.49741C23.9906 1.82071 24.016 2.16385 23.9614 2.49881C23.4101 5.96028 20.9815 13.801 10.9235 21.1056C10.5564 21.3722 10.0499 21.3323 9.72909 21.0114L9.64339 20.9257L8.57368 21.9955C8.50842 22.0607 8.43438 22.1152 8.35435 22.1577C7.97578 22.4578 7.50504 22.6233 7.01729 22.6233C6.44862 22.6233 5.90306 22.3983 5.49975 21.9974L5.49781 21.9955L2.00454 18.5022L2.0026 18.5003C1.60169 18.0969 1.37666 17.5514 1.37666 16.9827C1.37666 16.414 1.60169 15.8685 2.0026 15.4652L2.00454 15.4632L3.0927 14.3751L2.98856 14.2709C2.66872 13.9511 2.62795 13.4465 2.89227 13.0795C10.1777 2.96288 18.0853 0.589109 21.4985 0.0267867L21.5071 0.0254028ZM10.4722 19.1445C10.4308 19.0708 10.3791 19.0025 10.318 18.9419L5.05351 13.7143C5.02369 13.6847 4.99235 13.6575 4.95974 13.6328L4.85296 13.526C11.6712 4.40676 18.8482 2.33447 21.7927 1.84822C21.8398 1.84139 21.8878 1.84557 21.933 1.86045C21.9791 1.87564 22.021 1.90155 22.0552 1.93606C22.0894 1.97056 22.115 2.01268 22.1298 2.05895C22.1446 2.10523 22.1482 2.15436 22.1403 2.2023L22.1396 2.20662C21.6677 5.17316 19.5567 12.2986 10.4722 19.1445ZM4.39734 15.6797L3.31111 16.7659C3.31093 16.7661 3.3113 16.7657 3.31111 16.7659C3.25419 16.8235 3.22169 16.9017 3.22169 16.9827C3.22169 17.0637 3.25363 17.1414 3.31056 17.1989C3.31074 17.1991 3.31038 17.1988 3.31056 17.1989L6.8005 20.6889C6.80071 20.6891 6.80029 20.6887 6.8005 20.6889C6.85805 20.7458 6.93635 20.7783 7.01729 20.7783C7.09853 20.7783 7.17647 20.7462 7.23408 20.6889C7.28592 20.6374 7.34323 20.5926 7.40465 20.5552L8.33876 19.6211L4.39734 15.6797Z","fill":"currentColor"}})])])]),_vm._v(" "),_c('span',[_vm._v("Defi")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrClass("dsm__link",{
            current: _vm.$route.name === 'transactionhistory'
        }))+" data-v-714a9940>","</div>",[_c('NuxtLink',{attrs:{"to":"/transactionhistory"}},[_c('span',[_c('svg',{staticClass:"chakra-icon css-onkibi",attrs:{"viewBox":"0 0 24 24","focusable":"false","aria-hidden":"true"}},[_c('g',[_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.77143 2.05714C2.82465 2.05714 2.05714 2.82465 2.05714 3.77143V20.2286C2.05714 21.1753 2.82465 21.9429 3.77143 21.9429H20.2286C21.1753 21.9429 21.9429 21.1753 21.9429 20.2286V3.77143C21.9429 2.82465 21.1753 2.05714 20.2286 2.05714H3.77143ZM0 3.77143C0 1.68853 1.68853 0 3.77143 0H20.2286C22.3115 0 24 1.68853 24 3.77143V20.2286C24 22.3115 22.3115 24 20.2286 24H3.77143C1.68853 24 0 22.3115 0 20.2286V3.77143Z","fill":"currentColor"}}),_c('path',{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5.48571 6.51429C5.48571 5.94622 5.94622 5.48571 6.51429 5.48571H6.528C7.09606 5.48571 7.55657 5.94622 7.55657 6.51429C7.55657 7.08235 7.09606 7.54286 6.528 7.54286H6.51429C5.94622 7.54286 5.48571 7.08235 5.48571 6.51429ZM10.9714 6.51429C10.9714 5.94622 11.4319 5.48571 12 5.48571H17.4857C18.0538 5.48571 18.5143 5.94622 18.5143 6.51429C18.5143 7.08235 18.0538 7.54286 17.4857 7.54286H12C11.4319 7.54286 10.9714 7.08235 10.9714 6.51429ZM5.48571 12C5.48571 11.4319 5.94622 10.9714 6.51429 10.9714H6.528C7.09606 10.9714 7.55657 11.4319 7.55657 12C7.55657 12.5681 7.09606 13.0286 6.528 13.0286H6.51429C5.94622 13.0286 5.48571 12.5681 5.48571 12ZM10.9714 12C10.9714 11.4319 11.4319 10.9714 12 10.9714H17.4857C18.0538 10.9714 18.5143 11.4319 18.5143 12C18.5143 12.5681 18.0538 13.0286 17.4857 13.0286H12C11.4319 13.0286 10.9714 12.5681 10.9714 12ZM5.48571 17.4857C5.48571 16.9177 5.94622 16.4571 6.51429 16.4571H6.528C7.09606 16.4571 7.55657 16.9177 7.55657 17.4857C7.55657 18.0538 7.09606 18.5143 6.528 18.5143H6.51429C5.94622 18.5143 5.48571 18.0538 5.48571 17.4857ZM10.9714 17.4857C10.9714 16.9177 11.4319 16.4571 12 16.4571H17.4857C18.0538 16.4571 18.5143 16.9177 18.5143 17.4857C18.5143 18.0538 18.0538 18.5143 17.4857 18.5143H12C11.4319 18.5143 10.9714 18.0538 10.9714 17.4857Z","fill":"currentColor"}})])])]),_vm._v(" "),_c('span',[_vm._v("Transaction History")])])],1)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/DashboardSideMenu.vue?vue&type=template&id=714a9940&scoped=true&

// EXTERNAL MODULE: ./mixins/user.js
var user = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/DashboardSideMenu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var DashboardSideMenuvue_type_script_lang_js_ = ({
  data() {
    return {
      sidenav: false
    };
  },

  mixins: [user["a" /* default */]],
  methods: {
    toggleSideNav() {
      this.sidenav ? this.sidenav = false : this.sidenav = true;
    }

  },

  mounted() {
    this.$bus.$on('sidenav', () => {
      this.sidenav = true;
    });
  }

});
// CONCATENATED MODULE: ./components/DashboardSideMenu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DashboardSideMenuvue_type_script_lang_js_ = (DashboardSideMenuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/DashboardSideMenu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(54)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_DashboardSideMenuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "714a9940",
  "3eb5d5be"
  
)

/* harmony default export */ var DashboardSideMenu = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard-side-menu.js.map