(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{1275:function(t,e,n){"use strict";n.r(e);var l=n(116),r=n(133),c=n(94),o=n(349),v=n(348),d=n(218),_=n(95),x=n(342),m=n(344),D={data:function(){return{dialog:!1,step:1}},computed:{currentTitle:function(){switch(this.step){case 1:return"Department";case 2:return"Sub department";case 3:return"Designation";default:return"Role"}}}},k=n(61),component=Object(k.a)(D,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"text-center"},[e(o.a,{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(l.a,t._g(t._b({attrs:{color:"red lighten-2",dark:""}},"v-btn",c,!1),r),[t._v("\n          Click Me\n        ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(r.a,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[e(_.a,{staticClass:"background white--text",attrs:{flat:""}},[t._v("\n          Get started quickly with pre-filled defaults\n\n          ")]),t._v(" "),e(x.a,{staticClass:"mx-2",model:{value:t.step,callback:function(e){t.step=e},expression:"step"}},[e(m.a,{attrs:{value:1}},[e(c.c,[e(d.a,{attrs:{label:"Department 1",value:"Department 1"}}),t._v(" "),e(d.a,{attrs:{label:"Department 2",value:"Department 2"}}),t._v(" "),e(d.a,{attrs:{label:"Department 3",value:"Department 3"}}),t._v(" "),e("span",{staticClass:"text-caption grey--text text--darken-1"})],1)],1),t._v(" "),e(m.a,{attrs:{value:2}},[e(c.c,[e(d.a,{attrs:{label:"Sub Department 1",value:"Sub Department 1"}}),t._v(" "),e(d.a,{attrs:{label:"Sub Department 2",value:"Sub Department 2"}}),t._v(" "),e(d.a,{attrs:{label:"Sub Department 3",value:"Sub Department 4"}}),t._v(" "),e("span",{staticClass:"text-caption grey--text text--darken-1"})],1)],1),t._v(" "),e(m.a,{attrs:{value:3}},[e(c.c,[e(d.a,{attrs:{label:"Designation 1",value:"Designation 1"}}),t._v(" "),e(d.a,{attrs:{label:"Designation 2",value:"Designation 2"}}),t._v(" "),e(d.a,{attrs:{label:"Designation 3",value:"Designation 3"}}),t._v(" "),e("span",{staticClass:"text-caption grey--text text--darken-1"})],1)],1),t._v(" "),e(m.a,{attrs:{value:4}},[e(c.c,[e(d.a,{attrs:{label:"Role 1",value:"Role 1"}}),t._v(" "),e(d.a,{attrs:{label:"Role 2",value:"Role 2"}}),t._v(" "),e(d.a,{attrs:{label:"Role 3",value:"Role 3"}}),t._v(" "),e("span",{staticClass:"text-caption grey--text text--darken-1"})],1)],1)],1),t._v(" "),e(c.a,[e(l.a,{attrs:{disabled:1===t.step,text:""},on:{click:function(e){t.step--}}},[t._v("\n            Back\n          ")]),t._v(" "),e(v.a),t._v(" "),e(l.a,{attrs:{disabled:4===t.step,color:"primary",depressed:""},on:{click:function(e){t.step++}}},[t._v("\n            Next\n          ")]),t._v(" "),5===t.step?e(l.a,{attrs:{color:"primary",depressed:""},on:{click:t.step}},[t._v("\n            Next\n          ")]):t._e()],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=component.exports}}]);