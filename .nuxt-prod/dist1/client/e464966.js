(window.webpackJsonp=window.webpackJsonp||[]).push([[151,56],{1316:function(e,t,r){"use strict";r.r(t);var o=r(116),l=r(133),n=r(94),c=r(511),v=r(510),d=r(846),m=(r(35),r(72),r(12),r(6),r(40)),_=(r(57),r(108),{layout:function(e){var t=e.$auth.user.user_type;return"master"==t?"master":"employee"==t?"employee":"master"==t?"default":void 0},data:function(){return{loading:!1,upload:{name:""},payload:{report_type:"Attendance",name:"",device_type:"",device_id:"",model_number:"",status_id:"",company_id:"",location:"",short_name:"",ip:"0.0.0.0",port:"8101"},errors:[],device_statusses:[],companies:[],data:{},response:"",snackbar:!1}},created:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.getCompanies(),e.getDeviceStatus(),e.payload.company_id=e.$route.params.id;case 3:case"end":return t.stop()}}),t)})))()},methods:{can:function(e){var u=this.$auth.user;return u&&u.user_type==e},getCompanies:function(){var e=this;this.$axios.get("company").then((function(t){var data=t.data;e.companies=data.data}))},getDeviceStatus:function(){var e=this;this.$axios.get("device_status").then((function(t){var data=t.data;e.device_statusses=data.data}))},store_device:function(){var e=this,t=this.payload;this.$axios.post("/device",t).then((function(t){var data=t.data;e.loading=!1,data.status?"device_api_error"==data.status?(e.errors=[],e.snackbar=!0,e.response="Check your device details"):(e.snackbar=!0,e.response=data.message,setTimeout((function(){return e.$router.push("/master/companies/details/".concat(e.payload.company_id))}),2e3)):e.errors=data.errors})).catch((function(e){return console.log(e)}))}}}),y=r(61),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return e.can("master")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(d.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(v.a,{staticClass:"mt-5 mb-10"},[t(c.a,{attrs:{cols:"10"}},[t("h3",[e._v("Device")]),e._v(" "),t("div",[e._v("Dashboard / Device / Create")])])],1),e._v(" "),t(l.a,[t(l.a,{attrs:{flat:""}},[t(n.c,[t("div",{staticClass:"row"},[t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Device Name ")]),e._v(" "),t("span",{staticClass:"text-danger"},[e._v("*")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.payload.name,expression:"payload.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.payload.name},on:{input:function(t){t.target.composing||e.$set(e.payload,"name",t.target.value)}}}),e._v(" "),e.errors&&e.errors.name?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.name[0]))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-6"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Device Short Name ")]),e._v(" "),t("span",{staticClass:"text-danger"},[e._v("*")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.payload.short_name,expression:"payload.short_name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.payload.short_name},on:{input:function(t){t.target.composing||e.$set(e.payload,"short_name",t.target.value)}}}),e._v(" "),e.errors&&e.errors.short_name?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.short_name[0]))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Device Type ")]),e._v(" "),t("span",{staticClass:"text-danger"},[e._v("*")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.payload.device_type,expression:"payload.device_type"}],staticClass:"form-select pt-1 pb-1",attrs:{"aria-label":"Default select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.payload,"device_type",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:""}},[e._v("Select Device Type")]),e._v(" "),t("option",{attrs:{value:"in"}},[e._v("In")]),e._v(" "),t("option",{attrs:{value:"out"}},[e._v("Out")]),e._v(" "),t("option",{attrs:{value:"auto"}},[e._v("Auto")])]),e._v(" "),e.errors&&e.errors.device_type?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.device_type[0]))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Device Id ")]),e._v(" "),t("span",{staticClass:"text-danger"},[e._v("*")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.payload.device_id,expression:"payload.device_id"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.payload.device_id},on:{input:function(t){t.target.composing||e.$set(e.payload,"device_id",t.target.value)}}}),e._v(" "),e.errors&&e.errors.device_id?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.device_id[0]))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Device Model Number")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.payload.model_number,expression:"payload.model_number"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.payload.model_number},on:{input:function(t){t.target.composing||e.$set(e.payload,"model_number",t.target.value)}}}),e._v(" "),e.errors&&e.errors.model_number?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.model_number[0]))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Device Status ")]),e._v(" "),t("span",{staticClass:"text-danger"},[e._v("*")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.payload.status_id,expression:"payload.status_id"}],staticClass:"form-select",attrs:{"aria-label":"Default select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.payload,"status_id",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:""}},[e._v("Select Device Status")]),e._v(" "),e._l(e.device_statusses,(function(r,o){return t("option",{key:o,domProps:{value:r.id}},[e._v("\n                  "+e._s(r.name)+"\n                ")])}))],2),e._v(" "),e.errors&&e.errors.status_id?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.status_id[0]))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Company List")]),e._v(" "),t("span",{staticClass:"text-danger"},[e._v("*")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.payload.company_id,expression:"payload.company_id"}],staticClass:"form-select",attrs:{disabled:"","aria-label":"Default select example"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.payload,"company_id",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:""}},[e._v("Select Device Status")]),e._v(" "),e._l(e.companies,(function(r,o){return t("option",{key:o,domProps:{value:r.id}},[e._v("\n                  "+e._s(r.name)+"\n                ")])}))],2),e._v(" "),e.errors&&e.errors.company_id?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.company_id[0]))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-4"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Report Type")]),e._v(" "),t("span",{staticClass:"text-danger"},[e._v("*")]),e._v(" "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.payload.report_type,expression:"payload.report_type"}],staticClass:"form-select",attrs:{"aria-label":"Default select example"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.payload,"report_type",t.target.multiple?r:r[0])}}},[t("option",{attrs:{value:"Attendance"}},[e._v("Attendance")]),e._v(" "),t("option",{attrs:{value:"Access Control"}},[e._v("Access Control")])]),e._v(" "),e.errors&&e.errors.company_id?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.company_id[0]))]):e._e()])]),e._v(" "),t("div",{staticClass:"col-sm-12"},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-form-label"},[e._v("Device Location ")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.payload.location,expression:"payload.location"}],staticClass:"form-control",attrs:{id:"textAreaExample1",rows:"5"},domProps:{value:e.payload.location},on:{input:function(t){t.target.composing||e.$set(e.payload,"location",t.target.value)}}}),e._v(" "),e.errors&&e.errors.location?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.location[0]))]):e._e()])])]),e._v(" "),t(v.a,[t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"text-right"},[t(o.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.store_device}},[e._v("\n                Submit\n              ")])],1)])],1)],1)],1)],1)],1):t("NoAccess")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NoAccess:r(851).default})},851:function(e,t,r){"use strict";r.r(t);var o=r(61),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports}}]);