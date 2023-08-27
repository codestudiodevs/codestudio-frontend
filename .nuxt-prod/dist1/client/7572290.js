(window.webpackJsonp=window.webpackJsonp||[]).push([[162,56],{1258:function(t,e,n){"use strict";n.r(e);var o=n(116),r=n(133),c=n(94),l=n(511),d=n(849),m=n(1220),h=n(349),f=n(836),v=n(115),_=n(510),y=n(846),x=n(348),k=n(218),I=n(95),C=n(850),w=(n(33),n(269),n(35),n(6),n(36),n(353),n(72),n(220),n(57),n(219),{data:function(){return{options:{},Model:"Payslip",endpoint:"salary_type",search:"",snackbar:!1,dialog:!1,ids:[],loading:!1,total:0,headers:[{text:"Salary Type",align:"left",sortable:!1,value:"name"},{text:"Actions",align:"center",value:"action",sortable:!1}],editedIndex:-1,editedItem:{name:""},defaultItem:{name:""},response:"",data:[],errors:[]}},computed:{formTitle:function(){return-1===this.editedIndex?"New":"Edit"}},watch:{dialog:function(t){t||this.close(),this.errors=[],this.search=""},options:{handler:function(){this.getDataFromApi()},deep:!0}},created:function(){this.loading=!0},methods:{can:function(t){var u=this.$auth.user;return u&&u.permissions.some((function(e){return e==t||"/"==t}))||u.is_master},getDataFromApi:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.endpoint;this.loading=!0;var n=this.options,o=n.sortBy,r=n.sortDesc,c=n.page,l={params:{per_page:n.itemsPerPage,company_id:this.$auth.user.company_id}};this.$axios.get("".concat(e,"?page=").concat(c),l).then((function(e){var data=e.data,n=data.data;1===o.length&&1===r.length&&(n=t.sorting(n,o,r)),t.data=n,t.total=data.total,t.loading=!1}))},sorting:function(t,e,n){return t.sort((function(a,b){var t=a[e[0]],o=b[e[0]];return n[0]?t<o?1:t>o?-1:0:t<o?-1:t>o?1:0}))},searchIt:function(t){0==t.length?this.getDataFromApi():t.length>2&&this.getDataFromApi("".concat(this.endpoint,"/search/").concat(t))},editItem:function(t){this.editedIndex=this.data.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},delteteSelectedRecords:function(){var t=this;confirm("Are you sure you wish to delete selected records , to mitigate any inconvenience in future.")&&this.$axios.post("".concat(this.endpoint,"/delete/selected"),{ids:this.ids.map((function(t){return t.id}))}).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.ids=[],t.response="Selected records has been deleted"):t.errors=data.errors})).catch((function(t){return console.log(t)}))},deleteItem:function(t){var e=this;confirm("Are you sure you wish to delete , to mitigate any inconvenience in future.")&&this.$axios.delete(this.endpoint+"/"+t.id).then((function(n){var data=n.data,o=e.data.indexOf(t);e.data.splice(o,1),e.snackbar=data.status,e.response=data.message})).catch((function(t){return console.log(t)}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){var t=this,e={name:this.editedItem.name.toLowerCase(),company_id:this.$auth.user.company_id};this.editedIndex>-1?this.$axios.put(this.endpoint+"/"+this.editedItem.id,e).then((function(e){var data=e.data;if(data.status){var n=t.data.findIndex((function(e){return e.id==t.editedItem.id}));t.data.splice(n,1,{id:t.editedItem.id,name:t.editedItem.name}),t.snackbar=data.status,t.response=data.message,t.close()}else t.errors=data.errors})).catch((function(t){return console.log(t)})):this.$axios.post(this.endpoint,e).then((function(e){var data=e.data;data.status?(t.getDataFromApi(),t.snackbar=data.status,t.response=data.message,t.close(),t.errors=[],t.search=""):t.errors=data.errors})).catch((function(t){return console.log(t)}))}}}),A=w,S=n(61),component=Object(S.a)(A,(function(){var t=this,e=t._self._c;return t.can("role_access")?e("div",[e("div",{staticClass:"text-center ma-2"},[e(y.a,{attrs:{top:"top",color:"secondary",elevation:"24"},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.response)+"\n    ")])],1),t._v(" "),e(_.a,{staticClass:"mt-5 mb-5"},[e(l.a,{attrs:{cols:"6"}},[e("h3",[t._v(t._s(t.Model))]),t._v(" "),e("div",[t._v("Dashboard / "+t._s(t.Model))])]),t._v(" "),e(l.a,{attrs:{cols:"6"}},[e("div",{staticClass:"text-right"},[t.can("role_deleted")?e(o.a,{staticClass:"mr-2 mb-2",attrs:{small:"",color:"error"},on:{click:t.delteteSelectedRecords}},[t._v("Delete Selected Records")]):t._e(),t._v(" "),t.can("role_create")?e(o.a,{staticClass:"mb-2",attrs:{small:"",color:"primary"},on:{click:function(e){t.dialog=!0}}},[t._v(t._s(t.Model)+" +")]):t._e()],1)])],1),t._v(" "),t.can("salary_type_view")?e(m.a,{staticClass:"elevation-1",attrs:{"show-select":"","item-key":"id",headers:t.headers,items:t.data,"server-items-length":t.total,loading:t.loading,options:t.options,"footer-props":{itemsPerPageOptions:[50,100,500,1e3]}},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e(I.a,{attrs:{flat:"",color:""}},[e(C.b,[t._v("List")]),t._v(" "),e(f.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),e(k.a,{attrs:{label:"Search","single-line":"","hide-details":""},on:{input:t.searchIt},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(h.a,{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(r.a,[e(c.d,[e("span",{staticClass:"headline"},[t._v(t._s(t.formTitle)+" "+t._s(t.Model))])]),t._v(" "),e(c.c,[e(d.a,[e(_.a,[e(l.a,{attrs:{cols:"12"}},[e(k.a,{attrs:{label:"Salary Type"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}}),t._v(" "),t.errors&&t.errors.name?e("span",{staticClass:"error--text"},[t._v(t._s(t.errors.name[0]))]):t._e()],1)],1)],1)],1),t._v(" "),e(c.a,[e(x.a),t._v(" "),e(o.a,{staticClass:"error",attrs:{small:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),e(o.a,{staticClass:"primary",attrs:{small:""},on:{click:t.save}},[t._v("Save")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(n){var o=n.item;return[t.can("salary_type_edit")?e(v.a,{staticClass:"mr-2",attrs:{color:"secondary",small:""},on:{click:function(e){return t.editItem(o)}}},[t._v("\n        mdi-pencil\n      ")]):t._e(),t._v(" "),t.can("salary_type_delete")?e(v.a,{attrs:{color:"error",small:""},on:{click:function(e){return t.deleteItem(o)}}},[t._v("\n        "+t._s("customer"===o.role?"":"mdi-delete")+"\n      ")]):t._e()]}},{key:"no-data",fn:function(){},proxy:!0}],null,!1,1201632387),model:{value:t.ids,callback:function(e){t.ids=e},expression:"ids"}}):e("NoAccess")],1):e("NoAccess")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoAccess:n(851).default})},850:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var o=n(95),r=n(0),c=Object(r.k)("v-toolbar__title"),l=Object(r.k)("v-toolbar__items");o.a},851:function(t,e,n){"use strict";n.r(e);var o=n(61),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{"margin-top":"25%"}},[t("b",[this._v("No Access")])])}],!1,null,null,null);e.default=component.exports}}]);