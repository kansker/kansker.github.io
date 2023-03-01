(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_ui-elements_Progress_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Progress.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Progress.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      interval: {},
      value: 0,
      valueDeterminate: 50,
      buffer: 10,
      bufferValue: 20
    };
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    startBuffer: function startBuffer() {
      var _this = this;

      this.interval = setInterval(function () {
        _this.buffer += Math.random() * (15 - 5) + 5;
        _this.bufferValue += Math.random() * (15 - 5) + 5;
      }, 2000);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.interval = setInterval(function () {
      if (_this2.value === 100) {
        return _this2.value = 0;
      }

      _this2.value += 10;
    }, 1000);
    this.startBuffer();
  }
});

/***/ }),

/***/ "./resources/js/views/ui-elements/Progress.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/ui-elements/Progress.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Progress_vue_vue_type_template_id_45d4f4eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Progress.vue?vue&type=template&id=45d4f4eb& */ "./resources/js/views/ui-elements/Progress.vue?vue&type=template&id=45d4f4eb&");
/* harmony import */ var _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Progress.vue?vue&type=script&lang=js& */ "./resources/js/views/ui-elements/Progress.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Progress_vue_vue_type_template_id_45d4f4eb___WEBPACK_IMPORTED_MODULE_0__.render,
  _Progress_vue_vue_type_template_id_45d4f4eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ui-elements/Progress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ui-elements/Progress.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ui-elements/Progress.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Progress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Progress.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ui-elements/Progress.vue?vue&type=template&id=45d4f4eb&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/ui-elements/Progress.vue?vue&type=template&id=45d4f4eb& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_45d4f4eb___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_45d4f4eb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_45d4f4eb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Progress.vue?vue&type=template&id=45d4f4eb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Progress.vue?vue&type=template&id=45d4f4eb&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Progress.vue?vue&type=template&id=45d4f4eb&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Progress.vue?vue&type=template&id=45d4f4eb& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl pt-0 mt-n3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.default"),
                    colClasses: "col-12 col-md-6"
                  }
                },
                [
                  _c("div", { staticClass: "mb-6" }, [
                    _c("p", [
                      _vm._v(
                        "By default, progress circular uses the applications secondary color."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 20, color: "primary" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 40, color: "error" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 60, color: "success" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 80, color: "warning" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 100, color: "info" }
                        })
                      ],
                      1
                    )
                  ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.colored"),
                    colClasses: "col-12 col-md-6"
                  }
                },
                [
                  _c("div", { staticClass: "mb-6" }, [
                    _c("p", [_vm._v("Alternate colors can be applied.")])
                  ]),
                  _vm._v(" "),
                  [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 100, color: "blue-grey" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 80, color: "deep-orange lighten-2" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 60, color: "brown" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 40, color: "lime" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { value: 20, color: "indigo darken-2" }
                        })
                      ],
                      1
                    )
                  ]
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.indeterminate"),
                    colClasses: "col-12 col-md-6"
                  }
                },
                [
                  _c("div", { staticClass: "mb-6" }, [
                    _c("p", [
                      _vm._v(
                        "An indeterminate progress circular animates forever."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { indeterminate: "", color: "primary" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { indeterminate: "", color: "red" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { indeterminate: "", color: "purple" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { indeterminate: "", color: "green" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { indeterminate: "", color: "amber" }
                        })
                      ],
                      1
                    )
                  ]
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.sizeAndWidth"),
                    colClasses: "col-12 col-md-6"
                  }
                },
                [
                  _c("div", { staticClass: "mb-6" }, [
                    _c("p", [
                      _vm._v(
                        "The progress circular component can have an altered width and size."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  [
                    _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: {
                            indeterminate: "",
                            size: 50,
                            color: "primary"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { indeterminate: "", width: 3, color: "red" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: {
                            indeterminate: "",
                            size: 70,
                            width: 7,
                            color: "purple"
                          }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { indeterminate: "", width: 3, color: "green" }
                        }),
                        _vm._v(" "),
                        _c("v-progress-circular", {
                          staticClass: "mx-2",
                          attrs: { indeterminate: "", size: 50, color: "amber" }
                        })
                      ],
                      1
                    )
                  ]
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.rotate"),
                    colClasses: "col-12 col-md-6"
                  }
                },
                [
                  _c("div", { staticClass: "mb-6" }, [
                    _c("p", [
                      _vm._v("The "),
                      _c("code", [_vm._v("rotate")]),
                      _vm._v(
                        " prop gives you the ability to customize the\n\t\t\t\t\t\t"
                      ),
                      _c("code", [_vm._v("v-progress-circular's")]),
                      _vm._v(" origin.")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "v-progress-circular",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            rotate: 360,
                            size: 100,
                            width: 15,
                            value: _vm.value,
                            color: "teal"
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.value) +
                              "\n\t\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-progress-circular",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            rotate: -90,
                            size: 100,
                            width: 15,
                            value: _vm.value,
                            color: "primary"
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.value) +
                              "\n\t\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-progress-circular",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            rotate: 90,
                            size: 100,
                            width: 15,
                            value: _vm.value,
                            color: "red"
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.value) +
                              "\n\t\t\t\t\t"
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-progress-circular",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            rotate: 180,
                            size: 100,
                            width: 15,
                            value: _vm.value,
                            color: "pink"
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t" +
                              _vm._s(_vm.value) +
                              "\n\t\t\t\t\t"
                          )
                        ]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.determinate"),
                    colClasses: "col-12 col-md-6 determinate-progress"
                  }
                },
                [
                  _c("div", { staticClass: "mb-6" }, [
                    _c("p", [
                      _vm._v(
                        "The progress linear component can have a determinate state modified by\n\t\t\t\t\t\t"
                      ),
                      _c("code", [_vm._v("v-model")]),
                      _vm._v(".")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-progress-linear", {
                    attrs: { height: "7", color: "pink" },
                    model: {
                      value: _vm.valueDeterminate,
                      callback: function($$v) {
                        _vm.valueDeterminate = $$v
                      },
                      expression: "valueDeterminate"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.indeterminate"),
                    colClasses: "col-12 col-md-6"
                  }
                },
                [
                  _c("div", { staticClass: "mb-6" }, [
                    _c("p", [
                      _vm._v(
                        "Just as with the progress circular component, progress linear has an indeterminate state."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-progress-linear", {
                    attrs: { indeterminate: "", color: "green", height: "7" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.buffer"),
                    colClasses: "col-12 col-md-6"
                  }
                },
                [
                  _c("div", { staticClass: "mb-4" }, [
                    _c("p", [
                      _vm._v(
                        "A buffer state represents two values simultaneously. The primary value is controlled by the model,\n\t\t\t\t\t\twhereas the buffer is controlled by the\n\t\t\t\t\t\t"
                      ),
                      _c("code", [_vm._v("buffer-value")]),
                      _vm._v(" prop.")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("v-progress-linear", {
                    attrs: {
                      "buffer-value": _vm.bufferValue,
                      color: "yellow",
                      height: "7"
                    },
                    model: {
                      value: _vm.value,
                      callback: function($$v) {
                        _vm.value = $$v
                      },
                      expression: "value"
                    }
                  })
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