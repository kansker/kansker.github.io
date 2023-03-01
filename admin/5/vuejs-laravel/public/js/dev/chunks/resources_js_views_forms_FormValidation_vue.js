(self["webpackChunkvuejs_laravel"] = self["webpackChunkvuejs_laravel"] || []).push([["resources_js_views_forms_FormValidation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/forms/FormValidation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/forms/FormValidation.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      form1: {
        valid: false,
        name: "",
        nameRules: [function (v) {
          return !!v || "Name is required";
        }, function (v) {
          return v.length <= 10 || "Name must be less than 10 characters";
        }],
        email: "",
        emailRules: [function (v) {
          return !!v || "E-mail is required";
        }, function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail must be valid";
        }]
      },
      form2: {
        valid: true,
        name: "",
        nameRules: [function (v) {
          return !!v || "Name is required";
        }, function (v) {
          return v && v.length <= 10 || "Name must be less than 10 characters";
        }],
        email: "",
        emailRules: [function (v) {
          return !!v || "E-mail is required";
        }, function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail must be valid";
        }],
        select: null,
        items: ["Item 1", "Item 2", "Item 3", "Item 4"],
        checkbox: false
      }
    };
  },
  methods: {
    submit: function submit() {
      if (this.$refs.form.validate()) {
        console.log("form submit");
      }
    },
    clear: function clear() {
      this.$refs.form.reset();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/forms/FormValidation.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/forms/FormValidation.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidation_vue_vue_type_template_id_5d41615c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidation.vue?vue&type=template&id=5d41615c& */ "./resources/js/views/forms/FormValidation.vue?vue&type=template&id=5d41615c&");
/* harmony import */ var _FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormValidation.vue?vue&type=script&lang=js& */ "./resources/js/views/forms/FormValidation.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FormValidation_vue_vue_type_template_id_5d41615c___WEBPACK_IMPORTED_MODULE_0__.render,
  _FormValidation_vue_vue_type_template_id_5d41615c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/forms/FormValidation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/forms/FormValidation.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/forms/FormValidation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormValidation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/forms/FormValidation.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/forms/FormValidation.vue?vue&type=template&id=5d41615c&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/forms/FormValidation.vue?vue&type=template&id=5d41615c& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_5d41615c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_5d41615c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormValidation_vue_vue_type_template_id_5d41615c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FormValidation.vue?vue&type=template&id=5d41615c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/forms/FormValidation.vue?vue&type=template&id=5d41615c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/forms/FormValidation.vue?vue&type=template&id=5d41615c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/forms/FormValidation.vue?vue&type=template&id=5d41615c& ***!
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
        { attrs: { fluid: "", "grid-list-xl": "", "py-0": "" } },
        [
          _c(
            "app-card",
            {
              attrs: {
                heading: _vm.$t("message.basicValidation"),
                customClasses: "mb-30"
              }
            },
            [
              _c(
                "v-form",
                {
                  model: {
                    value: _vm.form1.valid,
                    callback: function($$v) {
                      _vm.$set(_vm.form1, "valid", $$v)
                    },
                    expression: "form1.valid"
                  }
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Name",
                      rules: _vm.form1.nameRules,
                      counter: 10,
                      required: ""
                    },
                    model: {
                      value: _vm.form1.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form1, "name", $$v)
                      },
                      expression: "form1.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "E-mail",
                      rules: _vm.form1.emailRules,
                      required: ""
                    },
                    model: {
                      value: _vm.form1.email,
                      callback: function($$v) {
                        _vm.$set(_vm.form1, "email", $$v)
                      },
                      expression: "form1.email"
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
            "app-card",
            {
              attrs: {
                heading: _vm.$t("message.validationWithSubmitAndclear"),
                customClasses: "mb-30"
              }
            },
            [
              _c(
                "v-form",
                {
                  ref: "form",
                  attrs: { "lazy-validation": "" },
                  model: {
                    value: _vm.form2.valid,
                    callback: function($$v) {
                      _vm.$set(_vm.form2, "valid", $$v)
                    },
                    expression: "form2.valid"
                  }
                },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Name",
                      rules: _vm.form2.nameRules,
                      counter: 10,
                      required: ""
                    },
                    model: {
                      value: _vm.form2.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form2, "name", $$v)
                      },
                      expression: "form2.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "E-mail",
                      rules: _vm.form2.emailRules,
                      required: ""
                    },
                    model: {
                      value: _vm.form2.email,
                      callback: function($$v) {
                        _vm.$set(_vm.form2, "email", $$v)
                      },
                      expression: "form2.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-select", {
                    attrs: {
                      label: "Item",
                      items: _vm.form2.items,
                      rules: [
                        function(v) {
                          return !!v || "Item is required"
                        }
                      ],
                      required: ""
                    },
                    model: {
                      value: _vm.form2.select,
                      callback: function($$v) {
                        _vm.$set(_vm.form2, "select", $$v)
                      },
                      expression: "form2.select"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-checkbox", {
                    attrs: {
                      label: "Do you agree?",
                      rules: [
                        function(v) {
                          return !!v || "You must agree to continue!"
                        }
                      ],
                      required: ""
                    },
                    model: {
                      value: _vm.form2.checkbox,
                      callback: function($$v) {
                        _vm.$set(_vm.form2, "checkbox", $$v)
                      },
                      expression: "form2.checkbox"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mr-3",
                      attrs: { disabled: !_vm.form2.valid, color: "success" },
                      on: { click: _vm.submit }
                    },
                    [
                      _vm._v(
                        "\n\t\t\t\t\t" +
                          _vm._s(_vm.$t("message.submit")) +
                          "\n\t\t\t\t"
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { color: "primary" }, on: { click: _vm.clear } },
                    [_vm._v(_vm._s(_vm.$t("message.clear")))]
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