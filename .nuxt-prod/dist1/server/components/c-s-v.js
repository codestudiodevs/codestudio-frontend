exports.ids = [7];
exports.modules = {

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CSV.vue?vue&type=template&id=200ec708&



var CSVvue_type_template_id_200ec708_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VBtn["a" /* default */], {
    staticClass: "primary darken-2",
    attrs: {
      "small": ""
    },
    on: {
      "click": _vm.export_csv
    }
  }, [_c(VIcon["a" /* default */], {
    staticClass: "mr-1",
    attrs: {
      "small": ""
    }
  }, [_vm._v("mdi-file")]), _vm._v("\n  CSV\n")], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CSV.vue?vue&type=template&id=200ec708&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CSV.vue?vue&type=script&lang=js&
/* harmony default export */ var CSVvue_type_script_lang_js_ = ({
  props: ["data", "headers"],
  methods: {
    json_to_csv(json) {
      let header = this.headers.map(e => e.text).join(",") + "\n";
      let data = json;
      let rows = "";
      data.forEach(e => {
        rows += Object.values(e).join(",").trim() + "\n";
      });
      return header + rows;
    },
    export_csv() {
      if (this.data.length == 0) {
        this.snackbar = true;
        this.response = "No record to download";
        return;
      }
      let csvData = this.json_to_csv(this.data);
      let e = document.createElement("a");
      e.setAttribute("href", "data:text/csv;charset=utf-8, " + encodeURIComponent(csvData));
      e.setAttribute("download", "download.csv");
      document.body.appendChild(e);
      e.click();
      document.body.removeChild(e);
    }
  }
});
// CONCATENATED MODULE: ./components/CSV.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CSVvue_type_script_lang_js_ = (CSVvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/CSV.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CSVvue_type_script_lang_js_,
  CSVvue_type_template_id_200ec708_render,
  staticRenderFns,
  false,
  null,
  null,
  "7992d4d2"
  
)

/* harmony default export */ var CSV = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=c-s-v.js.map