(self["webpackChunkvuejs_laravel"] = self["webpackChunkvuejs_laravel"] || []).push([["resources_js_views_ecommerce_Checkout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Checkout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Checkout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      selectCountry: ["United Kingdom"],
      addressCheck: [],
      headers: [{
        text: "Product",
        sortable: false,
        align: "center"
      }, {
        text: "",
        sortable: false
      }, {
        text: "Quantity",
        sortable: false,
        align: "center"
      }, {
        text: "Total",
        sortable: false,
        align: "center"
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["cart"])), {}, {
    getTotalPrice: function getTotalPrice() {
      var totalPrice = 0;

      if (this.cart.length > 0) {
        var _iterator = _createForOfIteratorHelper(this.cart),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            totalPrice += item.total;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return totalPrice.toFixed(2);
      } else {
        return totalPrice;
      }
    }
  })
});

/***/ }),

/***/ "./resources/js/views/ecommerce/Checkout.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/ecommerce/Checkout.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkout_vue_vue_type_template_id_6058e5d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkout.vue?vue&type=template&id=6058e5d8& */ "./resources/js/views/ecommerce/Checkout.vue?vue&type=template&id=6058e5d8&");
/* harmony import */ var _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Checkout.vue?vue&type=script&lang=js& */ "./resources/js/views/ecommerce/Checkout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Checkout_vue_vue_type_template_id_6058e5d8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Checkout_vue_vue_type_template_id_6058e5d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ecommerce/Checkout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ecommerce/Checkout.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ecommerce/Checkout.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Checkout.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ecommerce/Checkout.vue?vue&type=template&id=6058e5d8&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/ecommerce/Checkout.vue?vue&type=template&id=6058e5d8& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_6058e5d8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_6058e5d8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Checkout_vue_vue_type_template_id_6058e5d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Checkout.vue?vue&type=template&id=6058e5d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Checkout.vue?vue&type=template&id=6058e5d8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Checkout.vue?vue&type=template&id=6058e5d8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Checkout.vue?vue&type=template&id=6058e5d8& ***!
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
    { staticClass: "checkout-wrap" },
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "", "pt-0": "" } },
        [
          _c(
            "app-card",
            { attrs: { fullBlock: true } },
            [
              _c(
                "v-row",
                { staticClass: "px-3" },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "col-height-auto px-6",
                      attrs: { cols: "12", sm: "12", xl: "8", lg: "6", md: "6" }
                    },
                    [
                      _c("h2", { staticClass: "py-6 mb-0" }, [
                        _vm._v(_vm._s(_vm.$t("message.billingDetails")))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "perm_identity",
                                      label: "First name",
                                      required: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "perm_identity",
                                      label: "Last name",
                                      required: ""
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
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "mail",
                                      label: "Email",
                                      required: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "6", md: "6" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "phone",
                                      label: "Mobile No",
                                      required: ""
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
                                "v-col",
                                { attrs: { cols: "12", md: "12", sm: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "home",
                                      label: "Address 1",
                                      required: ""
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "12", sm: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "home",
                                      label: "Address 2"
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
                                "v-col",
                                { attrs: { cols: "12", sm: "4", md: "4" } },
                                [
                                  _c("v-autocomplete", {
                                    attrs: {
                                      items: [
                                        "Australia",
                                        "Argentina",
                                        "China",
                                        "India",
                                        "Japan",
                                        "Spain",
                                        "United States",
                                        "United Kingdom",
                                        "Germany"
                                      ],
                                      label: "Country",
                                      "prepend-icon": "public"
                                    },
                                    model: {
                                      value: _vm.selectCountry,
                                      callback: function($$v) {
                                        _vm.selectCountry = $$v
                                      },
                                      expression: "selectCountry"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "location_city",
                                      label: "State"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "4", md: "4" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      "prepend-icon": "domain",
                                      label: "City"
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
                                "v-col",
                                {
                                  staticClass: "mb-5 col-height-auto",
                                  attrs: {
                                    cols: "12",
                                    sm: "12",
                                    md: "12",
                                    xl: "12",
                                    lg: "12"
                                  }
                                },
                                [
                                  _c("v-checkbox", {
                                    attrs: {
                                      label:
                                        "Shipping address is the same as billing address.",
                                      value: ""
                                    },
                                    model: {
                                      value: _vm.addressCheck,
                                      callback: function($$v) {
                                        _vm.addressCheck = $$v
                                      },
                                      expression: "addressCheck"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "error--text fs-12 d-block fw-normal"
                                    },
                                    [
                                      _vm._v(
                                        "All fields marked with an asterisk (*) are required"
                                      )
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
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      staticClass: "border-left-1 px-6",
                      attrs: { cols: "12", sm: "12", xl: "4", lg: "6", md: "6" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "py-6" },
                        [
                          _c("v-data-table", {
                            attrs: {
                              headers: _vm.headers,
                              items: _vm.cart,
                              "hide-default-footer": ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "item",
                                fn: function(ref) {
                                  var item = ref.item
                                  return [
                                    _c("tr", [
                                      _c(
                                        "td",
                                        {
                                          staticClass:
                                            "d-custom-flex align-items-center justify-center product-img"
                                        },
                                        [
                                          _c("img", {
                                            staticClass: "img-responsive",
                                            attrs: {
                                              src: item.productImg,
                                              height: "63",
                                              width: "63"
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("td", [_vm._v(_vm._s(item.name))]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v(_vm._s(item.quantity))
                                      ]),
                                      _vm._v(" "),
                                      _c("td", { staticClass: "text-center" }, [
                                        _vm._v("$ " + _vm._s(item.total))
                                      ])
                                    ])
                                  ]
                                }
                              }
                            ])
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "d-custom-flex justify-space-between pa-6"
                            },
                            [
                              _c("h4", { staticClass: "mb-0" }, [
                                _vm._v(_vm._s(_vm.$t("message.total")))
                              ]),
                              _vm._v(" "),
                              _c("h4", { staticClass: "mb-0" }, [
                                _vm._v("$ " + _vm._s(_vm.getTotalPrice))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "text-right d-block" },
                            [
                              _c("v-btn", { attrs: { color: "primary" } }, [
                                _vm._v(_vm._s(_vm.$t("message.placeOrder")))
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);