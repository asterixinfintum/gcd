(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{253:function(t,e,n){"use strict";e.a={computed:{baseUrl:function(){return"https://grantcred.com"}}}},254:function(t,e,n){"use strict";n(18),n(110),n(76);var r=n(253);e.a={data:function(){return{pinstruction:"",plabel:"",popuptype:null}},mixins:[r.a],methods:{closePopup:function(){this.popuptype=null},authenticate:function(t,e){var n=this;fetch("".concat(this.baseUrl,"/").concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){var e=t.user,r=t.token;n.setUser(e,r)})).then((function(){n.$router.push("/wallet")})).catch((function(t){return console.log(t)}))},getUser:function(){var t=this,e=localStorage.getItem("nordtokenxtxtxt");e?fetch("".concat(this.baseUrl,"/api/getuser"),{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:e}}).then((function(t){return t.json()})).then((function(e){var n=e.user,r=e.token;t.setUser(n,r)})):this.$router.push("/")},setUser:function(t,e){localStorage.setItem("nordtokenxtxtxt",e),this.$store.dispatch("storeUser",t)},requestSomething:function(body){var t=this;this.popuptype="loading",setTimeout((function(){var e=localStorage.getItem("nordtokenxtxtxt");e&&fetch("".concat(t.baseUrl,"/api/request"),{method:"POST",body:JSON.stringify(body),headers:{"Content-type":"application/json; charset=UTF-8",Authorization:e}}).then((function(t){return t.json()})).then((function(e){t.popuptype="message"})).catch((function(t){console.log(t)}))}),5e3)}},computed:{user:function(){return this.$store.getters.user}},beforeMount:function(){this.getUser()}}},262:function(t,e,n){"use strict";n(18),n(110);var r=n(253);e.a={data:function(){return{}},mixins:[r.a],computed:{user:function(){return this.$store.getters.user}},methods:{authenticate:function(t,e){var n=this;fetch("".concat(this.baseUrl,"/").concat(e),{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(t){return t.json()})).then((function(t){if("no such user"===t.message)return alert("invalid admin");var e=t.user,r=t.token;n.setUser(e,r)})).catch((function(t){console.log(t)}))},setUser:function(t,e){localStorage.setItem("nordtokenxtxtxt",e),this.$store.dispatch("storeUser",t)},getUsers:function(){var t=this,e=localStorage.getItem("nordtokenxtxtxt");fetch("".concat(this.baseUrl,"/api/getusers"),{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:e}}).then((function(t){return t.json()})).then((function(e){var n=e.users;t.$store.dispatch("storeUsers",n)}))}}}},286:function(t,e,n){"use strict";var r=n(10),o=n(1),c=n(4),l=n(112),d=n(14),f=n(11),v=n(181),h=n(35),_=n(77),m=n(180),w=n(5),x=n(78).f,A=n(27).f,U=n(16).f,I=n(287),S=n(288).trim,C="Number",O=o.Number,y=O.prototype,k=o.TypeError,D=c("".slice),N=c("".charCodeAt),E=function(t){var e=m(t,"number");return"bigint"==typeof e?e:B(e)},B=function(t){var e,n,r,o,c,l,d,code,f=m(t,"number");if(_(f))throw k("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=S(f),43===(e=N(f,0))||45===e){if(88===(n=N(f,2))||120===n)return NaN}else if(48===e){switch(N(f,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(c=D(f,2)).length,d=0;d<l;d++)if((code=N(c,d))<48||code>o)return NaN;return parseInt(c,r)}return+f};if(l(C,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var T,$=function(t){var e=arguments.length<1?0:O(E(t)),n=this;return h(y,n)&&w((function(){I(n)}))?v(Object(e),n,$):e},j=r?x(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;j.length>F;F++)f(O,T=j[F])&&!f($,T)&&U($,T,A(O,T));$.prototype=y,y.constructor=$,d(o,C,$,{constructor:!0})}},287:function(t,e,n){var r=n(4);t.exports=r(1..valueOf)},288:function(t,e,n){var r=n(4),o=n(22),c=n(13),l=n(289),d=r("".replace),f="["+l+"]",v=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),_=function(t){return function(e){var n=c(o(e));return 1&t&&(n=d(n,v,"")),2&t&&(n=d(n,h,"")),n}};t.exports={start:_(1),end:_(2),trim:_(3)}},289:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},290:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(109).default)("336cf496",content,!0,{sourceMap:!1})},319:function(t,e,n){"use strict";var r=n(3),o=n(79).findIndex,c=n(135),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},320:function(t,e,n){"use strict";n(290)},321:function(t,e,n){var r=n(108)(!1);r.push([t.i,".addassettouser__inputarea[data-v-f34d19d4]{margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*40)}.addassettouser__inputarea.notcolumn[data-v-f34d19d4]{display:flex;align-items:center}.addassettouser__inputarea.notcolumn span.label[data-v-f34d19d4]{display:inline-block;margin-right:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);margin-top:0;text-decoration:underline}.addassettouser__inputarea.notcolumn span.input[data-v-f34d19d4]{color:#474dff}.addassettouser__inputarea--input[data-v-f34d19d4]{position:relative}.addassettouser__inputarea--button[data-v-f34d19d4]{display:flex;justify-content:space-between}.addassettouser__inputarea button[data-v-f34d19d4]{background:#474dff;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);cursor:pointer;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);border-radius:.2rem}.addassettouser__dropdown[data-v-f34d19d4]{display:flex;flex-direction:column;position:fixed;padding-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*60);align-items:center;height:100vh;z-index:-1;width:100vw;top:0;left:0;background:rgba(1,1,1,.9);opacity:0}.addassettouser__dropdown.visible[data-v-f34d19d4]{opacity:1;z-index:10;width:100vw;top:0;left:0;background:rgba(1,1,1,.9)}.addassettouser__dropdown span.asset[data-v-f34d19d4]{display:flex;align-items:center;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);cursor:pointer;background:rgba(113,128,150,.4);margin:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10) 0}.addassettouser__dropdown span.assetarea[data-v-f34d19d4]{display:flex;flex-direction:column;width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*200)}.addassettouser__dropdown span.assetarea p[data-v-f34d19d4]:first-child{text-transform:uppercase;opacity:.5;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);margin-bottom:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*5)}.addassettouser__dropdown span.assetarea p.trend[data-v-f34d19d4]{color:#474dff}.addassettouser__listitem[data-v-f34d19d4]{display:flex;align-items:center;background:rgba(113,128,150,.8);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);margin:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) 0}.addassettouser__listitem--area[data-v-f34d19d4]{width:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*260)}.addassettouser__listitem--area[data-v-f34d19d4],.addassettouser__listitem button[data-v-f34d19d4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15)}.addassettouser__listitem button[data-v-f34d19d4]{outline:none;padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15) calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);background:#474dff;border:none;cursor:pointer}div.input[data-v-f34d19d4]{display:flex;border:1px solid transparent;border-radius:.3rem}div.input[focus-within][data-v-f34d19d4]{border:1px solid #474dff}div.input[data-v-f34d19d4]:focus-within{border:1px solid #474dff}div.input input[data-v-f34d19d4]{border:none;background:transparent;outline:none;background:hsla(0,0%,100%,.09);color:#fff;width:100%;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*45);padding:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*10);letter-spacing:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*2);border-radius:.3rem}span.label[data-v-f34d19d4]{display:inline-block;margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*6)}h3.assetpriceshow[data-v-f34d19d4]{font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*15);font-weight:300;margin:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*20) 0;color:#474dff}p.warning[data-v-f34d19d4]{color:red;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*13);margin:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*6) 0}",""]),t.exports=r},405:function(t,e,n){"use strict";n.r(e);var r=n(73),o=(n(110),n(58),n(43),n(18),n(319),n(286),n(34),n(254)),c=n(262),l={mixins:[o.a,c.a],data:function(){return{asset:null,nameOfAsset:"",userbalanceOfAsset:0,userbalanceOfAssetInUSD:0,allocationInUserWallet:0,locked:!1,assets:[],sumofAssetsInUSD:[],assetBalances:[],optionsshown:!1,chosenAsset:null,adderror:null}},methods:{removeFirst:function(t,element){var e=t.indexOf(element);return-1===e?t:[].concat(Object(r.a)(t.slice(0,e)),Object(r.a)(t.slice(e+1)))},removeAssetBalance:function(t){var e=this.sumofAssetsInUSD,n=this.assetBalances.filter((function(e){return e.asset!==t})),r=this.assetBalances.filter((function(e){return e.asset===t}))[0],o=e.findIndex((function(t){return t==Number(r.userbalanceOfAssetInUSD)})),c=this.removeFirst(e,e[o]);this.sumofAssetsInUSD=c,this.assetBalances=n,this.$store.dispatch("storeAssetBalances",this.assetBalances)},addAssetBalance:function(){var t={nameofAsset:this.nameOfAsset,asset:this.asset,userbalanceOfAsset:this.calcUserBalofAsset,userbalanceOfAssetInUSD:this.userbalanceOfAssetInUSD,allocationInUserWallet:"".concat(this.calcAllocationInUserWall),locked:this.locked},e=this.assetBalances.filter((function(e){return e.asset===t.asset})),n=this.sumofAssetsInUSD,r=this.assetBalances;e.length?this.adderror="An asset of this kind already exists in the wallet":(r.push(t),this.assetBalances=r,n.push(Number(t.userbalanceOfAssetInUSD)),this.sumofAssetsInUSD=n,this.$store.dispatch("storeAssetBalances",this.assetBalances),this.asset=null,this.userbalanceOfAssetInUSD=0,this.locked=!1,this.chosenAsset=null,this.nameOfAsset="")},toggleoptions:function(){this.optionsshown?this.optionsshown=!1:this.optionsshown=!0},selectAsset:function(t){this.adderror=null,this.asset=t._id,this.nameOfAsset=t.nameOfAsset,this.chosenAsset=t,this.toggleoptions()},getAssets:function(){var t=this,e=localStorage.getItem("nordtokenxtxtxt");fetch("".concat(this.baseUrl,"/api/assetsadmin"),{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:e}}).then((function(t){return t.json()})).then((function(e){t.assets=e.assets}))}},mounted:function(){var t=this;this.getAssets();var e=localStorage.getItem("nordtokenxtxtxt");fetch("".concat(this.baseUrl,"/api/admingetuser?id=").concat(this.$route.query.id),{method:"GET",headers:{"Content-type":"application/json; charset=UTF-8",Authorization:e}}).then((function(t){return t.json()})).then((function(e){t.assetBalances=e.user.assetsBalances;var n=t.sumofAssetsInUSD;t.assetBalances.forEach((function(t){n.push(t.userbalanceOfAssetInUSD)})),t.sumofAssetsInUSD=n}))},computed:{client:function(){return this.$store.getters.client},calcUserBalinUSD:function(){var t=this.sumofAssetsInUSD.reduce((function(a,b){return a+b}),0);return this.client?this.client.balance-t:0},calcUserBalofAsset:function(){return this.chosenAsset?this.userbalanceOfAssetInUSD/this.chosenAsset.priceInUSD:0},calcAllocationInUserWall:function(){return 100*this.userbalanceOfAssetInUSD/this.client.balance}}},d=(n(320),n(42)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"addassettouser"},[n("div",{staticClass:"addassettouser__body"},[n("div",{staticClass:"addassettouser__list"},t._l(t.assetBalances,(function(e){return n("div",{staticClass:"addassettouser__listitem"},[n("div",{staticClass:"addassettouser__listitem--area"},[t._v(t._s(e.nameofAsset))]),t._v(" "),n("div",{staticClass:"addassettouser__listitem--area"},[t._v(t._s(e.userbalanceOfAsset))]),t._v(" "),n("div",{staticClass:"addassettouser__listitem--area"},[t._v(t._s(e.userbalanceOfAssetInUSD))]),t._v(" "),n("div",{staticClass:"addassettouser__listitem--area"},[t._v(t._s(e.allocationInUserWallet))]),t._v(" "),n("div",{staticClass:"addassettouser__listitem--area"},[t._v(t._s(e.locked))]),t._v(" "),n("button",{on:{click:function(n){return t.removeAssetBalance(e.asset)}}},[t._v("Remove")])])})),0),t._v(" "),n("div",{staticClass:"addassettouser__inputarea"},[n("div",{staticClass:"addassettouser__inputarea--input"},[n("h3",{staticClass:"assetpriceshow"},[t._v(t._s(t.chosenAsset?t.chosenAsset.nameOfAsset:"Asset")+" Price: $"+t._s(t.chosenAsset?t.chosenAsset.priceInUSD:0))]),t._v(" "),n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.nameOfAsset,expression:"nameOfAsset"}],attrs:{placeholder:"Choose asset"},domProps:{value:t.nameOfAsset},on:{click:t.toggleoptions,input:function(e){e.target.composing||(t.nameOfAsset=e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"addassettouser__dropdown",class:{visible:t.optionsshown}},t._l(t.assets,(function(e){return n("span",{staticClass:"asset",on:{click:function(n){return t.selectAsset(e)}}},[n("span",{staticClass:"assetarea"},[n("p",[t._v("asset name:")]),t._v(" "),n("p",[t._v(t._s(e.nameOfAsset))])]),t._v(" "),n("span",{staticClass:"assetarea"},[n("p",[t._v("asset price:")]),t._v(" "),n("p",[t._v("$ "+t._s(e.priceInUSD))])]),t._v(" "),n("span",{staticClass:"assetarea"},[n("p",[t._v("asset trend:")]),t._v(" "),n("p",{staticClass:"trend"},[t._v(t._s(e.pricechangeIn24))])])])})),0)])]),t._v(" "),n("div",{staticClass:"addassettouser__inputarea"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.userbalanceOfAssetInUSD,expression:"userbalanceOfAssetInUSD"}],attrs:{placeholder:"User balance of Asset in USD"},domProps:{value:t.userbalanceOfAssetInUSD},on:{input:function(e){e.target.composing||(t.userbalanceOfAssetInUSD=e.target.value)}}})]),t._v(" "),n("p",{staticClass:"warning"},[t._v(t._s(t.userbalanceOfAssetInUSD>t.client.balance?"You can not add more than the user balance":""))]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"addassettouser__inputarea notcolumn"},[t._m(2),t._v(" "),n("span",{staticClass:"input"},[t._v("\n                    "+t._s(t.calcUserBalofAsset)+"\n                ")])]),t._v(" "),n("div",{staticClass:"addassettouser__inputarea notcolumn"},[t._m(3),t._v(" "),n("span",{staticClass:"input"},[n("p",[t._v(t._s(t.calcAllocationInUserWall)+"%")])])]),t._v(" "),n("div",{staticClass:"addassettouser__inputarea notcolumn"},[t._m(4),t._v(" "),n("span",{staticClass:"input"},[n("p",[t._v("$"+t._s(t.calcUserBalinUSD))])])]),t._v(" "),n("div",{staticClass:"addassettouser__inputarea"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.locked,expression:"locked"}],attrs:{placeholder:"locked?"},domProps:{value:t.locked},on:{input:function(e){e.target.composing||(t.locked=e.target.value)}}})]),t._v(" "),t._m(5)]),t._v(" "),t.adderror?n("p",{staticClass:"warning"},[t._v(t._s(t.adderror))]):t._e(),t._v(" "),n("div",{staticClass:"addassettouser__inputarea addassettouser__inputarea--button"},[n("div"),t._v(" "),n("button",{on:{click:t.addAssetBalance}},[t._v("Add Asset Details")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"label"},[n("p",[t._v("Asset name")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"label"},[n("p",[t._v("Amount in USD to add to client balance")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"label"},[n("p",[t._v("User balance of Asset:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"label"},[n("p",[t._v("Allocation in User Wallet:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"label"},[n("p",[t._v("Untraded Balance left in USD:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"label"},[n("p",[t._v("Choose if the user can withdraw, transfer, swap, or not")])])}],!1,null,"f34d19d4",null);e.default=component.exports}}]);