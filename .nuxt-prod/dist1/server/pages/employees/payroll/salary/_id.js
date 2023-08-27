exports.ids = [118,53];
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

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(53);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Preloader.vue?vue&type=template&id=23f7eeb4&


var Preloadervue_type_template_id_23f7eeb4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "text-center",
    staticStyle: {
      "width": "50px",
      "margin": "25% auto"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": "/preloaders/1.gif"
    }
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Preloader.vue?vue&type=template&id=23f7eeb4&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Preloader.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  Preloadervue_type_template_id_23f7eeb4_render,
  staticRenderFns,
  false,
  null,
  null,
  "5a96f77c"
  
)

/* harmony default export */ var Preloader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/index.js
var components_VCard = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employees/payroll/salary/_id.vue?vue&type=template&id=b5c1d71e&







var _idvue_type_template_id_b5c1d71e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.company_payload && _vm.company_payload.name ? _c(VCard["a" /* default */], {
    staticClass: "mx-auto",
    attrs: {
      "justify": "center"
    }
  }, [_c(components_VCard["d" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticClass: "reds",
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "d-flex",
    staticStyle: {
      "border": "1px solid white"
    }
  }, [_c(VImg["a" /* default */], {
    staticStyle: {
      "border-radius": "10%"
    },
    attrs: {
      "src": this.company_payload.logo,
      "max-width": "100",
      "max-height": "100"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ml-3 mt-3"
  }, [_c('div', {
    staticStyle: {
      "border-top": "1px solid white"
    }
  }, [_c('strong', [_vm._v(_vm._s(this.company_payload.name))])]), _vm._v(" "), _c('div', {
    staticClass: "w-10"
  }, [_vm._v(_vm._s(this.company_payload.location))]), _vm._v(" "), _c('div', {
    staticClass: "w-10"
  }, [_vm._v(_vm._s(this.company_payload.p_o_box_no))])])], 1)]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "reds",
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "text-center pt-2"
  }, [_c('h5', {
    staticClass: "text--grey"
  }, [_c('u', [_vm._v("PAYSLIP")])])])]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "reds text-right",
    attrs: {
      "cols": "4"
    }
  }, [_c('div', {
    staticClass: "text-right"
  }, [_c('div', {
    staticClass: "ml-2"
  }, [_c('div', {
    staticStyle: {
      "border-top": "1px solid white"
    }
  }, [_c('strong', [_vm._v("Payslip No: " + _vm._s(_vm.data.payslip_number) + "\n                ")])]), _vm._v(" "), _c('div', {
    staticStyle: {
      "border-top": "1px solid white"
    }
  }, [_c('strong', [_vm._v("Date: " + _vm._s(_vm.data.date) + " ")])])])])])], 1)], 1), _vm._v(" "), _c(components_VCard["d" /* VCardText */], [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["e" /* VCardTitle */], [_vm._v(" Employee Details ")]), _vm._v(" "), _c(components_VCard["d" /* VCardText */], [_c('table', {
    staticStyle: {
      "width": "100%",
      "border-collapse": "collapse",
      "margin-bottom": "10px"
    }
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Employee Name\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm.employee && _vm.employee.first_name ? _c('span', [_vm._v(_vm._s(_vm.employee.first_name))]) : _vm._e(), _vm._v(" "), _vm.employee && _vm.employee.last_name ? _c('span', [_vm._v(_vm._s(_vm.employee.last_name))]) : _vm._e()])]), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Employee Id\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.empCode) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Department\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.data.department && _vm.data.department.name || "---") + "\n                ")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Designation\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.data.designation && _vm.data.designation.name || "---") + "\n                ")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["e" /* VCardTitle */], [_vm._v(" Other Details ")]), _vm._v(" "), _c(components_VCard["d" /* VCardText */], [_c('table', {
    staticStyle: {
      "width": "100%",
      "border-collapse": "collapse",
      "margin-bottom": "10px"
    }
  }, [_c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Salary Month:\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.currentMonth) + ", " + _vm._s(_vm.currentYear) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Salary Type:\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.data.salary_type) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Presents\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.data.present) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Absent\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.data.absent) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Off\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.data.off) + "\n                ")])]), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  Missing\n                ")]), _vm._v(" "), _c('td', {
    staticStyle: {
      "text-align": "right",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.data.missing) + "\n                ")])])])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["e" /* VCardTitle */], [_vm._v(" Earning Details ")]), _vm._v(" "), _c(components_VCard["d" /* VCardText */], [_c('table', {
    staticStyle: {
      "width": "100%",
      "border-collapse": "collapse",
      "margin-bottom": "10px"
    }
  }, [_c('thead', [_c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "padding": "5px",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                    Earnings\n                  ")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right",
      "padding": "5px",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                    Amount\n                  ")])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.data.earnings, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticStyle: {
        "text-align": "left",
        "padding": "5px",
        "border-bottom": "1px solid #ccc"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.caps(item.label)) + "\n                  ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right",
        "padding": "5px",
        "border-bottom": "1px solid #ccc"
      }
    }, [_vm._v("\n                    " + _vm._s(item.value) + "\n                  ")])]);
  }), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "padding": "5px",
      "border-bottom": "1px solid #ccc"
    }
  }, [_c('strong', [_vm._v("Total Earnings")])]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right",
      "padding": "5px",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.data.salary_and_earnings) + "\n                  ")])])], 2)])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["e" /* VCardTitle */], [_vm._v(" Deduction Details ")]), _vm._v(" "), _c(components_VCard["d" /* VCardText */], [_c('table', {
    staticStyle: {
      "width": "100%",
      "border-collapse": "collapse",
      "margin-bottom": "10px"
    }
  }, [_c('thead', [_c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "padding": "5px",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                    Deductions\n                  ")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right",
      "padding": "5px",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                    Amount\n                  ")])])]), _vm._v(" "), _c('tbody', [_vm._l(_vm.data.deductions, function (item, index) {
    return _c('tr', {
      key: index
    }, [_c('td', {
      staticStyle: {
        "text-align": "left",
        "padding": "5px",
        "border-bottom": "1px solid #ccc"
      }
    }, [_vm._v("\n                    " + _vm._s(_vm.caps(item.label)) + "\n                  ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right",
        "padding": "5px",
        "border-bottom": "1px solid #ccc"
      }
    }, [_vm._v("\n                    " + _vm._s(item.value) + "\n                  ")])]);
  }), _vm._v(" "), _vm._l(_vm.countdifference, function (n) {
    return _c('tr', {
      key: n
    }, [_c('th', {
      staticStyle: {
        "text-align": "left",
        "padding": "5px",
        "border-bottom": "1px solid #ccc"
      },
      attrs: {
        "scope": "row"
      }
    }, [_vm._v("\n                     \n                  ")]), _vm._v(" "), _c('td', {
      staticStyle: {
        "text-align": "right",
        "padding": "5px",
        "border-bottom": "1px solid #ccc"
      }
    }, [_vm._v("\n                     \n                  ")])]);
  }), _vm._v(" "), _c('tr', [_c('th', {
    staticStyle: {
      "text-align": "left",
      "padding": "5px",
      "border-bottom": "1px solid #ccc"
    },
    attrs: {
      "scope": "row"
    }
  }, [_vm._v("\n                    Total Deductions\n                  ")]), _vm._v(" "), _c('th', {
    staticStyle: {
      "text-align": "right",
      "padding": "5px",
      "border-bottom": "1px solid #ccc"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.data.deductedSalary) + "\n                  ")])])], 2)])])], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VCard["a" /* default */], {
    attrs: {
      "outlined": ""
    }
  }, [_c(components_VCard["d" /* VCardText */], {
    staticClass: "text-right"
  }, [_c('strong', [_vm._v("Net Salary")]), _vm._v(":\n            " + _vm._s(_vm.numberRound(this.data.earnedSubTotal)) + "\n          ")])], 1)], 1)], 1)], 1)], 1) : _c('Preloader');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/employees/payroll/salary/_id.vue?vue&type=template&id=b5c1d71e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/employees/payroll/salary/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: "employee",
  data: () => ({
    tab: null,
    Model: "Payslip",
    month: new Date().getMonth(),
    year: new Date().getFullYear().toString().slice(-2),
    currentYear: "",
    currentMonth: "",
    getdownloadLink: "",
    data: {},
    empCode: "",
    countdifference: 0,
    company_payload: {
      name: "",
      logo: "",
      member_from: "",
      expiry: "",
      max_branches: "",
      max_employee: "",
      max_devices: "",
      mol_id: "",
      p_o_box_no: ""
    },
    contact_payload: {
      name: "",
      number: "",
      position: "",
      whatsapp: ""
    },
    employee: {},
    earnings: [],
    deductions: []
  }),
  computed: {
    // PaySlipNumber() {
    //   return this.empCode + new Date().getMonth() + 1 + this.currentYear;
    // },
  },
  created() {
    // this.loading = true;

    let today = new Date();
    let y = today.getFullYear();
    let m = today.getMonth() + 1;
    this.currentYear = y;
    this.currentMonth = today.toLocaleString("default", {
      month: "long"
    });
  },
  mounted() {
    this.getDataFromApi();
    this.getCompanyDataFromApi();
  },
  methods: {
    numberRound(val) {
      if (val) return val.toFixed(2);
    },
    can(per) {
      let u = this.$auth.user;
      return true;
    },
    caps(str) {
      if (str == "" || str == null) {
        return "---";
      } else {
        let res = str.toString();
        return res.replace(/\b\w/g, c => c.toUpperCase());
      }
    },
    getDataFromApi() {
      var _this$$auth, _this$$auth$user, _this$$auth$user$comp;
      // this.loading = true;
      //let id = this.$route.params.id;
      let [employee_id, month, year] = this.$route.params.id.split("_");
      this.empCode = employee_id;
      this.$axios.get(`/payslip/${employee_id}`, {
        params: {
          company_id: (_this$$auth = this.$auth) === null || _this$$auth === void 0 ? void 0 : (_this$$auth$user = _this$$auth.user) === null || _this$$auth$user === void 0 ? void 0 : (_this$$auth$user$comp = _this$$auth$user.company) === null || _this$$auth$user$comp === void 0 ? void 0 : _this$$auth$user$comp.id,
          employee_id,
          month,
          year
        }
      }).then(({
        data
      }) => {
        this.data = data;
        this.employee = data.employee;
        this.earnings = data.earnings;
        this.deductions = data.deductions;
        this.countdifference = data.earnings.length - data.deductions.length;

        // this.getdownloadLink =
        //   this.$axios.defaults.baseURL +
        //   "/donwload-payslip-pdf?company_id=" +
        //   this.$auth.user.company_id +
        //   "&employee_id=" +
        //   this.data.employee_id +
        //   "&month=" +
        //   this.data.month +
        //   "&year=" +
        //   this.data.year;

        // this.loading = false;
      });
    },

    getCompanyDataFromApi() {
      var _this$$auth2, _this$$auth2$user, _this$$auth2$user$com;
      let company_id = (_this$$auth2 = this.$auth) === null || _this$$auth2 === void 0 ? void 0 : (_this$$auth2$user = _this$$auth2.user) === null || _this$$auth2$user === void 0 ? void 0 : (_this$$auth2$user$com = _this$$auth2$user.company) === null || _this$$auth2$user$com === void 0 ? void 0 : _this$$auth2$user$com.id;
      this.$axios.get(`company/${company_id}`).then(({
        data
      }) => {
        let r = data.record;
        this.company_payload = r;
        this.contact_payload = r.contact;
        this.preloader = false;
      });
    },
    printContent() {
      const printableContent = document.getElementById("printMe");
      const printWindow = window.open("", "", "height=1000,width=1000");
      printWindow.document.write(printableContent.innerHTML);
      printWindow.print();
    }
  }
});
// CONCATENATED MODULE: ./pages/employees/payroll/salary/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var salary_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/employees/payroll/salary/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  salary_idvue_type_script_lang_js_,
  _idvue_type_template_id_b5c1d71e_render,
  staticRenderFns,
  false,
  null,
  null,
  "561cb980"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Preloader: __webpack_require__(358).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map