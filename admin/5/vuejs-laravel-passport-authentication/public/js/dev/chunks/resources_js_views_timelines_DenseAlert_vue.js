(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_timelines_DenseAlert_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/DenseAlert.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/DenseAlert.vue?vue&type=script&lang=js& ***!
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
var COLORS = ['info', 'warning', 'error', 'success'];
var ICONS = {
  info: 'mdi-information',
  warning: 'mdi-alert',
  error: 'mdi-alert-circle',
  success: 'mdi-check-circle'
};
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      interval: null,
      denseItems: [{
        id: 1,
        color: 'info',
        icon: ICONS['info']
      }],
      nonce: 2
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.stop();
  },
  methods: {
    addEvent: function addEvent() {
      var _this$genAlert = this.genAlert(),
          color = _this$genAlert.color,
          icon = _this$genAlert.icon;

      var previousColor = this.denseItems[0].color;

      while (previousColor === color) {
        color = this.genColor();
      }

      this.denseItems.unshift({
        id: this.nonce++,
        color: color,
        icon: icon
      });

      if (this.nonce > 6) {
        this.denseItems.pop();
      }
    },
    genAlert: function genAlert() {
      var color = this.genColor();
      return {
        color: color,
        icon: this.genIcon(color)
      };
    },
    genColor: function genColor() {
      return COLORS[Math.floor(Math.random() * 3)];
    },
    genIcon: function genIcon(color) {
      return ICONS[color];
    },
    start: function start() {
      this.interval = setInterval(this.addEvent, 3000);
    },
    stop: function stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/timelines/DenseAlert.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/timelines/DenseAlert.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DenseAlert_vue_vue_type_template_id_6bdfe3f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DenseAlert.vue?vue&type=template&id=6bdfe3f9& */ "./resources/js/views/timelines/DenseAlert.vue?vue&type=template&id=6bdfe3f9&");
/* harmony import */ var _DenseAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DenseAlert.vue?vue&type=script&lang=js& */ "./resources/js/views/timelines/DenseAlert.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DenseAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DenseAlert_vue_vue_type_template_id_6bdfe3f9___WEBPACK_IMPORTED_MODULE_0__.render,
  _DenseAlert_vue_vue_type_template_id_6bdfe3f9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/timelines/DenseAlert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/timelines/DenseAlert.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/timelines/DenseAlert.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DenseAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DenseAlert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/DenseAlert.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DenseAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/timelines/DenseAlert.vue?vue&type=template&id=6bdfe3f9&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/timelines/DenseAlert.vue?vue&type=template&id=6bdfe3f9& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DenseAlert_vue_vue_type_template_id_6bdfe3f9___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DenseAlert_vue_vue_type_template_id_6bdfe3f9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DenseAlert_vue_vue_type_template_id_6bdfe3f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DenseAlert.vue?vue&type=template&id=6bdfe3f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/DenseAlert.vue?vue&type=template&id=6bdfe3f9&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/DenseAlert.vue?vue&type=template&id=6bdfe3f9&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/timelines/DenseAlert.vue?vue&type=template&id=6bdfe3f9& ***!
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
    { staticClass: "hover-wrapper" },
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
                    colClasses: "col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"
                  }
                },
                [
                  _c("div", { staticClass: "mb-5" }, [
                    _c("p", [
                      _vm._v(
                        "Dense timelines position all content to the right. In this example, "
                      ),
                      _c("code", [_vm._v("v-alert")]),
                      _vm._v(
                        " replaces the card to provide a different design."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { "max-width": "600" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "blue-grey white--text" },
                        [
                          _c("span", { staticClass: "title" }, [
                            _vm._v("Logs")
                          ]),
                          _vm._v(" "),
                          _c("v-spacer"),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            {
                              attrs: {
                                outlined: _vm.interval == null,
                                color:
                                  _vm.interval == null ? "white" : "primary",
                                depressed: ""
                              },
                              on: {
                                click: function($event) {
                                  _vm.interval == null
                                    ? _vm.start()
                                    : _vm.stop()
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        Realtime Logging\n                     "
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "py-0" },
                        [
                          _c(
                            "v-timeline",
                            { attrs: { dense: "" } },
                            [
                              _c(
                                "v-slide-x-reverse-transition",
                                { attrs: { group: "", "hide-on-leave": "" } },
                                _vm._l(_vm.denseItems, function(item) {
                                  return _c(
                                    "v-timeline-item",
                                    {
                                      key: item.id,
                                      staticClass: "white--text",
                                      attrs: {
                                        color: item.color,
                                        small: "",
                                        "fill-dot": ""
                                      }
                                    },
                                    [
                                      _c(
                                        "v-alert",
                                        {
                                          staticClass: "white--text",
                                          attrs: {
                                            value: true,
                                            color: item.color,
                                            icon: item.icon
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                 Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.\n                              "
                                          )
                                        ]
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