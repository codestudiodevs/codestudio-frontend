(window.webpackJsonp=window.webpackJsonp||[]).push([[78,24],{1012:function(t,e,n){"use strict";n(959)},1013:function(t,e,n){var o=n(24)((function(i){return i[1]}));o.push([t.i,".center-both[data-v-b05af396]{align-items:center;display:flex;height:31vh;justify-content:center}",""]),o.locals={},t.exports=o},1072:function(t,e,n){"use strict";n.r(e);var o=n(116),r=n(133),l=n(94),d=n(115),c=n(348),f=n(95),v=n(850),_=n(829),h=(n(13),n(69),{data:function(){return{options:{},Model:"Announcement",endpoint:"announcement_list",loading:!1,dataLength:0,headers:[{text:"Title",align:"left",sortable:!0,key:"title",value:"title"},{text:"Start Date",align:"left",sortable:!0,value:"start_date",key:"start_date"},{text:"End Date",align:"left",sortable:!0,value:"end_date",key:"end_date"}],data:[]}},created:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this;this.loading=!0;var e=this.options,n=e.sortBy,o=e.sortDesc,r={params:{page:e.page,sortBy:n?n[0]:"",sortDesc:o?o[0]:"",per_page:5,company_id:this.$auth.user.company_id}};this.$axios.get(this.endpoint,r).then((function(e){var data=e.data;t.loading=!1,t.dataLength=data.total,t.data=data.data,data.total||(t.headers=[])}))}}}),m=(n(1012),n(61)),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"1"}},[e(f.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(v.b,[e("span",[t._v(" "+t._s(t.Model)+" List ")])]),t._v(" "),e(c.a),t._v(" "),e(_.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/announcement",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),r),[e(d.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Announcement List")])])],1),t._v(" "),e("div",{class:t.dataLength?"":"center-both",staticStyle:{"min-height":"300px"}},[t.loading?e("ComonPreloader",{attrs:{icon:"notification"}}):t.loading||t.dataLength?e("div",{staticStyle:{width:"100%","max-height":"300px","overflow-y":"auto"}},t._l(t.data,(function(n,i){return e(l.c,{key:i,staticClass:"px-2"},[e("b",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v("\n          "+t._s(n.description)+"\n          "),e("small",{staticStyle:{float:"right","font-size":"9px"}},[t._v("Created At "+t._s(n.dateTime))])]),t._v(" "),i+1!==t.data.length?e("div",{staticStyle:{"border-bottom":"1px solid #b3b1b1"}}):t._e()])})),1):e("div",[t._v("No record found")])],1)],1)}),[],!1,null,"b05af396",null);e.default=component.exports;installComponents(component,{ComonPreloader:n(891).default})},850:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l}));var o=n(95),r=n(0),l=Object(r.k)("v-toolbar__title"),d=Object(r.k)("v-toolbar__items");o.a},891:function(t,e,n){"use strict";n.r(e);var o=n(215),r={props:["icon"]},l=n(61),component=Object(l.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(o.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports},959:function(t,e,n){var content=n(1013);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("08d5f2f9",content,!0,{sourceMap:!1})}}]);