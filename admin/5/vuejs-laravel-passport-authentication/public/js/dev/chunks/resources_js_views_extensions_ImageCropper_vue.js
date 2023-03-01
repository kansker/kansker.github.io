(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_extensions_ImageCropper_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/extensions/ImageCropper.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/extensions/ImageCropper.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      croppaImg: null,
      imgUrl: ''
    };
  },
  methods: {
    generateImage: function generateImage() {
      var url = this.croppaImg.generateDataUrl();

      if (!url) {
        alert('no image');
        return;
      }

      this.imgUrl = url;
    },
    rotate: function rotate() {
      this.croppaImg.rotate();
    },
    flipX: function flipX() {
      this.croppaImg.flipX();
    },
    flipY: function flipY() {
      this.croppaImg.flipY();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/extensions/ImageCropper.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/extensions/ImageCropper.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCropper_vue_vue_type_template_id_58cf3684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=template&id=58cf3684& */ "./resources/js/views/extensions/ImageCropper.vue?vue&type=template&id=58cf3684&");
/* harmony import */ var _ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageCropper.vue?vue&type=script&lang=js& */ "./resources/js/views/extensions/ImageCropper.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ImageCropper_vue_vue_type_template_id_58cf3684___WEBPACK_IMPORTED_MODULE_0__.render,
  _ImageCropper_vue_vue_type_template_id_58cf3684___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/extensions/ImageCropper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/extensions/ImageCropper.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/extensions/ImageCropper.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageCropper.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/extensions/ImageCropper.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/extensions/ImageCropper.vue?vue&type=template&id=58cf3684&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/extensions/ImageCropper.vue?vue&type=template&id=58cf3684& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_58cf3684___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_58cf3684___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageCropper_vue_vue_type_template_id_58cf3684___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ImageCropper.vue?vue&type=template&id=58cf3684& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/extensions/ImageCropper.vue?vue&type=template&id=58cf3684&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/extensions/ImageCropper.vue?vue&type=template&id=58cf3684&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/extensions/ImageCropper.vue?vue&type=template&id=58cf3684& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "img-cropper-wrap" },
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "pt-0 mt-n3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "app-card",
                        {
                          attrs: {
                            colClasses:
                              "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",
                            customClasses: "img-crop"
                          }
                        },
                        [
                          _c(
                            "croppa",
                            {
                              attrs: {
                                "canvas-color": "transparent",
                                placeholder: "Choose an image",
                                accept: "image/*",
                                "show-remove-button": true,
                                "remove-button-color": "red",
                                "initial-position": "center"
                              },
                              model: {
                                value: _vm.croppaImg,
                                callback: function($$v) {
                                  _vm.croppaImg = $$v
                                },
                                expression: "croppaImg"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  slot: "placeholder",
                                  src: "public/static/img/bg-1.jpg"
                                },
                                slot: "placeholder"
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-custom-flex justify-space-between py-3 format-btn-wrap"
                            },
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.rotate()
                                    }
                                  }
                                },
                                [_vm._v("Rotate")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.flipX()
                                    }
                                  }
                                },
                                [_vm._v("Flip-X")]
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.flipY()
                                    }
                                  }
                                },
                                [_vm._v("Flip-Y")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "v-btn success w-100 ma-0",
                              on: { click: _vm.generateImage }
                            },
                            [_vm._v("Generate")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _vm.imgUrl
                        ? _c(
                            "app-card",
                            {
                              attrs: {
                                colClasses:
                                  "col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12",
                                customClasses: "img-crop",
                                contentCustomClass:
                                  "d-custom-flex justify-center align-center h-100"
                              }
                            },
                            [
                              _c("img", {
                                staticClass: "img-crop img-responsive",
                                attrs: { height: "300", src: _vm.imgUrl }
                              })
                            ]
                          )
                        : _vm._e()
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);