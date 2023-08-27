exports.ids = [9];
exports.modules = {

/***/ 558:
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

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards.vue?vue&type=template&id=41afa5f2&









var Cardsvue_type_template_id_41afa5f2_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], _vm._l(_vm.cards, function (i, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      attrs: {
        "md": _vm.columns
      }
    }, [_c(VCard["a" /* default */], {
      staticClass: "no_print",
      attrs: {
        "to": i.link
      }
    }, [_c(VListItem["a" /* default */], {
      attrs: {
        "three-line": ""
      }
    }, [_c(VList["g" /* VListItemContent */], [_c('div', {
      staticClass: "text-overline mb-4"
    }, [_vm._v("\n            " + _vm._s(i.subheading) + "\n          ")]), _vm._v(" "), _c(VList["k" /* VListItemTitle */], {
      staticClass: "text-h5 mb-1"
    }, [_vm._v("\n            " + _vm._s(i.heading) + "\n          ")])], 1), _vm._v(" "), _c(VListItemAvatar["a" /* default */], {
      staticClass: "primary",
      attrs: {
        "size": "60"
      }
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "dark": ""
      }
    }, [_vm._v(_vm._s(i.icon))])], 1)], 1)], 1)], 1);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Cards.vue?vue&type=template&id=41afa5f2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Cards.vue?vue&type=script&lang=js&
/* harmony default export */ var Cardsvue_type_script_lang_js_ = ({
  props: ["cards", "columns"]
});
// CONCATENATED MODULE: ./components/Cards.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Cardsvue_type_script_lang_js_ = (Cardsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Cards.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Cardsvue_type_script_lang_js_,
  Cardsvue_type_template_id_41afa5f2_render,
  staticRenderFns,
  false,
  null,
  null,
  "338b4aaf"
  
)

/* harmony default export */ var Cards = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cards.js.map