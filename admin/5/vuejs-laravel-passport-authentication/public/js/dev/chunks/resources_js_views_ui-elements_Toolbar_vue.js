(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_ui-elements_Toolbar_vue"],{

/***/ "./resources/js/views/ui-elements/Toolbar.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/ui-elements/Toolbar.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Toolbar_vue_vue_type_template_id_f45f85a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Toolbar.vue?vue&type=template&id=f45f85a6& */ "./resources/js/views/ui-elements/Toolbar.vue?vue&type=template&id=f45f85a6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Toolbar_vue_vue_type_template_id_f45f85a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Toolbar_vue_vue_type_template_id_f45f85a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ui-elements/Toolbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ui-elements/Toolbar.vue?vue&type=template&id=f45f85a6&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/ui-elements/Toolbar.vue?vue&type=template&id=f45f85a6& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_template_id_f45f85a6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_template_id_f45f85a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Toolbar_vue_vue_type_template_id_f45f85a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Toolbar.vue?vue&type=template&id=f45f85a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Toolbar.vue?vue&type=template&id=f45f85a6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Toolbar.vue?vue&type=template&id=f45f85a6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Toolbar.vue?vue&type=template&id=f45f85a6& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                    heading: _vm.$t("message.theDefaultColorToolbar"),
                    customClasses: "mb-30",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-4" }, [
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v("The "),
                      _c("code", [_vm._v("v-toolbar")]),
                      _vm._v(
                        " component is pivotal to any gui, as it generally is the primary source of site navigation.\n\t\t\t\t\t\tThe toolbar component works great in conjunction with a navigation drawer for hiding links and presenting an activator to open the sidebar on mobile."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-toolbar",
                    [
                      _c("v-toolbar-title", [_vm._v("Title")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-list-item-icon", {
                        staticClass: "hidden-md-and-up"
                      }),
                      _vm._v(" "),
                      _c(
                        "v-toolbar-items",
                        { staticClass: "hidden-sm-and-down" },
                        [
                          _c("v-btn", { attrs: { text: "" } }, [
                            _vm._v("Link One")
                          ]),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { text: "" } }, [
                            _vm._v("Link Two")
                          ]),
                          _vm._v(" "),
                          _c("v-btn", { attrs: { text: "" } }, [
                            _vm._v("Link Three")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.appBar"),
                    customClasses: "mb-30",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "primary" } },
                    [
                      _c("v-app-bar-nav-icon"),
                      _vm._v(" "),
                      _c("v-toolbar-title", { staticClass: "white--text" }, [
                        _vm._v("Title")
                      ]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("search")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("apps")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("refresh")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("more_vert")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.appBarWithExtension"),
                    customClasses: "mb-30",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "warning", extended: "" } },
                    [
                      _c("v-app-bar-nav-icon"),
                      _vm._v(" "),
                      _c(
                        "v-toolbar-title",
                        {
                          staticClass: "white--text",
                          attrs: { slot: "extension" },
                          slot: "extension"
                        },
                        [_vm._v("Title")]
                      ),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("search")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("apps")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("refresh")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("more_vert")])],
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