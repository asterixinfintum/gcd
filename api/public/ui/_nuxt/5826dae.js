(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{279:function(e,t,o){var content=o(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(109).default)("16f77d54",content,!0,{sourceMap:!1})},302:function(e,t,o){"use strict";o(279)},303:function(e,t,o){var l=o(108)(!1);l.push([e.i,".kycuploader__body[data-v-4b0c52a7]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);display:flex;flex-direction:column}.kycuploader__body--p[data-v-4b0c52a7]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10)}.kycuploader__body--name[data-v-4b0c52a7]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20)}.kycuploader__body--form[data-v-4b0c52a7]{display:flex;flex-direction:column}.kycuploader__body--inputarea[data-v-4b0c52a7]{display:flex;align-items:center}",""]),e.exports=l},363:function(e,t,o){var content=o(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(109).default)("260e94c8",content,!0,{sourceMap:!1})},398:function(e,t,o){"use strict";o.r(t);o(44),o(18),o(110);var l={props:["label"],data:function(){return{file:"",filename:""}},methods:{handleFileUpload:function(){this.file=this.$refs.file.files[0],this.filename=this.file.name;var label=this.label;this.$bus.$emit("handleUpload",label)},submit:function(e){var t=this,o=localStorage.getItem("nordtokenxtxtxt"),l=new FormData;l.append("kycfile",this.file),fetch("".concat(this.baseUrl,"/").concat(e),{method:"POST",body:l,headers:{Authorization:o}}).then((function(e){return e.json()})).then((function(e){console.log("uploaded",e),t.$bus.$emit("kycUploaded",t.label),t.file="",t.filename="",t.$refs.file.value=""})).catch((function(e){return console.error(e)}))}},mixins:[o(254).a],computed:{kycFiles:function(){return this.$store.getters.kycFiles}},mounted:function(){var e=this;this.$bus.$on("uploadkyc",(function(){return e.file?e.submit("api/upload"):e.$bus.$emit("warning","empty file input field")}))}},n=(o(302),o(42)),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"kycuploader"},[o("div",{staticClass:"kycuploader__body"},[o("p",{staticClass:"kycuploader__body--p"},[e._v(e._s(e.label))]),e._v(" "),o("div",{staticClass:"kycuploader__body--form"},[o("p",{staticClass:"kycuploader__body--p kycupload__body--p"},[e._v(e._s(e.filename))]),e._v(" "),o("label",{staticClass:"kycuploader__body--inputarea"},[o("input",{ref:"file",attrs:{type:"file",id:"file"},on:{change:function(t){return e.handleFileUpload(t)}}})])])])])}),[],!1,null,"4b0c52a7",null);t.default=component.exports},432:function(e,t,o){"use strict";o(363)},433:function(e,t,o){var l=o(108)(!1);l.push([e.i,".kycupload__body[data-v-05b5fe03]{display:flex;flex-direction:column}.kycupload__body--submit button[data-v-05b5fe03]{background:#474dff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40);text-align:center;cursor:pointer;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*16);border-radius:.2rem}.kycupload__kycinput[data-v-05b5fe03]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.kycupload__text[data-v-05b5fe03]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*70);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17)}.kycupload__popup[data-v-05b5fe03]{position:fixed;top:0;left:0;width:100vw;display:flex;justify-content:center;align-items:center;background:transparent}.kycupload__popup--content[data-v-05b5fe03]{background:#fff;color:#000;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);line-height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20);margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17);font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*17)}.error[data-v-05b5fe03]{color:red;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*14)}",""]),e.exports=l},511:function(e,t,o){"use strict";o.r(t);var l=o(73),n=(o(110),o(76),{data:function(){return{triggerSubmit:!1,uploads:["Photocopy or scan of a passport or valid ID"],filesToUpload:[],uploadsDone:[],loading:!1,error:!1,showpopup:!1}},methods:{submitFiles:function(){this.uploads.length===this.filesToUpload.length&&(this.$bus.$emit("uploadkyc"),this.loading=!0)}},mixins:[o(254).a],computed:{kycFiles:function(){return this.$store.getters.kycFiles}},mounted:function(){var e=this;this.$bus.$on("kycUploaded",(function(label){var t=e.uploadsDone;e.uploadsDone=[label].concat(Object(l.a)(t)),e.uploads.length===e.uploadsDone.length&&(e.loading=!1,e.showpopup=!0,e.uploadsDone=[],e.filesToUpload=[],setTimeout((function(){e.showpopup=!1}),2e3))})),this.$bus.$on("handleUpload",(function(label){var t=e.filesToUpload;e.filesToUpload=[label].concat(Object(l.a)(t))})),this.$bus.$on("warning",(function(t){"empty file input field"===t&&(e.error="Add a file to upload")}))}}),c=(o(432),o(42)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"kycupload"},[o("Dashboard",{attrs:{title:e.user?e.user.firstname+" "+e.user.lastname:""},scopedSlots:e._u([{key:"base",fn:function(){return[o("div",{staticClass:"kycupload__body"},[e.showpopup?o("section",{staticClass:"kycupload__popup"},[o("div",{staticClass:"kycupload__popup--content"},[o("p",[e._v("KYC successfully uploaded")]),e._v(" "),o("p",[e._v("Review will take a moment...")])])]):e._e(),e._v(" "),e._l(e.uploads,(function(e){return o("div",{staticClass:"kycupload__kycinput"},[o("KycUploader",{attrs:{label:e}})],1)})),e._v(" "),o("div",{staticClass:"kycupload__body--submit"},[e.loading?e._e():o("button",{on:{click:e.submitFiles}},[e._v("Submit")]),e._v(" "),e.loading?o("button",[e._v("Uploading")]):e._e(),e._v(" "),e.error?o("p",{staticClass:"error"},[e._v(e._s(e.error))]):e._e()]),e._v(" "),o("section",{staticClass:"kycupload__text"},[o("p",[e._v("We understand how valuable your privacy is so we have tasked ourselves with")]),e._v(" "),o("p",[e._v("making sure we're not demanding too much as regards to these documents, and doing as much as we can")]),e._v(" "),o("p",[e._v("to keep the pervasive laws away from your finances")])])],2)]},proxy:!0}])})],1)}),[],!1,null,"05b5fe03",null);t.default=component.exports;installComponents(component,{KycUploader:o(398).default,Dashboard:o(277).default})}}]);