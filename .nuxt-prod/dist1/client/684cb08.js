(window.webpackJsonp=window.webpackJsonp||[]).push([[21,57],{1081:function(t,e,n){"use strict";n.r(e);var r=n(40),o=(n(108),n(72),{data:function(){return{data:[],chartOptions:{title:{align:"center",margin:0},colors:["#23bdb8","#f48665","#289cf5","#8e4cf1"],series:[],chart:{width:350,type:"pie"},labels:[],dataLabels:{enabled:!0,style:{fontSize:"10px"}},legend:{show:!0,fontSize:"10px"},responsive:[{breakpoint:480,options:{chart:{},legend:{position:"bottom"}}}]}}},mounted:function(){var t=this;this.loading=!1;var e={company_id:this.$auth.user.company_id,employee_id:this.$auth.user.employee.system_user_id,department_id:this.$auth.user.employee.department_id,shift_type_id:this.$auth.user.employee.schedule.shift_type_id};this.$axios.get("employee-statistics",{params:e}).then(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data=n.data,t.data=data,e.next=4,data.map((function(t){return t.title}));case 4:return t.chartOptions.labels=e.sent,e.next=7,data.map((function(t){return t.value}));case 7:t.chartOptions.series=e.sent,new ApexCharts(document.querySelector("#element"),t.chartOptions).render();case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.loading=!1},methods:{}}),c=o,l=n(61),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return t.data.length?e("div",{attrs:{id:"element"}}):e("NoRecordFound",{attrs:{data:t.data}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NoRecordFound:n(915).default})},915:function(t,e,n){"use strict";n.r(e);var r={props:["data"]},o=n(61),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return t.data.length?t._e():e("div",{staticClass:"error--text text-center mt-15"},[t._v("\n  No record found\n")])}),[],!1,null,null,null);e.default=component.exports}}]);