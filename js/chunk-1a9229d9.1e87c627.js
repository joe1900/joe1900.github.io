(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a9229d9"],{"02c3":function(t,e,a){(function(e,a){t.exports=a()})(0,(function(){return function(t){function e(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,a){"use strict";function n(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var i=a(2),s=a(0),r=a.n(s);e.a=function(t,e){var s=e.value;if((Array.isArray(s)||"string"==typeof s)&&(s={mask:s,tokens:r.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var o=t.getElementsByTagName("input");if(1!==o.length)throw new Error("v-mask directive requires 1 input, found "+o.length);t=o[0]}t.oninput=function(e){if(e.isTrusted){var r=t.selectionEnd,o=t.value[r-1];for(t.value=a.i(i.a)(t.value,s.mask,!0,s.tokens);r<t.value.length&&t.value.charAt(r-1)!==o;)r++;t===document.activeElement&&(t.setSelectionRange(r,r),setTimeout((function(){t.setSelectionRange(r,r)}),0)),t.dispatchEvent(n("input"))}};var u=a.i(i.a)(t.value,s.mask,!0,s.tokens);u!==t.value&&(t.value=u,t.dispatchEvent(n("input")))}},function(t,e,a){"use strict";var n=a(6),i=a(5);e.a=function(t,e){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments[3];return Array.isArray(e)?a.i(i.a)(n.a,e,r)(t,e,s,r):a.i(n.a)(t,e,s,r)}},function(t,e,a){"use strict";function n(t){t.component(u.a.name,u.a),t.directive("mask",r.a)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),s=a.n(i),r=a(1),o=a(7),u=a.n(o);a.d(e,"TheMask",(function(){return u.a})),a.d(e,"mask",(function(){return r.a})),a.d(e,"tokens",(function(){return s.a})),a.d(e,"version",(function(){return c}));var c="0.11.1";e.default=n,"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(1),i=a(0),s=a.n(i),r=a(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return s.a}}},directives:{mask:n.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=a.i(r.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,a){"use strict";function n(t,e,a){return e=e.sort((function(t,e){return t.length-e.length})),function(n,i){for(var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=0;r<e.length;){var o=e[r];r++;var u=e[r];if(!(u&&t(n,u,!0,a).length>o.length))return t(n,o,s,a)}return""}}e.a=n},function(t,e,a){"use strict";function n(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments[3];t=t||"",e=e||"";for(var i=0,s=0,r="";i<e.length&&s<t.length;){var o=e[i],u=n[o],c=t[s];u&&!u.escape?(u.pattern.test(c)&&(r+=u.transform?u.transform(c):c,i++),s++):(u&&u.escape&&(i++,o=e[i]),a&&(r+=o),c===o&&s++,i++)}for(var l="";i<e.length&&a;){o=e[i];if(n[o]){l="";break}l+=o,i++}return r+l}e.a=n},function(t,e,a){var n=a(8)(a(4),a(9),null,null);t.exports=n.exports},function(t,e){t.exports=function(t,e,a,n){var i,s=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(i=t,s=t.default);var o="function"==typeof s?s.options:s;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),n){var u=o.computed||(o.computed={});Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}}))}return{esModule:i,exports:s,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,a){t.exports=a(3)}])}))},"561f":function(t,e,a){"use strict";var n=a("ad1e"),i=a("0cf1"),s=a("d748"),r=a("66e3"),o=[].join,u=i!=Object,c=r("join",",");n({target:"Array",proto:!0,forced:u||c},{join:function(t){return o.call(s(this),void 0===t?",":t)}})},"63e4":function(t,e,a){},"937d":function(t,e,a){"use strict";var n=a("63e4"),i=a.n(n);i.a},a55b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Login"},[a("v-card",{staticClass:"mx-auto",attrs:{height:"294","max-width":"344","min-width":"344"}},[a("v-card-text",[a("div",[t._v("登录")]),a("p",{staticClass:"display-1 text--primary"},[t._v("WELCOME!")]),a("p",[t._v("健康很难,硬汉邦帮你")]),a("div",{staticClass:"text--primary",staticStyle:{"padding-left":"0","padding-right":"0"}},[a("v-col",{attrs:{cols:"12",sm:"12",md:"12"}},[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:t.mask,expression:"mask"}],attrs:{label:"手机号码",outlined:"",color:"black"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:!t.time_S,expression:"!time_S"}],attrs:{text:"",color:"deep-purple accent-4"},on:{click:t.VerificationCode}},[t._v("获取验证码")]),a("v-expand-x-transition",[a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.time_S,expression:"time_S"}],attrs:{text:"",color:"deep-purple accent-4",disabled:""}},[t._v(t._s(t.time)+"秒后重新获取")])],1)],1)],1),a("v-row",{attrs:{justify:"center"}},[a("div",{staticClass:"mx-4 hidden-sm-and-down"}),a("v-col",{staticClass:"shrink code_",attrs:{"min-width":"344"}},[a("v-expand-x-transition",[a("v-card",{directives:[{name:"show",rawName:"v-show",value:t.expand2,expression:"expand2"}],staticClass:"mx-auto",attrs:{height:"294",width:"344"}},[a("p",{staticClass:"display-1 text--primary code_text_"},[t._v("输入验证码!")]),a("p",{staticClass:"code_text__"},[t._v("验证码已通过短信发送至 "+t._s(t.value))]),a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:t.mask_,expression:"mask_"}],staticStyle:{width:"290px","margin-left":"25px"},attrs:{label:"验证码",outlined:"",rounded:"",color:"black code_code"},on:{input:t.login},model:{value:t.code_value,callback:function(e){t.code_value=e},expression:"code_value"}}),a("v-btn",{staticStyle:{"margin-left":"25px"},attrs:{text:"",color:"deep-purple accent-4"},on:{click:function(e){t.expand2=!t.expand2}}},[t._v("重新输入手机")])],1)],1)],1)],1)],1)],1)],1)},i=[],s=(a("561f"),a("58e6"),a("d93c"),a("02c3")),r={name:"home",directives:{mask:s["mask"]},components:{},data:function(){return{mask:"###-####-####",mask_:"####",value:"",code_value:"",submitStatus:!1,expand2:!1,time_S:!1,time:60}},methods:{VerificationCode:function(){if(13!==this.value.length)return this.$Dialog.getProductCheckResult_({text:"请输入有效的手机号码！",timeout:3e3,snackbar:!0}),!1;60==this.time&&this.timeFun(),this.submit()},timeFun:function(){var t=this;0==this.time?(this.time=60,this.time_S=!1):(this.time--,setTimeout((function(){t.timeFun(t.time)}),1e3))},submit:function(){var t=this;this.$axios({method:"post",url:this.$apis.URL.user_phone_code,data:{phone:this.value.split("-").join("")}}).then((function(e){0==e.data.result?(t.time_S=!0,setTimeout((function(){t.expand2=!0}),500),t.$Dialog.getProductCheckResult_({text:"验证码已发送到 ".concat(t.value),timeout:3e3,snackbar:!0})):t.$Dialog.getProductCheckResult_({text:e.data.message,timeout:3e3,snackbar:!0})})).catch((function(e){t.$Dialog.getProductCheckResult_({text:e,timeout:3e3,snackbar:!0})}))},login:function(){var t=this;if(4!==this.code_value.length)return!1;this.$Dialog.getProductCheckResult_({text:"正在登录 ".concat(this.value),timeout:3e3,snackbar:!0}),this.$axios({method:"post",url:this.$apis.URL.doctor_login,data:{phone:this.value.split("-").join(""),code:this.code_value}}).then((function(e){0==e.data.result?setTimeout((function(){switch(t.$Dialog.getProductCheckResult_({text:"登录成功，欢迎回来！",timeout:3e3,snackbar:!0}),e.data.datas.pass_validation){case 1:t.$router.push({path:"/SubmitReview",query:{pass_validation:e.data.datas.pass_validation}});break;case 2:t.$router.push({path:"/SubmitReview",query:{pass_validation:e.data.datas.pass_validation,time:e.data.datas.update_time,switch:!1}});break;case 3:t.$router.push({path:"/SubmitReview",query:{pass_validation:e.data.datas.pass_validation,switch:!0,rejection_reason:e.data.datas.rejection_reason,time:e.data.datas.update_time}});break;case 4:t.$router.push({path:"/home",query:{}});break;default:break}}),600):t.$Dialog.getProductCheckResult_({text:e.data.message,timeout:3e3,snackbar:!0})})).catch((function(e){t.$Dialog.getProductCheckResult_({text:e,timeout:3e3,snackbar:!0})}))}}},o=r,u=(a("937d"),a("4e82")),c=a("6663"),l=a.n(c),d=a("c64c"),p=a("6f5d"),v=a("f71d"),h=a("22ca"),f=a("b9ca"),m=a("2a00"),g=a("cd21"),k=Object(u["a"])(o,n,i,!1,null,"3d045e75",null);e["default"]=k.exports;l()(k,{VBtn:d["a"],VCard:p["a"],VCardText:v["c"],VCol:h["a"],VExpandXTransition:f["b"],VRow:m["a"],VTextField:g["a"]})},d93c:function(t,e,a){"use strict";var n=a("c471"),i=a("69a7b"),s=a("2e48"),r=a("c00d"),o=a("7bd5"),u=a("072e"),c=a("ecfd"),l=a("1493"),d=a("c4ab"),p=a("ee9c"),v=[].push,h=Math.min,f=4294967295,m=!p((function(){return!RegExp(f,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(r(this)),s=void 0===a?f:a>>>0;if(0===s)return[];if(void 0===t)return[n];if(!i(t))return e.call(n,t,s);var o,u,c,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=new RegExp(t.source,p+"g");while(o=d.call(m,n)){if(u=m.lastIndex,u>h&&(l.push(n.slice(h,o.index)),o.length>1&&o.index<n.length&&v.apply(l,o.slice(1)),c=o[0].length,h=u,l.length>=s))break;m.lastIndex===o.index&&m.lastIndex++}return h===n.length?!c&&m.test("")||l.push(""):l.push(n.slice(h)),l.length>s?l.slice(0,s):l}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var i=r(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,i,a):n.call(String(i),e,a)},function(t,i){var r=a(n,t,this,i,n!==e);if(r.done)return r.value;var d=s(t),p=String(this),v=o(d,RegExp),g=d.unicode,k=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new v(m?d:"^(?:"+d.source+")",k),_=void 0===i?f:i>>>0;if(0===_)return[];if(0===p.length)return null===l(x,p)?[p]:[];var b=0,w=0,y=[];while(w<p.length){x.lastIndex=m?w:0;var C,R=l(x,m?p:p.slice(w));if(null===R||(C=h(c(x.lastIndex+(m?0:w)),p.length))===b)w=u(p,w,g);else{if(y.push(p.slice(b,w)),y.length===_)return y;for(var S=1;S<=R.length-1;S++)if(y.push(R[S]),y.length===_)return y;w=b=C}}return y.push(p.slice(b)),y}]}),!m)}}]);
//# sourceMappingURL=chunk-1a9229d9.1e87c627.js.map