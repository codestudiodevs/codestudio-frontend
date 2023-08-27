exports.ids = [143,45];
exports.modules = {

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return VCardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VCardSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return VCardText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VCardTitle; });
/* harmony import */ var _VCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _VCard__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);


const VCardActions = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "k"])('v-card__actions');
const VCardSubtitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "k"])('v-card__subtitle');
const VCardText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "k"])('v-card__text');
const VCardTitle = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__[/* createSimpleFunctional */ "k"])('v-card__title');

/* unused harmony default export */ var _unused_webpack_default_export = ({
  $_vuetify_subcomponents: {
    VCard: _VCard__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
    VCardActions,
    VCardSubtitle,
    VCardText,
    VCardTitle
  }
});

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NoAccess.vue?vue&type=template&id=6c57f1d1&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center",
    staticStyle: {
      "margin-top": "25%"
    }
  }, [_vm._ssrNode("<b>No Access</b>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NoAccess.vue?vue&type=template&id=6c57f1d1&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/NoAccess.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3b6acbe9"
  
)

/* harmony default export */ var NoAccess = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 781:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VSnackbar/VSnackbar.js
var VSnackbar = __webpack_require__(207);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/master/device/create/_id.vue?vue&type=template&id=a02af448&







var _idvue_type_template_id_a02af448_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.can('master') ? _c('div', [_vm._ssrNode("<div class=\"text-center ma-2\">", "</div>", [_c(VSnackbar["a" /* default */], {
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
  }, [_vm._v("\n      " + _vm._s(_vm.response) + "\n    ")])], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], {
    staticClass: "mt-5 mb-10"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "10"
    }
  }, [_c('h3', [_vm._v("Device")]), _vm._v(" "), _c('div', [_vm._v("Dashboard / Device / Create")])])], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(VCard["a" /* default */], {
    attrs: {
      "flat": ""
    }
  }, [_c(components_VCard["d" /* VCardText */], [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Device Name ")]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.name,
      expression: "payload.name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.payload.name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payload, "name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.name ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.name[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Device Short Name ")]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.short_name,
      expression: "payload.short_name"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.payload.short_name
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payload, "short_name", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.short_name ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.short_name[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Device Type ")]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.device_type,
      expression: "payload.device_type"
    }],
    staticClass: "form-select pt-1 pb-1",
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
        _vm.$set(_vm.payload, "device_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select Device Type")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "in"
    }
  }, [_vm._v("In")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "out"
    }
  }, [_vm._v("Out")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "auto"
    }
  }, [_vm._v("Auto")])]), _vm._v(" "), _vm.errors && _vm.errors.device_type ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.device_type[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Device Id ")]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.device_id,
      expression: "payload.device_id"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.payload.device_id
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payload, "device_id", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.device_id ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.device_id[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Device Model Number")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.model_number,
      expression: "payload.model_number"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text"
    },
    domProps: {
      "value": _vm.payload.model_number
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payload, "model_number", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.model_number ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.model_number[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Device Status ")]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.status_id,
      expression: "payload.status_id"
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
        _vm.$set(_vm.payload, "status_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select Device Status")]), _vm._v(" "), _vm._l(_vm.device_statusses, function (device_status, idx) {
    return _c('option', {
      key: idx,
      domProps: {
        "value": device_status.id
      }
    }, [_vm._v("\n                  " + _vm._s(device_status.name) + "\n                ")]);
  })], 2), _vm._v(" "), _vm.errors && _vm.errors.status_id ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.status_id[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Company List")]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.company_id,
      expression: "payload.company_id"
    }],
    staticClass: "form-select",
    attrs: {
      "disabled": "",
      "aria-label": "Default select example"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.payload, "company_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select Device Status")]), _vm._v(" "), _vm._l(_vm.companies, function (company, idx) {
    return _c('option', {
      key: idx,
      domProps: {
        "value": company.id
      }
    }, [_vm._v("\n                  " + _vm._s(company.name) + "\n                ")]);
  })], 2), _vm._v(" "), _vm.errors && _vm.errors.company_id ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.company_id[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-4"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Report Type")]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.report_type,
      expression: "payload.report_type"
    }],
    staticClass: "form-select",
    attrs: {
      "aria-label": "Default select example"
    },
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.$set(_vm.payload, "report_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "Attendance"
    }
  }, [_vm._v("Attendance")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Access Control"
    }
  }, [_vm._v("Access Control")])]), _vm._v(" "), _vm.errors && _vm.errors.company_id ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.company_id[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Device Location ")]), _vm._v(" "), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.location,
      expression: "payload.location"
    }],
    staticClass: "form-control",
    attrs: {
      "id": "textAreaExample1",
      "rows": "5"
    },
    domProps: {
      "value": _vm.payload.location
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payload, "location", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.location ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.location[0]))]) : _vm._e()])])]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-right"
  }, [_c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "loading": _vm.loading,
      "color": "primary"
    },
    on: {
      "click": _vm.store_device
    }
  }, [_vm._v("\n                Submit\n              ")])], 1)])], 1)], 1)], 1)], 1)], 2) : _c('NoAccess');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/master/device/create/_id.vue?vue&type=template&id=a02af448&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/master/device/create/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout({
    $auth
  }) {
    let {
      user_type
    } = $auth.user;
    if (user_type == "master") {
      return "master";
    } else if (user_type == "employee") {
      return "employee";
    } else if (user_type == "master") {
      return "default";
    }
  },
  data: () => ({
    loading: false,
    upload: {
      name: ""
    },
    payload: {
      report_type: "Attendance",
      name: "",
      device_type: "",
      device_id: "",
      model_number: "",
      status_id: "",
      company_id: "",
      location: "",
      short_name: "",
      ip: "0.0.0.0",
      port: "8101"
    },
    errors: [],
    device_statusses: [],
    companies: [],
    data: {},
    response: "",
    snackbar: false
  }),
  async created() {
    this.getCompanies();
    this.getDeviceStatus();
    this.payload.company_id = this.$route.params.id;
  },
  methods: {
    can(per) {
      let u = this.$auth.user;
      return u && u.user_type == per;
    },
    getCompanies() {
      this.$axios.get(`company`).then(({
        data
      }) => {
        this.companies = data.data;
      });
    },
    getDeviceStatus() {
      this.$axios.get(`device_status`).then(({
        data
      }) => {
        this.device_statusses = data.data;
      });
    },
    store_device() {
      let payload = this.payload;
      this.$axios.post(`/device`, payload).then(({
        data
      }) => {
        this.loading = false;
        if (!data.status) {
          this.errors = data.errors;
        } else if (data.status == "device_api_error") {
          this.errors = [];
          this.snackbar = true;
          this.response = "Check your device details";
        } else {
          this.snackbar = true;
          this.response = data.message;
          setTimeout(() => this.$router.push(`/master/companies/details/${this.payload.company_id}`), 2000);
        }
      }).catch(e => console.log(e));
    }
  }
});
// CONCATENATED MODULE: ./pages/master/device/create/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var create_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/master/device/create/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  create_idvue_type_script_lang_js_,
  _idvue_type_template_id_a02af448_render,
  staticRenderFns,
  false,
  null,
  null,
  "46c6cff0"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NoAccess: __webpack_require__(280).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map