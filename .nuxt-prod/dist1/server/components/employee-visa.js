exports.ids = [37];
exports.modules = {

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(530);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("9c78db86", content, true, context)
};

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visa_vue_vue_type_style_index_0_id_1c92303f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(508);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visa_vue_vue_type_style_index_0_id_1c92303f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visa_vue_vue_type_style_index_0_id_1c92303f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visa_vue_vue_type_style_index_0_id_1c92303f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Visa_vue_vue_type_style_index_0_id_1c92303f_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 530:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table[data-v-1c92303f]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-1c92303f],th[data-v-1c92303f]{padding:8px;text-align:left}tr[data-v-1c92303f]:nth-child(2n){background-color:#fbfdff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 544:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/Visa.vue?vue&type=template&id=1c92303f&scoped=true&






var Visavue_type_template_id_1c92303f_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"text-center ma-2\" data-v-1c92303f>", "</div>", [_c(VSnackbar["a" /* default */], {
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
  }, [_vm._v(_vm._s(_vm.caps("Visa no")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.visa_no,
      expression: "visaItem.visa_no"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.visaItem.visa_no
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "visa_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.visa_no ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.visa_no[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("note")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.note,
      expression: "visaItem.note"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.visaItem.note
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "note", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.note ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.note[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("place of issues")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.place_of_issues,
      expression: "visaItem.place_of_issues"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.visaItem.place_of_issues
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "place_of_issues", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.place_of_issues ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.place_of_issues[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("country")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.country,
      expression: "visaItem.country"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.visaItem.country
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "country", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.country ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.country[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("issue date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.issue_date,
      expression: "visaItem.issue_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.visaItem.issue_date
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "issue_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.issue_date ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.issue_date[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("expiry date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.expiry_date,
      expression: "visaItem.expiry_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.visaItem.expiry_date
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "expiry_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.expiry_date ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.expiry_date[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("labour no")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.labour_no,
      expression: "visaItem.labour_no"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.visaItem.labour_no
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "labour_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.labour_no ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.labour_no[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("expiry date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.personal_no,
      expression: "visaItem.personal_no"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.visaItem.personal_no
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "personal_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.personal_no ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.personal_no[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("labour issue date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.labour_issue_date,
      expression: "visaItem.labour_issue_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.visaItem.labour_issue_date
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "labour_issue_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.labour_issue_date ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.labour_issue_date[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("labour expiry date")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.visaItem.labour_expiry_date,
      expression: "visaItem.labour_expiry_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.visaItem.labour_expiry_date
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.visaItem, "labour_expiry_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.labour_expiry_date ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.labour_expiry_date[0]))]) : _vm._e()])]), _vm._v(" "), _vm.errors && _vm.errors.length ? _c('span', {
    staticClass: "error--text"
  }, [_vm._v(_vm._s(_vm.errors))]) : _vm._e()], 1), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticClass: "text-right",
    attrs: {
      "cols": "12"
    }
  }, [_c(VBtn["a" /* default */], {
    staticClass: "primary",
    attrs: {
      "small": ""
    },
    on: {
      "click": _vm.save_visa_info
    }
  }, [_vm._v("Save")])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/employee/Visa.vue?vue&type=template&id=1c92303f&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/Visa.vue?vue&type=script&lang=js&
/* harmony default export */ var Visavue_type_script_lang_js_ = ({
  props: ["employeeId"],
  data() {
    return {
      visa_info: false,
      snackbar: false,
      response: "",
      errors: [],
      visaItem: {}
    };
  },
  created() {
    this.getInfo(this.employeeId);
  },
  methods: {
    getInfo(id) {
      this.$axios.get(`visa/${id}`).then(({
        data
      }) => {
        this.visaItem = {
          ...data,
          employee_id: id
        };
      });
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
    close_visa_info() {
      this.visa_info = false;
      this.errors = [];
      setTimeout(() => {}, 300);
    },
    save_visa_info() {
      var _this$$auth, _this$$auth$user, _this$$auth$user$comp;
      let payload = {
        ...this.visaItem,
        company_id: (_this$$auth = this.$auth) === null || _this$$auth === void 0 ? void 0 : (_this$$auth$user = _this$$auth.user) === null || _this$$auth$user === void 0 ? void 0 : (_this$$auth$user$comp = _this$$auth$user.company) === null || _this$$auth$user$comp === void 0 ? void 0 : _this$$auth$user$comp.id,
        employee_id: this.visaItem.employee_id
      };
      this.$axios.post(`visa`, payload).then(({
        data
      }) => {
        this.loading = false;
        if (!data.status) {
          this.errors = data.errors;
        } else {
          this.errors = [];
          this.snackbar = true;
          this.response = data.message;
          this.close_visa_info();
        }
      }).catch(e => console.log(e));
    }
  }
});
// CONCATENATED MODULE: ./components/employee/Visa.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_Visavue_type_script_lang_js_ = (Visavue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/employee/Visa.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(529)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_Visavue_type_script_lang_js_,
  Visavue_type_template_id_1c92303f_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "1c92303f",
  "6ad55b8a"
  
)

/* harmony default export */ var Visa = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=employee-visa.js.map