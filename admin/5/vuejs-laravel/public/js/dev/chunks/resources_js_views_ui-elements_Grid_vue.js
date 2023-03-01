(self["webpackChunkvuejs_laravel"] = self["webpackChunkvuejs_laravel"] || []).push([["resources_js_views_ui-elements_Grid_vue"],{

/***/ "./resources/js/views/ui-elements/Grid.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/ui-elements/Grid.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue_vue_type_template_id_2a99cc84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue?vue&type=template&id=2a99cc84& */ "./resources/js/views/ui-elements/Grid.vue?vue&type=template&id=2a99cc84&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Grid_vue_vue_type_template_id_2a99cc84___WEBPACK_IMPORTED_MODULE_0__.render,
  _Grid_vue_vue_type_template_id_2a99cc84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ui-elements/Grid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ui-elements/Grid.vue?vue&type=template&id=2a99cc84&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/ui-elements/Grid.vue?vue&type=template&id=2a99cc84& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2a99cc84___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2a99cc84___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_2a99cc84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Grid.vue?vue&type=template&id=2a99cc84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Grid.vue?vue&type=template&id=2a99cc84&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Grid.vue?vue&type=template&id=2a99cc84&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Grid.vue?vue&type=template&id=2a99cc84& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "grid-list-xl fluid pt-0 mt-n3" },
        [
          _c(
            "app-card",
            {
              attrs: {
                heading: _vm.$t("message.grid"),
                contentCustomClass: "text-center"
              }
            },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { sm: "12", cols: "12" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "theme--dark",
                          attrs: { color: "primary" }
                        },
                        [_c("v-card-text", [_vm._v("12")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(2, function(ref) {
                    var n = ref.n
                    var index = ref.index
                    return _c(
                      "v-col",
                      { key: index, attrs: { cols: "6", sm: "6" } },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "theme--dark",
                            attrs: { color: "primary" }
                          },
                          [_c("v-card-text", [_vm._v("6")])],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm._l(3, function(ref) {
                    var n = ref.n
                    var index = ref.index
                    return _c(
                      "v-col",
                      { key: index, attrs: { sm: "4", cols: "4" } },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "theme--dark",
                            attrs: { color: "primary" }
                          },
                          [_c("v-card-text", [_vm._v("4")])],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm._l(4, function(ref) {
                    var n = ref.n
                    var index = ref.index
                    return _c(
                      "v-col",
                      { key: index, attrs: { sm: "3", cols: "3" } },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "theme--dark",
                            attrs: { color: "primary" }
                          },
                          [_c("v-card-text", [_vm._v("3")])],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm._l(6, function(ref) {
                    var n = ref.n
                    var index = ref.index
                    return _c(
                      "v-col",
                      { key: index, attrs: { sm: "2", cols: "2" } },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "theme--dark",
                            attrs: { color: "primary" }
                          },
                          [_c("v-card-text", [_vm._v("2")])],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _vm._l(12, function(ref) {
                    var n = ref.n
                    var index = ref.index
                    return _c(
                      "v-col",
                      { key: index, attrs: { sm: "1", cols: "1" } },
                      [
                        _c(
                          "v-card",
                          {
                            staticClass: "theme--dark",
                            attrs: { color: "primary" }
                          },
                          [_c("v-card-text", [_vm._v("1")])],
                          1
                        )
                      ],
                      1
                    )
                  })
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);