(window.webpackJsonp=window.webpackJsonp||[]).push([[124,56,64],{1308:function(t,e,l){"use strict";l.r(e);var r=l(864),o=l(116),n=l(133),c=l(94),d=l(511),v=l(849),_=l(1009),y=l(1008),m=l(510),f=l(846),h=(l(59),l(44),l(882),l(6),l(79),l(35),{data:function(){return{payload:{salary_type:"basic_salary",ot_value:1.5,deduction_value:1.5},menu:!1,date:1,preloader:!1,loading:!1,response:!1,snackbar:!1,dayOptions:Array.from({length:31},(function(t,i){return{value:i+1,label:i+1}})),errors:[]}},created:function(){var t,e,l,r=this;this.payload.company_id=null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(l=e.company)||void 0===l?void 0:l.id,this.preloader=!1,this.$axios.get("/payroll_formula/".concat(this.payload.company_id)).then((function(t){var data=t.data;data&&(r.payload=data)})).catch((function(t){return console.log(t)})),this.$axios.get("/payroll_generate_date/".concat(this.payload.company_id)).then((function(t){var data=t.data;return r.date=data})).catch((function(t){return console.log(t)}))},methods:{getDate:function(){var t=new Date,e=(t.getFullYear(),(t.getMonth()+1).toString().padStart(2,"0"),t.getDate().toString().padStart(2,"0"));return"".concat(e)},can:function(t){var u=this.$auth.user;return u&&u.permissions.some((function(e){return e.name==t||"/"==t}))||u.is_master},store:function(){var t=this;this.errors=[],this.$axios.post("/payroll_formula",this.payload).then((function(e){var data=e.data;t.loading=!1,data.status?(t.snackbar=data.status,t.response=data.message):t.errors=data.errors})).catch((function(t){return console.log(t)}))},storeDate:function(){var t,e,l,r=this;this.errors=[];var o={company_id:null===(t=this.$auth)||void 0===t||null===(e=t.user)||void 0===e||null===(l=e.company)||void 0===l?void 0:l.id,date:this.date};this.$axios.post("/payroll_generate_date",o).then((function(t){var data=t.data;r.loading=!1,data.status?(r.snackbar=data.status,r.response=data.message):r.errors=data.errors})).catch((function(t){return console.log(t)}))}}}),x=l(61),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return t.can("setting_company_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(f.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),t.preloader?e("Preloader"):e("div",[e(n.a,{staticClass:"pa-3 mb-5",attrs:{elevation:"0"}},[e(c.d,[e("label",{staticClass:"col-form-label pt-0 mt-5"},[e("b",[t._v("Create Payroll Formula")])])]),t._v(" "),e(v.a,[e(m.a,[e(d.a,{attrs:{cols:"2"}},[e("label",{staticClass:"col-form-label pt-0 mt-5"},[e("b",[t._v("Salary calculation formula")])])]),t._v(" "),e(d.a,{attrs:{cols:"10"}},[e("div",{staticStyle:{display:"inline-flex"}},[e(y.a,{attrs:{row:""},model:{value:t.payload.salary_type,callback:function(e){t.$set(t.payload,"salary_type",e)},expression:"payload.salary_type"}},[e(_.a,{attrs:{label:"Basic Salary",value:"basic_salary"}}),t._v(" "),e(_.a,{attrs:{label:"Net Salary",value:"net_salary"}})],1)],1),t._v(" "),t.errors&&t.errors.salary_type?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.salary_type[0]))]):t._e()]),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("OT formula")])])]),t._v(" "),e(d.a,{attrs:{cols:"10"}},[e("div",{staticStyle:{display:"inline-flex"}},[e("input",{staticClass:"form-control",attrs:{type:"text",outlined:"",dense:"",value:"Per Hour Salary",readonly:""}}),t._v(" "),e("span",{staticClass:"pa-2"},[t._v("x")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.ot_value,expression:"payload.ot_value"}],staticClass:"form-control",attrs:{type:"text",outlined:"",dense:""},domProps:{value:t.payload.ot_value},on:{input:function(e){e.target.composing||t.$set(t.payload,"ot_value",e.target.value)}}})]),t._v(" "),t.errors&&t.errors.ot_value?e("span",{staticClass:"text-danger"},[t._v(t._s(t.errors.ot_value[0]))]):t._e()]),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("Late Deduction formula")])])]),t._v(" "),e(d.a,{attrs:{cols:"8"}},[e("div",{staticStyle:{display:"inline-flex"}},[e("input",{staticClass:"form-control",attrs:{type:"text",outlined:"",dense:"",value:"Per Hour Salary",readonly:""}}),t._v(" "),e("span",{staticClass:"pa-2"},[t._v("x")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.payload.deduction_value,expression:"payload.deduction_value"}],staticClass:"form-control",attrs:{type:"text",outlined:"",dense:""},domProps:{value:t.payload.deduction_value},on:{input:function(e){e.target.composing||t.$set(t.payload,"deduction_value",e.target.value)}}})]),t._v(" "),t.errors&&t.errors.deduction_value?e("span",{staticClass:"text-danger",attrs:{d:""}},[t._v(t._s(t.errors.deduction_value[0]))]):t._e()]),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{small:"",color:"primary"},on:{click:t.store}},[t._v(" Submit ")])],1)],1)],1)],1),t._v(" "),e(n.a,{staticClass:"pa-3",attrs:{elevation:"0"}},[e(c.d,[e("label",{staticClass:"col-form-label pt-0 mt-5"},[e("b",[t._v("Create Payroll Generation Date")])])]),t._v(" "),e(v.a,[e(m.a,[e(d.a,{attrs:{cols:"2"}},[e("label",{staticClass:"col-form-label"},[e("b",[t._v("Set date for payroll generation")])])]),t._v(" "),e(d.a,{attrs:{cols:"2"}},[e(r.a,{attrs:{dense:"",outlined:"",items:t.dayOptions,"item-value":"value","item-text":"label"},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12"}},[e(o.a,{attrs:{small:"",color:"primary"},on:{click:t.storeDate}},[t._v(" Submit ")])],1)],1)],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Preloader:l(859).default,NoAccess:l(851).default})},851:function(t,e,l){"use strict";l.r(e);var r=l(61),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports},859:function(t,e,l){"use strict";l.r(e);var r=l(215),o=l(61),component=Object(o.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/1.gif"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);