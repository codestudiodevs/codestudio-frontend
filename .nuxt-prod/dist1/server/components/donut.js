exports.ids = [17];
exports.modules = {

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Donut.vue?vue&type=template&id=bcd1d4e6&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "donut"
    }
  }, []);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Donut.vue?vue&type=template&id=bcd1d4e6&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Donut.vue?vue&type=script&lang=js&
/* harmony default export */ var Donutvue_type_script_lang_js_ = ({
  props: ["items"],
  data() {
    return {
      options: {
        title: {
          text: "DAILY ATTENDANCE REPORT",
          align: "left"
        },
        colors: ["#A24FDD", "#6DFCCA", "#E78956", "#3A95D9"],
        series: [],
        chart: {
          type: "donut"
        },
        labels: [],
        dataLabels: {
          dropShadow: {
            blur: 3,
            opacity: 0.8
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }]
      }
    };
  },
  created() {
    this.getTitle();
    this.getValue();
  },
  mounted() {
    var chart = new ApexCharts(document.querySelector("#donut"), this.options);
    chart.render();
  },
  methods: {
    getTitle() {
      this.options.labels = this.items.map(e => e.title);
    },
    getValue() {
      this.options.series = this.items.map(e => e.value);
    }
  }
});
// CONCATENATED MODULE: ./components/Donut.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Donutvue_type_script_lang_js_ = (Donutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Donut.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Donutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "80d08a24"
  
)

/* harmony default export */ var Donut = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=donut.js.map