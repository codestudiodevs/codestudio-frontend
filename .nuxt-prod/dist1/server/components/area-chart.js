exports.ids = [3];
exports.modules = {

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AreaChart.vue?vue&type=template&id=279ec3e0&


var AreaChartvue_type_template_id_279ec3e0_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], [_c('div', {
    staticClass: "p-2",
    attrs: {
      "id": "areaChart"
    }
  })])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/AreaChart.vue?vue&type=template&id=279ec3e0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/AreaChart.vue?vue&type=script&lang=js&
/* harmony default export */ var AreaChartvue_type_script_lang_js_ = ({
  data() {
    return {
      options: {
        series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }, {
          name: "Desktops",
          data: [7, 56, 68, 6, 23, 4, 34, 123, 12]
        }],
        chart: {
          height: 350,
          type: "area",
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "DAILY ATTENDANCE REPORT",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
        }
      }
    };
  },
  mounted() {
    var chart = new ApexCharts(document.querySelector("#areaChart"), this.options);
    chart.render();
  }
});
// CONCATENATED MODULE: ./components/AreaChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_AreaChartvue_type_script_lang_js_ = (AreaChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/AreaChart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_AreaChartvue_type_script_lang_js_,
  AreaChartvue_type_template_id_279ec3e0_render,
  staticRenderFns,
  false,
  null,
  null,
  "2cdce99d"
  
)

/* harmony default export */ var AreaChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=area-chart.js.map