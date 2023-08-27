exports.ids = [21];
exports.modules = {

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(532);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("87156238", content, true, context)
};

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_style_index_0_id_484785ca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(509);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_style_index_0_id_484785ca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_style_index_0_id_484785ca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_style_index_0_id_484785ca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bank_vue_vue_type_style_index_0_id_484785ca_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table[data-v-484785ca]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-484785ca],th[data-v-484785ca]{padding:8px;text-align:left}tr[data-v-484785ca]:nth-child(2n){background-color:#fbfdff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 545:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/Bank.vue?vue&type=template&id=484785ca&scoped=true&






var Bankvue_type_template_id_484785ca_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "mt-8"
  }, [_vm._ssrNode("<div class=\"text-center ma-2\" data-v-484785ca>", "</div>", [_c(VSnackbar["a" /* default */], {
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
  }, [_vm._v("Bank Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.bank_name,
      expression: "data.bank_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.data.bank_name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "bank_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.bank_name ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.bank_name[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Bank Address")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.address,
      expression: "data.address"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.data.address
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "address", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.address ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.address[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Account No")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.account_no,
      expression: "data.account_no"
    }],
    staticClass: "form-control",
    domProps: {
      "value": _vm.data.account_no
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "account_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.account_no ? _c('span', {
    staticClass: "text-danger mt-2",
    attrs: {
      "type": "text"
    }
  }, [_vm._v(_vm._s(_vm.errors.account_no[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Account Name")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.account_title,
      expression: "data.account_title"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.data.account_title
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "account_title", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.account_title ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.account_title[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("IBAN")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.iban,
      expression: "data.iban"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.data.iban
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "iban", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.iban ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.iban[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    },
    on: {
      "click": function ($event) {
        _vm.add_other_bank_info = !_vm.add_other_bank_info;
      }
    }
  }, [_vm._v(_vm._s(`${_vm.add_other_bank_info ? "hide" : "show"} Other Field`))])]), _vm._v(" "), _vm.add_other_bank_info ? _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Other Text")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.other_text,
      expression: "data.other_text"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.data.other_text
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "other_text", $event.target.value);
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
  }, [_vm._v("Other Value")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.data.other_value,
      expression: "data.other_value"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.data.other_value
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.data, "other_value", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.other_value ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.other_value[0]))]) : _vm._e()])])], 1) : _vm._e(), _vm._v(" "), _vm.errors && _vm.errors.length ? _c('span', {
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
      "click": _vm.save_bank_info
    }
  }, [_vm._v("Save")])], 1)], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/employee/Bank.vue?vue&type=template&id=484785ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/Bank.vue?vue&type=script&lang=js&
/* harmony default export */ var Bankvue_type_script_lang_js_ = ({
  props: ["employeeId", "hideEditBtn"],
  data() {
    return {
      endpoint: "bankinfo",
      add_other_bank_info: false,
      popup: false,
      snackbar: false,
      response: "",
      errors: [],
      //data: {},
      data: {
        bank_name: "",
        account_no: "",
        account_title: "",
        address: "",
        other_text: "",
        other_value: "",
        iban: ""
      }
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.$axios.get(`${this.endpoint}/${this.employeeId}`).then(({
        data
      }) => {
        //this.data = data;

        this.data = {
          bank_name: data.bank_name,
          address: data.address,
          account_no: data.account_no,
          account_title: data.account_title,
          iban: data.iban,
          other_text: data.other_text,
          other_value: data.other_value
        };
      }).catch(err => {
        console.log(err);
      });
    },
    can(item) {
      return true;
    },
    save_bank_info() {
      var _this$$auth, _this$$auth$user, _this$$auth$user$comp;
      let payload = {
        ...this.data,
        company_id: (_this$$auth = this.$auth) === null || _this$$auth === void 0 ? void 0 : (_this$$auth$user = _this$$auth.user) === null || _this$$auth$user === void 0 ? void 0 : (_this$$auth$user$comp = _this$$auth$user.company) === null || _this$$auth$user$comp === void 0 ? void 0 : _this$$auth$user$comp.id,
        employee_id: this.employeeId
      };
      this.$axios.post(`bankinfo`, payload).then(({
        data
      }) => {
        this.loading = false;
        if (!data.status) {
          this.errors = data.errors;
        } else {
          this.$emit("eventFromchild");
          this.errors = [];
          this.snackbar = true;
          this.response = data.message;
          this.getInfo();
          this.close_bank_info();
        }
      }).catch(e => console.log(e));
    },
    close_bank_info() {
      this.popup = false;
      this.errors = [];
      setTimeout(() => {}, 300);
    }
  }
});
// CONCATENATED MODULE: ./components/employee/Bank.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_Bankvue_type_script_lang_js_ = (Bankvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/employee/Bank.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(531)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_Bankvue_type_script_lang_js_,
  Bankvue_type_template_id_484785ca_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "484785ca",
  "045eb294"
  
)

/* harmony default export */ var Bank = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=employee-bank.js.map