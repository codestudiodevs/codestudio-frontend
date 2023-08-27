exports.ids = [59];
exports.modules = {

/***/ 615:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAvatar/VAvatar.js
var VAvatar = __webpack_require__(70);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Snippets/Back.vue?vue&type=template&id=795cc82f&




var Backvue_type_template_id_795cc82f_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VBtn["a" /* default */], {
    attrs: {
      "x-small": "",
      "fab": "",
      "color": _vm.color
    },
    on: {
      "click": _vm.goBack
    }
  }, [_c(VAvatar["a" /* default */], [_c(VIcon["a" /* default */], {
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-arrow-left")])], 1)], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Snippets/Back.vue?vue&type=template&id=795cc82f&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Snippets/Back.vue?vue&type=script&lang=js&
/* harmony default export */ var Backvue_type_script_lang_js_ = ({
  props: ["color"],
  methods: {
    goBack() {
      window.history.back();
    }
  }
});
// CONCATENATED MODULE: ./components/Snippets/Back.vue?vue&type=script&lang=js&
 /* harmony default export */ var Snippets_Backvue_type_script_lang_js_ = (Backvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Snippets/Back.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Snippets_Backvue_type_script_lang_js_,
  Backvue_type_template_id_795cc82f_render,
  staticRenderFns,
  false,
  null,
  null,
  "c5a0c70e"
  
)

/* harmony default export */ var Back = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=snippets-back.js.map