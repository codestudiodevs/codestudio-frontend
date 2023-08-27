exports.ids = [148];
exports.modules = {

/***/ 719:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/modules.vue?vue&type=template&id=434b857c&










var modulesvue_type_template_id_434b857c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], {
    staticClass: "mt-10"
  }, _vm._l(_vm.cards, function (card) {
    return _c(VCol["a" /* default */], {
      key: card.id,
      attrs: {
        "cols": _vm.col
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "no_print",
      attrs: {
        "to": 'report/' + card.link
      }
    }, [_c(VListItem["a" /* default */], [_c(VList["g" /* VListItemContent */], [_c('div', {
      staticClass: "overline mb-4"
    }, [_vm._v("Module")]), _vm._v(" "), _c(VList["k" /* VListItemTitle */], {
      staticClass: "title mb-1",
      attrs: {
        "color": "pink darken-2"
      }
    }, [_vm._v(_vm._s(card.name))]), _vm._v(" "), _c(VList["j" /* VListItemSubtitle */])], 1), _vm._v(" "), _c(VListItemAvatar["a" /* default */], {
      staticClass: "primary",
      attrs: {
        "tile": "",
        "size": "60"
      }
    }, [_c('span', [_c(VIcon["a" /* default */], {
      staticClass: "white--text"
    }, [_vm._v(_vm._s(card.icon))])], 1)])], 1)], 1)], 1);
  }), 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/modules.vue?vue&type=template&id=434b857c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/modules.vue?vue&type=script&lang=js&
/* harmony default export */ var modulesvue_type_script_lang_js_ = ({
  data: () => ({
    col: 4,
    cards: [{
      id: 1,
      name: "Payroll",
      icon: "mdi-trending-up",
      link: "sales"
    }, {
      id: 2,
      name: "Hr Management",
      icon: "mdi-account",
      link: "sales"
    }, {
      id: 3,
      name: "Attendance Management",
      icon: "mdi-account",
      link: "sales"
    }]
  })
});
// CONCATENATED MODULE: ./pages/modules.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_modulesvue_type_script_lang_js_ = (modulesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/modules.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_modulesvue_type_script_lang_js_,
  modulesvue_type_template_id_434b857c_render,
  staticRenderFns,
  false,
  null,
  null,
  "1147992d"
  
)

/* harmony default export */ var modules = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=modules.js.map