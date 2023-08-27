exports.ids = [90,45,53];
exports.modules = {

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

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VCard/VCard.js
var VCard = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VImg/VImg.js
var VImg = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/companies/details/_id.vue?vue&type=template&id=4ae34314&




















var _idvue_type_template_id_4ae34314_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.can(`company_details_access`) ? _c('div', [!_vm.loading ? _vm._ssrNode("<div>", "</div>", [_c(VRow["a" /* default */], {
    staticClass: "mt-10 mb-10"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "10"
    }
  }, [_c('h3', [_vm._v("Company")]), _vm._v(" "), _c('div', [_vm._v("Dashboard / Company / Details")])])], 1), _vm._ssrNode(" "), _c(VCard["a" /* default */], {
    attrs: {
      "elevation": "2"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    staticStyle: {
      "border-right": "1px dashed #808080"
    },
    attrs: {
      "cols": "6"
    }
  }, [_c(VListItem["a" /* default */], [_c(VListItemAvatar["a" /* default */], {
    attrs: {
      "tile": "",
      "size": "120"
    }
  }, [_c(VImg["a" /* default */], {
    attrs: {
      "src": _vm.company_payload.logo || '/no-image.PNG'
    }
  })], 1), _vm._v(" "), _c(VList["g" /* VListItemContent */], [_c('div', {
    staticClass: "text-overline mb-1"
  }, [_vm._v("\n                Company Code : " + _vm._s(_vm.company_payload.company_code) + "\n              ")]), _vm._v(" "), _c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h5 mb-1"
  }, [_vm._v("\n                " + _vm._s(_vm.company_payload.name) + "\n              ")]), _vm._v(" "), _c(VList["j" /* VListItemSubtitle */], [_vm._v(_vm._s(_vm.login_payload.email))])], 1)], 1), _vm._v(" "), _c(VListItem["a" /* default */], [_c(VList["g" /* VListItemContent */], [_c(VRow["a" /* default */], {
    staticClass: "mt-2"
  }, [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                    Company Email\n                  ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.login_payload.email) + "\n                ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                    Member From\n                  ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.company_payload.show_member_from) + "\n                ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                    Expiry Date\n                  ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.company_payload.show_expiry) + "\n                ")]), _vm._v(" "), _vm.company_payload.max_branches > 0 ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                    Max Branches\n                  ")])], 1) : _vm._e(), _vm._v(" "), _vm.company_payload.max_branches > 0 ? _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.company_payload.max_branches) + "\n                ")]) : _vm._e(), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                    Max Employees\n                  ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.company_payload.max_employee) + "\n                ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "3"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                    Max Devices\n                  ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n                  " + _vm._s(_vm.company_payload.max_devices) + "\n                ")])], 1)], 1)], 1)], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                Contact Name\n              ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.contact_payload.contact_name) + "\n            ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    staticClass: "text-right",
    staticStyle: {
      "margin": "-8px"
    },
    attrs: {
      "cols": "4"
    }
  }, [_c(VIcon["a" /* default */], {
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
      "click": function ($event) {
        return _vm.editItem(`/companies/${_vm.$auth.user.company.id}`);
      }
    }
  }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                Contact Number\n              ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.contact_payload.contact_no) + "\n            ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                Contact Position\n              ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.contact_payload.contact_position) + "\n            ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                Contact Whatsapp\n              ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.contact_payload.contact_whatsapp) + "\n            ")]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "4"
    }
  }, [_c(VList["k" /* VListItemTitle */], {
    staticClass: "text-h7 mb-1"
  }, [_vm._v("\n                Company Created At\n              ")])], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "8"
    }
  }, [_vm._v("\n              " + _vm._s(_vm.company_payload.created_at) + "\n            ")])], 1)], 1)], 1)], 1), _vm._ssrNode(" "), false ? undefined : _vm._e()], 2) : _c('Preloader')], 1) : _c('NoAccess');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/companies/details/_id.vue?vue&type=template&id=4ae34314&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/companies/details/_id.vue?vue&type=script&lang=js&
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  data: () => ({
    loading: true,
    company_payload: {
      name: "",
      logo: "",
      location: "",
      member_from: "",
      expiry: "",
      max_employee: "",
      max_devices: ""
    },
    contact_payload: {
      contact_name: "",
      contact_no: "",
      contact_position: "",
      contact_whatsapp: ""
    },
    login_payload: {
      user_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    },
    errors: [],
    data: [],
    devices: []
  }),
  async created() {
    this.getDataFromApi();
    this.getCompanyDetails();
    this.getDevicesByCompanyId();
  },
  methods: {
    can(per) {
      let u = this.$auth.user;
      return u && u.permissions.some(e => e.name == per || per == "/") || u.is_master;
    },
    getDataFromApi() {
      this.$axios.get(`company/${this.$route.params.id}/branches`).then(({
        data
      }) => {
        this.data = data.data;
      });
    },
    getDevicesByCompanyId() {
      this.$axios.get(`company/${this.$route.params.id}/devices`).then(({
        data
      }) => {
        this.devices = data.data;
      });
    },
    getCompanyDetails() {
      this.$axios.get(`company/${this.$route.params.id}`).then(({
        data
      }) => {
        let {
          contact,
          user,
          member_from,
          expiry
        } = data.record;
        this.contact_payload = {
          contact_name: contact.name,
          contact_no: contact.number,
          contact_position: contact.position,
          contact_whatsapp: contact.whatsapp
        };
        this.login_payload = {
          user_name: data.record.name,
          email: data.record.email
        };
        this.company_payload = {
          ...data.record,
          member_from: this.formatted_date(member_from),
          expiry: this.formatted_date(expiry)
        };
        this.loading = false;
      });
    },
    formatted_date(v) {
      let [year, month, date] = v.split("/");
      return `${year}-${month}-${date}`;
    },
    goDetails(id) {
      this.$router.push(`/branch/details/${id}`);
    },
    attachment(e) {
      this.company_payload.logo = e.target.files[0] || "";
    },
    editItem(item) {
      this.$router.push(item);
    },
    deleteItem(item) {
      confirm("Are you sure you want to delete this item?") && this.$axios.delete("branch/" + item.id).then(res => {
        const index = this.data.indexOf(item);
        this.data.splice(index, 1);
      });
    }
  }
});
// CONCATENATED MODULE: ./pages/companies/details/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var details_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/companies/details/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  details_idvue_type_script_lang_js_,
  _idvue_type_template_id_4ae34314_render,
  staticRenderFns,
  false,
  null,
  null,
  "f2358c76"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Preloader: __webpack_require__(358).default,NoAccess: __webpack_require__(280).default})


/***/ })

};;
//# sourceMappingURL=_id.js.map