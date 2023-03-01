(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_session_LoginOne_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/SessionSlider.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/SessionSlider.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-slick */ "./node_modules/vue-slick/dist/slickCarousel.esm.js");
/* harmony import */ var Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Api */ "./resources/js/api/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    Slick: vue_slick__WEBPACK_IMPORTED_MODULE_0__.default
  },
  mounted: function mounted() {
    this.getTestimonials();
  },
  computed: {
    slickOptions: function slickOptions() {
      return {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false
      };
    }
  },
  data: function data() {
    return {
      loader: true,
      testimonials: null
    };
  },
  methods: {
    getTestimonials: function getTestimonials() {
      var _this = this;

      Api__WEBPACK_IMPORTED_MODULE_1__.default.get("testimonials.js").then(function (response) {
        _this.loader = false;
        _this.testimonials = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/session/LoginOne.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/session/LoginOne.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_Widgets_SessionSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/Widgets/SessionSlider */ "./resources/js/components/Widgets/SessionSlider.vue");
/* harmony import */ var Constants_AppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Constants/AppConfig */ "./resources/js/constants/AppConfig.js");
/* harmony import */ var _auth_AuthService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/AuthService */ "./resources/js/auth/AuthService.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import firebase from "firebase/app";
// import { mapGetters } from "vuex";



var auth = new _auth_AuthService__WEBPACK_IMPORTED_MODULE_2__.default(); // const { login, logout, authenticated, authNotifier } = auth;

var login = auth.login;
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SessionSliderWidget: Components_Widgets_SessionSlider__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      checkbox: false,
      valid: false,
      email: "demo@example.com",
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "E-mail must be valid";
      }],
      password: "test#123",
      passwordRules: [function (v) {
        return !!v || "Password is required";
      }],
      appLogo: Constants_AppConfig__WEBPACK_IMPORTED_MODULE_1__.default.appLogo2,
      brand: Constants_AppConfig__WEBPACK_IMPORTED_MODULE_1__.default.brand
    };
  },
  methods: {
    submit: function submit() {
      var user = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signinUserInFirebase", {
        user: user
      });
    },
    signInWithLaravelPassport: function signInWithLaravelPassport() {
      var user = {
        email: this.email,
        password: this.password
      };
      this.$store.dispatch("signInWithLaravelPassport", {
        user: user
      });
    },
    signInWithFacebook: function signInWithFacebook() {
      this.$store.dispatch("signinUserWithFacebook");
    },
    signInWithGoogle: function signInWithGoogle() {
      this.$store.dispatch("signinUserWithGoogle");
    },
    signInWithTwitter: function signInWithTwitter() {
      this.$store.dispatch("signinUserWithTwitter");
    },
    signInWithGithub: function signInWithGithub() {
      this.$store.dispatch("signinUserWithGithub");
    },
    onCreateAccount: function onCreateAccount() {
      this.$router.push("/session/sign-up");
    },
    signinWithAuth0: function signinWithAuth0() {
      login();
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

/***/ "./resources/js/components/Widgets/SessionSlider.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/SessionSlider.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SessionSlider_vue_vue_type_template_id_70e70288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SessionSlider.vue?vue&type=template&id=70e70288& */ "./resources/js/components/Widgets/SessionSlider.vue?vue&type=template&id=70e70288&");
/* harmony import */ var _SessionSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SessionSlider.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/SessionSlider.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _SessionSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _SessionSlider_vue_vue_type_template_id_70e70288___WEBPACK_IMPORTED_MODULE_0__.render,
  _SessionSlider_vue_vue_type_template_id_70e70288___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/SessionSlider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/session/LoginOne.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/session/LoginOne.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LoginOne_vue_vue_type_template_id_d7480896___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginOne.vue?vue&type=template&id=d7480896& */ "./resources/js/views/session/LoginOne.vue?vue&type=template&id=d7480896&");
/* harmony import */ var _LoginOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginOne.vue?vue&type=script&lang=js& */ "./resources/js/views/session/LoginOne.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LoginOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LoginOne_vue_vue_type_template_id_d7480896___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoginOne_vue_vue_type_template_id_d7480896___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/session/LoginOne.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/SessionSlider.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Widgets/SessionSlider.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SessionSlider.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/SessionSlider.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSlider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/session/LoginOne.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/session/LoginOne.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginOne.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/session/LoginOne.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/SessionSlider.vue?vue&type=template&id=70e70288&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Widgets/SessionSlider.vue?vue&type=template&id=70e70288& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSlider_vue_vue_type_template_id_70e70288___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSlider_vue_vue_type_template_id_70e70288___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SessionSlider_vue_vue_type_template_id_70e70288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./SessionSlider.vue?vue&type=template&id=70e70288& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/SessionSlider.vue?vue&type=template&id=70e70288&");


/***/ }),

/***/ "./resources/js/views/session/LoginOne.vue?vue&type=template&id=d7480896&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/session/LoginOne.vue?vue&type=template&id=d7480896& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginOne_vue_vue_type_template_id_d7480896___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginOne_vue_vue_type_template_id_d7480896___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoginOne_vue_vue_type_template_id_d7480896___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoginOne.vue?vue&type=template&id=d7480896& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/session/LoginOne.vue?vue&type=template&id=d7480896&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/SessionSlider.vue?vue&type=template&id=70e70288&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/SessionSlider.vue?vue&type=template&id=70e70288& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
      _c("app-section-loader", { attrs: { status: _vm.loader } }),
      _vm._v(" "),
      _vm.testimonials
        ? _c(
            "slick",
            { attrs: { options: _vm.slickOptions } },
            [
              _vm._l(_vm.testimonials, function(testimonial) {
                return [
                  _c(
                    "div",
                    { key: testimonial.id, staticClass: "session-slider" },
                    [
                      _c("div", { staticClass: "slider-content" }, [
                        _c("img", {
                          staticClass: "rounded-circle img-responsive",
                          attrs: {
                            src: testimonial.avatar,
                            width: "170",
                            height: "170"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "slider-meta mb-4" }, [
                          _c(
                            "span",
                            { staticClass: "d-block client-name fw-bold" },
                            [_c("i", [_vm._v(_vm._s(testimonial.name))])]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "d-block client-digg" }, [
                            _vm._v(_vm._s(testimonial.designation))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "px-4" }, [
                          _vm._v(_vm._s(testimonial.body))
                        ])
                      ])
                    ]
                  )
                ]
              })
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/session/LoginOne.vue?vue&type=template&id=d7480896&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/session/LoginOne.vue?vue&type=template&id=d7480896& ***!
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
  return _c("div", { staticClass: "session-wrapper" }, [
    _c(
      "div",
      { staticClass: "session-left" },
      [_c("session-slider-widget")],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "session-right text-center" }, [
      _c("div", { staticClass: "session-table-cell" }, [
        _c(
          "div",
          { staticClass: "session-content" },
          [
            _c("img", {
              staticClass: "img-responsive mb-4",
              attrs: { src: _vm.appLogo, width: "78", height: "78" }
            }),
            _vm._v(" "),
            _c("h2", { staticClass: "mb-4" }, [
              _vm._v(_vm._s(_vm.$t("message.loginToAdmin")))
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "fs-14" }, [
              _vm._v(
                _vm._s(
                  _vm.$t(
                    "message.enterUsernameAndPasswordToAccessControlPanelOf"
                  )
                ) +
                  " " +
                  _vm._s(_vm.brand) +
                  "."
              )
            ]),
            _vm._v(" "),
            _c(
              "v-form",
              {
                staticClass: "mb-5",
                model: {
                  value: _vm.valid,
                  callback: function($$v) {
                    _vm.valid = $$v
                  },
                  expression: "valid"
                }
              },
              [
                _c("v-text-field", {
                  attrs: {
                    label: "E-mail ID",
                    rules: _vm.emailRules,
                    required: ""
                  },
                  model: {
                    value: _vm.email,
                    callback: function($$v) {
                      _vm.email = $$v
                    },
                    expression: "email"
                  }
                }),
                _vm._v(" "),
                _c("v-text-field", {
                  attrs: {
                    label: "Password",
                    type: "password",
                    rules: _vm.passwordRules,
                    required: ""
                  },
                  model: {
                    value: _vm.password,
                    callback: function($$v) {
                      _vm.password = $$v
                    },
                    expression: "password"
                  }
                }),
                _vm._v(" "),
                _c("v-checkbox", {
                  attrs: { color: "primary", label: "Remember me" },
                  model: {
                    value: _vm.checkbox,
                    callback: function($$v) {
                      _vm.checkbox = $$v
                    },
                    expression: "checkbox"
                  }
                }),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "mb-2",
                    attrs: { to: "/session/forgot-password" }
                  },
                  [_vm._v(_vm._s(_vm.$t("message.forgotPassword")) + "?")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "mb-2",
                        attrs: { large: "", block: "", color: "primary" },
                        on: { click: _vm.submit }
                      },
                      [_vm._v(_vm._s(_vm.$t("message.loginNow")))]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mb-2",
                        attrs: { large: "", block: "", color: "primary" },
                        on: { click: _vm.signInWithLaravelPassport }
                      },
                      [
                        _vm._v(
                          _vm._s(_vm.$t("message.loginWithLaravelPassport"))
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        staticClass: "mb-2",
                        attrs: { large: "", block: "", color: "warning" },
                        on: { click: _vm.onCreateAccount }
                      },
                      [_vm._v(_vm._s(_vm.$t("message.createAccount")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    _vm._s(_vm.$t("message.bySigningUpYouAgreeTo")) +
                      " " +
                      _vm._s(_vm.brand)
                  )
                ]),
                _vm._v(" "),
                _c("router-link", { attrs: { to: "" } }, [
                  _vm._v(_vm._s(_vm.$t("message.termsOfService")))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "session-social-links d-inline-block" },
              [
                _c("ul", { staticClass: "list-unstyled mb-2" }, [
                  _c("li", { on: { click: _vm.signInWithFacebook } }, [
                    _vm._m(0)
                  ]),
                  _vm._v(" "),
                  _c("li", { on: { click: _vm.signInWithGoogle } }, [
                    _vm._m(1)
                  ]),
                  _vm._v(" "),
                  _c("li", { on: { click: _vm.signInWithTwitter } }, [
                    _vm._m(2)
                  ]),
                  _vm._v(" "),
                  _c("li", { on: { click: _vm.signInWithGithub } }, [_vm._m(3)])
                ]),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { color: "error" },
                    on: { click: _vm.signinWithAuth0 }
                  },
                  [_vm._v("\n\t\t\t\t\t\tSignin With Auth0\n\t\t\t\t\t")]
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "facebook-bg session-icon" }, [
      _c("i", { staticClass: "ti-facebook" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "google-bg session-icon" }, [
      _c("i", { staticClass: "ti-google" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "twitter-bg session-icon" }, [
      _c("i", { staticClass: "ti-twitter-alt" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "github-bg session-icon" }, [
      _c("i", { staticClass: "ti-github" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);