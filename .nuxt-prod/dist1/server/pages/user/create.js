exports.ids = [182,45];
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

/***/ 769:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/create.vue?vue&type=template&id=7f59ec90&







var createvue_type_template_id_7f59ec90_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.can(`user_access`) ? _c('div', [_vm._ssrNode("<div class=\"text-center ma-2\">", "</div>", [_c(VSnackbar["a" /* default */], {
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
  }, [_c('h3', [_vm._v("User")]), _vm._v(" "), _c('div', [_vm._v("Dashboard / User / Create")])])], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], [_c(VCard["a" /* default */], {
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
  }), _vm._v("\n              Name "), _c('span', {
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
      "type": ""
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
  })]), _vm._v(" "), _vm.errors && _vm.errors.name ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.name[0]))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }), _vm._v("\n              Email "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.email,
      expression: "payload.email"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "email"
    },
    domProps: {
      "value": _vm.payload.email
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payload, "email", $event.target.value);
      }
    }
  })]), _vm._v(" "), _vm.errors && _vm.errors.email ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.email[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Password "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.password,
      expression: "payload.password"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password"
    },
    domProps: {
      "value": _vm.payload.password
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payload, "password", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.password ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.password[0]))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Confirm Password "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")])]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.password_confirmation,
      expression: "payload.password_confirmation"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "password"
    },
    domProps: {
      "value": _vm.payload.password_confirmation
    },
    on: {
      "input": function ($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.payload, "password_confirmation", $event.target.value);
      }
    }
  }), _vm._v(" "), _vm.errors && _vm.errors.password_confirmation ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.password_confirmation[0]))]) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-6"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-form-label"
  }, [_vm._v("Role ")]), _vm._v(" "), _c('span', {
    staticClass: "text-danger"
  }, [_vm._v("*")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.payload.role_id,
      expression: "payload.role_id"
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
        _vm.$set(_vm.payload, "role_id", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c('option', {
    attrs: {
      "value": ""
    }
  }, [_vm._v("Select Role")]), _vm._v(" "), _vm._l(_vm.roles, function (item, idx) {
    return _c('option', {
      key: idx,
      domProps: {
        "value": item.id
      }
    }, [_vm._v(_vm._s(item.name))]);
  })], 2), _vm._v(" "), _vm.errors && _vm.errors.role_id ? _c('span', {
    staticClass: "text-danger mt-2"
  }, [_vm._v(_vm._s(_vm.errors.role_id[0]))]) : _vm._e()])])]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('div', {
    staticClass: "text-right"
  }, [_vm.can(`user_create`) ? _c(VBtn["a" /* default */], {
    attrs: {
      "small": "",
      "loading": _vm.loading,
      "color": "primary"
    },
    on: {
      "click": _vm.store_device
    }
  }, [_vm._v("\n                Submit\n              ")]) : _vm._e()], 1)])], 1)], 1)], 1)], 1)], 2) : _c('NoAccess');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/user/create.vue?vue&type=template&id=7f59ec90&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/create.vue?vue&type=script&lang=js&
/* harmony default export */ var createvue_type_script_lang_js_ = ({
  data: () => ({
    loading: false,
    payload: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      role_id: ""
    },
    errors: [],
    roles: [],
    response: "",
    snackbar: false
  }),
  async created() {
    this.getRoles();
  },
  methods: {
    can(per) {
      let u = this.$auth.user;
      return u && u.permissions.some(e => e == per || per == "/") || u.is_master;
    },
    getRoles() {
      let options = {
        params: {
          company_id: this.$auth.user.company_id
        }
      };
      this.$axios.get(`role`, options).then(({
        data
      }) => {
        this.roles = data.data;
      });
    },
    store_device() {
      let payload = this.payload;
      payload.company_id = this.$auth.user.company_id;
      this.loading = true;
      this.$axios.post(`/users`, payload).then(({
        data
      }) => {
        this.loading = false;
        if (!data.status) {
          this.errors = data.errors;
        } else {
          this.snackbar = true;
          this.response = "User added successfully";
          setTimeout(() => this.$router.push(`/user`), 2000);
        }
      }).catch(e => console.log(e));
    }
  }
});
// CONCATENATED MODULE: ./pages/user/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/user/create.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_createvue_type_script_lang_js_,
  createvue_type_template_id_7f59ec90_render,
  staticRenderFns,
  false,
  null,
  null,
  "406a245a"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NoAccess: __webpack_require__(280).default})


/***/ })

};;
//# sourceMappingURL=create.js.map