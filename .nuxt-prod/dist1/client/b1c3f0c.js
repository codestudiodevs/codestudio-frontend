(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{901:function(e,t,r){var content=r(925);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("f6560170",content,!0,{sourceMap:!1})},924:function(e,t,r){"use strict";r(901)},925:function(e,t,r){var o=r(24)((function(i){return i[1]}));o.push([e.i,"table[data-v-71b8fff8]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-71b8fff8],th[data-v-71b8fff8]{padding:8px;text-align:left}tr[data-v-71b8fff8]:nth-child(2n){background-color:#fbfdff}",""]),o.locals={},e.exports=o},942:function(e,t,r){"use strict";r.r(t);var o=r(116),l=r(511),c=r(849),n=r(510),m=r(846),_=r(218),d=r(3);r(36),r(6),r(79),r(33),r(63),r(57),r(14),r(13),r(12),r(17),r(11),r(18);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(d.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={props:["employeeId"],data:function(){return{other_info:!1,contact_info:!1,response:"",snackbar:!1,errors:[],contactItem:{}}},created:function(){this.getInfo()},methods:{getInfo:function(){var e=this;this.$axios.get("employee/".concat(this.employeeId,"?company_id=").concat(this.$auth.user.company_id)).then((function(t){var data=t.data;e.contactItem=data}))},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},close_contact_info:function(){this.contact_info=!1,this.errors=[],setTimeout((function(){}),300)},can:function(e){return!0},save_contact_info:function(){var e,t,r,o=this,l=f(f({},this.contactItem),{},{company_id:null===(e=this.$auth)||void 0===e||null===(t=e.user)||void 0===t||null===(r=t.company)||void 0===r?void 0:r.id,employee_id:this.employeeId});this.$axios.post("employee/update/contact",l).then((function(e){var data=e.data;o.loading=!1,o.$emit("eventFromchild"),data.status?(o.errors=[],o.snackbar=!0,o.response=data.message,o.getInfo(),o.close_contact_info()):o.errors=data.errors})).catch((function(e){return console.log(e)}))}}},y=(r(924),r(61)),component=Object(y.a)(v,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(m.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(c.a,[t(n.a,[t(l.a,{attrs:{md:"4",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Phone Number")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.phone_number,type:"text",error:e.errors.phone_number,"error-messages":e.errors&&e.errors.phone_number?e.errors.phone_number[0]:""},model:{value:e.contactItem.phone_number,callback:function(t){e.$set(e.contactItem,"phone_number",t)},expression:"contactItem.phone_number"}})],1),e._v(" "),t(l.a,{attrs:{md:"4",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Whatsapp Number")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.whatsapp_number,type:"text",error:e.errors.whatsapp_number,"error-messages":e.errors&&e.errors.whatsapp_number?e.errors.whatsapp_number[0]:""},model:{value:e.contactItem.whatsapp_number,callback:function(t){e.$set(e.contactItem,"whatsapp_number",t)},expression:"contactItem.whatsapp_number"}})],1),e._v(" "),t(l.a,{attrs:{md:"4",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Alternate Email")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.local_email,type:"text",error:e.errors.local_email,"error-messages":e.errors&&e.errors.local_email?e.errors.local_email[0]:""},model:{value:e.contactItem.local_email,callback:function(t){e.$set(e.contactItem,"local_email",t)},expression:"contactItem.local_email"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Phone Relative Number")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.phone_relative_number,type:"text",error:e.errors.phone_relative_number,"error-messages":e.errors&&e.errors.phone_relative_number?e.errors.phone_relative_number[0]:""},model:{value:e.contactItem.phone_relative_number,callback:function(t){e.$set(e.contactItem,"phone_relative_number",t)},expression:"contactItem.phone_relative_number"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Relation")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.relation,type:"text",error:e.errors.relation,"error-messages":e.errors&&e.errors.relation?e.errors.relation[0]:""},model:{value:e.contactItem.relation,callback:function(t){e.$set(e.contactItem,"relation",t)},expression:"contactItem.relation"}})],1),e._v(" "),t(l.a,{attrs:{md:"4",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Local Address")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.local_address,type:"text",error:e.errors.local_address,"error-messages":e.errors&&e.errors.local_address?e.errors.local_address[0]:""},model:{value:e.contactItem.local_address,callback:function(t){e.$set(e.contactItem,"local_address",t)},expression:"contactItem.local_address"}})],1),e._v(" "),t(l.a,{attrs:{md:"4",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Local City")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.local_city,type:"text",error:e.errors.local_city,"error-messages":e.errors&&e.errors.local_city?e.errors.local_city[0]:""},model:{value:e.contactItem.local_city,callback:function(t){e.$set(e.contactItem,"local_city",t)},expression:"contactItem.local_city"}})],1),e._v(" "),t(l.a,{attrs:{md:"4",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Local Country")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.local_country,type:"text",error:e.errors.local_country,"error-messages":e.errors&&e.errors.local_country?e.errors.local_country[0]:""},model:{value:e.contactItem.local_country,callback:function(t){e.$set(e.contactItem,"local_country",t)},expression:"contactItem.local_country"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12"}},[t(o.a,{staticClass:"primary--text",attrs:{text:""},on:{click:function(t){e.other_info=!e.other_info}}},[e._v("\n          "+e._s(e.other_info?"hide":"show")+" Home Country Details\n        ")])],1)],1),e._v(" "),e.other_info?t(n.a,[t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Address")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.home_address,type:"text",error:e.errors.home_address,"error-messages":e.errors&&e.errors.home_address?e.errors.home_address[0]:""},model:{value:e.contactItem.home_address,callback:function(t){e.$set(e.contactItem,"home_address",t)},expression:"contactItem.home_address"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Tel")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.home_tel,type:"text",error:e.errors.home_tel,"error-messages":e.errors&&e.errors.home_tel?e.errors.home_tel[0]:""},model:{value:e.contactItem.home_tel,callback:function(t){e.$set(e.contactItem,"home_tel",t)},expression:"contactItem.home_tel"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Mobile")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.home_mobile,type:"text",error:e.errors.home_mobile,"error-messages":e.errors&&e.errors.home_mobile?e.errors.home_mobile[0]:""},model:{value:e.contactItem.home_mobile,callback:function(t){e.$set(e.contactItem,"home_mobile",t)},expression:"contactItem.home_mobile"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Fax")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.home_fax,type:"text",error:e.errors.home_fax,"error-messages":e.errors&&e.errors.home_fax?e.errors.home_fax[0]:""},model:{value:e.contactItem.home_fax,callback:function(t){e.$set(e.contactItem,"home_fax",t)},expression:"contactItem.home_fax"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("City")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.home_city,type:"text",error:e.errors.home_city,"error-messages":e.errors&&e.errors.home_city?e.errors.home_city[0]:""},model:{value:e.contactItem.home_city,callback:function(t){e.$set(e.contactItem,"home_city",t)},expression:"contactItem.home_city"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("State")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.home_state,type:"text",error:e.errors.home_state,"error-messages":e.errors&&e.errors.home_state?e.errors.home_state[0]:""},model:{value:e.contactItem.home_state,callback:function(t){e.$set(e.contactItem,"home_state",t)},expression:"contactItem.home_state"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Country")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.home_country,type:"text",error:e.errors.home_country,"error-messages":e.errors&&e.errors.home_country?e.errors.home_country[0]:""},model:{value:e.contactItem.home_country,callback:function(t){e.$set(e.contactItem,"home_country",t)},expression:"contactItem.home_country"}})],1),e._v(" "),t(l.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Personal Email")]),e._v(" "),t(_.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.home_email,type:"text",error:e.errors.home_email,"error-messages":e.errors&&e.errors.home_email?e.errors.home_email[0]:""},model:{value:e.contactItem.home_email,callback:function(t){e.$set(e.contactItem,"home_email",t)},expression:"contactItem.home_email"}})],1),e._v(" "),e.errors&&e.errors.length?t("span",{staticClass:"error--text"},[e._v(e._s(e.errors))]):e._e()],1):e._e(),e._v(" "),t(n.a,[t(l.a,{staticClass:"text-right",attrs:{cols:"12"}},[t(o.a,{staticClass:"primary",attrs:{small:""},on:{click:e.save_contact_info}},[e._v("Save")])],1)],1)],1)],1)}),[],!1,null,"71b8fff8",null);t.default=component.exports}}]);