(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_users_UsersList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/UsersList.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/UsersList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loader: true,
      usersList: null,
      connectUsersList: null
    };
  },
  mounted: function mounted() {
    this.getUsers();
    this.getConnections();
  },
  methods: {
    getImgSrc: function getImgSrc(connectedUsers) {
      if (this.connectUsersList) {
        for (var i = 0; i < this.connectUsersList.length; i++) {
          var user = this.connectUsersList[i];

          if (connectedUsers === user.id) {
            return user.img;
          }
        }
      }
    },
    getUsers: function getUsers() {
      var _this = this;

      Api__WEBPACK_IMPORTED_MODULE_0__.default.get("vuely/users.js").then(function (response) {
        _this.loader = false;
        _this.usersList = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getConnections: function getConnections() {
      var _this2 = this;

      Api__WEBPACK_IMPORTED_MODULE_0__.default.get("vuely/connections.js").then(function (response) {
        _this2.connectUsersList = response.data;
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

/***/ "./resources/js/views/users/UsersList.vue":
/*!************************************************!*\
  !*** ./resources/js/views/users/UsersList.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersList_vue_vue_type_template_id_76d159a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersList.vue?vue&type=template&id=76d159a0& */ "./resources/js/views/users/UsersList.vue?vue&type=template&id=76d159a0&");
/* harmony import */ var _UsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersList.vue?vue&type=script&lang=js& */ "./resources/js/views/users/UsersList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UsersList_vue_vue_type_template_id_76d159a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _UsersList_vue_vue_type_template_id_76d159a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/users/UsersList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/users/UsersList.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/users/UsersList.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/UsersList.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/users/UsersList.vue?vue&type=template&id=76d159a0&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/users/UsersList.vue?vue&type=template&id=76d159a0& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_template_id_76d159a0___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_template_id_76d159a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersList_vue_vue_type_template_id_76d159a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UsersList.vue?vue&type=template&id=76d159a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/UsersList.vue?vue&type=template&id=76d159a0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/UsersList.vue?vue&type=template&id=76d159a0&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/users/UsersList.vue?vue&type=template&id=76d159a0& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        { staticClass: "grid-list-xl pt-0 mt-n3", attrs: { fluid: "" } },
        [
          _vm.usersList !== null
            ? _c(
                "v-row",
                _vm._l(_vm.usersList, function(users, index) {
                  return _c(
                    "app-card",
                    {
                      key: index,
                      attrs: { colClasses: "col-12 col-sm-6 col-md-4" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "user-image text-sm-center mb-4" },
                        [
                          _c("img", {
                            staticClass: "img-responsive rounded-circle",
                            attrs: {
                              src: users.profileImage,
                              alt: "user images",
                              width: "95",
                              height: "95"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "user-list-content" }, [
                        _c("div", { staticClass: "text-center" }, [
                          _c("h3", { staticClass: "fw-bold" }, [
                            _vm._v(_vm._s(users.name))
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(users.technology))]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "social-list clearfix mb-5" },
                            [
                              _c(
                                "ul",
                                { staticClass: "list-inline d-inline-block" },
                                _vm._l(users.socialLinks, function(
                                  links,
                                  index
                                ) {
                                  return _c("li", { key: index }, [
                                    _c(
                                      "a",
                                      {
                                        staticClass: "text-pink",
                                        attrs: { href: links.url }
                                      },
                                      [_c("i", { class: links.icon })]
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "layout justify-space-between border-tb-1 pa-2 mb-4"
                          },
                          [
                            _c("div", { staticClass: "align-item-start" }, [
                              _c("span", [
                                _vm._v(_vm._s(_vm.$t("message.connections")))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "align-item-end" }, [
                              _c(
                                "ul",
                                { staticClass: "list-inline" },
                                _vm._l(users.connections, function(
                                  user,
                                  index
                                ) {
                                  return _c(
                                    "li",
                                    { key: index, staticClass: "pa-0" },
                                    [
                                      _c("img", {
                                        staticClass: "rounded-circle",
                                        attrs: {
                                          src: _vm.getImgSrc(user),
                                          alt: "user images",
                                          width: "24",
                                          height: "24"
                                        }
                                      })
                                    ]
                                  )
                                }),
                                0
                              )
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        users.status
                          ? _c(
                              "a",
                              {
                                staticClass:
                                  "v-btn btn-success white--text ma-0 px-3 py-2 fs-14",
                                attrs: { href: "javascript:void(0);" },
                                on: {
                                  click: function($event) {
                                    users.status = !users.status
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("message.follow")))]
                            )
                          : _c(
                              "a",
                              {
                                staticClass:
                                  "v-btn btn-danger white--text ma-0 px-3 py-2 fs-14",
                                attrs: { href: "javascript:void(0);" },
                                on: {
                                  click: function($event) {
                                    users.status = !users.status
                                  }
                                }
                              },
                              [_vm._v(_vm._s(_vm.$t("message.unfollow")))]
                            )
                      ])
                    ]
                  )
                }),
                1
              )
            : _vm._e()
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