(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1022:function(e,t,n){"use strict";(function(e){t.a={layout:"login",auth:!1,data:function(){return{headers:[{text:"UserID",align:"center",sortable:!1,value:"UserCode"},{text:"DeviceID",align:"center",value:"DeviceID"},{text:"LogTime",align:"center",value:"RecordDate"},{text:"SerialNumber",value:"RecordNumber"}],loading:!1,snackbar:!1,response:"",url:e.env.SOCKET_ENDPOINT,Hash:e.env.Hash,logs:[],socket:null,msg:"",errors:[]}},mounted:function(){this.socketConnection()},methods:{socketConnection:function(){var e=this;this.socket=new WebSocket(this.url),this.socket.onmessage=function(t){var data=t.data,n=JSON.parse(data);200==n.Status&&0!==n.Data.UserCode&&e.getDetails(n.Data)}},getDetails:function(e){var t=this;this.$axios.get("/device/".concat(e.DeviceID,"/details")).then((function(n){n.data.company_id==t.$auth.user.company_id&&t.logs.unshift(e)}))},store:function(e){var t={headers:{Authorization:"Bearer "+this.Hash}};this.$axios.post("generate_log",e,t).then((function(e){}))}}}}).call(this,n(50))},1065:function(e,t,n){var content=n(1206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(25).default)("3b04b00a",content,!0,{sourceMap:!1})},1205:function(e,t,n){"use strict";n(1065)},1206:function(e,t,n){var o=n(24)((function(i){return i[1]}));o.push([e.i,"@media (min-width:768px){.gradient-form[data-v-861cf526]{height:100vh!important}}@media (min-width:769px){.primary[data-v-861cf526]{border-bottom-right-radius:.3rem;border-top-right-radius:.3rem}}",""]),o.locals={},e.exports=o},1358:function(e,t,n){"use strict";n.r(t);var o=n(1220),r=n(1022).a,c=(n(1205),n(61)),component=Object(c.a)(r,(function(){var e=this;return(0,e._self._c)(o.a,{attrs:{headers:e.headers,items:e.logs,"items-per-page":5,dense:""}})}),[],!1,null,"861cf526",null);t.default=component.exports}}]);