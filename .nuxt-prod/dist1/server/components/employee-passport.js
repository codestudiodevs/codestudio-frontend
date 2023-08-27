exports.ids = [32];
exports.modules = {

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(526);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("2799dbca", content, true, context)
};

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Passport_vue_vue_type_style_index_0_id_6950c580_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(506);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Passport_vue_vue_type_style_index_0_id_6950c580_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Passport_vue_vue_type_style_index_0_id_6950c580_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Passport_vue_vue_type_style_index_0_id_6950c580_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Passport_vue_vue_type_style_index_0_id_6950c580_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "table[data-v-6950c580]{border-collapse:collapse;font-family:arial,sans-serif;width:100%}td[data-v-6950c580],th[data-v-6950c580]{padding:8px;text-align:left}tr[data-v-6950c580]:nth-child(2n){background-color:#fbfdff}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(207);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/Passport.vue?vue&type=template&id=6950c580&scoped=true&





var Passportvue_type_template_id_6950c580_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"text-center ma-2\" data-v-6950c580>", "</div>", [_c(VSnackbar["a" /* default */], {
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
  }, [_vm._v("\n      " + _vm._s(_vm.response) + "\n    ")])], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v(_vm._s(_vm.caps("passport no")))]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.passport_list.passport_no,
      expression: "passport_list.passport_no"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.passport_list.passport_no
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.passport_list, "passport_no", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.passport_no ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.passport_no[0]))]) : _vm._e()])]), _vm._v(" "), _c(VCol["a" /* default */], {
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
      value: _vm.passport_list.note,
      expression: "passport_list.note"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.passport_list.note
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.passport_list, "note", $event.target.value);
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
      value: _vm.passport_list.place_of_issues,
      expression: "passport_list.place_of_issues"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.passport_list.place_of_issues
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.passport_list, "place_of_issues", $event.target.value);
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
      value: _vm.passport_list.country,
      expression: "passport_list.country"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.passport_list.country
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.passport_list, "country", $event.target.value);
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
      value: _vm.passport_list.issue_date,
      expression: "passport_list.issue_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.passport_list.issue_date
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.passport_list, "issue_date", $event.target.value);
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
      value: _vm.passport_list.expiry_date,
      expression: "passport_list.expiry_date"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "date"
    },
    domProps: {
      "value": _vm.passport_list.expiry_date
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.passport_list, "expiry_date", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.expiry_date ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.expiry_date[0]))]) : _vm._e()])]), _vm._v(" "), _vm.errors && _vm.errors.length ? _c('span', {
    staticClass: "error--text"
  }, [_vm._v(_vm._s(_vm.errors))]) : _vm._e()], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
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
      "click": _vm.save_passport_info
    }
  }, [_vm._v("Save")])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/employee/Passport.vue?vue&type=template&id=6950c580&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/Passport.vue?vue&type=script&lang=js&
/* harmony default export */ var Passportvue_type_script_lang_js_ = ({
  props: ["employeeId"],
  data() {
    return {
      passport_info: false,
      errors: [],
      snackbar: false,
      response: "",
      passport_list: {}
    };
  },
  created() {
    this.getInfo(this.employeeId);
  },
  methods: {
    getInfo(id) {
      this.$axios.get(`passport/${id}`).then(({
        data
      }) => {
        this.passport_list = {
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
    close_passport_info() {
      this.passport_info = false;
      this.errors = [];
      setTimeout(() => {}, 300);
    },
    save_passport_info() {
      var _this$$auth, _this$$auth$user, _this$$auth$user$comp;
      let payload = {
        ...this.passport_list,
        company_id: (_this$$auth = this.$auth) === null || _this$$auth === void 0 ? void 0 : (_this$$auth$user = _this$$auth.user) === null || _this$$auth$user === void 0 ? void 0 : (_this$$auth$user$comp = _this$$auth$user.company) === null || _this$$auth$user$comp === void 0 ? void 0 : _this$$auth$user$comp.id,
        employee_id: this.passport_list.employee_id
      };
      this.$axios.post(`passport`, payload).then(({
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
          this.close_passport_info();
        }
      }).catch(e => console.log(e));
    }
  }
});
// CONCATENATED MODULE: ./components/employee/Passport.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_Passportvue_type_script_lang_js_ = (Passportvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/employee/Passport.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(525)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_Passportvue_type_script_lang_js_,
  Passportvue_type_template_id_6950c580_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "6950c580",
  "302cdee8"
  
)

/* harmony default export */ var Passport = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=employee-passport.js.map