exports.ids = [11];
exports.modules = {

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ComboChart.vue?vue&type=template&id=7fa18f83&


var ComboChartvue_type_template_id_7fa18f83_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VRow["a" /* default */], [_c('div', {
    staticClass: "p-2",
    attrs: {
      "id": "comboChart"
    }
  })])], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ComboChart.vue?vue&type=template&id=7fa18f83&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ComboChart.vue?vue&type=script&lang=js&
/* harmony default export */ var ComboChartvue_type_script_lang_js_ = ({
  data() {
    return {
      days: [],
      options: {
        // colors: ["#A24FDD", "#6DFCCA", "#E78956", "#3A95D9"],
        series: [{
          name: "Today Summary",
          type: "column",
          data: []
          // background: "black"
        }, {
          name: "Today Presents",
          type: "column",
          data: []
        }, {
          name: "Today Absent",
          type: "column",
          data: []
        }, {
          name: "Today Missing",
          type: "column",
          data: []
        }],
        chart: {
          height: 350,
          // width: 0,
          type: "line",
          stacked: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 1, 1]
        },
        title: {
          text: "MONTHLY ATTENDANCE REPORT",
          align: "left",
          offsetX: 110
        },
        xaxis: {
          categories: []
        },
        // yaxis: [
        //   {
        //     axisTicks: {
        //       show: true
        //     },
        //     axisBorder: {
        //       show: true,
        //       color: "#008FFB"
        //     },
        //     labels: {
        //       style: {
        //         colors: "#008FFB"
        //       }
        //     },

        //     tooltip: {
        //       enabled: true
        //     }
        //   }
        // ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft",
            // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          }
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40
        }
      }
    };
  },
  mounted() {
    this.getDaysInCurrentMonth;
    var chart = new ApexCharts(document.querySelector("#comboChart"), this.options);
    chart.render();
  },
  computed: {
    getDaysInCurrentMonth() {
      const date = new Date();
      let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      for (let i = 1; i <= lastDay; i++) {
        // this.options.xaxis.categories.push(i);
      }
      for (let i = 1; i <= lastDay; i++) {
        // let r = Math.floor(Math.random() * 20);
        this.options.series[0].data.push(Math.floor(Math.random() * 20));
        this.options.series[1].data.push(Math.floor(Math.random() * 20));
        this.options.series[2].data.push(Math.floor(Math.random() * 20));
        this.options.series[3].data.push(Math.floor(Math.random() * 20));
      }
    }
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/ComboChart.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ComboChartvue_type_script_lang_js_ = (ComboChartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/ComboChart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ComboChartvue_type_script_lang_js_,
  ComboChartvue_type_template_id_7fa18f83_render,
  staticRenderFns,
  false,
  null,
  null,
  "1c4e5fd4"
  
)

/* harmony default export */ var ComboChart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=combo-chart.js.map