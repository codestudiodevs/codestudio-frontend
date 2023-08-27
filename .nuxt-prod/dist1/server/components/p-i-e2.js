exports.ids = [51];
exports.modules = {

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(676);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(6).default
module.exports.__inject__ = function (context) {
  add("7049387f", content, true, context)
};

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PIE2_vue_vue_type_style_index_0_id_e55c161e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(599);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PIE2_vue_vue_type_style_index_0_id_e55c161e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PIE2_vue_vue_type_style_index_0_id_e55c161e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PIE2_vue_vue_type_style_index_0_id_e55c161e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PIE2_vue_vue_type_style_index_0_id_e55c161e_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(5);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#pie .apexcharts-legend-series[data-v-e55c161e]{margin:0 50px 2px 0!important}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 815:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PIE2.vue?vue&type=template&id=e55c161e&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "padding": "0px",
      "width": "100%"
    }
  }, [_vm._ssrNode("<div id=\"pie2\" data-v-e55c161e></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PIE2.vue?vue&type=template&id=e55c161e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PIE2.vue?vue&type=script&lang=js&
/* harmony default export */ var PIE2vue_type_script_lang_js_ = ({
  props: ["items"],
  data() {
    return {
      options: {
        title: {
          text: "Devices Status",
          align: "left",
          margin: 0
        },
        colors: ["#009d00", "#ff0000"],
        series: [],
        chart: {
          width: 253,
          //200 //275
          type: "donut"
        },
        labels: [],
        // plotOptions: {
        //   pie: {
        //     startAngle: -90,
        //     endAngle: 270,
        //   },
        // },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "10px"
          }
        },
        legend: {
          show: true,
          fontSize: "10px"
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {},
            legend: {
              position: "bottom"
            }
          }
        }]
      }
    };
  },
  mounted() {
    this.options.labels = this.items.map(e => e.title);
    this.options.series = this.items.map(e => e.value);
    new ApexCharts(document.querySelector("#pie2"), this.options).render();
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/PIE2.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_PIE2vue_type_script_lang_js_ = (PIE2vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/PIE2.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(675)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PIE2vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e55c161e",
  "5d63f9ec"
  
)

/* harmony default export */ var PIE2 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=p-i-e2.js.map