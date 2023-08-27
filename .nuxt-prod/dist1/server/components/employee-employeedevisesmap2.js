exports.ids = [28];
exports.modules = {

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(682);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("680c10d6", content, true, context)
};

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employeedevisesmap2_vue_vue_type_style_index_0_id_5ec209a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(602);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employeedevisesmap2_vue_vue_type_style_index_0_id_5ec209a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employeedevisesmap2_vue_vue_type_style_index_0_id_5ec209a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employeedevisesmap2_vue_vue_type_style_index_0_id_5ec209a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_employeedevisesmap2_vue_vue_type_style_index_0_id_5ec209a8_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 682:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container select[data-v-5ec209a8]{height:200px;width:100%}.container .middle[data-v-5ec209a8]{text-align:center}.container button[data-v-5ec209a8]{margin-bottom:5px;width:80%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/VToolbar.js
var VToolbar = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/employeedevisesmap2.vue?vue&type=template&id=5ec209a8&scoped=true&




var employeedevisesmap2vue_type_template_id_5ec209a8_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "width": "100% !important"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VRow["a" /* default */], {
    staticClass: "mt-5 mb-5"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c('h3', [_vm._v("Employees Devices")]), _vm._v(" "), _c('div', [_vm._v("Dashboard")])])], 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "5"
    }
  }, [_c(VToolbar["a" /* default */], {
    attrs: {
      "color": "background",
      "dense": "",
      "flat": "",
      "dark": ""
    }
  }, [_c('span', [_vm._v("All Employees List")])]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.leftSelectedUsers,
      expression: "leftSelectedUsers"
    }],
    staticClass: "form-control",
    attrs: {
      "multiple": "",
      "size": "13"
    },
    on: {
      "dblclick": _vm.moveRight,
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.leftSelectedUsers = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.leftEmployees, function (user, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n            " + _vm._s(user.first_name) + "\n          ")]);
  }), 0)])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "2"
    }
  }, [_c('div', {
    staticStyle: {
      "text-align": "-webkit-center"
    }
  }, [_c('button', {
    staticClass: "btn btn-primary btn-block",
    attrs: {
      "type": "button",
      "id": "undo_redo_undo"
    }
  }, [_vm._v("\n          Options\n        ")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-block",
    attrs: {
      "type": "button",
      "id": "undo_redo_rightSelected"
    },
    on: {
      "click": _vm.moveRight
    }
  }, [_c('i', {
    staticClass: "v-icon notranslate mdi mdi-chevron-right theme--red",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-block",
    attrs: {
      "type": "button",
      "id": "undo_redo_rightAll"
    },
    on: {
      "click": _vm.allmoveRight
    }
  }, [_c('i', {
    staticClass: "v-icon notranslate mdi mdi-chevron-double-right theme--red",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-block",
    attrs: {
      "type": "button",
      "id": "undo_redo_leftSelected"
    },
    on: {
      "click": _vm.moveLeft
    }
  }, [_c('i', {
    staticClass: "v-icon notranslate mdi mdi-chevron-left theme--red",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default btn-block",
    attrs: {
      "type": "button",
      "id": "undo_redo_leftAll"
    },
    on: {
      "click": _vm.allmoveLeft
    }
  }, [_c('i', {
    staticClass: "v-icon notranslate mdi mdi-chevron-double-left theme--red",
    attrs: {
      "aria-hidden": "true"
    }
  })])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "5"
    }
  }, [_c(VToolbar["a" /* default */], {
    attrs: {
      "color": "background",
      "dense": "",
      "flat": "",
      "dark": ""
    }
  }, [_c('span', [_vm._v("Selected Employees List")])]), _vm._v(" "), _c('div', [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.rightSelectedUsers,
      expression: "rightSelectedUsers"
    }],
    staticClass: "form-control",
    attrs: {
      "multiple": "",
      "size": "13"
    },
    on: {
      "dblclick": _vm.moveLeft,
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.rightSelectedUsers = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.rightEmployees, function (user, index) {
    return _c('option', {
      key: index,
      domProps: {
        "value": user.id
      }
    }, [_vm._v("\n            " + _vm._s(user.first_name) + "\n          ")]);
  }), 0)])], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/employee/employeedevisesmap2.vue?vue&type=template&id=5ec209a8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/employee/employeedevisesmap2.vue?vue&type=script&lang=js&
/* harmony default export */ var employeedevisesmap2vue_type_script_lang_js_ = ({
  data() {
    return {
      endpointEmployee: "employee",
      endpointDevise: "device",
      leftSelectedUsers: [],
      leftEmployees: [],
      rightSelectedUsers: [],
      rightEmployees: []
    };
  },
  created() {
    //this.getDevisesDataFromApi();
    this.getEmployeesDataFromApi();
  },
  methods: {
    onSubmit() {
      //this.$emit("todo-added", this.employeeOptions);
      let options = {
        params: {
          // deviseOptionsselected: this.rightEmployees,
          employeeOptionsselected: this.rightEmployees
        }
      };

      // this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
      //   //this.deviseslist = data.data;
      // });
    },

    // getDevisesDataFromApi(url = this.endpointDevise) {
    //   //this.loading = true;
    //   // let page = this.pagination.current;
    //   let options = {
    //     params: {
    //       per_page: 1000, //this.pagination.per_page,
    //       company_id: this.$auth.user.company_id,
    //     },
    //   };
    //   let page = 1;
    //   this.$axios.get(`${url}?page=${page}`, options).then(({ data }) => {
    //     this.deviseslist = data.data;
    //   });
    // },
    getEmployeesDataFromApi(url = this.endpointEmployee) {
      //this.loading = true;
      // let page = this.pagination.current;
      let options = {
        params: {
          per_page: 1000,
          //this.pagination.per_page,
          company_id: this.$auth.user.company_id
        }
      };
      let page = 1;
      this.$axios.get(`${url}?page=${page}`, options).then(({
        data
      }) => {
        this.leftEmployees = data.data;
      });
    },
    sortObject: o => o.sort(function compareByName(a, b) {
      let nameA = a.first_name.toUpperCase(); // Convert names to uppercase for case-insensitive sorting
      let nameB = b.first_name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else {
        return 0;
      }
    }),
    allmoveLeft() {
      this.leftEmployees = this.leftEmployees.concat(this.rightEmployees);
      this.rightEmployees = [];
      this.leftEmployees = this.sortObject(this.leftEmployees);
    },
    allmoveRight() {
      this.rightEmployees = this.rightEmployees.concat(this.leftEmployees);
      this.leftEmployees = [];
      this.rightEmployees = this.sortObject(this.rightEmployees);
    },
    moveLeft() {
      if (!this.rightSelectedUsers.length) return;

      //for (let i = this.leftSelectedUsers.length; i > 0; i--) {
      let _rightSelectedUsers_length = this.rightSelectedUsers.length;
      for (let i = 0; i < _rightSelectedUsers_length; i++) {
        if (this.rightSelectedUsers) {
          let selectedindex = this.rightEmployees.findIndex(e => e.id == this.rightSelectedUsers[i]);
          let selectedobject = this.rightEmployees.find(e => e.id == this.rightSelectedUsers[i]);
          this.leftEmployees.push(selectedobject);
          this.rightEmployees.splice(selectedindex, 1);
        }
      }
      this.leftEmployees = this.sortObject(this.leftEmployees);
    },
    moveRight() {
      if (!this.leftSelectedUsers.length) return;
      let _leftSelectedUsers_length = this.leftSelectedUsers.length;
      for (let i = 0; i < _leftSelectedUsers_length; i++) {
        if (this.leftSelectedUsers) {
          let selectedindex = this.leftEmployees.findIndex(e => e.id == this.leftSelectedUsers[i]);
          let selectedobject = this.leftEmployees.find(e => e.id == this.leftSelectedUsers[i]);
          this.rightEmployees.push(selectedobject);
          this.leftEmployees.splice(selectedindex, 1);
        }
      }
      this.rightEmployees = this.sortObject(this.rightEmployees);
    }
  }
});
// CONCATENATED MODULE: ./components/employee/employeedevisesmap2.vue?vue&type=script&lang=js&
 /* harmony default export */ var employee_employeedevisesmap2vue_type_script_lang_js_ = (employeedevisesmap2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/employee/employeedevisesmap2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(681)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  employee_employeedevisesmap2vue_type_script_lang_js_,
  employeedevisesmap2vue_type_template_id_5ec209a8_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "5ec209a8",
  "8008a52a"
  
)

/* harmony default export */ var employeedevisesmap2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=employee-employeedevisesmap2.js.map