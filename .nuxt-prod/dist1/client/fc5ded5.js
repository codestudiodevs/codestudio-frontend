(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1086:function(t,e,d){"use strict";d.r(e);var l=d(864),r=d(133),o=d(94),n=d(511),c=d(1222),v=d(849),h=d(349),m=d(115),C=d(510),f=d(348),_=d(218),x=(d(14),d(13),d(12),d(6),d(17),d(11),d(18),d(3));d(220);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(object);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,d)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D={props:["propPage"],data:function(){return{page:null,editDialog:!1,editedCard:{title:"New Card",value:"employeeCount",color:"#5fafa3",icon:"mdi mdi-account",cols:"12",sm:"6",md:"3"},editIndex:null,cardData:[],displayValueCount:0}},created:function(){this.page=this.propPage,this.getRecord()},methods:{getRecord:function(){var t=this,e={params:{page:this.page,type:"card",company_id:this.$auth.user.company_id}};this.$axios.get("theme",e).then((function(e){var data=e.data;t.cardData=data})).catch((function(t){return console.log(t)}))},addCard:function(){this.cardData.push(this.editedCard)},editCard:function(t){this.editDialog=!0,this.editIndex=t,this.editedCard=k({},this.cardData[t])},deleteCard:function(t){this.cardData.splice(t,1)},reflectChange:function(){this.cardData[this.editIndex]=k({},this.editedCard)},reflectCount:function(){var t=this,e={value:this.editedCard.value,company_id:this.$auth.user.company_id};this.$axios.get("theme_count",{params:e}).then((function(e){var data=e.data;t.displayValueCount=data})).catch((function(t){return console.log(t)}))},saveEdit:function(){var t=this;this.reflectChange();var e={page:this.page,type:"card",style:this.cardData,company_id:this.$auth.user.company_id};this.$axios.post("theme",e).then((function(e){e.data;alert("Data inserted"),t.getRecord(),t.closeEdit()})).catch((function(t){return console.log(t)}))},closeEdit:function(){this.editDialog=!1,this.editedCard={title:"New Card",value:"0",color:"#4A79DBED",icon:"mdi mdi-account",cols:"12",sm:"6",md:"3"},this.editIndex=null}}},O=d(61),component=Object(O.a)(D,(function(){var t=this,e=t._self._c;return e(v.a,{attrs:{fluid:""}},[e(C.a,[e(n.a,{attrs:{cols:"12"}},[e(l.a,{attrs:{label:"Select Page",items:["dashboard1","dashboard2"]},on:{change:t.getRecord},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t._v(" "),t._l(t.cardData,(function(d,l){return e(n.a,{key:l,attrs:{cols:d.cols,sm:d.sm,md:d.md}},[e(r.a,{staticStyle:{"border-radius":"15px !important"},attrs:{color:d.color,dark:"",dense:""}},[e("div",{staticClass:"text-right px-2"},[e(m.a,{attrs:{small:""},on:{click:function(e){return t.editCard(l)}}},[t._v("mdi-pencil")]),t._v(" "),e(m.a,{attrs:{small:""},on:{click:function(e){return t.deleteCard(l)}}},[t._v("mdi-delete")])],1),t._v(" "),e("div",{staticClass:"text-center pa-5"},[e("h1",[t._v(t._s(d.value))]),t._v(" "),e("p",[t._v(t._s(d.title))])])])],1)})),t._v(" "),e(n.a,{attrs:{cols:"12",sm:"6",md:"3"}},[e(r.a,{staticStyle:{"border-radius":"15px !important"},attrs:{color:"background",dark:"",dense:""},on:{click:t.addCard}},[e("div",{staticClass:"text-right px-2"},[e(m.a,{attrs:{disabled:"",color:"background",small:""}},[t._v("mdi-pencil")])],1),t._v(" "),e("div",{staticClass:"text-center pa-5"},[e("h1",[e(m.a,[t._v("mdi-plus-circle-outline")])],1),t._v(" "),e("p",[t._v("Add New Card")])])])],1)],2),t._v(" "),e(C.a,[e(n.a,[e(h.a,{attrs:{"max-width":"900"},model:{value:t.editDialog,callback:function(e){t.editDialog=e},expression:"editDialog"}},[e(r.a,[e(o.d,[t._v("Edit Card "),e(f.a),t._v(" "),e(m.a,{attrs:{color:"black"},on:{click:t.closeEdit}},[t._v("mdi-close")]),t._v(" "),e(m.a,{attrs:{color:"black"},on:{click:t.saveEdit}},[t._v("mdi-database")])],1),t._v(" "),e(o.c,[e(C.a,[e(n.a,[e(_.a,{attrs:{label:"Default Col"},on:{input:t.reflectChange},model:{value:t.editedCard.cols,callback:function(e){t.$set(t.editedCard,"cols",e)},expression:"editedCard.cols"}})],1),t._v(" "),e(n.a,[e(_.a,{attrs:{label:"Medium Col"},on:{input:t.reflectChange},model:{value:t.editedCard.md,callback:function(e){t.$set(t.editedCard,"md",e)},expression:"editedCard.md"}})],1),t._v(" "),e(n.a,[e(_.a,{attrs:{label:"Small Col"},on:{input:t.reflectChange},model:{value:t.editedCard.sm,callback:function(e){t.$set(t.editedCard,"sm",e)},expression:"editedCard.sm"}})],1)],1),t._v(" "),e(C.a,[e(n.a,[e(_.a,{attrs:{label:"Title"},on:{input:t.reflectChange},model:{value:t.editedCard.title,callback:function(e){t.$set(t.editedCard,"title",e)},expression:"editedCard.title"}})],1),t._v(" "),e(n.a,[e(l.a,{attrs:{"item-text":"title","item-value":"value",items:[{title:"Total In",value:"totalIn"},{title:"Total Out",value:"totalOut"},{title:"Emplopyee Count",value:"employeeCount"},{title:"Present",value:"presentCount"},{title:"Absent",value:"absentCount"},{title:"Missing",value:"missingCount"},{title:"Week Off",value:"offCount"},{title:"Holiday",value:"holidayCount"},{title:"Leave",value:"leaveCount"},{title:"Vaccation",value:"vaccationCount"}]},on:{input:t.reflectChange},model:{value:t.editedCard.value,callback:function(e){t.$set(t.editedCard,"value",e)},expression:"editedCard.value"}})],1)],1),t._v(" "),e(C.a,[e(n.a,[t._v("\n                Color Picker\n\n                "),e(c.a,{attrs:{"dot-size":"20","show-swatches":"",mode:"hexa","swatches-max-height":"250"},on:{input:t.reflectChange},model:{value:t.editedCard.color,callback:function(e){t.$set(t.editedCard,"color",e)},expression:"editedCard.color"}})],1),t._v(" "),e(n.a,[t._v("\n                Card Preview\n                "),e(r.a,{staticStyle:{"border-radius":"15px !important"},attrs:{color:t.editedCard.color,dark:"",dense:""}},[e("div",{staticClass:"text-right px-2"},[e(m.a,{attrs:{disabled:"",small:""}},[t._v("mdi-pencil")]),t._v(" "),e(m.a,{attrs:{disabled:"",small:""}},[t._v("mdi-delete")])],1),t._v(" "),e("div",{staticClass:"text-center pa-5"},[e("h1",[t._v("["+t._s(t.editedCard.value)+"]")]),t._v(" "),e("p",[t._v(t._s(t.editedCard.title))])])])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);