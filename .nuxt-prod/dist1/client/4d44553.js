(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1331:function(e,t,n){"use strict";n.r(t);var o=n(116),l=n(511),r=n(1220),m=n(510),d=n(95),c=(n(35),n(6),n(1191)),_={components:{DataTable:n.n(c).a},data:function(){return{loading:!1,employee_data:[],options:[],name:"fahath",endpointUpdatetimezonelist:"employee_timezone_mapping",Model:"Timezone Mapping  ",response:"",tableData:[],tableColumns:[],Timezone:"",timeZoneName:"",devices_headers:[{text:"#",align:"left",sortable:!1,key:"sno",value:"sno"},{text:"Device Name",align:"left",sortable:!0,key:"name",value:"name"},{text:"Device Name",align:"left",sortable:!0,key:"device_id",value:"device_id"},{text:"Device Location",align:"left",sortable:!0,key:"location",value:"location"}],employee_headers:[{text:"#",align:"left",sortable:!1,key:"sno",value:"sno"},{text:"Employee Name",align:"left",sortable:!0,key:"display_name",value:"display_name"},{text:"Employee ID",align:"left",sortable:!0,key:"employee_id",value:"employee_id"}]}},computed:{},created:function(){},mounted:function(){this.Timezone=this.$route.params.id,this.$nextTick((function(){var e=this,t={params:{per_page:1e3,company_id:this.$auth.user.company_id,id:this.$route.params.id,cols:["id","employee_id","display_name"]}},n=this.$axios.defaults.baseURL+"/employee_timezone_mapping/"+this.$route.params.id;this.$axios.get("".concat(n),t).then((function(t){var data=t.data;e.deviceTableContent(data.device_id),e.employeeTableContent(data.employee_id),e.timeZoneName=data.timezone.timezone_name}))}))},methods:{goToBackpage:function(){this.$router.push("/timezonemapping/list")},deviceTableContent:function(e){return this.device_data=e,!1},employeeTableContent:function(e){return this.employee_data=e,!1},handleAction:function(e,data){},can:function(e){var u=this.$auth.user;return u&&u.permissions.some((function(t){return t.name==e||"/"==e}))||u.is_master}}},v=n(61),component=Object(v.a)(_,(function(){var e=this,t=e._self._c;return e.can("employee_access")?t("div",[t(m.a,{staticClass:"mt-5 mb-5"},[t(l.a,{attrs:{cols:"8"}},[t("h3",[e._v(e._s(e.Model)+" : "+e._s(e.timeZoneName))]),e._v(" "),t("div",[e._v("Dashboard / "+e._s(e.Model))])]),e._v(" "),t(l.a,{staticClass:"text-right",attrs:{cols:"4"}},[t(o.a,{staticClass:"primary pt-4 pb-4",attrs:{small:"",dark:""},on:{click:function(t){return e.goToBackpage()}}},[e._v("Back\n      ")])],1),e._v(" "),t(l.a,{attrs:{cols:"6"}},[t(d.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[t("span",[e._v(" Devices List")])]),e._v(" "),t(r.a,{staticClass:"elevation-1",attrs:{dense:"",headers:e.devices_headers,items:e.device_data,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.sno",fn:function(n){n.item;var o=n.index;return[t("b",[e._v(e._s(++o))])]}},{key:"item.name",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.name)+"\n\n        ")]}},{key:"item.device_id",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.device_id)+"\n\n        ")]}},{key:"item.location",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.location)+"\n\n        ")]}}],null,!1,2620731147)})],1),e._v(" "),t(l.a,{attrs:{cols:"6"}},[t(d.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[t("span",[e._v(" Employees List")])]),e._v(" "),t(r.a,{staticClass:"elevation-1",attrs:{headers:e.employee_headers,items:e.employee_data,loading:e.loading,options:e.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(t){e.options=t}},scopedSlots:e._u([{key:"item.sno",fn:function(n){n.item;var o=n.index;return[t("b",[e._v(e._s(++o))])]}},{key:"item.display_name",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.display_name)+"\n\n        ")]}},{key:"item.employee_id",fn:function(t){var n=t.item;return[e._v("\n          "+e._s(n.employee_id)+"\n\n        ")]}}],null,!1,3962174207)})],1)],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);