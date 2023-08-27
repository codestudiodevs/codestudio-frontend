exports.ids = [71];
exports.modules = {

/***/ 559:
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

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/widgets/DashboardCardComponent.vue?vue&type=template&id=6d6c8dc3&





var DashboardCardComponentvue_type_template_id_6d6c8dc3_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VRow["a" /* default */], _vm._l(_vm.cardData, function (card, index) {
    return _c(VCol["a" /* default */], {
      key: index,
      attrs: {
        "cols": card.cols,
        "sm": card.sm,
        "md": card.md
      }
    }, [_c(VCard["a" /* default */], {
      staticStyle: {
        "border-radius": "15px !important"
      },
      attrs: {
        "color": card.color,
        "dark": "",
        "dense": ""
      }
    }, [_c('div', {
      staticClass: "text-right px-2"
    }, [_c(VIcon["a" /* default */], {
      attrs: {
        "small": ""
      },
      on: {
        "click": _vm.goToThemeEditor
      }
    }, [_vm._v("mdi-pencil")])], 1), _vm._v(" "), _c('div', {
      staticClass: "text-center pa-2"
    }, [_c('h5', [_vm._v(_vm._s(card.calculated_value))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(card.title))])])])], 1);
  }), 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/widgets/DashboardCardComponent.vue?vue&type=template&id=6d6c8dc3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/widgets/DashboardCardComponent.vue?vue&type=script&lang=js&
/* harmony default export */ var DashboardCardComponentvue_type_script_lang_js_ = ({
  props: ["page"],
  data() {
    return {
      editDialog: false,
      cardData: []
    };
  },
  mounted() {
    this.getRecord();
  },
  methods: {
    getRecord() {
      let payload = {
        page: this.page,
        type: "card",
        company_id: this.$auth.user.company_id
      };
      let options = {
        params: payload
      };
      this.$axios.get("theme", options).then(({
        data
      }) => {
        this.cardData = data;
      }).catch(e => console.log(e));
    },
    goToThemeEditor() {
      this.$router.push(`theme/${this.page}`);
    }
  }
});
// CONCATENATED MODULE: ./components/widgets/DashboardCardComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var widgets_DashboardCardComponentvue_type_script_lang_js_ = (DashboardCardComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/widgets/DashboardCardComponent.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  widgets_DashboardCardComponentvue_type_script_lang_js_,
  DashboardCardComponentvue_type_template_id_6d6c8dc3_render,
  staticRenderFns,
  false,
  null,
  null,
  "13e9114a"
  
)

/* harmony default export */ var DashboardCardComponent = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=widgets-dashboard-card-component.js.map