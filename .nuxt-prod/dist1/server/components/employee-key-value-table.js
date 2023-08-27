exports.ids = [29];
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

/***/ })

};;
//# sourceMappingURL=employee-key-value-table.js.map