(window.webpackJsonp=window.webpackJsonp||[]).push([[181,69,75],{1086:function(t,e,r){"use strict";r.r(e);var n=r(864),l=r(133),o=r(94),d=r(511),c=r(1222),v=r(849),h=r(349),m=r(115),f=r(510),C=r(348),_=r(218),k=(r(14),r(13),r(12),r(6),r(17),r(11),r(18),r(3));r(220);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={props:["propPage"],data:function(){return{page:null,editDialog:!1,editedCard:{title:"New Card",value:"employeeCount",color:"#5fafa3",icon:"mdi mdi-account",cols:"12",sm:"6",md:"3"},editIndex:null,cardData:[],displayValueCount:0}},created:function(){this.page=this.propPage,this.getRecord()},methods:{getRecord:function(){var t=this,e={params:{page:this.page,type:"card",company_id:this.$auth.user.company_id}};this.$axios.get("theme",e).then((function(e){var data=e.data;t.cardData=data})).catch((function(t){return console.log(t)}))},addCard:function(){this.cardData.push(this.editedCard)},editCard:function(t){this.editDialog=!0,this.editIndex=t,this.editedCard=y({},this.cardData[t])},deleteCard:function(t){this.cardData.splice(t,1)},reflectChange:function(){this.cardData[this.editIndex]=y({},this.editedCard)},reflectCount:function(){var t=this,e={value:this.editedCard.value,company_id:this.$auth.user.company_id};this.$axios.get("theme_count",{params:e}).then((function(e){var data=e.data;t.displayValueCount=data})).catch((function(t){return console.log(t)}))},saveEdit:function(){var t=this;this.reflectChange();var e={page:this.page,type:"card",style:this.cardData,company_id:this.$auth.user.company_id};this.$axios.post("theme",e).then((function(e){e.data;alert("Data inserted"),t.getRecord(),t.closeEdit()})).catch((function(t){return console.log(t)}))},closeEdit:function(){this.editDialog=!1,this.editedCard={title:"New Card",value:"0",color:"#4A79DBED",icon:"mdi mdi-account",cols:"12",sm:"6",md:"3"},this.editIndex=null}}},O=r(61),component=Object(O.a)(w,(function(){var t=this,e=t._self._c;return e(v.a,{attrs:{fluid:""}},[e(f.a,[e(d.a,{attrs:{cols:"12"}},[e(n.a,{attrs:{label:"Select Page",items:["dashboard1","dashboard2"]},on:{change:t.getRecord},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t._v(" "),t._l(t.cardData,(function(r,n){return e(d.a,{key:n,attrs:{cols:r.cols,sm:r.sm,md:r.md}},[e(l.a,{staticStyle:{"border-radius":"15px !important"},attrs:{color:r.color,dark:"",dense:""}},[e("div",{staticClass:"text-right px-2"},[e(m.a,{attrs:{small:""},on:{click:function(e){return t.editCard(n)}}},[t._v("mdi-pencil")]),t._v(" "),e(m.a,{attrs:{small:""},on:{click:function(e){return t.deleteCard(n)}}},[t._v("mdi-delete")])],1),t._v(" "),e("div",{staticClass:"text-center pa-5"},[e("h1",[t._v(t._s(r.value))]),t._v(" "),e("p",[t._v(t._s(r.title))])])])],1)})),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"3"}},[e(l.a,{staticStyle:{"border-radius":"15px !important"},attrs:{color:"background",dark:"",dense:""},on:{click:t.addCard}},[e("div",{staticClass:"text-right px-2"},[e(m.a,{attrs:{disabled:"",color:"background",small:""}},[t._v("mdi-pencil")])],1),t._v(" "),e("div",{staticClass:"text-center pa-5"},[e("h1",[e(m.a,[t._v("mdi-plus-circle-outline")])],1),t._v(" "),e("p",[t._v("Add New Card")])])])],1)],2),t._v(" "),e(f.a,[e(d.a,[e(h.a,{attrs:{"max-width":"900"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[e(l.a,[e(o.d,[t._v("Edit Card "),e(C.a),t._v(" "),e(m.a,{attrs:{color:"black"},on:{click:t.closeEdit}},[t._v("mdi-close")]),t._v(" "),e(m.a,{attrs:{color:"black"},on:{click:t.saveEdit}},[t._v("mdi-database")])],1),t._v(" "),e(o.c,[e(f.a,[e(d.a,[e(_.a,{attrs:{label:"Default Col"},on:{input:t.reflectChange},model:{value:t.editedCard.cols,callback:function(e){t.$set(t.editedCard,"cols",e)},expression:"editedCard.cols"}})],1),t._v(" "),e(d.a,[e(_.a,{attrs:{label:"Medium Col"},on:{input:t.reflectChange},model:{value:t.editedCard.md,callback:function(e){t.$set(t.editedCard,"md",e)},expression:"editedCard.md"}})],1),t._v(" "),e(d.a,[e(_.a,{attrs:{label:"Small Col"},on:{input:t.reflectChange},model:{value:t.editedCard.sm,callback:function(e){t.$set(t.editedCard,"sm",e)},expression:"editedCard.sm"}})],1)],1),t._v(" "),e(f.a,[e(d.a,[e(_.a,{attrs:{label:"Title"},on:{input:t.reflectChange},model:{value:t.editedCard.title,callback:function(e){t.$set(t.editedCard,"title",e)},expression:"editedCard.title"}})],1),t._v(" "),e(d.a,[e(n.a,{attrs:{"item-text":"title","item-value":"value",items:[{title:"Total In",value:"totalIn"},{title:"Total Out",value:"totalOut"},{title:"Emplopyee Count",value:"employeeCount"},{title:"Present",value:"presentCount"},{title:"Absent",value:"absentCount"},{title:"Missing",value:"missingCount"},{title:"Week Off",value:"offCount"},{title:"Holiday",value:"holidayCount"},{title:"Leave",value:"leaveCount"},{title:"Vaccation",value:"vaccationCount"}]},on:{input:t.reflectChange},model:{value:t.editedCard.value,callback:function(e){t.$set(t.editedCard,"value",e)},expression:"editedCard.value"}})],1)],1),t._v(" "),e(f.a,[e(d.a,[t._v("\n                Color Picker\n\n                "),e(c.a,{attrs:{"dot-size":"20","show-swatches":"",mode:"hexa","swatches-max-height":"250"},on:{input:t.reflectChange},model:{value:t.editedCard.color,callback:function(e){t.$set(t.editedCard,"color",e)},expression:"editedCard.color"}})],1),t._v(" "),e(d.a,[t._v("\n                Card Preview\n                "),e(l.a,{staticStyle:{"border-radius":"15px !important"},attrs:{color:t.editedCard.color,dark:"",dense:""}},[e("div",{staticClass:"text-right px-2"},[e(m.a,{attrs:{disabled:"",small:""}},[t._v("mdi-pencil")]),t._v(" "),e(m.a,{attrs:{disabled:"",small:""}},[t._v("mdi-delete")])],1),t._v(" "),e("div",{staticClass:"text-center pa-5"},[e("h1",[t._v("["+t._s(t.editedCard.value)+"]")]),t._v(" "),e("p",[t._v(t._s(t.editedCard.title))])])])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},1087:function(t,e,r){"use strict";r.r(e);var n=r(331),l=r(116),o=r(115),d={props:["color"],methods:{goBack:function(){window.history.back()}}},c=r(61),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{"x-small":"",fab:"",color:t.color},on:{click:t.goBack}},[e(n.a,[e(o.a,{attrs:{small:""}},[t._v("mdi-arrow-left")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},1330:function(t,e,r){"use strict";r.r(e);var n=r(133),l=r(511),o=r(849),d=r(510),c=r(348),v=r(95),h=r(40),m=(r(43),r(64),r(108),r(1086)),f=r(1087),C={data:function(){return{page:null}},created:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.page=t.$route.params.id;case 1:case"end":return e.stop()}}),e)})))()},methods:{goBack:function(){window.history.back()},can:function(t){var u=this.$auth.user;return u&&u.permissions.includes((function(e){return e==t||"/"==t}))||u.is_master}},components:{CardDesginer:m.default,Back:f.default}},_=r(61),component=Object(_.a)(C,(function(){var t=this,e=t._self._c;return e(n.a,[e(v.a,{staticClass:"background",attrs:{dense:"",dark:""}},[t._v("\n    Card Builder\n    "),e(c.a),t._v(" "),e("Back",{attrs:{color:"primary"}})],1),t._v(" "),e(o.a,{attrs:{fluid:""}},[e(d.a,[e(l.a,{attrs:{cols:"12"}},[e("CardDesginer",{attrs:{propPage:t.page}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);