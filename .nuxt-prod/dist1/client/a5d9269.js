(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1037:function(t,e,r){var content=r(1138);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(25).default)("728ddfe1",content,!0,{sourceMap:!1})},1137:function(t,e,r){"use strict";r(1037)},1138:function(t,e,r){var n=r(24)((function(i){return i[1]}));n.push([t.i,".login-card[data-v-5aac64e0]{display:flex}.login-image[data-v-5aac64e0]{height:100%}",""]),n.locals={},t.exports=n},1253:function(t,e,r){"use strict";r.r(e);var n=r(116),o=r(133),l=r(511),c=r(849),d=r(878),f=r(215),h=r(510),m=r(860),v=r(218),w=(r(33),r(57),{layout:"login",data:function(){return{logo:"/ideaHRMS-final-blue.svg",loginUserType:"Manager",valid:!0,loading:!1,snackbar:!1,email:"",password:"",show_password:!1,msg:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}]}},created:function(){},methods:{login:function(){var t=this;if(this.$refs.form.validate()){this.msg="",this.loading=!0;var e={email:this.email,password:this.password};this.$auth.loginWith("local",{data:e}).then((function(t){t.data})).catch((function(e){var r=e.response;if(setTimeout((function(){return t.loading=!1}),2e3),r){var n=r.status,data=r.data,o=r.statusText;t.msg=n?422==n?data.message:o:"Server Down"}else t.msg="No response found"}))}}}}),_=(r(1137),r(61)),component=Object(_.a)(w,(function(){var t=this,e=t._self._c;return e(c.a,{attrs:{fluid:""}},[e(h.a,{staticStyle:{"margin-top":"10%"},attrs:{justify:"center",align:"center"}},[e(l.a,{attrs:{cols:"12",sm:"8",md:"8",lg:"6"}},[e(o.a,{staticClass:"login-card",attrs:{elevation:"12"}},[e(h.a,[e(l.a,{attrs:{cols:"4"}},[e(d.a,{ref:"form",staticClass:"pa-2",attrs:{method:"post","lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"text-center"},[e("img",{attrs:{width:"100%","lazy-src":t.logo,src:t.logo,alt:"logo"}})]),t._v(" "),e(v.a,{attrs:{rules:t.emailRules,"hide-details":!0,placeholder:"Email",required:"",dense:"",outlined:"",type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),e("br"),t._v(" "),e(v.a,{attrs:{"hide-details":!0,placeholder:"Password",dense:"",outlined:"",rules:t.passwordRules,"append-icon":t.show_password?"mdi-eye":"mdi-eye-off",type:t.show_password?"text":"password"},on:{"click:append":function(e){t.show_password=!t.show_password}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),e("br"),t._v(" "),e(m.a,{attrs:{items:["Manager","Employee"],dense:"",outlined:"","hide-details":!0,placeholder:"Type"},model:{value:t.loginUserType,callback:function(e){t.loginUserType=e},expression:"loginUserType"}}),t._v(" "),t.msg?e("div",{staticClass:"text-center pt-1 mb-5 pb-1"},[e("span",{staticClass:"error--text"},[t._v("\n                  "+t._s(t.msg)+"\n                ")])]):t._e(),t._v(" "),e("br"),t._v(" "),e(n.a,{attrs:{loading:t.loading,color:"background",small:"",dark:""},on:{click:t.login}},[t._v("Login")])],1)],1),t._v(" "),e(l.a,{attrs:{cols:"8"}},[e(f.a,{staticClass:"login-image",attrs:{"lazy-src":"/bg.png",src:"/bg.png"}})],1)],1)],1)],1)],1)],1)}),[],!1,null,"5aac64e0",null);e.default=component.exports},878:function(t,e,r){"use strict";var n=r(3),o=(r(43),r(64),r(351),r(12),r(6),r(11),r(57),r(107),r(14),r(13),r(17),r(18),r(8)),l=r(118),c=r(148);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})}}]);