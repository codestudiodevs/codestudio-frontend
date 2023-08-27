exports.ids = [34,29];
exports.modules = {

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(554);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("f7f27ab4", content, true, context)
};

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyValueTable_vue_vue_type_style_index_0_id_9fe8fc54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyValueTable_vue_vue_type_style_index_0_id_9fe8fc54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyValueTable_vue_vue_type_style_index_0_id_9fe8fc54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyValueTable_vue_vue_type_style_index_0_id_9fe8fc54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_KeyValueTable_vue_vue_type_style_index_0_id_9fe8fc54_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table[data-v-9fe8fc54]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-9fe8fc54],th[data-v-9fe8fc54]{padding:8px;text-align:left}tr[data-v-9fe8fc54]:nth-child(2n){background-color:#fbfdff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/KeyValueTable.vue?vue&type=template&id=9fe8fc54&scoped=true&


var KeyValueTablevue_type_template_id_9fe8fc54_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('table', [_vm._ssrNode("<tr data-v-9fe8fc54>", "</tr>", [_vm._ssrNode("<th data-v-9fe8fc54></th> "), _vm._ssrNode("<td style=\"text-align: right;\" data-v-9fe8fc54>", "</td>", [_vm.can(`employee_personal_edit_access`) && _vm.hideEditBtn !== true ? _c(VIcon["a" /* default */], {
    staticClass: "grey",
    staticStyle: {
      "border-radius": "50%",
      "padding": "5px"
    },
    attrs: {
      "small": "",
      "color": "secondary"
    },
    on: {
      "click": _vm.openEdit
    }
  }, [_vm._v("mdi-pencil")]) : _vm._e()], 1)], 2), _vm._ssrNode(" " + _vm._ssrList(_vm.data, function (item, index) {
    return "<tr data-v-9fe8fc54><th data-v-9fe8fc54>" + _vm._ssrEscape(_vm._s(index)) + "</th> <td data-v-9fe8fc54>" + _vm._ssrEscape("\n      " + _vm._s(_vm.data[index]) + "\n    ") + "</td></tr>";
  }))], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/employee/KeyValueTable.vue?vue&type=template&id=9fe8fc54&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/KeyValueTable.vue?vue&type=script&lang=js&
/* harmony default export */ var KeyValueTablevue_type_script_lang_js_ = ({
  props: ["data", "hideEditBtn"],
  methods: {
    can(item) {
      return true;
    },
    openEdit() {
      this.$emit("open-edit");
    }
  }
});
// CONCATENATED MODULE: ./components/employee/KeyValueTable.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_KeyValueTablevue_type_script_lang_js_ = (KeyValueTablevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/employee/KeyValueTable.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(553)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_KeyValueTablevue_type_script_lang_js_,
  KeyValueTablevue_type_template_id_9fe8fc54_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "9fe8fc54",
  "7d7dc0dc"
  
)

/* harmony default export */ var KeyValueTable = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(684);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("40a48952", content, true, context)
};

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_161a6254_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(603);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_161a6254_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_161a6254_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_161a6254_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Personal_vue_vue_type_style_index_0_id_161a6254_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table[data-v-161a6254]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-161a6254],th[data-v-161a6254]{padding:8px;text-align:left}tr[data-v-161a6254]:nth-child(2n){background-color:#fbfdff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(207);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/Personal.vue?vue&type=template&id=161a6254&scoped=true&






var Personalvue_type_template_id_161a6254_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"text-center ma-2\" data-v-161a6254>", "</div>", [_c(VSnackbar["a" /* default */], {
    attrs: {
      "top": "top",
      "color": "secondary",
      "elevation": "24"
    },
    model: {
      value: _vm.snackbar,
      callback: function ($$v) {
        _vm.snackbar = $$v;
      },
      expression: "snackbar"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.response) + "\n    ")])], 1), _vm._ssrNode(" "), _c(VContainer["a" /* default */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("nationality")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.nationality,
      expression: "personalItem.nationality"
    }],
    staticClass: "form-control",
    attrs: {
      "type": ""
    },
    domProps: {
      "value": _vm.personalItem.nationality
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "nationality", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.nationality ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.nationality[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("Date of birth")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.date_of_birth,
      expression: "personalItem.date_of_birth"
    }],
    staticClass: "form-control",
    attrs: {
      "min": "0",
      "type": "date"
    },
    domProps: {
      "value": _vm.personalItem.date_of_birth
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "date_of_birth", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.date_of_birth ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.date_of_birth[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("religion")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.religion,
      expression: "personalItem.religion"
    }],
    staticClass: "form-control",
    attrs: {
      "type": ""
    },
    domProps: {
      "value": _vm.personalItem.religion
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "religion", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.religion ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.religion[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("marital status")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.marital_status,
      expression: "personalItem.marital_status"
    }],
    staticClass: "form-control",
    attrs: {
      "aria-label": "Default select"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.personalItem, "marital_status", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("select...")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Married")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Single")])]), _vm._v(" "), _vm.errors && _vm.errors.marital_status ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.marital_status[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("Employment of Spouse")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.no_of_spouse,
      expression: "personalItem.no_of_spouse"
    }],
    staticClass: "form-control",
    attrs: {
      "min": "0",
      "type": "text"
    },
    domProps: {
      "value": _vm.personalItem.no_of_spouse
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "no_of_spouse", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.no_of_spouse ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.no_of_spouse[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("no of children")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.no_of_children,
      expression: "personalItem.no_of_children"
    }],
    staticClass: "form-control",
    attrs: {
      "min": "0",
      "type": "number"
    },
    domProps: {
      "value": _vm.personalItem.no_of_children
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "no_of_children", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.no_of_children ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.no_of_children[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("father name")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.father_name,
      expression: "personalItem.father_name"
    }],
    staticClass: "form-control",
    attrs: {
      "min": "0",
      "type": "text"
    },
    domProps: {
      "value": _vm.personalItem.father_name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "father_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.father_name ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.father_name[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("mother name")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.mother_name,
      expression: "personalItem.mother_name"
    }],
    staticClass: "form-control",
    attrs: {
      "min": "0",
      "type": "text"
    },
    domProps: {
      "value": _vm.personalItem.mother_name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "mother_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.mother_name ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.mother_name[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("gender")))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.gender,
      expression: "personalItem.gender"
    }],
    staticClass: "form-select",
    attrs: {
      "aria-label": "Default select"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.personalItem, "gender", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select...")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("Male")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("Female")])]), _vm._v(" "), _vm.errors && _vm.errors.gender ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.gender[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('a', {
    attrs: {
      "href": "javascrip:void(0)"
    },
    on: {
      "click": function ($event) {
        _vm.add_other_personal_info = !_vm.add_other_personal_info;
      }
    }
  }, [_vm._v(_vm._s(_vm.caps(`${_vm.add_other_personal_info ? "hide" : "show"} other field`)))])]), _vm._v(" "), _vm.add_other_personal_info ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("other text")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.other_text,
      expression: "personalItem.other_text"
    }],
    staticClass: "form-control",
    domProps: {
      "value": _vm.personalItem.other_text
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "other_text", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.other_text ? _c('span', {
    staticClass: "text-danger"
  }, [_vm._v(_vm._s(_vm.errors.other_text[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("other value")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.personalItem.other_value,
      expression: "personalItem.other_value"
    }],
    staticClass: "form-control",
    domProps: {
      "value": _vm.personalItem.other_value
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.personalItem, "other_value", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.other_value ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.other_value[0]))]) : _vm._e()])])], 1) : _vm._e(), _vm._v(" "), _vm.errors && _vm.errors.length ? _c('span', {
    staticClass: "error--text"
  }, [_vm._v(_vm._s(_vm.errors))]) : _vm._e()], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "error",
    attrs: {
      "small": ""
    },
    on: {
      "click": _vm.close_personal_info
    }
  }, [_vm._v("\n          Cancel\n        ")]), _vm._v(" "), _c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "small": ""
    },
    on: {
      "click": _vm.save_personal_info
    }
  }, [_vm._v("Save")])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/employee/Personal.vue?vue&type=template&id=161a6254&scoped=true&

// EXTERNAL MODULE: ./components/employee/KeyValueTable.vue + 4 modules
var KeyValueTable = __webpack_require__(561);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/Personal.vue?vue&type=script&lang=js&

/* harmony default export */ var Personalvue_type_script_lang_js_ = ({
  components: {
    KeyValueTable: KeyValueTable["default"]
  },
  props: ["employeeId"],
  data() {
    return {
      endpoint: "personalinfo",
      personal_info: false,
      add_other_personal_info: false,
      snackbar: false,
      response: "",
      errors: [],
      personalItem: {},
      table_data: {}
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    async getInfo() {
      try {
        const id = this.employeeId;
        const endpoint = this.endpoint;
        const {
          data
        } = await this.$axios.get(`${endpoint}/${id}`);

        // Prepare the data for the table
        this.table_data = {
          Nationality: data.nationality,
          Religion: data.religion,
          "Marital Status": data.marital_status == 1 ? "Married" : "Single",
          "Date of Birth": data.date_of_birth,
          "No. of Children": data.no_of_children,
          Father: data.father_name,
          Mother: data.mother_name,
          Gender: data.gender == 1 ? "Male" : "Female",
          "Employment of Spouse": data.no_of_spouse
        };

        // Add the "other_text" and "other_value" properties to the table_data object
        if (data.other_text && data.other_value) {
          this.table_data[caps(data.other_text)] = caps(data.other_value);
        }
      } catch (error) {
        console.error("Error retrieving personal information:", error);
        // Handle the error appropriately (e.g., show an error message)
      }
    },

    caps(str) {
      if (str == "" || str == null) {
        return "---";
      } else {
        let res = str.toString();
        return res.replace(/\b\w/g, c => c.toUpperCase());
      }
    },
    can(item) {
      return true;
    },
    close_personal_info() {
      this.personal_info = false;
      this.errors = [];
      setTimeout(() => {}, 300);
    },
    save_personal_info() {
      var _this$$auth, _this$$auth$user, _this$$auth$user$comp;
      let payload = {
        ...this.personalItem,
        company_id: (_this$$auth = this.$auth) === null || _this$$auth === void 0 ? void 0 : (_this$$auth$user = _this$$auth.user) === null || _this$$auth$user === void 0 ? void 0 : (_this$$auth$user$comp = _this$$auth$user.company) === null || _this$$auth$user$comp === void 0 ? void 0 : _this$$auth$user$comp.id,
        employee_id: this.employeeId
      };
      this.$axios.post(`personalinfo`, payload).then(({
        data
      }) => {
        this.loading = false;
        if (!data.status) {
          this.errors = data.errors;
        } else {
          this.errors = [];
          this.snackbar = true;
          this.response = data.message;
          this.close_personal_info();
        }
      }).catch(e => console.log(e));
    }
  }
});
// CONCATENATED MODULE: ./components/employee/Personal.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_Personalvue_type_script_lang_js_ = (Personalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/employee/Personal.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(683)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_Personalvue_type_script_lang_js_,
  Personalvue_type_template_id_161a6254_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "161a6254",
  "e60f388c"
  
)

/* harmony default export */ var Personal = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=employee-personal.js.map