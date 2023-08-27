(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1021:function(t,e,o){"use strict";(function(t){o(36),o(119),o(58);e.a={data:function(){return{items:[],emptyLogmessage:"",number_of_records:10,logs:[],url:t.env.SOCKET_ENDPOINT,socket:null}},mounted:function(){this.socketConnection(),this.getRecords()},created:function(){this.initialize()},methods:{initialize:function(){var t=this,e={company_id:this.$auth.user.company_id};this.$axios.get("count",{params:e}).then((function(e){var data=e.data;t.items=data,t.total_employees_count_api=data[0].total_employees_count,t.items.length>0&&(t.loading=!1)}))},getRecords:function(){var t=this;this.$axios.get("device/getLastRecordsByCount/".concat(this.$auth.user.company_id,"/").concat(this.number_of_records)).then((function(e){t.logs=e.data,0==t.logs.length&&(t.emptyLogmessage="No Log records are available")}))},goToemployeelog:function(){this.$router.push("/devicelogs")},getShortName:function(t){return!!t&&t.split(" ").slice(0,2).join(" ")},socketConnection:function(){var t=this;this.socket=new WebSocket(this.url),this.socket.onmessage=function(e){var data=e.data,o=JSON.parse(data).Data;o&&o.UserCode>0&&t.getDetails(o)}},getDetails:function(t){var e=this;t.company_id=this.$auth.user.company_id,this.$axios.post("/device/details",t).then((function(o){var data=o.data;data.device&&data.device.company_id==e.$auth.user.company_id&&(data.employee.profile_picture="data:image;base64,"+t.RecordImage,e.logs.unshift(data))}))}}}}).call(this,o(50))},1062:function(t,e,o){var content=o(1200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("f4d76870",content,!0,{sourceMap:!1})},1090:function(t,e,o){"use strict";var n=o(3),c=o(120),r=o(8),d=o(15),l=o(5).a.extend({props:{activeClass:String,value:{required:!1}},data:function(){return{isActive:!1}},methods:{toggle:function(){this.isActive=!this.isActive}},render:function(){return this.$scopedSlots.default?(this.$scopedSlots.default&&(element=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(element)&&1===element.length&&(element=element[0]),element&&!Array.isArray(element)&&element.tag?(element.data=this._b(element.data||{},element.tag,{class:Object(n.a)({},this.activeClass,this.isActive)}),element):(Object(d.c)("v-item should only contain a single element",this),element)):(Object(d.c)("v-item is missing a default scopedSlot",this),null);var element}});Object(r.a)(l,Object(c.a)("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),e.a=Object(r.a)(l,Object(c.a)("slideGroup")).extend({name:"v-slide-item"})},1199:function(t,e,o){"use strict";o(1062)},1200:function(t,e,o){var n=o(24)((function(i){return i[1]}));n.push([t.i,".image-box[data-v-3dcdcd65]{border-radius:50%;box-shadow:0 .5rem 1rem rgba(0,0,0,.3);height:80px;max-width:80px!important;transform:translateY(50%)}.custom-card .menu[data-v-3dcdcd65]{padding:5px}.opener[data-v-3dcdcd65]{border-radius:50%;height:2.5rem;position:relative;transition:background-color .1s ease-in-out;width:2.5rem}.opener[data-v-3dcdcd65]:hover{background-color:#f2f2f2}.opener span[data-v-3dcdcd65]{background-color:#404040;border-radius:50%;height:.4rem;left:calc(50% - .2rem);position:absolute;top:0;width:.4rem}.opener span[data-v-3dcdcd65]:first-child{top:.45rem}.opener span[data-v-3dcdcd65]:nth-child(2){top:1.05rem}.opener span[data-v-3dcdcd65]:nth-child(3){top:1.65rem}.custom-card .title[data-v-3dcdcd65]{color:#a0a0a0;font-size:.85rem;text-align:center}.custom-card .actions[data-v-3dcdcd65]{display:flex;flex-direction:column;order:99;padding:0 2rem 1.2rem}.custom-card .actions .follow-info[data-v-3dcdcd65]{display:flex;padding:0 0 1rem}.follow-info h2[data-v-3dcdcd65]{text-align:center}.custom-card .actions .follow-info h2 a[data-v-3dcdcd65]{border-radius:.8rem;display:flex;flex-direction:column;padding:.8rem;-webkit-text-decoration:none;text-decoration:none;transition:background-color .1s ease-in-out}.custom-card .actions .follow-info h2 a span[data-v-3dcdcd65]{color:#1c9eff;font-size:20px;font-weight:700;transform:scaleY(1.3);transform-origin:bottom;transition:color .1s ease-in-out}.follow-info h2 a small[data-v-3dcdcd65]{color:#afafaf;font-size:.85rem;font-weight:400}.follow-info h2 a[data-v-3dcdcd65]:hover{background:#f2f2f2}",""]),n.locals={},t.exports=n},1357:function(t,e,o){"use strict";o.r(e);var n=o(116),c=o(133),r=o(511),d=o(115),l=o(215),m=o(510),f=o(860),v=o(217),h=o(1090),_=o(348),y=o(95),x=o(850),w=o(829),k=o(1021).a,C=(o(1199),o(61)),component=Object(C.a)(k,(function(){var t=this,e=t._self._c;return t.logs&&0==t.logs.length?e("div",{staticStyle:{"min-height":"400px"}},[e("div",{staticStyle:{"text-align":"center",color:"red"}},[t._v(t._s(t.emptyLogmessage))])]):e(m.a,[e(r.a,{attrs:{xs:"12",sm:"12",cols:"12",md:"12",lg:"12",xl:"12"}},[e(c.a,{staticStyle:{height:"500px"}},[e(y.a,{attrs:{color:"primary",dark:"",flat:""}},[e(x.b,[t._v("Recent Logs")]),t._v(" "),e(_.a),t._v(" "),t.logs&&t.logs.length>0?e(w.a,{attrs:{top:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(o){var c=o.on,r=o.attrs;return[e(n.a,t._g(t._b({staticClass:"mr-2 px-0",attrs:{dense:"","x-small":"",ripple:!1,text:""}},"v-btn",r,!1),c),[e(d.a,{staticClass:"ml-2",attrs:{color:"white",dark:""},on:{click:function(e){return t.goToemployeelog()}}},[t._v("mdi-grid")])],1)]}}],null,!1,4036368992)},[t._v(" "),e("span",[t._v("Logs List")])]):t._e(),t._v(" "),e(f.a,{staticStyle:{"max-width":"200px !important"},attrs:{"hide-details":!0,outlined:"",dense:"",placeholder:"Select Number of Records",items:[10,20,50,100]},on:{change:t.getRecords},model:{value:t.number_of_records,callback:function(e){t.number_of_records=e},expression:"number_of_records"}})],1),t._v(" "),e(v.b,{staticClass:"px-4 pb-3 mb-5",attrs:{"active-class":"success","show-arrows":""}},[e("div"),t._v(" "),t._l(t.logs,(function(o,n){return e(h.a,{key:n},[e(c.a,{staticClass:"custom-card mx-2 my-2",staticStyle:{"border-radius":"2rem !important"}},[e("div",{staticClass:"d-flex justify-center primary banner pt-5",staticStyle:{size:"cover"}},[e(l.a,{staticClass:"image-box",attrs:{src:o.employee&&o.employee.profile_picture||"/no-profile-image.jpg"}})],1),t._v(" "),e("div",{staticClass:"menu"},[e("div",{staticClass:"opener"})]),t._v(" "),e("h2",{staticClass:"text-center pa-1",staticStyle:{"font-size":"15px"}},[t._v("\n              "+t._s(o.employee&&o.employee.display_name)+"\n            ")]),t._v(" "),e("div",{staticClass:"title",staticStyle:{"font-size":"12px !important"}},[t._v("\n              EID: "+t._s(o.UserID)+"\n            ")]),t._v(" "),e("div",{staticClass:"title",staticStyle:{"font-size":"12px !important"}}),t._v(" "),e("div",{staticClass:"actions"},[e("div",{staticClass:"follow-info"},[e("h2",[e("a",{attrs:{href:"#"}},[e("span",[t._v(t._s(o&&o.time)+" ")]),e("small",[t._v("Time")])])]),t._v(" "),e("h2",[e("a",{attrs:{href:"#"}},[e("span",[t._v(t._s(o.device&&o.device.short_name||"---"))]),e("small",[t._v("Device")])])])])])])],1)}))],2)],1)],1)],1)}),[],!1,null,"3dcdcd65",null);e.default=component.exports},850:function(t,e,o){"use strict";o.d(e,"a",(function(){return d})),o.d(e,"b",(function(){return r}));var n=o(95),c=o(0),r=Object(c.k)("v-toolbar__title"),d=Object(c.k)("v-toolbar__items");n.a}}]);