(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{1300:function(e,t,n){"use strict";n.r(t);var o=n(133),r=n(94),l=n(512),c=n(511),d=n(115),m=n(510),h=n(860),v=n(846),f=n(95),_=(n(35),n(57),n(36),n(12),n(6),n(72),n(219),n(220),n(11),n(107),n(353),{data:function(){return{displaybutton:!0,progressloading:!1,searchInput:"",snackbar:{message:"",color:"black",show:!0},errors:[],response:"",color:"primary",loading:!0,endpointEmployee:"get_employeeswith_timezonename",endpointUpdatetimezoneStore:"employee_timezone_mapping",endpointDevise:"device",endPointMapping:"employee_timezone_mapping",leftSelectedEmp:[],departmentSelected:[],departments:[],leftEmployees:[],rightSelectedEmp:[],rightEmployees:[],leftSelectedDevices:[],leftDevices:[],rightSelectedDevices:[],rightDevices:[],department_ids:["---"],timezones:["Timeszones are not available"],timezonesselected:parseInt(this.$route.query.id),options:{params:{company_id:this.$auth.user.company_id,cols:["id","name"]}},mappingtId:"",timezone_id:""}},mounted:function(){var e=this;this.snackbar.show=!0,this.snackbar.message="Data loading...Please wait ",this.response="Data loading...Please wait ",this.$nextTick((function(){var e=this;setTimeout((function(){e.getMappeddatafromAPI()}),2e3)})),setTimeout((function(){e.loading=!1}),2e3)},created:function(){this.getDepartmentsApi(this.options),this.getDevisesDataFromApi(),this.getEmployeesDataFromApi(),this.getTimezonesFromApi()},methods:{verifySubmitButton:function(){this.rightEmployees.length>0&&this.rightDevices.length>0?this.displaybutton=!0:this.displaybutton=!1},fetch_logs:function(){},getMappeddatafromAPI:function(){var e=this;this.mappingtId=this.$route.query.id;var t=this.endPointMapping,n={params:{per_page:1e3,company_id:this.$auth.user.company_id}};this.$axios.get("".concat(t,"/").concat(this.mappingtId),n).then((function(t){var data=t.data;e.rightEmployees=data.employee_id;e.$axios.get("get_employeeswith_timezonename_id/".concat(data.timezone_id),n).then((function(t){var data=t.data;e.rightEmployees=data.data})),e.rightDevices=data.device_id,e.timezonesselected=parseInt(data.timezone_id),e.rightEmployees.map((function(e){return{id:e.id}})).filter((function(t){var n=e.leftEmployees.findIndex((function(e){return t.id==e.id}));e.leftEmployees.splice(n,1)})),e.rightDevices.map((function(e){return{id:e.id}})).filter((function(t){var n=e.leftDevices.findIndex((function(e){return t.id==e.id}));e.leftDevices.splice(n,1)}))}))},loadDepartmentemployees:function(){var e=this,t=this.endpointEmployee,n={params:{per_page:1e3,company_id:this.$auth.user.company_id,department_id:this.departmentSelected,cols:["id","employee_id","display_name"]}};this.$axios.get("".concat(t,"?page=").concat(1),n).then((function(t){var data=t.data;e.leftEmployees=[],e.leftEmployees=data.data,e.leftSelectedEmp=[],e.rightEmployees=[],e.rightSelectedEmp=[]}),1e3)},getDepartmentsApi:function(e){var t=this;this.$axios.get("departments",e).then((function(e){var data=e.data;t.departments=data.data,t.departments.unshift({id:"---",name:"All Departments"})})).catch((function(e){return console.log(e)}))},getTimezonesFromApi:function(){var e=this,t={params:{per_page:1e3,company_id:this.$auth.user.company_id}};this.$axios.get("timezone",t).then((function(n){var data=n.data;e.timezones=data.data,e.timezonesselected=parseInt(e.$route.query.id),console.log(e.timezones),console.log(e.timezonesselected),e.$axios.get("employee_timezone_mapping",t).then((function(t){var data=t.data;console.log(data),data.data.forEach((function(element){var t=e.timezones.findIndex((function(e){return e.timezone_id==element.timezone_id}));t>=0&&element.id!=e.timezonesselected&&e.timezones.splice(t,1)}))}))})).catch((function(e){return console.log(e)}))},resetErrorMessages:function(){this.errors=[],this.response="",$.extend(this.leftEmployees,{sdkEmpResponse:""}),$.extend(this.leftDevices,{sdkDeviceResponse:""})},onSubmit:function(){var e=this;if(this.resetErrorMessages(),""==this.timezonesselected?this.response=this.response+"Timezones not selected":0==this.rightEmployees.length?this.response=this.response+" Atleast select one Employee Details":0==this.rightDevices.length&&(this.response=this.response+" Atleast select one Device Details"),""!=this.response)return this.snackbar.show=!0,this.snackbar.message=this.response,this.snackbar.color="red",setTimeout((function(){e.snackbar.show=!1}),1e4),!1;this.loading=!0;var t=["system_user_id"],n=[];this.rightEmployees.map((function(e){var o={};return t.forEach((function(t){e.hasOwnProperty(t)&&(o=e[t],n.push(o))})),o})),t=["device_id"];var o=[];this.rightDevices.map((function(e){var n={};return t.forEach((function(t){e.hasOwnProperty(t)&&(n=e[t],o.push(n))})),n}));var r={timezone_id:this.timezonesselected,employee_id:this.rightEmployees,device_id:this.rightDevices,company_id:this.$auth.user.company_id,employee_ids:n,device_ids:o},l=this.endpointUpdatetimezoneStore;this.progressloading=!0;var c=this.rightEmployees,d=!0,m=this.$route.query.id;this.$axios.put("".concat(l,"/").concat(m),r).then((function(t){var data=t.data;if(!data.record.SDKResponse)return e.errors=[],e.progressloading=!1,e.errors.message="Device Communication is not available",e.snackbar.show=!0,e.snackbar.message="Device Communication is not available ",e.response="Device Communication is not available ",!1;e.loading=!1,$.each(e.rightDevices,(function(e,t){var n=data.record.SDKResponse.data.find((function(e){return e.sn==t.device_id})),o="",r="";if(""==n.message)o="Success";else if("The device was not found"==n.message)o="The device was not found or offline",d=!1;else if("person info error"==n.message){var l=n.userList;c.forEach((function(element){element.sdkEmpResponse="Success";var e=element.system_user_id;d=!1;var t=l.find((function(t){return t.userCode==e}));r=n.sdkEmpResponse,o="",""!=r&&(element.sdkEmpResponse=t?"person photo error ":"Success")}))}t.sdkDeviceResponse=""!=o?o:" Success",this.errors=[]})),e.rightEmployees=c,e.progressloading=!1,e.loading=!1,d?e.$router.push("/timezonemapping/list"):(e.errors=data.errors,e.errors=[],e.errors.message="Device/Employee Error:   Device and Employee details are Mapped. You can add/remove items from Edit list ")}))},goback:function(){this.$router.push("/timezonemapping/list")},getDevisesDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpointDevise,n={params:{per_page:1e3,company_id:this.$auth.user.company_id}};this.$axios.get("".concat(t,"?page=").concat(1),n).then((function(t){var data=t.data;e.leftDevices=data.data}))},getEmployeesDataFromApi:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpointEmployee,n={params:{per_page:1e3,company_id:this.$auth.user.company_id,cols:["id","employee_id","display_name","first_name","last_name"]}};this.$axios.get("".concat(t,"?page=").concat(1),n).then((function(t){var data=t.data;e.leftEmployees=data.data}),1e3)},sortObject:function(e){return e.sort((function(a,b){if(a.first_name&&b.first_name){var e=a.first_name.toUpperCase(),t=b.first_name.toUpperCase();return e<t?-1:e>t?1:0}}))},sortObjectD:function(e){return e.sort((function(a,b){if(a.device_id&&b.device_id){var e=a.device_id.toUpperCase(),t=b.device_id.toUpperCase();return e<t?-1:e>t?1:0}return 0}))},sortObjectC:function(e){return e.sort((function(a,b){if(a.name&&b.name){var e=a.name.toUpperCase(),t=b.name.toUpperCase();return e<t?-1:e>t?1:0}}))},allmoveToLeftemp:function(){this.resetErrorMessages(),this.leftEmployees=this.leftEmployees.concat(this.rightEmployees),this.rightEmployees=[],this.leftEmployees=this.sortObject(this.leftEmployees),this.verifySubmitButton()},allmoveToRightEmp:function(){var e=this;this.resetErrorMessages(),this.rightEmployees=this.rightEmployees.concat(this.leftEmployees.filter((function(e){return"---"==e.timezone.timezone_name||1==e.timezone.timezone_id}))),this.leftEmployees=this.leftEmployees.filter((function(t){return 1!=t.timezone.timezone_id&&t.timezone.timezone_id!=e.timezonesselected})),this.rightEmployees=this.sortObject(this.rightEmployees),this.verifySubmitButton()},moveToLeftempOption2:function(){var e=this;if(this.resetErrorMessages(),this.rightSelectedEmp.length){for(var t=this.rightSelectedEmp.length,n=function(i){if(e.rightSelectedEmp){var t=e.rightEmployees.findIndex((function(t){return t.id==e.rightSelectedEmp[i]})),n=e.rightEmployees.find((function(t){return t.id==e.rightSelectedEmp[i]}));n.sdkEmpResponse="",e.leftEmployees.push(n),e.rightEmployees.splice(t,1)}},i=0;i<t;i++)n(i);this.leftEmployees=this.sortObject(this.leftEmployees);for(var o=0;o<t;o++)this.rightSelectedEmp.pop(this.rightSelectedEmp[o]);this.verifySubmitButton()}},moveToRightEmpOption2:function(){var e=this;if(this.resetErrorMessages(),this.leftSelectedEmp.length){for(var t=this.leftSelectedEmp.length,n=function(i){if(e.leftSelectedEmp){var t=e.leftEmployees.findIndex((function(t){return t.id==e.leftSelectedEmp[i]})),n=e.leftEmployees.find((function(t){return t.id==e.leftSelectedEmp[i]}));e.rightEmployees.push(n),e.leftEmployees.splice(t,1)}},i=0;i<t;i++)n(i);this.rightEmployees=this.sortObject(this.rightEmployees);for(var o=0;o<t;o++)this.leftSelectedEmp.pop(this.leftSelectedEmp[o]);this.verifySubmitButton()}},allmoveToLeftDevices:function(){this.resetErrorMessages(),this.leftDevices=this.leftDevices.concat(this.rightDevices),this.rightDevices=[],this.leftDevices=this.sortObjectD(this.leftDevices),this.verifySubmitButton()},allmoveToRightDevices:function(){this.resetErrorMessages(),this.rightDevices=this.rightDevices.concat(this.leftDevices.filter((function(e){return"active"==e.status.name}))),this.leftDevices=this.leftDevices.filter((function(e){return"inactive"==e.status.name})),this.rightDevices=this.sortObjectD(this.rightDevices),this.verifySubmitButton()},moveToLeftDevicesOption2:function(){var e=this;if(this.resetErrorMessages(),this.rightSelectedDevices.length){for(var t=this.rightSelectedDevices.length,n=function(i){if(e.rightSelectedDevices){var t=e.rightDevices.findIndex((function(t){return t.id==e.rightSelectedDevices[i]})),n=e.rightDevices.find((function(t){return t.id==e.rightSelectedDevices[i]}));e.leftDevices.push(n),e.rightDevices.splice(t,1)}},i=0;i<t;i++)n(i);this.leftDevices=this.sortObjectD(this.leftDevices);for(var o=0;o<t;o++)this.rightSelectedDevices.pop(this.rightSelectedDevices[o]);this.verifySubmitButton()}},moveToRightDevicesOption2:function(){var e=this;if(this.resetErrorMessages(),this.leftSelectedDevices.length){for(var t=this.leftSelectedDevices.length,n=function(i){if(e.leftSelectedDevices){var t=e.leftDevices.findIndex((function(t){return t.id==e.leftSelectedDevices[i]})),n=e.leftDevices.find((function(t){return t.id==e.leftSelectedDevices[i]}));e.rightDevices.push(n),e.leftDevices.splice(t,1)}},i=0;i<t;i++)n(i);this.rightDevices=this.sortObjectD(this.rightDevices);for(var o=0;o<t;o++)this.leftSelectedDevices.pop(this.leftSelectedDevices[o]);this.verifySubmitButton()}}}}),y=_,D=n(61),component=Object(D.a)(y,(function(){var e=this,t=e._self._c;return t("div",{staticStyle:{width:"100% !important"}},[t("div",[t(m.a,[t("div",{staticClass:"text-center ma-2"},[t(v.a,{attrs:{color:e.snackbar.color,small:"",top:"top",timeout:3e3},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v("\n          "+e._s(e.response)+"\n        ")])],1)]),e._v(" "),t(m.a,[t(c.a,{attrs:{cols:"4"}},[t(h.a,{attrs:{items:e.departments,dense:"",outlined:"","item-value":"id","item-text":"name","hide-details":"",label:"Department","search-input":e.searchInput},on:{change:e.loadDepartmentemployees,"update:searchInput":function(t){e.searchInput=t},"update:search-input":function(t){e.searchInput=t}},model:{value:e.departmentSelected,callback:function(t){e.departmentSelected=t},expression:"departmentSelected"}})],1),e._v(" "),t(c.a,{attrs:{cols:"4"}},[t(h.a,{attrs:{items:e.timezones,dense:"",outlined:"","item-value":"timezone_id","item-text":"timezone_name","hide-details":"",label:"Timezones",required:""},model:{value:e.timezonesselected,callback:function(t){e.timezonesselected=t},expression:"timezonesselected"}})],1),e._v(" "),t(c.a,{attrs:{cols:"4"}},[t("div",{staticStyle:{width:"150px",float:"right"}},[t("button",{staticClass:"btn primary btn-block white--text v-size--default",attrs:{type:"button",id:"back"},on:{click:function(t){return e.goback()}}},[t(d.a,{attrs:{color:"white"}},[e._v("mdi mdi-format-list-bulleted-square")]),e._v("\n            View List\n          ")],1)])])],1),e._v(" "),t(m.a,[t(c.a,{attrs:{cols:"5"}},[t(f.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[t("span",[e._v("All Employees List")])]),e._v(" "),t("div",[t(o.a,{staticClass:"timezoneedit-displaylist"},e._l(e.leftEmployees,(function(n,o){return t(r.c,{key:n.id,staticClass:"timezoneedit-displaylistview",attrs:{id:n.id},model:{value:e.leftSelectedEmp,callback:function(t){e.leftSelectedEmp=t},expression:"leftSelectedEmp"}},[t("div",{staticClass:"row"},[t(c.a,{staticClass:"col-1",staticStyle:{padding:"0px"}},[t(l.a,{staticClass:"col-1 d-flex flex-column justify-center",attrs:{hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.leftSelectedEmp,callback:function(t){e.leftSelectedEmp=t},expression:"leftSelectedEmp"}})],1),e._v(" "),t("div",{staticClass:"col-8",staticStyle:{"padding-top":"21px"},style:{color:n.timezone&&n.timezone.timezone_name?"#000000":"#b4b0b0"}},[e._v("\n                  "+e._s(n.employee_id)+": "+e._s(n.first_name)+" "+e._s(n.last_name)+":\n                  "),n.timezone&&1!=n.timezone.timezone_id?t("span",[e._v("\n                    "+e._s("---"==n.timezone.timezone_name?"---":n.timezone.timezone_name+" Assigned")+"\n                  ")]):e._e()]),e._v(" "),t("div",{staticClass:"col-3"})],1)])})),1)],1)],1),e._v(" "),t(c.a,{attrs:{cols:"2"}},[t("div",{staticStyle:{"text-align":"-webkit-center"}},[t("button",{staticClass:"btn primary btn-block white--text",attrs:{type:"button",id:"undo_redo_undo"}},[e._v("\n            Options\n          ")]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightSelected"},on:{click:e.moveToRightEmpOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightAll"},on:{click:e.allmoveToRightEmp}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftSelected"},on:{click:e.moveToLeftempOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-left theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftAll"},on:{click:e.allmoveToLeftemp}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-left theme--red",attrs:{"aria-hidden":"true"}})])])]),e._v(" "),t(c.a,{attrs:{cols:"5"}},[t(f.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[t("span",[e._v("Selected Employees List")])]),e._v(" "),t("div",[t(o.a,{staticClass:"timezoneedit-displaylist"},e._l(e.rightEmployees,(function(n,o){return t(r.c,{key:n.id,staticClass:"timezoneedit-displaylistview",attrs:{id:n.id},model:{value:e.rightSelectedEmp,callback:function(t){e.rightSelectedEmp=t},expression:"rightSelectedEmp"}},[t("div",{staticClass:"row"},[t(c.a,{staticClass:"col-1",staticStyle:{padding:"0px"}},[t(l.a,{staticClass:"col-1 d-flex flex-column justify-center",attrs:{hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedEmp,callback:function(t){e.rightSelectedEmp=t},expression:"rightSelectedEmp"}})],1),e._v(" "),t("div",{staticClass:"col-sm",staticStyle:{"padding-top":"21px",color:"#000000"}},[e._v("\n                  "+e._s(n.employee_id)+" : "+e._s(n.first_name)+" "+e._s(n.last_name)+"\n                ")]),e._v(" "),t("div",{staticClass:"col-sm",staticStyle:{"padding-top":"21px"}},[t("span",{staticStyle:{color:"red"}},[e._v(e._s(n.sdkEmpResponse))])])],1)])})),1)],1)],1)],1),e._v(" "),t(m.a,[t(c.a,{attrs:{cols:"5"}},[t(f.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[t("span",[e._v("All Devices List")])]),e._v(" "),t("div",[t(o.a,{staticClass:"timezoneedit-displaylist"},e._l(e.leftDevices,(function(n,o){return t(r.c,{key:n.id,staticClass:"timezoneedit-displaylistview",attrs:{id:n.id},model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}},[t("div",{staticClass:"row"},[t(c.a,{staticClass:"col-1",staticStyle:{padding:"0px"}},["active"==n.status.name?t(l.a,{staticClass:"col-1 d-flex flex-column justify-center",attrs:{hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.leftSelectedDevices,callback:function(t){e.leftSelectedDevices=t},expression:"leftSelectedDevices"}}):t(l.a,{staticClass:"col-1 d-flex flex-column justify-center",attrs:{indeterminate:"",title:"Device is offline",value:"",disabled:"","hide-details":""}})],1),e._v(" "),t("div",{staticClass:"col",staticStyle:{"padding-top":"21px",color:"#000000"}},[e._v("\n                  "+e._s(n.name)+" : "+e._s(n.device_id)+"\n                  "),"active"==n.status.name?t("span",{staticStyle:{color:"green"}},[e._v("\n                    Online")]):t("span",{staticStyle:{color:"red"}},[e._v("Offline\n                  ")])])],1)])})),1)],1)],1),e._v(" "),t(c.a,{attrs:{cols:"2"}},[t("div",{staticStyle:{"text-align":"-webkit-center"}},[t("button",{staticClass:"btn primary btn-block white--text",attrs:{type:"button",id:"undo_redo_undo"}},[e._v("\n            Options\n          ")]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightSelected"},on:{click:e.moveToRightDevicesOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_rightAll"},on:{click:e.allmoveToRightDevices}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-right theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftSelected"},on:{click:e.moveToLeftDevicesOption2}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-left theme--red",attrs:{"aria-hidden":"true"}})]),e._v(" "),t("button",{staticClass:"btn btn-default btn-block",attrs:{type:"button",id:"undo_redo_leftAll"},on:{click:e.allmoveToLeftDevices}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chevron-double-left theme--red",attrs:{"aria-hidden":"true"}})])])]),e._v(" "),t(c.a,{attrs:{cols:"5"}},[t(f.a,{attrs:{color:"background",dense:"",flat:"",dark:""}},[t("span",[e._v("Selected Devices List")])]),e._v(" "),t("div",[t(o.a,{staticClass:"timezoneedit-displaylist"},e._l(e.rightDevices,(function(n,o){return t(r.c,{key:n.id,staticClass:"timezoneedit-displaylistview",attrs:{id:n.id},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}},[t("div",{staticClass:"row"},[t(c.a,{staticClass:"col-1",staticStyle:{padding:"0px"}},[t(l.a,{staticClass:"col-1 d-flex flex-column justify-center",attrs:{hideDetails:"",value:n.id,primary:"","hide-details":""},model:{value:e.rightSelectedDevices,callback:function(t){e.rightSelectedDevices=t},expression:"rightSelectedDevices"}})],1),e._v(" "),t("div",{staticClass:"col-sm",staticStyle:{"padding-top":"21px",color:"#000000"}},[e._v("\n                  "+e._s(n.name)+" : "+e._s(n.device_id)+"\n                ")]),e._v(" "),t("div",{staticClass:"col-sm",staticStyle:{"padding-top":"21px"}},["Success"==n.sdkDeviceResponse?t("span",{staticStyle:{color:"green"}},[e._v(e._s(n.sdkDeviceResponse))]):t("span",{staticStyle:{color:"red"}},[e._v(e._s(n.sdkDeviceResponse))])])],1)])})),1)],1)],1)],1),e._v(" "),t(m.a,[t(c.a,{attrs:{cols:"12"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"col col-lg-6 text-center"},[e.errors&&e.errors.message?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.message))]):e._e()]),e._v(" "),t("div",{staticClass:"col col-lg-3 text-right"},[t("div",{staticStyle:{width:"150px",float:"right"}},[t("button",{staticClass:"btn primary btn-block white--text v-size--default",attrs:{loading:e.loading,type:"button",id:"save"},on:{click:function(t){return e.goback()}}},[e._v("\n                Back\n              ")])])]),e._v(" "),t("div",{staticClass:"col col-lg-3 text-right"},[t("div",{staticStyle:{width:"150px",float:"right"}},[t("button",{staticClass:"btn primary btn-block white--text v-size--default",attrs:{loading:e.loading,type:"button",id:"save"},on:{click:e.onSubmit}},[e._v("\n                Submit\n              ")])])])])])],1)],1)])}),[],!1,null,null,null);t.default=component.exports}}]);