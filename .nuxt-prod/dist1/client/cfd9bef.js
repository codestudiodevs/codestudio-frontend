(window.webpackJsonp=window.webpackJsonp||[]).push([[80,24],{1010:function(t,e,n){"use strict";n(958)},1011:function(t,e,n){var r=n(24)((function(i){return i[1]}));r.push([t.i,".center-both[data-v-741789bb]{align-items:center;display:flex;height:31vh;justify-content:center}",""]),r.locals={},t.exports=r},1071:function(t,e,n){"use strict";n.r(e);var r=n(116),o=n(133),c=n(115),l=n(348),d=n(95),f=n(850),h=n(829),v=n(40),m=(n(108),n(72),{props:["page"],data:function(){return{Model:"Attendance",data:[],chartOptions:{title:{align:"center",margin:0},colors:[],series:[],chart:{width:350,type:"pie"},labels:[],dataLabels:{enabled:!0,style:{fontSize:"10px"}},legend:{show:!0,fontSize:"10px"},responsive:[{breakpoint:480,options:{chart:{width:250},legend:{position:"bottom"}}}]},loading:!0}},created:function(){this.getDataFromApi()},methods:{getDataFromApi:function(){var t=this,e={params:{page:this.page||"dashboard2",type:"card",company_id:this.$auth.company_id}};this.$axios.get("theme",e).then(function(){var e=Object(v.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,t.loading=!1,t.data=data,e.next=5,data.map((function(t){return t.color}));case 5:return t.chartOptions.colors=e.sent,e.next=8,data.map((function(t){return t.title}));case 8:return t.chartOptions.labels=e.sent,e.next=11,data.map((function(t){return parseInt(t.calculated_value)}));case 11:t.chartOptions.series=e.sent,new ApexCharts(document.querySelector("#AttendancePie"),t.chartOptions).render();case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){return console.log(t)}))}}}),_=m,x=(n(1010),n(61)),component=Object(x.a)(_,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"mb-5 rounded-md",attrs:{elevation:"1"}},[e(d.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[e(f.b,[e("span",[t._v(" "+t._s(t.Model)+" ")])]),t._v(" "),e(l.a),t._v(" "),e(h.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({staticClass:"ma-0 px-0",attrs:{to:"/attendance_report",dense:"","x-small":"",ripple:!1,text:""}},"v-btn",l,!1),o),[e(c.a,{staticClass:"ml-2",attrs:{color:"white",dark:""}},[t._v("mdi mdi-eye-outline")])],1)]}}])},[t._v(" "),e("span",[t._v("Reports")])])],1),t._v(" "),e("div",{staticClass:"center-both",staticStyle:{"min-height":"300px"}},[t.loading?e("ComonPreloader",{attrs:{icon:"pie-chart"}}):t.data.length?e("div",{attrs:{id:"AttendancePie"}}):e("div",[t._v("No record found")])],1)],1)}),[],!1,null,"741789bb",null);e.default=component.exports;installComponents(component,{ComonPreloader:n(891).default})},850:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var r=n(95),o=n(0),c=Object(o.k)("v-toolbar__title"),l=Object(o.k)("v-toolbar__items");r.a},891:function(t,e,n){"use strict";n.r(e);var r=n(215),o={props:["icon"]},c=n(61),component=Object(c.a)(o,(function(){var t=this._self._c;return t("div",{staticClass:"text-center",staticStyle:{width:"50px",margin:"25% auto"}},[t(r.a,{attrs:{src:"/preloaders/".concat(this.icon,".gif")}})],1)}),[],!1,null,null,null);e.default=component.exports},958:function(t,e,n){var content=n(1011);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("fcfed5ae",content,!0,{sourceMap:!1})}}]);