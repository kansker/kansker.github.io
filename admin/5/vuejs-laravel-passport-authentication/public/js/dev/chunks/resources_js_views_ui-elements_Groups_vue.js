(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_ui-elements_Groups_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Groups.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Groups.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      length: 3,
      window: 0,
      step: 1,
      onboarding: 0,
      dropdown_font: [{
        text: 'Arial'
      }, {
        text: 'Calibri'
      }, {
        text: 'Courier'
      }, {
        text: 'Verdana'
      }],
      dropdown_edit: [{
        text: '100%'
      }, {
        text: '75%'
      }, {
        text: '50%'
      }, {
        text: '25%'
      }, {
        text: '0%'
      }],
      toggle_exclusive: 2,
      toggle_multiple: [1, 2, 3]
    };
  },
  computed: {
    currentTitle: function currentTitle() {
      switch (this.step) {
        case 1:
          return 'Sign-up';

        case 2:
          return 'Create a password';

        default:
          return 'Account created';
      }
    }
  },
  methods: {
    next: function next() {
      this.onboarding = this.onboarding + 1 === length ? 0 : this.onboarding + 1;
    },
    prev: function prev() {
      this.onboarding = this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/ui-elements/Groups.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/ui-elements/Groups.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Groups_vue_vue_type_template_id_4e3f5292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Groups.vue?vue&type=template&id=4e3f5292& */ "./resources/js/views/ui-elements/Groups.vue?vue&type=template&id=4e3f5292&");
/* harmony import */ var _Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Groups.vue?vue&type=script&lang=js& */ "./resources/js/views/ui-elements/Groups.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Groups_vue_vue_type_template_id_4e3f5292___WEBPACK_IMPORTED_MODULE_0__.render,
  _Groups_vue_vue_type_template_id_4e3f5292___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ui-elements/Groups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/ui-elements/Groups.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/ui-elements/Groups.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Groups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Groups.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ui-elements/Groups.vue?vue&type=template&id=4e3f5292&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/ui-elements/Groups.vue?vue&type=template&id=4e3f5292& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_4e3f5292___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_4e3f5292___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Groups_vue_vue_type_template_id_4e3f5292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Groups.vue?vue&type=template&id=4e3f5292& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Groups.vue?vue&type=template&id=4e3f5292&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Groups.vue?vue&type=template&id=4e3f5292&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ui-elements/Groups.vue?vue&type=template&id=4e3f5292& ***!
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
    { staticClass: "hover-wrapper group-wrapper" },
    [
      _c("page-title-bar"),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "grid-list-xl pt-0 mt-n3" },
        [
          _c(
            "v-row",
            [
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.buttonGroups"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v("The "),
                      _c("code", [_vm._v("v-btn-toggle")]),
                      _vm._v(" ccomponent is a simple wrapper for "),
                      _c("code", [_vm._v("v-item-group")]),
                      _vm._v(" built specifically to work with "),
                      _c("code", [_vm._v("v-btn")]),
                      _vm._v(".")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-toolbar",
                    { attrs: { dense: "" } },
                    [
                      _c("v-overflow-btn", {
                        staticClass: "pa-0",
                        attrs: {
                          items: _vm.dropdown_font,
                          label: "Select font",
                          "hide-details": ""
                        }
                      }),
                      _vm._v(" "),
                      _c("v-divider", {
                        staticClass: "my-0",
                        attrs: { vertical: "" }
                      }),
                      _vm._v(" "),
                      _c("v-overflow-btn", {
                        staticClass: "pa-0",
                        attrs: {
                          items: _vm.dropdown_edit,
                          editable: "",
                          label: "Select size",
                          "hide-details": "",
                          overflow: ""
                        }
                      }),
                      _vm._v(" "),
                      _c("v-divider", {
                        staticClass: "mr-2 my-0",
                        attrs: { vertical: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn-toggle",
                        {
                          staticClass: "transparent",
                          attrs: { multiple: "" },
                          model: {
                            value: _vm.toggle_multiple,
                            callback: function($$v) {
                              _vm.toggle_multiple = $$v
                            },
                            expression: "toggle_multiple"
                          }
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { value: 1, text: "" } },
                            [_c("v-icon", [_vm._v("format_bold")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { value: 2, text: "" } },
                            [_c("v-icon", [_vm._v("format_italic")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { value: 3, text: "" } },
                            [_c("v-icon", [_vm._v("format_underlined")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { value: 4, text: "" } },
                            [_c("v-icon", [_vm._v("format_color_fill")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider", {
                        staticClass: "mx-2 my-0",
                        attrs: { vertical: "" }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn-toggle",
                        {
                          staticClass: "transparent",
                          model: {
                            value: _vm.toggle_exclusive,
                            callback: function($$v) {
                              _vm.toggle_exclusive = $$v
                            },
                            expression: "toggle_exclusive"
                          }
                        },
                        [
                          _c(
                            "v-btn",
                            { attrs: { value: 1, text: "" } },
                            [_c("v-icon", [_vm._v("format_align_left")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { value: 2, text: "" } },
                            [_c("v-icon", [_vm._v("format_align_center")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { value: 3, text: "" } },
                            [_c("v-icon", [_vm._v("format_align_right")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { value: 4, text: "" } },
                            [_c("v-icon", [_vm._v("format_align_justify")])],
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
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.itemGroups"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c(
                    "div",
                    { staticClass: "mb-5" },
                    [
                      _c("p", [
                        _vm._v("The "),
                        _c("code", [_vm._v("v-item-group")]),
                        _vm._v(
                          " provides the ability to create a group of selectable items out of any component. This is the baseline functionality for components such as "
                        ),
                        _c("code", [_vm._v("v-tabs")]),
                        _vm._v(" and "),
                        _c("code", [_vm._v("v-carousel")]),
                        _vm._v(".")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-toolbar",
                            { attrs: { color: "primary", dark: "" } },
                            [_c("v-toolbar-title", [_vm._v("Submit a post")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c("v-text-field", {
                                attrs: {
                                  filled: "",
                                  label: "Title",
                                  value: "My new post"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  filled: "",
                                  label: "Text",
                                  value:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-divider", { staticClass: "my-2" }),
                              _vm._v(" "),
                              _c(
                                "v-item-group",
                                { attrs: { multiple: "" } },
                                [
                                  _c("v-subheader", [_vm._v("Tags")]),
                                  _vm._v(" "),
                                  _vm._l(8, function(n) {
                                    return _c("v-item", {
                                      key: n,
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var active = ref.active
                                              var toggle = ref.toggle
                                              return _c(
                                                "v-chip",
                                                {
                                                  staticClass: "ma-2",
                                                  attrs: {
                                                    "input-value": active
                                                  },
                                                  on: { click: toggle }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n\t\t\t\t\t\t\t\t\t\t\tTag " +
                                                      _vm._s(n) +
                                                      "\n\t\t\t\t\t\t\t\t\t\t"
                                                  )
                                                ]
                                              )
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    })
                                  })
                                ],
                                2
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider"),
                          _vm._v(" "),
                          _c(
                            "v-card-actions",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                { attrs: { color: "success", depressed: "" } },
                                [
                                  _vm._v(
                                    "\n                        Post\n                        "
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
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.windows"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v("The "),
                      _c("code", [_vm._v("v-window")]),
                      _vm._v(
                        " component is the baseline functionality for transitioning content from 1 pane to another. Other components such as "
                      ),
                      _c("code", [_vm._v("v-tabs")]),
                      _vm._v(", "),
                      _c("code", [_vm._v("v-carousel")]),
                      _vm._v(" and "),
                      _c("code", [_vm._v("v-stepper")]),
                      _vm._v(" utilize this component at their core.")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-row",
                    { staticClass: "align-center" },
                    [
                      _c(
                        "v-item-group",
                        {
                          staticClass: "mr-4 group",
                          attrs: { mandatory: "", tag: "v-col" },
                          model: {
                            value: _vm.window,
                            callback: function($$v) {
                              _vm.window = $$v
                            },
                            expression: "window"
                          }
                        },
                        _vm._l(_vm.length, function(n) {
                          return _c("v-item", {
                            key: n,
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var active = ref.active
                                    var toggle = ref.toggle
                                    return _c(
                                      "div",
                                      {},
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            staticClass: "mb-3",
                                            attrs: {
                                              "input-value": active,
                                              icon: ""
                                            },
                                            on: { click: toggle }
                                          },
                                          [
                                            _c("v-icon", [_vm._v("mdi-record")])
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  }
                                }
                              ],
                              null,
                              true
                            )
                          })
                        }),
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        [
                          _c(
                            "v-window",
                            {
                              staticClass: "elevation-1",
                              attrs: { vertical: "" },
                              model: {
                                value: _vm.window,
                                callback: function($$v) {
                                  _vm.window = $$v
                                },
                                expression: "window"
                              }
                            },
                            _vm._l(_vm.length, function(n) {
                              return _c(
                                "v-window-item",
                                { key: n },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { text: "" } },
                                    [
                                      _c(
                                        "v-card-text",
                                        [
                                          _c(
                                            "v-row",
                                            {
                                              attrs: {
                                                "align-center": "",
                                                "custom-layout": "",
                                                "mb-4": ""
                                              }
                                            },
                                            [
                                              _c("v-avatar", {
                                                staticClass: "mr-3",
                                                attrs: { color: "grey" }
                                              }),
                                              _vm._v(" "),
                                              _c(
                                                "strong",
                                                { staticClass: "title" },
                                                [_vm._v("Title " + _vm._s(n))]
                                              ),
                                              _vm._v(" "),
                                              _c("v-spacer"),
                                              _vm._v(" "),
                                              _c(
                                                "v-btn",
                                                { attrs: { icon: "" } },
                                                [
                                                  _c("v-icon", [
                                                    _vm._v("mdi-account")
                                                  ])
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _vm._l(3, function(n, index) {
                                            return _c("p", { key: index }, [
                                              _vm._v(
                                                "\n\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\t\t\t\t\t\t\t\t\t\t\t"
                                              )
                                            ])
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
                            }),
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
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.onBoarding"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _c("code", [_vm._v("v-window")]),
                      _vm._v(
                        " makes it easy to create custom components such as a different styled stepper."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { attrs: { color: "black", dark: "", text: "", tile: "" } },
                    [
                      _c(
                        "v-window",
                        {
                          model: {
                            value: _vm.onboarding,
                            callback: function($$v) {
                              _vm.onboarding = $$v
                            },
                            expression: "onboarding"
                          }
                        },
                        _vm._l(_vm.length, function(n) {
                          return _c(
                            "v-window-item",
                            { key: "card-" + n },
                            [
                              _c(
                                "v-card",
                                {
                                  attrs: { color: "transparent", height: "200" }
                                },
                                [
                                  _c(
                                    "v-row",
                                    {
                                      attrs: {
                                        "align-center": "",
                                        "justify-center": "",
                                        "fill-height": "",
                                        "m-0": "",
                                        tag: "v-card-text"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\tTransparent themed, for background-imaged slides. Background color black added for demonstration purposes.\n\t\t\t\t\t\t\t\t\t"
                                      )
                                    ]
                                  )
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
                        "v-card-actions",
                        {
                          staticClass:
                            "justify-space-between group-slider-action"
                        },
                        [
                          _c(
                            "v-btn",
                            {
                              staticClass: "group-slider-prev",
                              attrs: { text: "" },
                              on: { click: _vm.prev }
                            },
                            [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-item-group",
                            {
                              staticClass: "text-center",
                              attrs: { mandatory: "" },
                              model: {
                                value: _vm.onboarding,
                                callback: function($$v) {
                                  _vm.onboarding = $$v
                                },
                                expression: "onboarding"
                              }
                            },
                            _vm._l(_vm.length, function(n) {
                              return _c("v-item", {
                                key: "btn-" + n,
                                scopedSlots: _vm._u(
                                  [
                                    {
                                      key: "default",
                                      fn: function(ref) {
                                        var active = ref.active
                                        var toggle = ref.toggle
                                        return _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              "input-value": active,
                                              icon: ""
                                            },
                                            on: { click: toggle }
                                          },
                                          [
                                            _c("v-icon", [_vm._v("mdi-record")])
                                          ],
                                          1
                                        )
                                      }
                                    }
                                  ],
                                  null,
                                  true
                                )
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              staticClass: "group-slider-next",
                              attrs: { text: "" },
                              on: { click: _vm.next }
                            },
                            [_c("v-icon", [_vm._v("mdi-chevron-right")])],
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
              ),
              _vm._v(" "),
              _c(
                "app-card",
                {
                  attrs: {
                    heading: _vm.$t("message.accountCreation"),
                    customClasses: "mb-20",
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v("Create rich forms with smooth animations."),
                      _c("code", [_vm._v(" v-window ")]),
                      _vm._v(
                        " automatically tracks the current selection index to automatically change the transition direction. This can be manually controlled with the reverse prop."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-width": "500" } },
                    [
                      _c(
                        "v-card-title",
                        {
                          staticClass:
                            "title font-weight-regular justify-space-between"
                        },
                        [
                          _c("span", [_vm._v(_vm._s(_vm.currentTitle))]),
                          _vm._v(" "),
                          _c("v-avatar", {
                            staticClass: "subheading white--text",
                            attrs: { color: "primary lighten-2", size: "24" },
                            domProps: { textContent: _vm._s(_vm.step) }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-window",
                        {
                          model: {
                            value: _vm.step,
                            callback: function($$v) {
                              _vm.step = $$v
                            },
                            expression: "step"
                          }
                        },
                        [
                          _c(
                            "v-window-item",
                            { attrs: { value: 1 } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Email",
                                      value: "abc@example.com"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "caption grey--text text--darken-1"
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\tThis is the email you will use to login to your Vuely account\n\t\t\t\t\t\t\t\t\t"
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
                          _c(
                            "v-window-item",
                            { attrs: { value: 2 } },
                            [
                              _c(
                                "v-card-text",
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Password",
                                      type: "password"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Confirm Password",
                                      type: "password"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "caption grey--text text--darken-1"
                                    },
                                    [
                                      _vm._v(
                                        "\n\t\t\t\t\t\t\t\t\t\tPlease enter a password for your account\n\t\t\t\t\t\t\t\t\t"
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
                          _c("v-window-item", { attrs: { value: 3 } }, [
                            _c(
                              "div",
                              { staticClass: "pa-3 text-center" },
                              [
                                _c("v-img", {
                                  staticClass: "mb-4",
                                  attrs: {
                                    contain: "",
                                    height: "128",
                                    src: "/static/img/session.png"
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "h3",
                                  {
                                    staticClass: "title font-weight-light mb-2"
                                  },
                                  [_vm._v("Welcome to Vuely")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "caption grey--text" },
                                  [_vm._v("Thanks for signing up!")]
                                )
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { disabled: _vm.step === 1, text: "" },
                              on: {
                                click: function($event) {
                                  _vm.step--
                                }
                              }
                            },
                            [_vm._v("\n\t\t\t\t\t\t\t\tBack\n\t\t\t\t\t\t\t")]
                          ),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                disabled: _vm.step === 3,
                                color: "primary",
                                depressed: ""
                              },
                              on: {
                                click: function($event) {
                                  _vm.step++
                                }
                              }
                            },
                            [_vm._v("\n\t\t\t\t\t\t\t\tNext\n\t\t\t\t\t\t\t")]
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