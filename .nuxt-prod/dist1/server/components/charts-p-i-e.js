exports.ids = [10,46];
exports.modules = {

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NoRecordFound.vue?vue&type=template&id=0937a142&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return !_vm.data.length ? _c('div', {
    staticClass: "error--text text-center mt-15"
  }, [_vm._ssrNode("\n  No record found\n")]) : _vm._e();
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/NoRecordFound.vue?vue&type=template&id=0937a142&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/NoRecordFound.vue?vue&type=script&lang=js&
/* harmony default export */ var NoRecordFoundvue_type_script_lang_js_ = ({
  props: ["data"]
});
// CONCATENATED MODULE: ./components/NoRecordFound.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NoRecordFoundvue_type_script_lang_js_ = (NoRecordFoundvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/NoRecordFound.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NoRecordFoundvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "d912a408"
  
)

/* harmony default export */ var NoRecordFound = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/PIE.vue?vue&type=template&id=7b96f25c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data.length ? _c('div', {
    attrs: {
      "id": "element"
    }
  }) : _c('NoRecordFound', {
    attrs: {
      "data": _vm.data
    }
  });
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/charts/PIE.vue?vue&type=template&id=7b96f25c&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/charts/PIE.vue?vue&type=script&lang=js&
/* harmony default export */ var PIEvue_type_script_lang_js_ = ({
  data() {
    return {
      data: [],
      chartOptions: {
        title: {
          align: "center",
          margin: 0
        },
        colors: ["#23bdb8", "#f48665", "#289cf5", "#8e4cf1"],
        series: [],
        chart: {
          width: 350,
          //200 //275
          type: "pie"
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
    this.loading = false;
    // let options = {
    //   company_id: this.$auth.user.company_id,
    //   employee_id: this.$auth.user.employee.system_user_id,
    // };
    let options = {
      company_id: this.$auth.user.company_id,
      employee_id: this.$auth.user.employee.system_user_id,
      department_id: this.$auth.user.employee.department_id,
      shift_type_id: this.$auth.user.employee.schedule.shift_type_id
    };
    this.$axios.get(`employee-statistics`, {
      params: options
    }).then(async ({
      data
    }) => {
      this.data = data;
      this.chartOptions.labels = await data.map(e => e.title);
      this.chartOptions.series = await data.map(e => e.value);
      new ApexCharts(document.querySelector("#element"), this.chartOptions).render();
    });
    this.loading = false;
  },
  methods: {}
});
// CONCATENATED MODULE: ./components/charts/PIE.vue?vue&type=script&lang=js&
 /* harmony default export */ var charts_PIEvue_type_script_lang_js_ = (PIEvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/charts/PIE.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  charts_PIEvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a76e68ae"
  
)

/* harmony default export */ var PIE = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {NoRecordFound: __webpack_require__(514).default})


/***/ })

};;
//# sourceMappingURL=charts-p-i-e.js.map