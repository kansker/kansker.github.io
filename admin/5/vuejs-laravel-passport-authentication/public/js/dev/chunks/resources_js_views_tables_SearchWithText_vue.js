(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_tables_SearchWithText_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/SearchWithText.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/SearchWithText.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./resources/js/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      max25chars: function max25chars(v) {
        return v.length <= 25 || "Input too long!";
      },
      tmp: "",
      search: "",
      pagination: {},
      headers: [{
        text: "Dessert (100g serving)",
        align: "left",
        sortable: false,
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
      }],
      items: []
    };
  },
  mounted: function mounted() {
    this.getTablesData();
  },
  methods: {
    getTablesData: function getTablesData() {
      var _this = this;

      _api__WEBPACK_IMPORTED_MODULE_0__.default.get("vuely/tablesData.js").then(function (response) {
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

/***/ "./resources/js/views/tables/SearchWithText.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/tables/SearchWithText.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchWithText_vue_vue_type_template_id_a60ce814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchWithText.vue?vue&type=template&id=a60ce814& */ "./resources/js/views/tables/SearchWithText.vue?vue&type=template&id=a60ce814&");
/* harmony import */ var _SearchWithText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchWithText.vue?vue&type=script&lang=js& */ "./resources/js/views/tables/SearchWithText.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SearchWithText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SearchWithText_vue_vue_type_template_id_a60ce814___WEBPACK_IMPORTED_MODULE_0__.render,
  _SearchWithText_vue_vue_type_template_id_a60ce814___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tables/SearchWithText.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tables/SearchWithText.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/tables/SearchWithText.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchWithText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchWithText.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/SearchWithText.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchWithText_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/tables/SearchWithText.vue?vue&type=template&id=a60ce814&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/tables/SearchWithText.vue?vue&type=template&id=a60ce814& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchWithText_vue_vue_type_template_id_a60ce814___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchWithText_vue_vue_type_template_id_a60ce814___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchWithText_vue_vue_type_template_id_a60ce814___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SearchWithText.vue?vue&type=template&id=a60ce814& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/SearchWithText.vue?vue&type=template&id=a60ce814&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/SearchWithText.vue?vue&type=template&id=a60ce814&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/SearchWithText.vue?vue&type=template&id=a60ce814& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "grid-list-xl py-0 mt-n3", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.searchRow"),
                    fullBlock: true,
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v("Nutrition\n\t\t\t\t\t"),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          "append-icon": "search",
                          label: "Search",
                          "single-line": "",
                          "hide-details": ""
                        },
                        model: {
                          value: _vm.search,
                          callback: function($$v) {
                            _vm.search = $$v
                          },
                          expression: "search"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    attrs: {
                      headers: _vm.headers,
                      items: _vm.items,
                      search: _vm.search
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "items",
                        fn: function(props) {
                          return [
                            _c(
                              "td",
                              [
                                _c(
                                  "v-edit-dialog",
                                  { attrs: { lazy: "" } },
                                  [
                                    _vm._v(
                                      "\n\t\t\t\t\t\t\t\t" +
                                        _vm._s(props.item.name) +
                                        "\n\t\t\t\t\t\t\t\t"
                                    ),
                                    _c("v-text-field", {
                                      attrs: {
                                        slot: "input",
                                        label: "Edit",
                                        "single-line": "",
                                        counter: "",
                                        rules: [_vm.max25chars]
                                      },
                                      slot: "input",
                                      model: {
                                        value: props.item.name,
                                        callback: function($$v) {
                                          _vm.$set(props.item, "name", $$v)
                                        },
                                        expression: "props.item.name"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
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
                            _c(
                              "td",
                              [
                                _c(
                                  "v-edit-dialog",
                                  {
                                    attrs: { large: "", lazy: "" },
                                    on: {
                                      open: function($event) {
                                        _vm.tmp = props.item.iron
                                      },
                                      save: function($event) {
                                        props.item.iron =
                                          _vm.tmp || props.item.iron
                                      }
                                    }
                                  },
                                  [
                                    _c("div", [
                                      _vm._v(_vm._s(props.item.iron))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "mt-3 title",
                                        attrs: { slot: "input" },
                                        slot: "input"
                                      },
                                      [_vm._v("Update Iron")]
                                    ),
                                    _vm._v(" "),
                                    _c("v-text-field", {
                                      attrs: {
                                        slot: "input",
                                        label: "Edit",
                                        "single-line": "",
                                        counter: "",
                                        autofocus: "",
                                        rules: [_vm.max25chars]
                                      },
                                      slot: "input",
                                      model: {
                                        value: _vm.tmp,
                                        callback: function($$v) {
                                          _vm.tmp = $$v
                                        },
                                        expression: "tmp"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]
                        }
                      },
                      {
                        key: "pageText",
                        fn: function(ref) {
                          var pageStart = ref.pageStart
                          var pageStop = ref.pageStop
                          return [
                            _vm._v(
                              "\n\t\t\t\t\t\tFrom " +
                                _vm._s(pageStart) +
                                " to " +
                                _vm._s(pageStop) +
                                "\n\t\t\t\t\t"
                            )
                          ]
                        }
                      }
                    ])
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