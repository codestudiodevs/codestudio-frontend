exports.ids = [60];
exports.modules = {

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(80);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(39);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Snippets/Camera.vue?vue&type=template&id=2b4b3af9&



var Cameravue_type_template_id_2b4b3af9_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_c(VBtn["a" /* default */], {
    staticClass: "background my-1",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "small": "",
      "dark": ""
    },
    on: {
      "click": function ($event) {
        _vm.open_camera = !_vm.open_camera;
      }
    }
  }, [_vm._v("\n    Take Photo "), _c(VIcon["a" /* default */], [_vm._v("mdi-camera-outline")])], 1), _vm._ssrNode(" <video id=\"camera\" autoplay=\"autoplay\" playsinline" + _vm._ssrStyle({
    "border": "1px solid",
    "width": "100%"
  }, null, {
    display: _vm.open_camera ? '' : 'none'
  }) + "></video> "), _c(VBtn["a" /* default */], {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.open_camera,
      expression: "open_camera"
    }],
    staticClass: "background",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "small": "",
      "dark": ""
    },
    on: {
      "click": _vm.capturePhoto
    }
  }, [_vm._v("Capture")])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Snippets/Camera.vue?vue&type=template&id=2b4b3af9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Snippets/Camera.vue?vue&type=script&lang=js&
/* harmony default export */ var Cameravue_type_script_lang_js_ = ({
  data() {
    return {
      open_camera: false,
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
      this.$emit("captured-image", this.capturedImage);
    }
  },
  mounted() {
    this.startCamera();
  }
});
// CONCATENATED MODULE: ./components/Snippets/Camera.vue?vue&type=script&lang=js&
 /* harmony default export */ var Snippets_Cameravue_type_script_lang_js_ = (Cameravue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(9);

// CONCATENATED MODULE: ./components/Snippets/Camera.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Snippets_Cameravue_type_script_lang_js_,
  Cameravue_type_template_id_2b4b3af9_render,
  staticRenderFns,
  false,
  null,
  null,
  "482bd537"
  
)

/* harmony default export */ var Camera = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=snippets-camera.js.map