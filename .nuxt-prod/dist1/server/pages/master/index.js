exports.ids = [146,45];
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

/***/ 718:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js
var VListItemAvatar = __webpack_require__(69);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js
var VList = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/master/index.vue?vue&type=template&id=2c8ce3da&









var mastervue_type_template_id_2c8ce3da_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.can('master') ? _c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c(VRow["a" /* default */], _vm._l(_vm.total_items, function (i, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      attrs: {
        "xs": "12",
        "sm": "12",
        "md": "3",
        "cols": "12"
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "no_print"
    }, [_c(VListItem["a" /* default */], {
      attrs: {
        "three-line": ""
      }
    }, [_c(VList["g" /* VListItemContent */], [_c('div', {
      staticClass: "text-overline mb-4"
    }, [_vm._v("\n                  " + _vm._s(i.title) + "\n                ")]), _vm._v(" "), _c(VList["k" /* VListItemTitle */], {
      staticClass: "text-h5 mb-1"
    }, [_vm._v("\n                  " + _vm._s(i.value) + "\n                ")])], 1), _vm._v(" "), _c(VListItemAvatar["a" /* default */], {
      attrs: {
        "size": "60",
        "color": "primary"
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "dark": ""
      }
    }, [_vm._v(_vm._s(i.icon))])], 1)], 1)], 1)], 1);
  }), 1)], 1)], 1), _vm._ssrNode(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "12"
    }
  }, [_c('DataTable', {
    attrs: {
      "title": _vm.title,
      "headers": _vm.headers,
      "endpoint": _vm.endpoint
    }
  })], 1)], 1)], 2) : _c('NoAccess');
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/master/index.vue?vue&type=template&id=2c8ce3da&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/master/index.vue?vue&type=script&lang=js&
/* harmony default export */ var mastervue_type_script_lang_js_ = ({
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
  data() {
    return {
      tota4l_items: [],
      headers: [{
        text: "Company Code",
        value: "id"
      }, {
        text: "Company Name",
        value: "name"
      }, {
        text: "Contact Number",
        value: "contact.number"
      }, {
        text: "Contact Name",
        value: "contact.name"
      }, {
        text: "Max Devices",
        value: "max_devices"
      }, {
        text: "Max Employees",
        value: "max_employee"
      }, {
        text: "Location",
        value: "location"
      }],
      data: [],
      title: `Lattest Companies`,
      endpoint: "company"
    };
  },
  created() {
    this.initialize();
  },
  methods: {
    can(per) {
      let u = this.$auth.user;
      return u && u.user_type == per;
    },
    getColor(calories) {
      if (calories > 400) return "red";else if (calories > 200) return "orange";else return "green";
    },
    async initialize() {
      this.total_items = [{
        title: "TOTAL COMPANIES",
        value: "254",
        icon: "mdi-apps"
      }, {
        title: "TOTAL EMPLOYEES",
        value: "267",
        icon: "mdi-account"
      }, {
        title: "TOTAL UNPAID",
        value: "4000",
        icon: "mdi-bank"
      }, {
        title: "TOTAL PAID",
        value: "8000",
        icon: "mdi-bank"
      }];
    }
  }
});
// CONCATENATED MODULE: ./pages/master/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_mastervue_type_script_lang_js_ = (mastervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/master/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_mastervue_type_script_lang_js_,
  mastervue_type_template_id_2c8ce3da_render,
  staticRenderFns,
  false,
  null,
  null,
  "40226fa2"
  
)

/* harmony default export */ var master = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NoAccess: __webpack_require__(280).default})


/***/ })

};;
//# sourceMappingURL=index.js.map