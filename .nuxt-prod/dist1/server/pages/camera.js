exports.ids = [88];
exports.modules = {

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(210);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js
var VContainer = __webpack_require__(208);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(209);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/camera.vue?vue&type=template&id=6ae5f628&





var cameravue_type_template_id_6ae5f628_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<h1>Camera Example</h1> "), _c(VContainer["a" /* default */], [_c(VBtn["a" /* default */], {
    on: {
      "click": _vm.capturePhoto
    }
  }, [_vm._v("Capture")]), _vm._v(" "), _c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('video', {
    ref: "camera",
    staticStyle: {
      "border": "1px solid",
      "width": "100%",
      "height": "300px"
    },
    attrs: {
      "id": "camera",
      "autoplay": "",
      "playsinline": ""
    }
  }), _vm._v(" "), _vm.capturedImage ? _c('img', {
    staticStyle: {
      "width": "300px",
      "height": "300px"
    },
    attrs: {
      "src": _vm.capturedImage
    }
  }) : _vm._e()]), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  })], 1)], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/camera.vue?vue&type=template&id=6ae5f628&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/camera.vue?vue&type=script&lang=js&
/* harmony default export */ var cameravue_type_script_lang_js_ = ({
  data() {
    return {
      errorMessage: null,
      capturedImage: null
    };
  },
  methods: {
    async startCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: "environment"
          } // Example: using rear camera
        });

        this.$refs.camera.srcObject = stream;
        this.errorMessage = null;
      } catch (error) {
        console.error("Error accessing camera:", error);
        this.errorMessage = "Camera not found or access denied.";
      }
    },
    capturePhoto() {
      const cameraElement = this.$refs.camera;
      const canvasElement = document.createElement("canvas");
      const canvasContext = canvasElement.getContext("2d");
      canvasElement.width = cameraElement.videoWidth;
      canvasElement.height = cameraElement.videoHeight;
      canvasContext.drawImage(cameraElement, 0, 0, canvasElement.width, canvasElement.height);
      this.capturedImage = canvasElement.toDataURL("image/png");
    }
  },
  mounted() {
    this.startCamera();
  }
});
// CONCATENATED MODULE: ./pages/camera.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cameravue_type_script_lang_js_ = (cameravue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./pages/camera.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cameravue_type_script_lang_js_,
  cameravue_type_template_id_6ae5f628_render,
  staticRenderFns,
  false,
  null,
  null,
  "7a4ef6ef"
  
)

/* harmony default export */ var camera = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=camera.js.map