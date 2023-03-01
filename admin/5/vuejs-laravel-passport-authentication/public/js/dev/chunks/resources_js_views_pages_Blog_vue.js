(self["webpackChunkvuejs_laravel_passport_authentication"] = self["webpackChunkvuejs_laravel_passport_authentication"] || []).push([["resources_js_views_pages_Blog_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/helpers */ "./resources/js/helpers/helpers.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["data"],
  methods: {
    getCurrentAppLayoutHandler: function getCurrentAppLayoutHandler() {
      return (0,Helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getCurrentAppLayout)(this.$router);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Blog.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Blog.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Components_Widgets_BlogLayoutOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Components/Widgets/BlogLayoutOne */ "./resources/js/components/Widgets/BlogLayoutOne.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BlogLayoutOne: Components_Widgets_BlogLayoutOne__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      blogs: [{
        id: 1,
        thumbnail: "/static/img/blog-1.jpg",
        title: "lorem ipsum is simply dummy text",
        body: "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
        date: "1-jun-2018"
      }, {
        id: 2,
        thumbnail: "/static/img/blog-2.jpg",
        title: "lorem ipsum is simply dummy text",
        body: "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
        date: "1-jun-2018"
      }, {
        id: 3,
        thumbnail: "/static/img/blog-3.jpg",
        title: "lorem ipsum is simply dummy text",
        body: "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
        date: "1-jun-2018"
      }, {
        id: 4,
        thumbnail: "/static/img/blog-4.jpg",
        title: "lorem ipsum is simply dummy text",
        body: "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
        date: "1-jun-2018"
      }, {
        id: 5,
        thumbnail: "/static/img/blog-5.jpg",
        title: "lorem ipsum is simply dummy text",
        body: "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
        date: "1-jun-2018"
      }, {
        id: 6,
        thumbnail: "/static/img/blog-6.jpg",
        title: "lorem ipsum is simply dummy text",
        body: "Consectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.",
        date: "1-jun-2018"
      }],
      populerBlogs: [{
        id: 1,
        title: "7 Things You Need To Know About Consulting Today",
        thumbnail: "/static/img/gallery1.jpg",
        likes: 220,
        comments: 50
      }, {
        id: 2,
        title: "7 Things You Need To Know About Consulting Today",
        thumbnail: "/static/img/gallery2.jpg",
        likes: 200,
        comments: 40
      }, {
        id: 3,
        title: "7 Things You Need To Know About Consulting Today",
        thumbnail: "/static/img/gallery3.jpg",
        likes: 180,
        comments: 20
      }, {
        id: 4,
        title: "7 Things You Need To Know About Consulting Today",
        thumbnail: "/static/img/gallery4.jpg",
        likes: 50,
        comments: 2
      }],
      categories: ["Trending", "Sports", "News", "Travel", "Social", "Adventure"],
      tags: ["Consulting", "Finance", "Ideas", "Market", "Online Service", "Planning", "Tips"]
    };
  }
});

/***/ }),

/***/ "./resources/js/components/Widgets/BlogLayoutOne.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Widgets/BlogLayoutOne.vue ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogLayoutOne_vue_vue_type_template_id_a8db4102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogLayoutOne.vue?vue&type=template&id=a8db4102& */ "./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=template&id=a8db4102&");
/* harmony import */ var _BlogLayoutOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogLayoutOne.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _BlogLayoutOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _BlogLayoutOne_vue_vue_type_template_id_a8db4102___WEBPACK_IMPORTED_MODULE_0__.render,
  _BlogLayoutOne_vue_vue_type_template_id_a8db4102___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/BlogLayoutOne.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/Blog.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/pages/Blog.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Blog_vue_vue_type_template_id_3b1ed2ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Blog.vue?vue&type=template&id=3b1ed2ec& */ "./resources/js/views/pages/Blog.vue?vue&type=template&id=3b1ed2ec&");
/* harmony import */ var _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blog.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/Blog.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Blog_vue_vue_type_template_id_3b1ed2ec___WEBPACK_IMPORTED_MODULE_0__.render,
  _Blog_vue_vue_type_template_id_3b1ed2ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/Blog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogLayoutOne.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutOne_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/pages/Blog.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/pages/Blog.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Blog.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=template&id=a8db4102&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=template&id=a8db4102& ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutOne_vue_vue_type_template_id_a8db4102___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutOne_vue_vue_type_template_id_a8db4102___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogLayoutOne_vue_vue_type_template_id_a8db4102___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogLayoutOne.vue?vue&type=template&id=a8db4102& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=template&id=a8db4102&");


/***/ }),

/***/ "./resources/js/views/pages/Blog.vue?vue&type=template&id=3b1ed2ec&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/pages/Blog.vue?vue&type=template&id=3b1ed2ec& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_3b1ed2ec___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_3b1ed2ec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Blog_vue_vue_type_template_id_3b1ed2ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Blog.vue?vue&type=template&id=3b1ed2ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Blog.vue?vue&type=template&id=3b1ed2ec&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=template&id=a8db4102&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/BlogLayoutOne.vue?vue&type=template&id=a8db4102& ***!
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
  return _c("div", { staticClass: "blog-widget" }, [
    _c("div", { staticClass: "blog-layout-v1" }, [
      _c("a", { attrs: { href: "javascript:;" } }, [
        _c("img", {
          staticClass: "img-responsive mb-4",
          attrs: { src: _vm.data.thumbnail }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "app-card-title pa-0 mb-2" }, [
          _c("h5", [_vm._v(_vm._s(_vm.data.title))])
        ])
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "grey--text fs-12 fw-normal mb-2 d-block" }, [
        _vm._v("Last updated: " + _vm._s(_vm.data.date))
      ]),
      _vm._v(" "),
      _c("p", [_vm._v(_vm._s(_vm.data.body))])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "d-custom-flex justify-space-between" },
      [
        _c(
          "div",
          [
            _c(
              "v-btn",
              { staticClass: "mr-3", attrs: { icon: "" } },
              [_c("v-icon", { attrs: { color: "grey" } }, [_vm._v("share")])],
              1
            ),
            _vm._v(" "),
            _c(
              "v-btn",
              { attrs: { icon: "" } },
              [
                _c("v-icon", { attrs: { color: "grey" } }, [_vm._v("favorite")])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "v-btn",
          { attrs: { icon: "" } },
          [_c("v-icon", { staticClass: "grey--text" }, [_vm._v("more_horiz")])],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Blog.vue?vue&type=template&id=3b1ed2ec&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/Blog.vue?vue&type=template&id=3b1ed2ec& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
            "div",
            { staticClass: "blog-list" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    {
                      attrs: { xl: "9", lg: "8", md: "8", sm: "8", cols: "12" }
                    },
                    [
                      _c(
                        "v-row",
                        _vm._l(_vm.blogs, function(blog) {
                          return _c(
                            "app-card",
                            {
                              key: blog.id,
                              attrs: {
                                colClasses:
                                  "col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"
                              }
                            },
                            [_c("blog-layout-one", { attrs: { data: blog } })],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    {
                      attrs: { xl: "3", lg: "4", md: "4", sm: "4", cols: "12" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "blog-sidebar" },
                        [
                          _c(
                            "app-card",
                            {
                              attrs: {
                                heading: "Categories",
                                customClasses: "mb-5 category-widget",
                                contentCustomClass: "pt-0"
                              }
                            },
                            [
                              _c(
                                "ul",
                                { staticClass: "list-unstyled" },
                                _vm._l(_vm.categories, function(category, key) {
                                  return _c("li", { key: key }, [
                                    _c(
                                      "a",
                                      { attrs: { href: "javascript:void(0)" } },
                                      [_vm._v(_vm._s(category))]
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "app-card",
                            {
                              attrs: {
                                heading: "Tags",
                                customClasses: "mb-5 tags-widget",
                                contentCustomClass: "pt-0"
                              }
                            },
                            [
                              _c(
                                "ul",
                                { staticClass: "list-unstyled" },
                                _vm._l(_vm.tags, function(tag, key) {
                                  return _c("li", { key: key }, [
                                    _c(
                                      "a",
                                      { attrs: { href: "javascript:void(0)" } },
                                      [_vm._v(_vm._s(tag))]
                                    )
                                  ])
                                }),
                                0
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "app-card",
                            {
                              attrs: {
                                heading: "Popular Blog",
                                customClasses: "mb-5"
                              }
                            },
                            [
                              _c(
                                "ul",
                                { staticClass: "list-unstyled pa-0 ma-0" },
                                _vm._l(_vm.populerBlogs, function(blog) {
                                  return _c(
                                    "li",
                                    {
                                      key: blog.id,
                                      staticClass: "d-custom-flex mb-2"
                                    },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "blog-thumb mr-4" },
                                        [
                                          _c("img", {
                                            staticClass: "img-responsive",
                                            attrs: {
                                              width: "80",
                                              height: "80",
                                              src: blog.thumbnail
                                            }
                                          })
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "blog-content" },
                                        [
                                          _c("p", { staticClass: "mb-0" }, [
                                            _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "fs-12 fw-semi-bold",
                                                attrs: {
                                                  href: "javascript:void(0)"
                                                }
                                              },
                                              [_vm._v(_vm._s(blog.title))]
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "span",
                                            {
                                              staticClass: "grey--text  fs-12"
                                            },
                                            [
                                              _vm._v(
                                                "Likes: " +
                                                  _vm._s(blog.likes) +
                                                  ", Comments: " +
                                                  _vm._s(blog.comments)
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);