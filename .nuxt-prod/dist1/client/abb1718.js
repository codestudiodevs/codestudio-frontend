(window.webpackJsonp=window.webpackJsonp||[]).push([[178,56],{1266:function(t,e,n){"use strict";n.r(e);var r=n(116),o=n(133),l=n(1220),c=n(115),_=n(846),f=n(348),d=n(218),m=n(95),v=n(850),h=n(829),y=(n(35),n(14),n(13),n(12),n(17),n(11),n(18),n(3));n(33),n(63),n(6),n(36),n(72);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={data:function(){return{totalRowsCount:0,isFilter:!1,filters:{},shifts:[],datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",options:{},Model:"Shift",endpoint:"shift",search:"",snackbar:!1,ids:[],loading:!1,total:0,headers:[{text:"Name"},{text:"Type"},{text:"In"},{text:"Start In"},{text:"Ending In"},{text:"Late In"},{text:"Gap In"},{text:"Out"},{text:"Start Out"},{text:"Ending Out"},{text:"Early Out"},{text:"Gap Out"},{text:"Absent In"},{text:"Absent Out"},{text:"Working Hrs"},{text:"OT Interval"},{text:"Actions"}],headers_table:[{text:"Name",align:"left",sortable:!0,key:"name",value:"name",filterable:!0,filterSpecial:!1},{text:"Shift Type",align:"left",sortable:!0,key:"shift_type_name",value:"shift_type.name",filterable:!0,filterSpecial:!1},{text:"In",align:"left",sortable:!0,key:"on_duty_time",value:"on_duty_time",filterable:!1,filterSpecial:!1},{text:"Start In",align:"left",sortable:!0,key:"beginning_in",value:"beginning_in",filterable:!1,filterSpecial:!1},{text:"Ending In",align:"left",sortable:!0,key:"ending_in",value:"ending_in",filterable:!1,filterSpecial:!1},{text:"Late In",align:"left",sortable:!0,key:"late_time",value:"late_time",filterable:!1,filterSpecial:!1},{text:"Gap In",align:"left",sortable:!0,key:"gap_in",value:"gap_in",filterable:!1,filterSpecial:!1},{text:"Out",align:"left",sortable:!0,key:"off_duty_time",value:"off_duty_time",filterable:!1,filterSpecial:!1},{text:"Start Out",align:"left",sortable:!0,key:"beginning_out",value:"beginning_out",filterable:!1,filterSpecial:!1},{text:"Ending Out",align:"left",sortable:!0,key:"ending_out",value:"ending_out",filterable:!1,filterSpecial:!1},{text:"Early Out",align:"left",sortable:!0,key:"early_time",value:"early_time",filterable:!1,filterSpecial:!1},{text:"Gap Out",align:"left",sortable:!0,key:"gap_out",value:"gap_out",filterable:!1,filterSpecial:!1},{text:"Absent In",align:"left",sortable:!0,key:"absent_min_in",value:"absent_min_in",filterable:!1,filterSpecial:!1},{text:"Absent Out",align:"left",sortable:!0,key:"absent_min_out",value:"absent_min_out",filterable:!1,filterSpecial:!1},{text:"Working Hrs",align:"left",sortable:!0,key:"working_hours",value:"working_hours",filterable:!1,filterSpecial:!1},{text:"OT Interval",align:"left",sortable:!0,key:"overtime_interval",value:"overtime_interval",filterable:!1,filterSpecial:!1},{text:"Actions",align:"left",sortable:!1,key:"actions",value:"actions"}],response:"",data:[],errors:[]}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0,this.getDataFromApi()},methods:{getShifts:function(){var t=this,e={per_page:1e3,company_id:this.$auth.user.company_id};this.$axios.get("shift",{params:e}).then((function(e){var data=e.data;t.shifts=data.data}))},toggleFilter:function(){this.isFilter=!this.isFilter},goToCreate:function(){this.$router.push("/shift/create")},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},getDataForToolTip:function(t){if(t&&!t.time_table)return{};var e=t.time_table;return{on_duty_time:e.on_duty_time||"---",off_duty_time:e.off_duty_time||"---",late_time:e.late_time||"---",early_time:e.early_time||"---",beginning_in:e.beginning_in||"---",ending_in:e.ending_in||"---",beginning_out:e.beginning_out||"---",ending_out:e.ending_out||"---",absent_min_in:e.absent_min_in||"---",absent_min_out:e.absent_min_out||"---"}},caps:function(t){return t.replace(/_/g," ").replace(/\b\w/g,(function(t){return t.toUpperCase()}))},can:function(t){var u=this.$auth.user;return u&&u.permissions.some((function(e){return e==t||"/"==t}))||u.is_master},getRecords:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.getDataFromApi(this.endpoint,t,e)},applyFilters:function(){this.getDataFromApi()},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.loading=!0;var o=this.options,l=o.sortBy,c=o.sortDesc,_=o.page,f=o.itemsPerPage,d={params:x({page:_,sortBy:l?l[0]:"",sortDesc:c?c[0]:"",per_page:f,company_id:this.$auth.user.company_id},this.filters)};""!=n&&(d.params[n]=r),this.$axios.get(e,d).then((function(e){var data=e.data;if(""!=n&&0==data.data.length)return t.snack=!0,t.snackColor="error",t.snackText="No Results Found",t.loading=!1,!1;t.totalRowsCount=data.total,t.data=data.data,t.total=data.total,t.loading=!1}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))},editItem:function(t){this.$router.push("/shift/".concat(t.id))},delteteSelectedRecords:function(){var t=this;confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:this.ids.map((function(t){return t.id}))}).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.ids=[],t.response="Selected records has been deleted"):t.errors=data.errors})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(t){var data=t.data;data.status?(e.getDataFromApi(),e.snackbar=data.status,e.response=data.message):e.errors=data.errors})).catch((function(t){return console.log(t)}))}}},S=O,w=n(61),component=Object(w.a)(S,(function(){var t=this,e=t._self._c;return t.can("shift_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(_.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),t.can("shift_view")?e(o.a,{attrs:{elevation:"0"}},[e(m.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(v.b,[e("span",[t._v(" "+t._s(t.Model)+" List")])]),t._v(" "),e(h.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),o),[e(c.a,{attrs:{color:"white",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-reload")])],1)]}}],null,!1,4201020735)},[t._v(" "),e("span",[t._v("Reload")])]),t._v(" "),e(h.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{"x-small":"",ripple:!1,text:""}},"v-btn",l,!1),o),[e(c.a,{attrs:{dark:"",white:""},on:{click:t.toggleFilter}},[t._v("mdi-filter")])],1)]}}],null,!1,1934498272)},[t._v(" "),e("span",[t._v("Filter")])]),t._v(" "),e(f.a),t._v(" "),e(h.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{dense:"","x-small":"",ripple:!1,text:""},on:{click:t.goToCreate}},"v-btn",l,!1),o),[e(c.a,{attrs:{color:"white",dark:""},on:{click:function(e){return t.getDataFromApi()}}},[t._v("mdi mdi-plus-circle")])],1)]}}],null,!1,251911001)},[t._v(" "),e("span",[t._v("Add New Shift Details")])])],1),t._v(" "),e(_.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e(r.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n      "+t._s(t.snackText)+"\n\n      ")]),t._v(" "),e(l.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"header",fn:function(n){var r=n.props.headers;return[t.isFilter?e("tr",t._l(r,(function(header){return e("td",{key:header.text},[header.filterable&&!header.filterSpecial?e(d.a,{attrs:{clearable:"","hide-details":!0,id:header.value,outlined:"",dense:"",autocomplete:"off"},on:{input:function(e){return t.applyFilters(header.key,e)}},model:{value:t.filters[header.key],callback:function(e){t.$set(t.filters,header.key,e)},expression:"filters[header.key]"}}):t._e()],1)})),0):t._e()]}},{key:"item.sno",fn:function(n){n.item;var r=n.index;return[e("b",[t._v(t._s(++r))])]}},{key:"item.name",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.name)+"\n      ")]}},{key:"item.shift_type.name",fn:function(e){var n=e.item;return[t._v(" "+t._s(n.shift_type.name)+"\n      ")]}},{key:"item.on_duty_time",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.on_duty_time)+"\n      ")]}},{key:"item.ending_in",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.ending_in)+"\n      ")]}},{key:"item.late_time",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.late_time)+"\n      ")]}},{key:"item.gap_in",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.gap_in)+"\n      ")]}},{key:"item.off_duty_time",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.off_duty_time)+"\n      ")]}},{key:"item.beginning_out",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.beginning_out)+"\n      ")]}},{key:"item.ending_out",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.ending_out)+"\n      ")]}},{key:"item.early_time",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.early_time)+"\n      ")]}},{key:"item.gap_out",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.gap_out)+"\n      ")]}},{key:"item.absent_min_in",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.absent_min_in)+"\n      ")]}},{key:"item.absent_min_out",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.absent_min_out)+"\n      ")]}},{key:"item.working_hours",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.working_hours)+"\n      ")]}},{key:"item.overtime_interval",fn:function(e){var n=e.item;return[t._v("\n        "+t._s(n.overtime_interval)+"\n      ")]}},{key:"item.actions",fn:function(n){var r=n.item;return[e(c.a,{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(e){return t.editItem(r)}}},[t._v("\n          mdi-pencil\n        ")]),t._v(" "),e(c.a,{attrs:{color:"error",small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v("\n          mdi-delete\n        ")])]}}],null,!1,3514462663)})],1):e("NoAccess")],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(851).default})},850:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));var r=n(95),o=n(0),l=Object(o.k)("v-toolbar__title"),c=Object(o.k)("v-toolbar__items");r.a},851:function(t,e,n){"use strict";n.r(e);var r=n(61),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);