(window.webpackJsonp=window.webpackJsonp||[]).push([[123,56],{1288:function(t,e,o){"use strict";o.r(e);var n=o(116),r=o(133),l=o(511),c=o(1220),d=o(1221),_=o(115),m=o(835),f=o(510),v=o(846),h=o(218),y=o(95),k=o(850),O=o(829),x=(o(35),o(3));o(882),o(6),o(79),o(36),o(14),o(13),o(12),o(17),o(11),o(18);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function D(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={layout:"employee",data:function(){var t;return t={totalRowsCount:0,showFilters:!1,filters:{},isFilter:!1,datatable_search_textbox:"",datatable_searchById:"",filter_employeeid:"",snack:!1,snackColor:"",snackText:"",Model:"Log",endpoint:"attendance_logs",from_date:null,from_menu:!1,to_date:null,to_menu:!1,payload:{},loading:!0,date:null,menu:!1},Object(x.a)(t,"loading",!1),Object(x.a)(t,"time_menu",!1),Object(x.a)(t,"log_payload",{user_id:41,device_id:"",date:null,time:null}),Object(x.a)(t,"ids",[]),Object(x.a)(t,"data",[]),Object(x.a)(t,"devices",[]),Object(x.a)(t,"total",0),Object(x.a)(t,"options",{}),Object(x.a)(t,"payloadOptions",{}),Object(x.a)(t,"errors",[]),Object(x.a)(t,"response",""),Object(x.a)(t,"snackbar",!1),Object(x.a)(t,"headers_table",[{text:"Log Time",align:"left",sortable:!0,key:"LogTime",value:"LogTime"},Object(x.a)({text:"Device Name",align:"left",sortable:!0,value:"devicename"},"value","device.device_name"),{text:"Device Location",align:"left",sortable:!0,key:"deviceid",value:"device.location"}]),t},created:function(){this.firstLoad()},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{firstLoad:function(){this.payload.from_date=this.getDate(),this.payload.to_date=this.getDate(),this.payload.from_date_txt=this.getDate(),this.payload.to_date_txt=this.getDate(),this.payload.UserID=this.$auth.user.employee.system_user_id,this.getDataFromApi()},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},getDate:function(){var t=new Date,e=t.getFullYear(),o=(t.getMonth()+1).toString().padStart(2,"0"),n=t.getDate().toString().padStart(2,"0");return"".concat(e,"-").concat(o,"-").concat(n)},can:function(t){var u=this.$auth.user;return u&&u.permissions.some((function(e){return e==t||"/"==t}))||u.is_master},getRecords:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""!=e&&e.length<=2)return this.snack=!0,this.snackColor="error",this.snackText="Minimum 3 Characters to filter ",this.loading=!1,!1;this.getDataFromApi(this.endpoint,t,e)},applyFilters:function(){this.getDataFromApi()},toggleFilter:function(){this.isFilter=!this.isFilter},clearFilters:function(){this.filters={},this.isFilter=!1,this.getDataFromApi()},getDataFromApi:function(){var t,e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=this.options,c=l.sortBy,d=l.sortDesc,_=l.page,m=l.itemsPerPage,f=c?c[0]:"",v=d?d[0]:"";this.payloadOptions={params:D(D((t={page:_,sortBy:f,sortDesc:v,per_page:m},Object(x.a)(t,"per_page",this.options.itemsPerPage),Object(x.a)(t,"company_id",this.$auth.user.company_id),t),this.payload),this.filters)},""!=n&&(this.payloadOptions.params[n]=r),this.loading=!0,this.$axios.get("".concat(o,"?page=").concat(this.options.page),this.payloadOptions).then((function(t){var data=t.data;if(""!=n&&0==data.data.length)return e.snack=!0,e.snackColor="error",e.snackText="No Results Found",e.loading=!1,!1;e.data=data.data,e.total=data.total,e.loading=!1,e.totalRowsCount=data.total}))},searchIt:function(){return this.payload.from_date_txt=this.payload.from_date,this.payload.to_date_txt=this.payload.to_date,this.getDataFromApi(),this.from_menu=!1,this.to_menu=!1,!1}}},C=w,F=o(61),component=Object(F.a)(C,(function(){var t=this,e=t._self._c;return t.can("logs_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(v.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(f.a,{staticClass:"pt-2 mt-5"},[e(l.a,{attrs:{cols:"12",sm:"8",md:"2"}},[e(m.a,{ref:"from_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,r=o.attrs;return[e("div",{staticClass:"mb-1"},[t._v("From Date")]),t._v(" "),e(h.a,t._g(t._b({attrs:{"hide-details":!t.payload.from_date,outlined:"",dense:"",readonly:"",placeholder:"Date"},model:{value:t.payload.from_date_txt,callback:function(e){t.$set(t.payload,"from_date_txt",e)},expression:"payload.from_date_txt"}},"v-text-field",r,!1),n))]}}],null,!1,1187126813),model:{value:t.from_menu,callback:function(e){t.from_menu=e},expression:"from_menu"}},[t._v(" "),e(d.a,{attrs:{"no-title":"",scrollable:""},on:{change:t.searchIt},model:{value:t.payload.from_date,callback:function(e){t.$set(t.payload,"from_date",e)},expression:"payload.from_date"}})],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12",sm:"8",md:"2"}},[e("div",{staticClass:"mb-1"},[t._v("To Date")]),t._v(" "),e(m.a,{ref:"to_menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(o){var n=o.on,r=o.attrs;return[e(h.a,t._g(t._b({attrs:{"hide-details":!t.payload.to_date,outlined:"",dense:"",readonly:"",placeholder:"Date"},model:{value:t.payload.to_date_txt,callback:function(e){t.$set(t.payload,"to_date_txt",e)},expression:"payload.to_date_txt"}},"v-text-field",r,!1),n))]}}],null,!1,3679276102),model:{value:t.to_menu,callback:function(e){t.to_menu=e},expression:"to_menu"}},[t._v(" "),e(d.a,{attrs:{"no-title":"",scrollable:""},on:{change:t.searchIt},model:{value:t.payload.to_date,callback:function(e){t.$set(t.payload,"to_date",e)},expression:"payload.to_date"}})],1)],1)],1),t._v(" "),e(f.a,[e(l.a,[e(r.a,{staticClass:"mb-5",attrs:{elevation:"0"}},[e(y.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(k.b,[e("span",[t._v(" Attendances Logs")])]),t._v(" "),e(O.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,l=o.attrs;return[e(n.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(_.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.firstLoad()}}},[t._v("mdi mdi-reload")])],1)]}}],null,!1,1608989521)},[t._v(" "),e("span",[t._v("Reload")])])],1),t._v(" "),e(v.a,{attrs:{timeout:3e3,color:t.snackColor},scopedSlots:t._u([{key:"action",fn:function(o){var r=o.attrs;return[e(n.a,t._b({attrs:{text:""},on:{click:function(e){t.snack=!1}}},"v-btn",r,!1),[t._v(" Close ")])]}}],null,!1,3090489768),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[t._v("\n          "+t._s(t.snackText)+"\n\n          ")]),t._v(" "),e(c.a,{staticClass:"elevation-1",attrs:{dense:"",headers:t.headers_table,items:t.data,"model-value":"data.id",loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[10,50,100,500,1e3]},"server-items-length":t.totalRowsCount},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.UserID",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.UserID)+"\n          ")]}},{key:"item.LogTime",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.LogTime)+"\n          ")]}},{key:"item.device.device_name",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.device?o.device.name:"---")+"\n          ")]}},{key:"item.device.location",fn:function(e){var o=e.item;return[t._v("\n            "+t._s(o.device?o.device.location:"---")+"\n          ")]}}],null,!1,1629686638)})],1)],1)],1)],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:o(851).default})},850:function(t,e,o){"use strict";o.d(e,"a",(function(){return c})),o.d(e,"b",(function(){return l}));var n=o(95),r=o(0),l=Object(r.k)("v-toolbar__title"),c=Object(r.k)("v-toolbar__items");n.a},851:function(t,e,o){"use strict";o.r(e);var n=o(61),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);