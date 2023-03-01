(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_pages_Pricing-1_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Pricing-1.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Pricing-1.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      loader: true,
      switchPlan: true,
      faqs: null,
      comparePlans: {
        basic: ["Granular access and controls", "Desktop sync", "Mobile access", "Version history", "SSL and at-rest encryption", "Two-factor authentication", "Standard business support", "User management", "25,000 API calls per month"],
        pro: ["Includes all Starter features plus", "Advanced user and security reporting", "Custom branding", "Mobile security controls", "Integrations with EMM providers", "Data Loss Prevention (DLP)", "Standard business support", "50,000 API calls per month", "25,000 API calls per month"],
        advanced: ["Includes all Business features plus", "Unlimited external collaborators", "Full content visibility and management", "Unlimited integrations", "Workflow automations", "Document watermarking", "Device trust (advanced mobile requirements)", "Password policy enforcement", "Metadata and custom templates"]
      }
    };
  },
  mounted: function mounted() {
    this.getFaqs();
  },
  methods: {
    getFaqs: function getFaqs() {
      var _this = this;

      Api__WEBPACK_IMPORTED_MODULE_0__.default.get("faqs.js").then(function (response) {
        _this.loader = false;
        _this.faqs = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/api/index.js":
/*!***********************************!*\
  !*** ./resources/js/api/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'https://reactify.theironnetwork.org/data/'
}));

/***/ }),

/***/ "./resources/js/views/pages/Pricing-1.vue":
/*!************************************************!*\
  !*** ./resources/js/views/pages/Pricing-1.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Pricing_1_vue_vue_type_template_id_eb85b1e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pricing-1.vue?vue&type=template&id=eb85b1e0& */ "./resources/js/views/pages/Pricing-1.vue?vue&type=template&id=eb85b1e0&");
/* harmony import */ var _Pricing_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pricing-1.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Pricing-1.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Pricing_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Pricing_1_vue_vue_type_template_id_eb85b1e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Pricing_1_vue_vue_type_template_id_eb85b1e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Pricing-1.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Pricing-1.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/pages/Pricing-1.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pricing-1.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Pricing-1.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_1_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/Pricing-1.vue?vue&type=template&id=eb85b1e0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/Pricing-1.vue?vue&type=template&id=eb85b1e0& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_1_vue_vue_type_template_id_eb85b1e0___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_1_vue_vue_type_template_id_eb85b1e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Pricing_1_vue_vue_type_template_id_eb85b1e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Pricing-1.vue?vue&type=template&id=eb85b1e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Pricing-1.vue?vue&type=template&id=eb85b1e0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Pricing-1.vue?vue&type=template&id=eb85b1e0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Pricing-1.vue?vue&type=template&id=eb85b1e0& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      _c("app-section-loader", { attrs: { status: _vm.loader } }),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl mt-n3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                {
                  attrs: { xl: "12", md: "12", lg: "12", sm: "12", cols: "12" }
                },
                [
                  _c("div", [
                    _c("div", { staticClass: "pricing-wrapper" }, [
                      _c(
                        "div",
                        { staticClass: "pricing-top mb-70" },
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  staticClass: " mx-auto text-center pa-0",
                                  attrs: { cols: "12", md: "9", lg: "7" }
                                },
                                [
                                  _c("h2", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.$t(
                                          "message.chooseThePlanThatWorksForYou"
                                        )
                                      )
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "switcher" }, [
                                    _c("span", { staticClass: "mr-2" }, [
                                      _vm._v(_vm._s(_vm.$t("message.monthly")))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "switch-wrap" },
                                      [
                                        _c("v-switch", {
                                          attrs: {
                                            "hide-details": "",
                                            color: "success"
                                          },
                                          model: {
                                            value: _vm.switchPlan,
                                            callback: function($$v) {
                                              _vm.switchPlan = $$v
                                            },
                                            expression: "switchPlan"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("message.yearlyGet2MonthExtra")
                                        )
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "pricing-list" },
                        [
                          _c(
                            "v-row",
                            { staticClass: "row-eq-height" },
                            [
                              _c(
                                "app-card",
                                {
                                  attrs: {
                                    colClasses:
                                      "col-12 col-sm-4 col-md-4 col-lg-4 w-full",
                                    customClasses: "text-center",
                                    fullBlock: true
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "pricing-icon mb-30" },
                                    [
                                      _c("img", {
                                        staticClass: "img-responsive",
                                        attrs: {
                                          src: "/static/img/pricing-icon.png",
                                          alt: "pricing icon",
                                          width: "",
                                          height: ""
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "h2",
                                    {
                                      staticClass: "primary--text pricing-title"
                                    },
                                    [_vm._v(_vm._s(_vm.$t("message.basic")))]
                                  ),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v(
                                      "Secure file sharing and collaboration."
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mb-4" }, [
                                    _c("h2", { staticClass: "amount-title" }, [
                                      _vm._v("Free")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "text-muted small" },
                                      [_vm._v("For 1 user")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    {
                                      staticClass: "price-detail list-unstyled"
                                    },
                                    [
                                      _c("li", [
                                        _vm._v("100 GB secure storage")
                                      ]),
                                      _vm._v(" "),
                                      _c("li", [_vm._v("2 GB file upload")]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Minimum 3 users, max 10 users")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "primary",
                                        large: "",
                                        block: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.startToBasic"))
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "app-card",
                                {
                                  attrs: {
                                    colClasses:
                                      "col-12 col-sm-4 col-md-4 col-lg-4 w-full",
                                    customClasses: "text-center",
                                    fullBlock: true
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "pricing-icon mb-30" },
                                    [
                                      _c("img", {
                                        staticClass: "img-responsive",
                                        attrs: {
                                          src: "/static/img/pricing-icon.png",
                                          alt: "pricing icon",
                                          width: "",
                                          height: ""
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "h2",
                                    {
                                      staticClass: "warning--text pricing-title"
                                    },
                                    [_vm._v(_vm._s(_vm.$t("message.pro")))]
                                  ),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v("More power & personalization")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mb-4" }, [
                                    _c("h2", { staticClass: "amount-title" }, [
                                      _vm._v(
                                        "$" +
                                          _vm._s(_vm.switchPlan ? 30 : 35) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                      _c("sub", [_vm._v("/mo")])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "text-muted small" },
                                      [_vm._v("For 1 user")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    {
                                      staticClass: "price-detail list-unstyled"
                                    },
                                    [
                                      _c("li", [_vm._v("Unlimited storage")]),
                                      _vm._v(" "),
                                      _c("li", [_vm._v("5 GB file upload")]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Minimum 3 users, no maximum")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "warning",
                                        large: "",
                                        block: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.$t("message.upgradeToPro"))
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "app-card",
                                {
                                  attrs: {
                                    colClasses:
                                      "col-12 col-sm-4 col-md-4 col-lg-4 w-full",
                                    customClasses: "text-center",
                                    fullBlock: true
                                  }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "pricing-icon mb-30" },
                                    [
                                      _c("img", {
                                        staticClass: "img-responsive",
                                        attrs: {
                                          src: "/static/img/pricing-icon.png",
                                          alt: "pricing icon",
                                          width: "",
                                          height: ""
                                        }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "h2",
                                    {
                                      staticClass: "success--text pricing-title"
                                    },
                                    [_vm._v(_vm._s(_vm.$t("message.advanced")))]
                                  ),
                                  _vm._v(" "),
                                  _c("p", [
                                    _vm._v("Advanced Feature For Brands")
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "mb-4" }, [
                                    _c("h2", { staticClass: "amount-title" }, [
                                      _vm._v(
                                        "$" +
                                          _vm._s(_vm.switchPlan ? 59 : 70) +
                                          "\n\t\t\t\t\t\t\t\t\t\t\t"
                                      ),
                                      _c("sub", [_vm._v("/mo")])
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticClass: "text-muted small" },
                                      [_vm._v("For 1 more user")]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "ul",
                                    {
                                      staticClass: "price-detail list-unstyled"
                                    },
                                    [
                                      _c("li", [_vm._v("Unlimited storage")]),
                                      _vm._v(" "),
                                      _c("li", [_vm._v("15 GB file upload")]),
                                      _vm._v(" "),
                                      _c("li", [
                                        _vm._v("Minimum 3 users, no maximum")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      attrs: {
                                        color: "success",
                                        large: "",
                                        block: ""
                                      }
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.$t("message.upgradeToAdvance")
                                        )
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center py-12" }, [
                            _c("h2", { staticClass: "mb-0" }, [
                              _vm._v(_vm._s(_vm.$t("message.comparePlans")))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "fixed-pricing" },
                            [
                              _c(
                                "v-row",
                                { staticClass: "row-eq-height" },
                                [
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pr-0 w-full",
                                      attrs: {
                                        cols: "12",
                                        sm: "4",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "pricing-box" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "pricing-head" },
                                            [
                                              _c(
                                                "h2",
                                                {
                                                  staticClass:
                                                    "primary--text pricing-title mb-0"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "message.basicFree"
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "plan-info" },
                                            [
                                              _c("span", [
                                                _vm._v("100 responses / mo")
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "pricing-body" },
                                            [
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "list-unstyled plan-info-listing"
                                                },
                                                _vm._l(
                                                  _vm.comparePlans.basic,
                                                  function(item, key) {
                                                    return _c(
                                                      "li",
                                                      { key: key },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "ti-check-box"
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href:
                                                                "javascript:void(0);"
                                                            }
                                                          },
                                                          [_vm._v(_vm._s(item))]
                                                        )
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    large: "",
                                                    block: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "message.startToBasic"
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "px-0 w-full",
                                      attrs: {
                                        cols: "12",
                                        sm: "4",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "pricing-box" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "pricing-head" },
                                            [
                                              _c(
                                                "h2",
                                                {
                                                  staticClass:
                                                    "warning--text pricing-title mb-0"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("message.pro")
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "plan-info" },
                                            [
                                              _c("span", [
                                                _vm._v("Unlimited responses")
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "pricing-body" },
                                            [
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "list-unstyled plan-info-listing"
                                                },
                                                _vm._l(
                                                  _vm.comparePlans.pro,
                                                  function(item, key) {
                                                    return _c(
                                                      "li",
                                                      { key: key },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "ti-check-box"
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href:
                                                                "javascript:void(0);"
                                                            }
                                                          },
                                                          [_vm._v(_vm._s(item))]
                                                        )
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "warning",
                                                    large: "",
                                                    block: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "message.upgradeToPro"
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      staticClass: "pl-0 w-full",
                                      attrs: {
                                        cols: "12",
                                        sm: "4",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "pricing-box" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "pricing-head" },
                                            [
                                              _c(
                                                "h2",
                                                {
                                                  staticClass:
                                                    "success--text pricing-title mb-0"
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t("message.advanced")
                                                    )
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "plan-info" },
                                            [
                                              _c("span", [
                                                _vm._v("Unlimited responses")
                                              ])
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "pricing-body" },
                                            [
                                              _c(
                                                "ul",
                                                {
                                                  staticClass:
                                                    "list-unstyled plan-info-listing"
                                                },
                                                _vm._l(
                                                  _vm.comparePlans.advanced,
                                                  function(item, key) {
                                                    return _c(
                                                      "li",
                                                      { key: key },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "ti-check-box"
                                                        }),
                                                        _vm._v(" "),
                                                        _c(
                                                          "a",
                                                          {
                                                            attrs: {
                                                              href:
                                                                "javascript:void(0);"
                                                            }
                                                          },
                                                          [_vm._v(_vm._s(item))]
                                                        )
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                {
                                                  attrs: {
                                                    color: "success",
                                                    large: "",
                                                    block: ""
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        "message.upgradeToAdvance"
                                                      )
                                                    )
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center py-12" }, [
                            _c("h2", { staticClass: "mb-0" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("message.frequentlyAskedQuestions")
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _vm.faqs
                            ? _c("div", { staticClass: "faq-wrapper" }, [
                                _c(
                                  "div",
                                  { staticClass: "card-columns" },
                                  _vm._l(_vm.faqs, function(faq) {
                                    return _c("v-card", { key: faq.id }, [
                                      _c(
                                        "div",
                                        { staticClass: "card-body pa-4" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "card-title" },
                                            [_vm._v(_vm._s(faq.title))]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "div",
                                            { staticClass: "card-text" },
                                            [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                  _vm._s(faq.content) +
                                                  "\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ])
                                  }),
                                  1
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      )
                    ])
                  ])
                ]
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