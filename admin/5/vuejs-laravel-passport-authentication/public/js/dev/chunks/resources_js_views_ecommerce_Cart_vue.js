(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_ecommerce_Cart_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Cart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Cart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selectDeletedProduct: null,
      loader: false,
      headers: [{
        text: "",
        align: "center",
        sortable: false,
        "class": "w-10"
      }, {
        text: "Product",
        value: "product",
        sortable: false,
        "class": "w-50"
      }, {
        text: "Quantity",
        value: "quantity",
        sortable: false,
        align: "center",
        "class": "w-10"
      }, {
        text: "Price",
        value: "price",
        sortable: false,
        align: "center",
        "class": "w-10"
      }, {
        text: "Total",
        value: "total",
        sortable: false,
        align: "center",
        "class": "w-10"
      }, {
        text: "Remove",
        sortable: false,
        align: "center",
        "class": "w-10"
      }]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["cart"])), {}, {
    /**
     *  to get total price of all the items
     */
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
  }),
  methods: {
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    },

    /**
     * show total price of product according to quantity change
     */
    onChangeQuantity: function onChangeQuantity(e, cartItem) {
      this.$store.dispatch("changeQuantityHandler", {
        e: e,
        cartItem: cartItem
      });
    },

    /**
     * open dialog to delete product
     */
    deleteProductFromCart: function deleteProductFromCart(product) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectDeletedProduct = product;
    },

    /**
     * delete product
     */
    onDeleteProductFromCart: function onDeleteProductFromCart() {
      var _this = this;

      this.$refs.deleteConfirmationDialog.close();
      this.loader = true;
      setTimeout(function () {
        _this.loader = false;

        _this.$store.dispatch("onDeleteProductFromCart", _this.selectDeletedProduct);
      }, 1500);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/ecommerce/Cart.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/ecommerce/Cart.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Cart_vue_vue_type_template_id_e5c66e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cart.vue?vue&type=template&id=e5c66e24& */ "./resources/js/views/ecommerce/Cart.vue?vue&type=template&id=e5c66e24&");
/* harmony import */ var _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cart.vue?vue&type=script&lang=js& */ "./resources/js/views/ecommerce/Cart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Cart_vue_vue_type_template_id_e5c66e24___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cart_vue_vue_type_template_id_e5c66e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ecommerce/Cart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ecommerce/Cart.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/ecommerce/Cart.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Cart.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ecommerce/Cart.vue?vue&type=template&id=e5c66e24&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/ecommerce/Cart.vue?vue&type=template&id=e5c66e24& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_e5c66e24___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_e5c66e24___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cart_vue_vue_type_template_id_e5c66e24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cart.vue?vue&type=template&id=e5c66e24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Cart.vue?vue&type=template&id=e5c66e24&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Cart.vue?vue&type=template&id=e5c66e24&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ecommerce/Cart.vue?vue&type=template&id=e5c66e24& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "cart-wrapper" },
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "", "pt-0": "" } },
        [
          _c(
            "v-row",
            { staticClass: "px-3" },
            [
              _c(
                "app-card",
                {
                  attrs: {
                    fullBlock: true,
                    colClasses:
                      "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 pa-0"
                  }
                },
                [
                  _c("app-section-loader", { attrs: { status: _vm.loader } }),
                  _vm._v(" "),
                  _c(
                    "v-data-table",
                    {
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
                                      "d-custom-flex align-items-center justify-center product-item px-1"
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "img-responsive",
                                      attrs: {
                                        src: item.productImg,
                                        height: "100",
                                        width: "100"
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _c("h6", { staticClass: "mb-0" }, [
                                    _vm._v(_vm._s(item.name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-center count-wrap" },
                                  [
                                    _c("input", {
                                      attrs: { type: "number", min: "1" },
                                      domProps: { value: item.quantity },
                                      on: {
                                        change: function($event) {
                                          return _vm.onChangeQuantity(
                                            $event,
                                            item
                                          )
                                        }
                                      }
                                    })
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _c("span", { staticClass: "fw-light" }, [
                                    _vm._v("$ " + _vm._s(item.price))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("td", { staticClass: "text-center" }, [
                                  _vm._v("$" + _vm._s(item.total))
                                ]),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  { staticClass: "text-center" },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "mx-0",
                                        attrs: { icon: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteProductFromCart(
                                              item
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "v-icon",
                                          { staticClass: "error--text" },
                                          [_vm._v("close")]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ])
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("template", { slot: "no-data" }, [
                        _c("span", [
                          _vm._v(_vm._s(_vm.$t("message.noItemsFound")))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("template", { slot: "footer" }, [
                        _c(
                          "div",
                          {
                            staticClass:
                              "table-footer d-flex flex-wrap justify-space-between align-items-center"
                          },
                          [
                            _c(
                              "div",
                              {},
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    solo: "",
                                    placeholder: "Apply Promo Code"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-0",
                                    attrs: { color: "warning" }
                                  },
                                  [_vm._v("Apply")]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", [
                              _c("span", { staticClass: "fw-semi-bold" }, [
                                _vm._v(_vm._s(_vm.$t("message.total")))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", [
                              _c("span", { staticClass: "fw-semi-bold" }, [
                                _vm._v("$" + _vm._s(_vm.getTotalPrice))
                              ])
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "ma-0",
                                    attrs: {
                                      color: "primary",
                                      to:
                                        "/" +
                                        (_vm.getCurrentAppLayoutHandler() +
                                          "/ecommerce/checkout")
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t\tCheckout\n\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c("delete-confirmation-dialog", {
                    ref: "deleteConfirmationDialog",
                    attrs: {
                      heading: "Are You Sure You Want To Delete?",
                      message:
                        "Are you sure you want to delete this product permanently?"
                    },
                    on: { onConfirm: _vm.onDeleteProductFromCart }
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