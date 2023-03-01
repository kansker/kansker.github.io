(self["webpackChunkvuejs_laravel"] = self["webpackChunkvuejs_laravel"] || []).push([["resources_js_views_timelines_Advanced_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/Advanced.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/Advanced.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
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
      nonce: 0,
      events: [],
      input: null
    };
  },
  computed: {
    timeline: function timeline() {
      return this.events.slice().reverse();
    }
  },
  methods: {
    comment: function comment() {
      var time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, function (match, contents) {
          return " ".concat(contents.split(' ').map(function (v) {
            return v.charAt(0);
          }).join(''));
        })
      });
      this.input = null;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/timelines/Advanced.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/timelines/Advanced.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Advanced_vue_vue_type_template_id_1459c91e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Advanced.vue?vue&type=template&id=1459c91e& */ "./resources/js/views/timelines/Advanced.vue?vue&type=template&id=1459c91e&");
/* harmony import */ var _Advanced_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Advanced.vue?vue&type=script&lang=js& */ "./resources/js/views/timelines/Advanced.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Advanced_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Advanced_vue_vue_type_template_id_1459c91e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Advanced_vue_vue_type_template_id_1459c91e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/timelines/Advanced.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/timelines/Advanced.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/timelines/Advanced.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Advanced.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/Advanced.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/timelines/Advanced.vue?vue&type=template&id=1459c91e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/timelines/Advanced.vue?vue&type=template&id=1459c91e& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_vue_vue_type_template_id_1459c91e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_vue_vue_type_template_id_1459c91e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Advanced_vue_vue_type_template_id_1459c91e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Advanced.vue?vue&type=template&id=1459c91e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/Advanced.vue?vue&type=template&id=1459c91e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/Advanced.vue?vue&type=template&id=1459c91e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/Advanced.vue?vue&type=template&id=1459c91e& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "hover-wrapper advanced-timeline-wrapper" },
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl pt-0 mt-n3" },
        [
          _c(
            "v-row",
            { attrs: { row: "", wrap: "" } },
            [
              _c(
                "app-card",
                {
                  attrs: {
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v(
                        "Modular components allow you to create highly customized solutions that just work."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-timeline",
                    { attrs: { dense: "", clipped: "" } },
                    [
                      _c(
                        "v-timeline-item",
                        {
                          staticClass: "white--text mb-5",
                          attrs: { "fill-dot": "", color: "orange", large: "" }
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "icon" }, slot: "icon" },
                            [_vm._v("JL")]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-text-field",
                            {
                              attrs: {
                                "hide-details": "",
                                flat: "",
                                label: "Leave a comment...",
                                solo: ""
                              },
                              on: {
                                keydown: function($event) {
                                  if (
                                    !$event.type.indexOf("key") &&
                                    _vm._k(
                                      $event.keyCode,
                                      "enter",
                                      13,
                                      $event.key,
                                      "Enter"
                                    )
                                  ) {
                                    return null
                                  }
                                  return _vm.comment.apply(null, arguments)
                                }
                              },
                              model: {
                                value: _vm.input,
                                callback: function($$v) {
                                  _vm.input = $$v
                                },
                                expression: "input"
                              }
                            },
                            [
                              _c(
                                "template",
                                { slot: "append" },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass: "mx-0",
                                      attrs: { depressed: "" },
                                      on: { click: _vm.comment }
                                    },
                                    [
                                      _vm._v(
                                        "\n                           Post\n                        "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-slide-x-transition",
                        { attrs: { group: "" } },
                        _vm._l(_vm.timeline, function(event) {
                          return _c(
                            "v-timeline-item",
                            {
                              key: event.id,
                              staticClass: "mb-4",
                              attrs: { color: "pink", small: "" }
                            },
                            [
                              _c(
                                "v-row",
                                { staticClass: "justify-space-between" },
                                [
                                  _c("v-col", {
                                    attrs: { xs: "7" },
                                    domProps: {
                                      textContent: _vm._s(event.text)
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-col", {
                                    attrs: { xs: "5", "text-right": "" },
                                    domProps: {
                                      textContent: _vm._s(event.time)
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-timeline-item",
                        { staticClass: "mb-5", attrs: { "hide-dot": "" } },
                        [_c("span", [_vm._v("TODAY")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-timeline-item",
                        {
                          staticClass: "mb-4",
                          attrs: {
                            color: "grey",
                            "icon-color": "grey lighten-2",
                            small: ""
                          }
                        },
                        [
                          _c(
                            "v-row",
                            { staticClass: " justify-space-between" },
                            [
                              _c("v-col", { attrs: { xs: "7" } }, [
                                _vm._v("This order was archived.")
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  staticClass: "text-right",
                                  attrs: { xs: "5" }
                                },
                                [_vm._v("15:26 EDT")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-timeline-item",
                        { staticClass: "mb-4", attrs: { small: "" } },
                        [
                          _c(
                            "v-row",
                            { staticClass: " justify-space-between" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "d-flex justify-center align-center flex-fix"
                                },
                                [
                                  _c(
                                    "v-chip",
                                    {
                                      staticClass: "white--text ml-0 mr-2",
                                      attrs: {
                                        color: "purple",
                                        label: "",
                                        small: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                           APP\n                        "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "flex-gap" }, [
                                    _vm._v(
                                      " Digital Downloads fulfilled 1 item."
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { xs5: "", "text-right": "" } },
                                [_vm._v("15:25 EDT")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-timeline-item",
                        {
                          staticClass: "mb-4",
                          attrs: { color: "grey", small: "" }
                        },
                        [
                          _c(
                            "v-row",
                            { staticClass: " justify-space-between" },
                            [
                              _c("v-col", { attrs: { xs7: "" } }, [
                                _vm._v(
                                  "\n                        Order confirmation email was sent to John Leider (john@vuetifyjs.com).\n                     "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { xs5: "", "text-right": "" } },
                                [_vm._v("15:25 EDT")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-timeline-item",
                        { staticClass: "mb-4", attrs: { "hide-dot": "" } },
                        [
                          _c(
                            "v-btn",
                            { staticClass: "mx-0", attrs: { color: "white" } },
                            [
                              _vm._v(
                                "\n                     Resend Email\n                  "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-timeline-item",
                        {
                          staticClass: "mb-4",
                          attrs: { color: "grey", small: "" }
                        },
                        [
                          _c(
                            "v-row",
                            { staticClass: " justify-space-between" },
                            [
                              _c("v-col", { attrs: { xs7: "" } }, [
                                _vm._v(
                                  "\n                        A $15.00 USD payment was processed on PayPal Express Checkout\n                     "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { xs5: "", "text-right": "" } },
                                [_vm._v("15:25 EDT")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-timeline-item",
                        { attrs: { color: "grey", small: "" } },
                        [
                          _c(
                            "v-row",
                            { staticClass: " justify-space-between" },
                            [
                              _c("v-col", { attrs: { xs7: "" } }, [
                                _vm._v(
                                  "\n                        John Leider placed this order on Online Store (checkout #1937432132572).\n                     "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { xs5: "", "text-right": "" } },
                                [_vm._v("15:25 EDT")]
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