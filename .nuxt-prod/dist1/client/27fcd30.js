(window.webpackJsonp=window.webpackJsonp||[]).push([[183,56],{1045:function(e,t,n){var content=n(1148);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("09f80c84",content,!0,{sourceMap:!1})},1147:function(e,t,n){"use strict";n(1045)},1148:function(e,t,n){var r=n(24)((function(i){return i[1]}));r.push([e.i,".circle-btn-grey[data-v-12812d7e]{border:1px solid grey;border-radius:50%}.circle-btn-green[data-v-12812d7e]{border:1px solid #5fafa3;border-radius:50%}table[data-v-12812d7e]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-12812d7e],th[data-v-12812d7e]{border:1px solid #ddd;padding:8px;text-align:left}tr[data-v-12812d7e]:nth-child(2n){background-color:#ddd}",""]),r.locals={},e.exports=r},1269:function(e,t,n){"use strict";n.r(t);var r=n(116),o=n(133),d=n(94),l=n(511),c=n(1220),v=n(349),m=n(115),_=n(327),h=n(208),f=n(26),x=n(835),y=n(333),k=n(510),I=n(846),w=n(348),D=n(95),z=n(850),C=n(829),T=(n(72),n(12),n(6),n(35),n(40)),S=(n(108),n(33),n(269),n(79),n(63),n(11),n(36),n(220),[{index:"0",name:"Monday",short_name:"M"},{index:"1",name:"Tuesday",short_name:"T"},{index:"2",name:"Wednesday",short_name:"W"},{index:"3",name:"Thursday",short_name:"TH"},{index:"4",name:"Friday",short_name:"F"},{index:"5",name:"Saturday",short_name:"SA"},{index:"6",name:"Sunday",short_name:"SU"}]),$={data:function(){return{snack:!1,snackColor:"",snackText:"",datatable_search_textbox:"",pagination:{current:1,total:0,per_page:100},loading_devicesync:!1,Module:"Timezone",options:{},endpoint:"timezone",search:"",snackbar:!1,dialog:!1,syncDeviceDialog:!1,loading:!1,loading_dialog:!1,isEdit:!1,total:0,response:"",data:[],dayBoxes:[],errors:[],days:S,editedItem:{timezone_id:"",timezone_name:"Timzone Name",interval:[{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}}]},defaultItem:{timezone_id:"",timezone_name:"Timzone Name",interval:[{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}},{interval1:{},interval2:{},interval3:{},interval4:{}}]},headers_table:[{text:"Timezone ID",align:"left",sortable:!0,key:"timezone_id",value:"timezone_id"},{text:"Timezone Name",align:"left",sortable:!0,key:"timezone_name",value:"timezone_name"},{text:"Days",align:"left",sortable:!1,key:"days",value:"days"},{text:"Actions",align:"left",sortable:!1,key:"menu",value:"menu"}],deviceResults:[],readOnly:!1,editedIndex:-1}},computed:{},watch:{dialog:function(e){e||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0},options_dialog:{handler:function(){this.getDataFromApiForDialog()},deep:!0},search:function(){this.pagination.current=1,this.searchIt()}},created:function(){this.loading=!0,this.loading_dialog=!0,this.options={params:{per_page:100,company_id:this.$auth.user.company_id}}},methods:{datatable_save:function(){},datatable_cancel:function(){this.datatable_search_textbox=""},datatable_open:function(){this.datatable_search_textbox=""},datatable_close:function(){this.loading=!1},onPageChange:function(){this.getDataFromApi()},addItem:function(){this.dialog=!0,this.readOnly=!1,this.editedIndex=-1,this.editedItem=this.defaultItem},viewItem:function(e){this.dialog=!0,this.readOnly=!0,this.editedIndex=this.data.indexOf(e),this.editedItem=Object.assign({},e)},editItem:function(e){this.dialog=!0,this.readOnly=!1,this.editedIndex=this.data.indexOf(e),this.editedItem=Object.assign({},e)},showShortDays:function(e){var t=[];for(var n in e)for(var r in e[n]){if(e[n][r].hasOwnProperty("begin")&&e[n][r].hasOwnProperty("end")){t.push({day:this.days[n].short_name,dayWeek:this.days[n].dayWeek,isScheduled:!0});break}t.push({day:this.days[n].short_name,dayWeek:this.days[n].dayWeek,isScheduled:!1});break}return t},caps:function(e){return""==e||null==e?"---":e.toString().replace(/\b\w/g,(function(e){return e.toUpperCase()}))},openDeviceDialog:function(){var e=this;return Object(T.a)(regeneratorRuntime.mark((function t(){var n,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.data.length){t.next=4;break}return e.snackbar=!0,e.response="No data found",t.abrupt("return");case 4:return e.syncDeviceDialog=!0,t.prev=5,"getDevicesCountForTimezone",t.next=9,e.$axios.post("getDevicesCountForTimezone",e.editedItem);case 9:n=t.sent,data=n.data,e.processTimeZone(data),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(5);case 16:case"end":return t.stop()}}),t,null,[[5,14]])})))()},processTimeZone:function(e){var t=this;this.deviceResults=[];var n={company_id:this.$auth.user.company_id},r=0;e.forEach(function(){var o=Object(T.a)(regeneratorRuntime.mark((function o(d){var l,c,data,v;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t.loading_devicesync=!0,l="".concat(d,"/WriteTimeGroup"),o.next=5,t.$axios.post(l,n);case 5:c=o.sent,data=c.data,v={DeviceID:d,message:'<span style="color:red">Device communication error</span>',status:!1},200==data.status?(v.message='<span style="color:green">Timezone data has been upload',v.status=!0,r++):r++,t.deviceResults.push(v),r==e.length&&(t.loading_devicesync=!1),o.next=15;break;case 13:o.prev=13,o.t0=o.catch(0);case 15:case"end":return o.stop()}}),o,null,[[0,13]])})));return function(e){return o.apply(this,arguments)}}())},close:function(){this.dialog=!1},can:function(e){var u=this.$auth.user;return u&&u.permissions.some((function(t){return t.name==e||"/"==e}))||u.is_master},getDataFromApi_DatatablFilter:function(e,t){this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t),e,t)},getDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.loading=!0;var o=this.pagination.current,d={params:{per_page:this.pagination.per_page,page:o,company_id:this.$auth.user.company_id}};""!=n&&(d.params.datatable_filter=!0,d.params[n]=r),this.$axios.get(t,d).then((function(t){var data=t.data;if(""!=n&&0==data.data.length)return e.snack=!0,e.snackColor="error",e.snackText="No Results Found",e.loading=!1,!1;e.data=data.data,e.pagination.current=data.current_page,e.pagination.total=data.last_page,e.loading=!1}))},searchIt:function(){var s=this.search.length,e=this.search;0==s?this.getDataFromApi():s>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(e))},setDefault:function(e){var t=this;1==e&&this.days.forEach((function(e,i){t.editedItem.interval[e.index].interval1.begin="00:00",t.editedItem.interval[e.index].interval1.end="23:59"})),64==e&&this.days.forEach((function(e,i){t.editedItem.interval[e.index].interval1.begin="00:00",t.editedItem.interval[e.index].interval1.end="00:00"}))},reset:function(){var e=this;this.days.forEach((function(t){for(var n=1;n<=4;n++)e.editedItem.interval[t.index]["interval".concat(n)]={},e.editedItem.interval[t.index]["interval".concat(n)]={}}))},submit:function(){var e=this.showShortDays(this.editedItem.interval);return this.editedItem.scheduled_days=e,this.editedItem.company_id=this.$auth.user.company_id,-1===this.editedIndex?this.store():this.update()},store:function(){var e=this;this.$axios.post("/".concat(this.endpoint),this.editedItem).then((function(t){var data=t.data;data.status?(e.snackbar=data.status,e.response=data.message,e.getDataFromApi()):e.errors=data.errors})).catch((function(e){}))},update:function(){var e=this;this.$axios.put("/".concat(this.endpoint,"/").concat(this.editedItem.id),this.editedItem).then((function(t){var data=t.data;data.status?(e.snackbar=data.status,e.response=data.message,e.getDataFromApi()):e.errors=data.errors})).catch((function(e){console.log(e.message)}))},deleteItem:function(e){var t=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete("".concat(this.endpoint,"/")+e.id).then((function(n){var data=n.data,r=t.data.indexOf(e);t.data.splice(r,1),t.snackbar=data.status,t.response=data.message,t.getDataFromApi()})).catch((function(e){return console.log(e)}))}}},A=$,F=(n(1147),n(61)),component=Object(F.a)(A,(function(){var e=this,t=e._self._c;return e.can("employee_schedule_access")?t("div",[t("div",{staticClass:"text-center ma-2"},[t(I.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(v.a,{attrs:{"max-width":"1100"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(o.a,[t(d.d,{staticClass:"primary white--text background",attrs:{dense:""}},[e._v("\n        "+e._s(e.Module)+"\n        "),t(w.a),e._v(" "),t(m.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(t){e.dialog=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(d.c,{staticClass:"mt-2"},[t(k.a,[t(l.a,[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.timezone_name,expression:"editedItem.timezone_name"}],staticClass:"form-control",staticStyle:{"padding-top":"8px"},domProps:{value:e.editedItem.timezone_name},on:{input:function(t){t.target.composing||e.$set(e.editedItem,"timezone_name",t.target.value)}}}),e._v(" "),e.errors.timezone_name&&e.errors.timezone_name[0]?t("span",{staticClass:"error--text"},[e._v("\n              "+e._s(e.errors.timezone_name[0])+"\n            ")]):e._e()]),e._v(" "),t(l.a,[t("select",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.timezone_id,expression:"editedItem.timezone_id"}],staticClass:"form-select",attrs:{"error-messages":e.errors.timezone_id&&e.errors.timezone_id[0]},on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.editedItem,"timezone_id",t.target.multiple?n:n[0])},function(t){return e.setDefault(e.editedItem.timezone_id)}]}},[t("option",{attrs:{disabled:"",selected:""}},[e._v("Timezone Id")]),e._v(" "),e._l(64,(function(n){return t("option",{key:n,domProps:{value:n}},[e._v("\n                Tz"+e._s(n)+"\n                "),1==n?t("span",[e._v("(24 Hrs)")]):e._e(),e._v(" "),64==n?t("span",[e._v("Lock Timezone")]):e._e()])}))],2),e._v(" "),e.errors.timezone_id&&e.errors.timezone_id[0]?t("span",{staticClass:"error--text"},[e._v("\n              "+e._s(e.errors.timezone_id[0])+"\n            ")]):e._e()])],1)],1),e._v(" "),t(d.c,[t("table",{staticStyle:{width:"100%"}},[t("thead",[t("tr",{staticClass:"background white--text",attrs:{dark:""}},[t("th",{staticClass:"text-center"},[e._v("Time")]),e._v(" "),e._l(4,(function(n){return t("th",{key:n,staticClass:"text-center",attrs:{colspan:"2",value:n}},[e._v("\n                Interval "+e._s(n)+"\n              ")])}))],2),e._v(" "),t("tr",[t("th",{staticClass:"text-center"},[e._v("Weekday")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("begin Time")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("End Time")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("begin Time")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("End Time")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("begin Time")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("End Time")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("begin Time")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("End Time")])])]),e._v(" "),t("tbody",e._l(e.days,(function(n,r){return t("tr",{key:r},[t("td",[e._v(e._s(n.name))]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.interval[n.index].interval1.begin,expression:"editedItem.interval[d.index]['interval1']['begin']"}],attrs:{type:"time"},domProps:{value:e.editedItem.interval[n.index].interval1.begin},on:{input:function(t){t.target.composing||e.$set(e.editedItem.interval[n.index].interval1,"begin",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.interval[n.index].interval1.end,expression:"editedItem.interval[d.index]['interval1']['end']"}],attrs:{type:"time"},domProps:{value:e.editedItem.interval[n.index].interval1.end},on:{input:function(t){t.target.composing||e.$set(e.editedItem.interval[n.index].interval1,"end",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.interval[n.index].interval2.begin,expression:"editedItem.interval[d.index]['interval2']['begin']"}],attrs:{type:"time"},domProps:{value:e.editedItem.interval[n.index].interval2.begin},on:{input:function(t){t.target.composing||e.$set(e.editedItem.interval[n.index].interval2,"begin",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.interval[n.index].interval2.end,expression:"editedItem.interval[d.index]['interval2']['end']"}],attrs:{type:"time"},domProps:{value:e.editedItem.interval[n.index].interval2.end},on:{input:function(t){t.target.composing||e.$set(e.editedItem.interval[n.index].interval2,"end",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.interval[n.index].interval3.begin,expression:"editedItem.interval[d.index]['interval3']['begin']"}],attrs:{type:"time"},domProps:{value:e.editedItem.interval[n.index].interval3.begin},on:{input:function(t){t.target.composing||e.$set(e.editedItem.interval[n.index].interval3,"begin",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.interval[n.index].interval3.end,expression:"editedItem.interval[d.index]['interval3']['end']"}],attrs:{type:"time"},domProps:{value:e.editedItem.interval[n.index].interval3.end},on:{input:function(t){t.target.composing||e.$set(e.editedItem.interval[n.index].interval3,"end",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.interval[n.index].interval4.begin,expression:"editedItem.interval[d.index]['interval4']['begin']"}],attrs:{type:"time"},domProps:{value:e.editedItem.interval[n.index].interval4.begin},on:{input:function(t){t.target.composing||e.$set(e.editedItem.interval[n.index].interval4,"begin",t.target.value)}}})]),e._v(" "),t("td",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.editedItem.interval[n.index].interval4.end,expression:"editedItem.interval[d.index]['interval4']['end']"}],attrs:{type:"time"},domProps:{value:e.editedItem.interval[n.index].interval4.end},on:{input:function(t){t.target.composing||e.$set(e.editedItem.interval[n.index].interval4,"end",t.target.value)}}})])])})),0)])]),e._v(" "),e.readOnly?e._e():t(d.a,[t(r.a,{attrs:{small:"",color:"background white--text"},on:{click:e.reset}},[e._v("Reset")]),e._v(" "),t(w.a),e._v(" "),t(r.a,{attrs:{small:"",color:"primary"},on:{click:e.submit}},[e._v("Submit")])],1)],1)],1),e._v(" "),t(v.a,{attrs:{"max-width":"1100"},model:{value:e.syncDeviceDialog,callback:function(t){e.syncDeviceDialog=t},expression:"syncDeviceDialog"}},[t(o.a,[t(d.d,{staticClass:"primary white--text background",attrs:{dense:""}},[e._v("\n        Sync Device\n        "),t(w.a),e._v(" "),t(m.a,{attrs:{outlined:"",dark:"",color:"white"},on:{click:function(t){e.syncDeviceDialog=!1}}},[e._v("\n          mdi mdi-close-circle\n        ")])],1),e._v(" "),t(d.c,[e.loading_devicesync?t(y.a,{attrs:{active:e.loading_devicesync,indeterminate:e.loading_devicesync,absolute:"",color:"primary"}}):e._e(),e._v(" "),t("table",{staticClass:"mt-2",staticStyle:{width:"100%"}},[t("thead",[t("tr",{staticClass:"background white--text",attrs:{dark:""}},[t("th",{staticStyle:{width:"20%"}},[e._v("Device ID")]),e._v(" "),t("th",{staticStyle:{width:"70%"}},[e._v("Message")]),e._v(" "),t("th",{staticClass:"text-center"},[e._v("Status")])])]),e._v(" "),t("tbody",e._l(e.deviceResults,(function(n,r){return t("tr",{key:r},[t("td",[e._v(e._s(n.DeviceID))]),e._v(" "),t("td",{domProps:{innerHTML:e._s(n.message)}}),e._v(" "),t("td",{staticClass:"text-center"},[n.status?t(m.a,{attrs:{color:"primary"}},[e._v("mdi-check")]):t(m.a,{attrs:{color:"error"}},[e._v("mdi-close")])],1)])})),0)])],1)],1)],1),e._v(" "),t(o.a,[t(D.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[t(z.b,[t("span",[e._v(" Timezones List")])]),e._v(" "),t(C.a,{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,d=n.attrs;return[t(r.a,e._g(e._b({staticClass:"ma-0 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",d,!1),o),[t(m.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(t){return e.getDataFromApi()}}},[e._v("mdi mdi-reload")])],1)]}}],null,!1,1377685765)},[e._v(" "),t("span",[e._v("Reload")])]),e._v(" "),t(w.a),e._v(" "),t(C.a,{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,d=n.attrs;return[t(r.a,e._g(e._b({attrs:{"x-small":"",ripple:!1,text:""},on:{click:e.openDeviceDialog}},"v-btn",d,!1),o),[t(m.a,{attrs:{dark:"",white:""}},[e._v("mdi-laptop")])],1)]}}],null,!1,1647404928)},[e._v(" "),t("span",[e._v("Sync To Devices")])]),e._v(" "),t(C.a,{attrs:{top:"",color:"primary"},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,d=n.attrs;return[t(r.a,e._g(e._b({attrs:{"x-small":"",ripple:!1,text:""},on:{click:e.addItem}},"v-btn",d,!1),o),[t(m.a,{attrs:{dark:"",white:""}},[e._v("mdi-plus-circle")])],1)]}}],null,!1,330188835)},[e._v(" "),t("span",[e._v("Add New Timezone")])])],1),e._v(" "),t(I.a,{attrs:{timeout:3e3,color:e.snackColor},scopedSlots:e._u([{key:"action",fn:function(n){var o=n.attrs;return[t(r.a,e._b({attrs:{text:""},on:{click:function(t){e.snack=!1}}},"v-btn",o,!1),[e._v(" Close ")])]}}],null,!1,3090489768),model:{value:e.snack,callback:function(t){e.snack=t},expression:"snack"}},[e._v("\n      "+e._s(e.snackText)+"\n\n      ")]),e._v(" "),t(c.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.headers_table,items:e.data,"model-value":"data.id",loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[100,500,1e3]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.timezone_id",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(n.timezone_id)+"\n      ")]}},{key:"item.timezone_name",fn:function(t){var n=t.item;return[e._v("\n        "+e._s(n.timezone_name)+"\n      ")]}},{key:"item.days",fn:function(n){var o=n.item;return e._l(o.scheduled_days,(function(n,o){var d=n.day,l=n.isScheduled;return t(r.a,{key:o,staticClass:"mx-1",class:l?"circle-btn-green":"circle-btn-grey",staticStyle:{cursor:"text"},attrs:{fab:"",small:""}},[t("span",{class:l?"primary--text":"grey--text"},[e._v(e._s(d))])])}))}},{key:"item.menu",fn:function(n){var o=n.item;return[t(x.a,{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,d=n.attrs;return[t(r.a,e._g(e._b({attrs:{"dark-2":"",icon:""}},"v-btn",d,!1),o),[t(m.a,[e._v("mdi-dots-vertical")])],1)]}}],null,!0)},[e._v(" "),t(_.a,{attrs:{width:"120",dense:""}},[t(h.a,{on:{click:function(t){return e.viewItem(o)}}},[t(f.c,{staticStyle:{cursor:"pointer"}},[t(m.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-eye ")]),e._v("\n                View\n              ")],1)],1),e._v(" "),t(h.a,{on:{click:function(t){return e.editItem(o)}}},[t(f.c,{staticStyle:{cursor:"pointer"}},[t(m.a,{attrs:{color:"secondary",small:""}},[e._v(" mdi-pencil ")]),e._v("\n                Edit\n              ")],1)],1),e._v(" "),t(h.a,{on:{click:function(t){return e.deleteItem(o)}}},[t(f.c,{staticStyle:{cursor:"pointer"}},[t(m.a,{attrs:{color:"error",small:""}},[e._v(" mdi-delete ")]),e._v("\n                Delete\n              ")],1)],1)],1)],1)]}}],null,!1,2051190160)})],1)],1):t("NoAccess")}),[],!1,null,"12812d7e",null);t.default=component.exports;installComponents(component,{NoAccess:n(851).default})},850:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(95),o=n(0),d=Object(o.k)("v-toolbar__title"),l=Object(o.k)("v-toolbar__items");r.a},851:function(e,t,n){"use strict";n.r(t);var r=n(61),component=Object(r.a)({},(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[e("b",[this._v("No Access")])])}],!1,null,null,null);t.default=component.exports}}]);