(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_tables_Slots_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Slots.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Slots.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loader: true,
      items: [],
      pagination: {
        sortBy: "name"
      },
      selected: [],
      headers: [{
        text: "Dessert (100g serving)",
        align: "left",
        value: "name"
      }, {
        text: "Calories",
        value: "calories"
      }, {
        text: "Fat (g)",
        value: "fat"
      }, {
        text: "Carbs (g)",
        value: "carbs"
      }, {
        text: "Protein (g)",
        value: "protein"
      }, {
        text: "Sodium (mg)",
        value: "sodium"
      }, {
        text: "Calcium (%)",
        value: "calcium"
      }, {
        text: "Iron (%)",
        value: "iron"
      }]
    };
  },
  mounted: function mounted() {
    this.getTablesData();
  },
  methods: {
    toggleAll: function toggleAll() {
      if (this.selected.length) this.selected = [];else this.selected = this.items.slice();
    },
    changeSort: function changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
    getTablesData: function getTablesData() {
      var _this = this;

      Api__WEBPACK_IMPORTED_MODULE_0__.default.get("vuely/tablesData.js").then(function (response) {
        _this.loader = false;
        _this.items = response.data;
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

/***/ "./resources/js/views/tables/Slots.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/tables/Slots.vue ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slots_vue_vue_type_template_id_0649fe2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slots.vue?vue&type=template&id=0649fe2c& */ "./resources/js/views/tables/Slots.vue?vue&type=template&id=0649fe2c&");
/* harmony import */ var _Slots_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slots.vue?vue&type=script&lang=js& */ "./resources/js/views/tables/Slots.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Slots_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Slots_vue_vue_type_template_id_0649fe2c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Slots_vue_vue_type_template_id_0649fe2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tables/Slots.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tables/Slots.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/tables/Slots.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slots_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Slots.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Slots.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Slots_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/tables/Slots.vue?vue&type=template&id=0649fe2c&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/tables/Slots.vue?vue&type=template&id=0649fe2c& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slots_vue_vue_type_template_id_0649fe2c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slots_vue_vue_type_template_id_0649fe2c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Slots_vue_vue_type_template_id_0649fe2c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Slots.vue?vue&type=template&id=0649fe2c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Slots.vue?vue&type=template&id=0649fe2c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Slots.vue?vue&type=template&id=0649fe2c&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Slots.vue?vue&type=template&id=0649fe2c& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
        { staticClass: "grid-list-xl py-0 mt-3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.itemsAndHeaders"),
                    fullBlock: true,
                    customClasses: "mb-30",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.items,
                      "show-select": "",
                      "items-per-page": 5,
                      "item-key": "name"
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "headers",
                        fn: function(props) {
                          return [
                            _c(
                              "tr",
                              [
                                _c(
                                  "th",
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        color: "primary",
                                        "hide-details": "",
                                        "input-value": props.all,
                                        indeterminate: props.indeterminate
                                      },
                                      nativeOn: {
                                        click: function($event) {
                                          return _vm.toggleAll.apply(
                                            null,
                                            arguments
                                          )
                                        }
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm._l(props.headers, function(header) {
                                  return _c(
                                    "th",
                                    {
                                      key: header.text,
                                      class: [
                                        "column sortable",
                                        _vm.pagination.descending
                                          ? "desc"
                                          : "asc",
                                        header.value === _vm.pagination.sortBy
                                          ? "active"
                                          : ""
                                      ],
                                      on: {
                                        click: function($event) {
                                          return _vm.changeSort(header.value)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-icon", [_vm._v("arrow_upward")]),
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t" +
                                          _vm._s(header.text) +
                                          "\n\t\t\t\t\t\t\t"
                                      )
                                    ],
                                    1
                                  )
                                })
                              ],
                              2
                            )
                          ]
                        }
                      },
                      {
                        key: "items",
                        fn: function(props) {
                          return [
                            _c(
                              "tr",
                              {
                                attrs: { active: props.selected },
                                on: {
                                  click: function($event) {
                                    props.selected = !props.selected
                                  }
                                }
                              },
                              [
                                _c(
                                  "td",
                                  [
                                    _c("v-checkbox", {
                                      attrs: {
                                        color: "primary",
                                        "hide-details": "",
                                        "input-value": props.selected
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(props.item.name))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(props.item.calories))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(props.item.fat))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(props.item.carbs))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(props.item.protein))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(props.item.sodium))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(props.item.calcium))]),
                                _vm._v(" "),
                                _c("td", [_vm._v(_vm._s(props.item.iron))])
                              ]
                            )
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.headerCell"),
                    fullBlock: true,
                    customClasses: "mb-30",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("v-data-table", {
                    attrs: { headers: _vm.headers, items: _vm.items },
                    scopedSlots: _vm._u([
                      {
                        key: "headerCell",
                        fn: function(props) {
                          return [
                            _c("v-tooltip", { attrs: { bottom: "" } }, [
                              _c(
                                "span",
                                {
                                  attrs: { slot: "activator" },
                                  slot: "activator"
                                },
                                [
                                  _vm._v(
                                    "\n\t\t\t\t\t\t\t\t" +
                                      _vm._s(props.header.text) +
                                      "\n\t\t\t\t\t\t\t"
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t" +
                                    _vm._s(props.header.text) +
                                    "\n\t\t\t\t\t\t\t"
                                )
                              ])
                            ])
                          ]
                        }
                      },
                      {
                        key: "items",
                        fn: function(props) {
                          return [
                            _c("td", [_vm._v(_vm._s(props.item.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(props.item.calories))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(props.item.fat))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(props.item.carbs))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(props.item.protein))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(props.item.sodium))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(props.item.calcium))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(props.item.iron))])
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.expand"),
                    fullBlock: true,
                    customClasses: "mb-30",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c(
                    "v-data-table",
                    {
                      attrs: {
                        headers: _vm.headers,
                        items: _vm.items,
                        "hide-default-footer": "",
                        "item-key": "name"
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "items",
                          fn: function(props) {
                            return [
                              _c(
                                "tr",
                                {
                                  on: {
                                    click: function($event) {
                                      props.expanded = !props.expanded
                                    }
                                  }
                                },
                                [
                                  _c("td", [_vm._v(_vm._s(props.item.name))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(props.item.calories))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(props.item.fat))]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(props.item.carbs))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(props.item.protein))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(props.item.sodium))]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(props.item.calcium))
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [_vm._v(_vm._s(props.item.iron))])
                                ]
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "template",
                        { slot: "expand" },
                        [
                          _c(
                            "v-card",
                            { attrs: { flat: "" } },
                            [_c("v-card-text", [_vm._v("Peek-a-boo!")])],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    2
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