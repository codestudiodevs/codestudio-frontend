(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{853:function(e,t,r){var content=r(854);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("1377ef10",content,!0,{sourceMap:!1})},854:function(e,t,r){var o=r(24)((function(i){return i[1]}));o.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),o.locals={},e.exports=o},864:function(e,t,r){"use strict";r(14),r(13),r(17),r(11),r(18);var o=r(3),n=(r(72),r(6),r(12),r(87),r(107),r(219),r(43),r(64),r(853),r(860)),l=r(218),c=r(67),d=r(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},n.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=n.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,r){return r.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:n.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},n.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var r=Object(d.s)(t,e.itemText),text=null!=r?String(r):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=n.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=n.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var r=this;if(e!==t){if(!this.autoSelectFirst){var o=t[this.$refs.menu.listIndex];o?this.setMenuIndex(e.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){r.internalSearch&&(1===e.length||r.autoSelectFirst)&&(r.$refs.menu.getTiles(),r.autoSelectFirst&&e.length&&(r.setMenuIndex(0),r.$emit("update:list-index",r.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.z.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.z.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.z.backspace&&e!==d.z.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var r=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===r){var o=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[o]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=r}},clearableCallback:function(){this.internalSearch=null,n.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.q)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.q)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=n.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?n.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,r=t.value;t.value&&this.activateMenu(),this.multiple||""!==r||this.deleteCurrentItem(),this.internalSearch=r,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.z.home,d.z.end].includes(t)||n.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){n.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){n.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){n.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,r;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],n=this.getText(o);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",n),null===(r=e.clipboardData)||void 0===r||r.setData("text/vnd.vuetify.autocomplete.item+plain",n),e.preventDefault()}}}})},870:function(e,t,r){var content=r(874);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(25).default)("8f215f56",content,!0,{sourceMap:!1})},874:function(e,t,r){var o=r(24)((function(i){return i[1]}));o.push([e.i,'/*!\n * Cropper.js v1.5.13\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2022-11-20T05:30:43.444Z\n */.cropper-container{direction:ltr;font-size:0;line-height:0;position:relative;touch-action:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.cropper-container img{backface-visibility:hidden;display:block;height:100%;image-orientation:0deg;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.cropper-canvas,.cropper-crop-box,.cropper-drag-box,.cropper-modal,.cropper-wrap-box{bottom:0;left:0;position:absolute;right:0;top:0}.cropper-canvas,.cropper-wrap-box{overflow:hidden}.cropper-drag-box{background-color:#fff;opacity:0}.cropper-modal{background-color:#000;opacity:.5}.cropper-view-box{display:block;height:100%;outline:1px solid #39f;outline-color:rgba(51,153,255,.75);overflow:hidden;width:100%}.cropper-dashed{border:0 dashed #eee;display:block;opacity:.5;position:absolute}.cropper-dashed.dashed-h{border-bottom-width:1px;border-top-width:1px;height:33.33333%;left:0;top:33.33333%;width:100%}.cropper-dashed.dashed-v{border-left-width:1px;border-right-width:1px;height:100%;left:33.33333%;top:0;width:33.33333%}.cropper-center{display:block;height:0;left:50%;opacity:.75;position:absolute;top:50%;width:0}.cropper-center:after,.cropper-center:before{background-color:#eee;content:" ";display:block;position:absolute}.cropper-center:before{height:1px;left:-3px;top:0;width:7px}.cropper-center:after{height:7px;left:0;top:-3px;width:1px}.cropper-face,.cropper-line,.cropper-point{display:block;height:100%;opacity:.1;position:absolute;width:100%}.cropper-face{background-color:#fff;left:0;top:0}.cropper-line{background-color:#39f}.cropper-line.line-e{cursor:ew-resize;right:-3px;top:0;width:5px}.cropper-line.line-n{cursor:ns-resize;height:5px;left:0;top:-3px}.cropper-line.line-w{cursor:ew-resize;left:-3px;top:0;width:5px}.cropper-line.line-s{bottom:-3px;cursor:ns-resize;height:5px;left:0}.cropper-point{background-color:#39f;height:5px;opacity:.75;width:5px}.cropper-point.point-e{cursor:ew-resize;margin-top:-3px;right:-3px;top:50%}.cropper-point.point-n{cursor:ns-resize;left:50%;margin-left:-3px;top:-3px}.cropper-point.point-w{cursor:ew-resize;left:-3px;margin-top:-3px;top:50%}.cropper-point.point-s{bottom:-3px;cursor:s-resize;left:50%;margin-left:-3px}.cropper-point.point-ne{cursor:nesw-resize;right:-3px;top:-3px}.cropper-point.point-nw{cursor:nwse-resize;left:-3px;top:-3px}.cropper-point.point-sw{bottom:-3px;cursor:nesw-resize;left:-3px}.cropper-point.point-se{bottom:-3px;cursor:nwse-resize;height:20px;opacity:1;right:-3px;width:20px}@media (min-width:768px){.cropper-point.point-se{height:15px;width:15px}}@media (min-width:992px){.cropper-point.point-se{height:10px;width:10px}}@media (min-width:1200px){.cropper-point.point-se{height:5px;opacity:.75;width:5px}}.cropper-point.point-se:before{background-color:#39f;bottom:-50%;content:" ";display:block;height:200%;opacity:0;position:absolute;right:-50%;width:200%}.cropper-invisible{opacity:0}.cropper-bg{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC")}.cropper-hide{display:block;height:0;position:absolute;width:0}.cropper-hidden{display:none!important}.cropper-move{cursor:move}.cropper-crop{cursor:crosshair}.cropper-disabled .cropper-drag-box,.cropper-disabled .cropper-face,.cropper-disabled .cropper-line,.cropper-disabled .cropper-point{cursor:not-allowed}',""]),o.locals={},e.exports=o},941:function(e,t,r){"use strict";r.r(t);var o=r(864),n=r(116),l=r(133),c=r(94),d=r(511),h=r(349),m=r(115),f=r(215),_=r(510),v=r(860),y=r(846),x=r(218),I=(r(35),r(3)),w=(r(33),r(63),r(870),r(875)),S={components:{VueCropper:r.n(w).a},props:["employeeId"],data:function(){var e;return e={image:"",leave_managers:[],mime_type:"",cropedImage:"",cropper:"",autoCrop:!1,dialogCropping:!1,selectedFile:"",upload_edit:{name:""},attrs:[],dialog:!1,editDialog:!1,tab:null,m:!1,expand:!1,expand2:!1,boilerplate:!1,right:!0,rightDrawer:!1,drawer:!0},Object(I.a)(e,"tab",null),Object(I.a)(e,"selectedItem",1),Object(I.a)(e,"on",""),Object(I.a)(e,"color","background"),Object(I.a)(e,"files",""),Object(I.a)(e,"Model","Employee"),Object(I.a)(e,"endpoint","employee"),Object(I.a)(e,"search",""),Object(I.a)(e,"loading",!1),Object(I.a)(e,"total",0),Object(I.a)(e,"next_page_url",""),Object(I.a)(e,"prev_page_url",""),Object(I.a)(e,"current_page",1),Object(I.a)(e,"per_page",8),Object(I.a)(e,"response",""),Object(I.a)(e,"ListName",""),Object(I.a)(e,"snackbar",!1),Object(I.a)(e,"btnLoader",!1),Object(I.a)(e,"max_employee",0),Object(I.a)(e,"employee",{title:"",display_name:"",employee_id:"",system_user_id:"",profile_picture:"",leave_group_id:"",reporting_manager_id:""}),Object(I.a)(e,"upload",{name:""}),Object(I.a)(e,"previewImage",null),Object(I.a)(e,"snackbar",!1),Object(I.a)(e,"ids",[]),Object(I.a)(e,"loading",!1),Object(I.a)(e,"total",0),Object(I.a)(e,"titleItems",["Mr","Mrs","Miss","Ms","Dr"]),Object(I.a)(e,"editedIndex",-1),Object(I.a)(e,"response",""),Object(I.a)(e,"departments",[]),Object(I.a)(e,"sub_departments",[]),Object(I.a)(e,"designations",[]),Object(I.a)(e,"roles",[]),Object(I.a)(e,"leave_groups",[]),Object(I.a)(e,"data",[]),Object(I.a)(e,"errors",[]),Object(I.a)(e,"departments",[]),Object(I.a)(e,"department_id",""),Object(I.a)(e,"payloadOptions",{}),e},created:function(){this.getInfo(this.employeeId),this.payloadOptions={params:{per_page:1e3,company_id:this.$auth.user.company_id,department_ids:this.$auth.user.assignedDepartments}},this.getDepartments(),this.getSubDepartments(),this.getDesignations(),this.getRoles();try{var e=this.$route.params.id;e&&this.editItemId(e)}catch(e){}},mounted:function(){},watch:{dialog:function(e){e||this.close()},options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{getDepartments:function(){var e=this;this.$axios.get("departments",this.payloadOptions).then((function(t){var data=t.data;e.departments=data.data}))},getSubDepartments:function(){var e=this;this.$axios.get("sub-departments",this.payloadOptions).then((function(t){var data=t.data;e.sub_departments=data.data}))},getDesignations:function(){var e=this;this.$axios.get("designation",this.payloadOptions).then((function(t){var data=t.data;e.designations=data.data}))},getRoles:function(){var e=this;this.payloadOptions.params.role_type="employee",this.$axios.get("role",this.payloadOptions).then((function(t){var data=t.data;e.roles=data.data}))},getInfo:function(e){var t=this;this.$axios.get("employee-single/".concat(e)).then((function(e){var data=e.data;t.employee={title:data.title,display_name:data.display_name,first_name:data.first_name,last_name:data.last_name,employee_id:data.employee_id,system_user_id:data.system_user_id,department_id:data.department_id,sub_department_id:data.sub_department_id,designation_id:data.designation_id,leave_group_id:data.leave_group_id,reporting_manager_id:data.reporting_manager_id},t.previewImage=data.profile_picture})).catch((function(e){return console.log(e)}))},saveCroppedImageStep2:function(){this.cropedImage=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.image_name=this.cropedImage,this.previewImage=this.cropedImage,this.dialogCropping=!1},can:function(){return!0},close:function(){this.dialog=!1},onpick_attachment:function(){this.$refs.attachment_input.click()},attachment:function(e){var t=this;this.upload.name=e.target.files[0]||"";var r=this.$refs.attachment_input.files;if(r[0].size>1048576)return e.preventDefault(),void(this.errors.profile_picture=["File too big (> 1MB). Upload less than 1MB"]);if(r&&r[0]){var o=new FileReader;o.onload=function(e){t.selectedFile=event.target.result,t.$refs.cropper.replace(t.selectedFile)},o.readAsDataURL(r[0]),this.$emit("input",r[0]),this.dialogCropping=!0}},mapper:function(e){var t=new FormData;for(var r in e)e[r]&&t.append(r,e[r]);return t.append("company_id",this.$auth.user.company_id),t},store_data:function(){var e=this,t=Object.assign(this.employee),r=this.mapper(t);this.$refs.attachment_input.files[0]?(this.cropedImage=this.$refs.cropper.getCroppedCanvas().toDataURL(),this.$refs.cropper.getCroppedCanvas().toBlob((function(t){r.append("profile_picture",t,"cropped_image.jpg"),r.append("attachment_input",t,"cropped_image.jpg"),e.saveToAPI(r)}),"image/jpeg")):(r.delete("profile_picture"),this.saveToAPI(r))},saveToAPI:function(e){var t=this;this.$axios.post("/employee-update/".concat(this.employeeId),e).then((function(e){var data=e.data;t.loading=!1,data.status?(t.errors=[],t.snackbar=!0,t.response="Employees Updated successfully",t.$emit("eventFromchild")):t.errors=data.errors})).catch((function(e){return console.log(e)}))}}},C=r(61),component=Object(C.a)(S,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"text-center ma-2"},[t(y.a,{attrs:{small:"",top:"top",color:e.color},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n      "+e._s(e.response)+"\n    ")])],1),e._v(" "),t(l.a,[t(c.c,[t(h.a,{attrs:{width:"500"},model:{value:e.dialogCropping,callback:function(t){e.dialogCropping=t},expression:"dialogCropping"}},[t(l.a,{staticStyle:{"padding-top":"20px"}},[t(c.c,[t("VueCropper",{directives:[{name:"show",rawName:"v-show",value:e.selectedFile,expression:"selectedFile"}],ref:"cropper",attrs:{src:e.selectedFile,alt:"Source Image",aspectRatio:1,autoCropArea:.9,viewMode:3}})],1),e._v(" "),t(c.a,[t("div",{staticClass:"col-sm-12 col-md-6 col-12 pull-left",attrs:{col:"6",md:"6"}},[t(n.a,{staticClass:"danger btn btn-danger text-left",staticStyle:{float:"left"},attrs:{text:""},on:{click:function(t){return e.closePopup()}}},[e._v("Cancel")])],1),e._v(" "),t("div",{staticClass:"col-sm-12 col-md-6 col-12 text-right",attrs:{col:"6",md:"6"}},[t(n.a,{staticClass:"primary btn btn-danger text-right",on:{click:function(t){e.saveCroppedImageStep2(),e.dialog=!1}}},[e._v("Crop")])],1)])],1)],1),e._v(" "),t(_.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t(_.a,[t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Title "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(v.a,{attrs:{items:e.titleItems,"hide-details":!e.errors.title,error:e.errors.title,"error-messages":e.errors&&e.errors.title?e.errors.title[0]:"",dense:"",outlined:""},model:{value:e.employee.title,callback:function(t){e.$set(e.employee,"title",t)},expression:"employee.title"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Display Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.display_name,type:"text",error:e.errors.display_name,"error-messages":e.errors&&e.errors.display_name?e.errors.display_name[0]:""},model:{value:e.employee.display_name,callback:function(t){e.$set(e.employee,"display_name",t)},expression:"employee.display_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("First Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.first_name,type:"text",error:e.errors.first_name,"error-messages":e.errors&&e.errors.first_name?e.errors.first_name[0]:""},model:{value:e.employee.first_name,callback:function(t){e.$set(e.employee,"first_name",t)},expression:"employee.first_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Last Name "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(x.a,{attrs:{dense:"",outlined:"","hide-details":!e.errors.last_name,type:"text",error:e.errors.last_name,"error-messages":e.errors&&e.errors.last_name?e.errors.last_name[0]:""},model:{value:e.employee.last_name,callback:function(t){e.$set(e.employee,"last_name",t)},expression:"employee.last_name"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Employee ID "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(x.a,{attrs:{dense:"",outlined:"",type:"text","hide-details":!e.errors.employee_id,error:e.errors.employee_id,"error-messages":e.errors&&e.errors.employee_id?e.errors.employee_id[0]:""},model:{value:e.employee.employee_id,callback:function(t){e.$set(e.employee,"employee_id",t)},expression:"employee.employee_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",cols:"12",sm:"12",dense:""}},[t("label",{staticClass:"col-form-label"},[e._v("Employee Device Id "),t("span",{staticClass:"text-danger"},[e._v("*")])]),e._v(" "),t(x.a,{attrs:{dense:"",outlined:"",type:"text","hide-details":!e.errors.system_user_id,error:e.errors.system_user_id,"error-messages":e.errors&&e.errors.system_user_id?e.errors.system_user_id[0]:""},model:{value:e.employee.system_user_id,callback:function(t){e.$set(e.employee,"system_user_id",t)},expression:"employee.system_user_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Department ")]),e._v(" "),t(o.a,{attrs:{items:e.departments,"item-text":"name","item-value":"id",placeholder:"Select","hide-details":!e.errors.department_id,error:e.errors.department_id,"error-messages":e.errors&&e.errors.department_id?e.errors.department_id[0]:"",dense:"",outlined:""},model:{value:e.employee.department_id,callback:function(t){e.$set(e.employee,"department_id",t)},expression:"employee.department_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Sub Department ")]),e._v(" "),t(o.a,{attrs:{items:e.sub_departments,"item-text":"name","item-value":"id",placeholder:"Select","hide-details":!e.errors.sub_department_id,error:e.errors.sub_department_id,"error-messages":e.errors&&e.errors.sub_department_id?e.errors.sub_department_id[0]:"",dense:"",outlined:""},model:{value:e.employee.sub_department_id,callback:function(t){e.$set(e.employee,"sub_department_id",t)},expression:"employee.sub_department_id"}})],1),e._v(" "),t(d.a,{attrs:{md:"6",sm:"12",cols:"12"}},[t("label",{staticClass:"col-form-label"},[e._v("Designation ")]),e._v(" "),t(o.a,{attrs:{items:e.designations,"item-text":"name","item-value":"id",placeholder:"Select","hide-details":!e.errors.designation_id,error:e.errors.designation_id,"error-messages":e.errors&&e.errors.designation_id?e.errors.designation_id[0]:"",dense:"",outlined:""},model:{value:e.employee.designation_id,callback:function(t){e.$set(e.employee,"designation_id",t)},expression:"employee.designation_id"}})],1)],1)],1),e._v(" "),t(d.a,{staticClass:"col-sm-6"},[t("div",{staticClass:"form-group pt-15",staticStyle:{margin:"0 auto",width:"200px"}},[t(f.a,{staticStyle:{width:"100%",height:"200px",border:"1px solid #5fafa3","border-radius":"50%",margin:"0 auto"},attrs:{src:e.previewImage||"/no-profile-image.jpg"}}),e._v(" "),t("br"),e._v(" "),t(n.a,{staticClass:"form-control primary",attrs:{small:""},on:{click:e.onpick_attachment}},[e._v(e._s(e.upload.name?"Change":"Upload")+"\n              Profile Image\n              "),t(m.a,{attrs:{right:"",dark:""}},[e._v("mdi-cloud-upload")])],1),e._v(" "),t("input",{ref:"attachment_input",staticStyle:{display:"none"},attrs:{required:"",type:"file",accept:"image/*"},on:{change:e.attachment}}),e._v(" "),e.errors&&e.errors.profile_picture?t("span",{staticClass:"text-danger mt-2"},[e._v(e._s(e.errors.profile_picture[0]))]):e._e()],1)]),e._v(" "),t(d.a,{staticClass:"text-right",attrs:{cols:"12"}},[e.can("employee_create")?t(n.a,{attrs:{small:"",loading:e.loading,color:"primary"},on:{click:e.store_data}},[e._v("\n            Submit\n          ")]):e._e()],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);